window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const form_card = document.querySelector('.card__info_form');
    const form2 = document.getElementById('form2');
    const result = document.getElementById('result');
    const modalConsultation = document.querySelector('.modal__consultation-overlay'),
            quizOverlay = document.querySelector(".modals__overlay"),
            modals = document.querySelectorAll(".modal")


const telegram_send = (form) => {
    // let form = this,
    submit = $('.submit', form),
    data = new FormData(),
    files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');

    data.append( 'name', 		$('[name="name"]', form).val() );
    data.append( 'phone', 		$('[name="phone"]', form).val() );

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });

    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            console.log('Complete')
        }
});
return false;
}
    

const telegram_send2 = (form) => {
    // let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');

    data.append( 'name', 		$('[name="name"]', form).val() );
    data.append( 'phone', 		$('[name="phone"]', form).val() );
    data.append( 'status', 		$('[name="status"]', form).val() );
    data.append( 'region', 		$('[name="region"]', form).val() );
    data.append( 'budget', 		$('[name="budget"]', form).val() );
    data.append( 'option', 		$('[name="option"]', form).val() );
    data.append( 'type', 		$('[name="type"]', form).val() );

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            console.log('Complete')
            form.reset() 
        }
    });

    return false;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        delete object?.phonecc
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait..."
    
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = "Form submitted successfully";
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .then(telegram_send(form))
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                    modalConsultation.style = "opacity: 0; visibility: hidden;"
                }, 100);
            });
    });
    
    form_card.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form_card);
        const object = Object.fromEntries(formData);
        delete object?.phonecc
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait..."
    
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = "Form submitted successfully";
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .then(telegram_send(form_card))
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form_card.reset();
                setTimeout(() => {
                    result.style.display = "none";
                    modalConsultation.style = "opacity: 0; visibility: hidden;"
                }, 1000);
            });
    });
    
    form2.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form2);
        const object = Object.fromEntries(formData);
        delete object?.phonecc
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait..."
      
          fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: json
              })
              .then(async (response) => {
                  let json = await response.json();
                  if (response.status == 200) {
                      result.innerHTML = "Form submitted successfully";
                  } else {
                      console.log(response);
                      result.innerHTML = json.message;
                  }
              })
              .then(telegram_send2(form2))
              .catch(error => {
                  console.log(error);
                  result.innerHTML = "Something went wrong!";
              })
              .then(function() {
                    form2.reset();
                    setTimeout(() => {
                        result.style.display = "none";
                        quizOverlay.style = "opacity: 0; visibility: hidden;"
                        modals.forEach(modal => {
                            modal.style = "display: none;";
                        })
                    }, 100);
              });
      }); 
})
