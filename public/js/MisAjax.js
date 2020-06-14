'use strict'

/**
 * @param {Manga} Id de manga
 * @param {Usuario} [options] Gallery options
 */
function putMarcaPagUsu($capitulo, $usuario) {

    $.ajax({
        type: "post",
        url: "/servicios/marca_paginas",
        data: {
            "Usuario": ("/servicios/users/" + $usuario),
            "Capitulo": ("/servicios/marca_paginas/"+$capitulo)
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
    }).done(function (datos) {
            return datos;
        }
    );
}

