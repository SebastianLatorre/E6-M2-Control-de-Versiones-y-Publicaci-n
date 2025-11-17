// Script de interacción: validación del formulario y smooth scroll usando jQuery
$(function () {
    // Referencia al formulario de contacto
    var $form = $('#contacto-form');
    if ($form.length === 0) return;

    // Crear o reutilizar un contenedor de mensajes de botón submit
    var $mensajeDiv = $('#mensaje-formulario');
    if ($mensajeDiv.length === 0) {
        $mensajeDiv = $('<div id="mensaje-formulario"></div>');
        var $submitBtn = $form.find('button[type="submit"]');
        if ($submitBtn.length) {
            $submitBtn.after($mensajeDiv);
        } else {
            $form.append($mensajeDiv);
        }
    }

    // Función para mostrar mensajes de estado
    function mostrarMensaje(texto, tipo) {
        $mensajeDiv
            .removeClass()
            .addClass('alert alert-' + tipo + ' mt-3')
            .html(texto)
            .show();
    }

    // Validación del formulario al enviar
    $form.on('submit', function (e) {
        e.preventDefault();

        var nombre = $.trim($('#nombre').val() || '');
        var email = $.trim($('#email').val() || '');
        var texto = $.trim($('#mensaje').val() || '');

        // Validaciones básicas
        if (nombre === '' || email === '' || texto === '') {
            mostrarMensaje('Por favor, completa todos los campos.', 'danger');
            return;
        }

        // Validación simple de correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarMensaje('Por favor, ingresa un correo electrónico válido.', 'danger');
            return;
        }

        // Se muestra confirmación y se reinicia el formulario
        mostrarMensaje('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.', 'success');
        $form[0].reset();
    });

    // Smooth scroll para enlaces de navegación internos
    // Enlaces de la navbar con smooth scroll
    $('.navbar a.nav-link[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var targetSelector = $(this).attr('href');
        var $target = $(targetSelector);
        if ($target.length) {
            // Calcular desplazamiento restante teniendo en cuenta la altura de la navbar
            var offsetTop = $target.offset().top - $('.navbar').outerHeight();
            // Animar el scroll del documento (html, body) para compatibilidad entre navegadores
            $('html, body').animate({ scrollTop: offsetTop }, 600);
        }
    });
});
