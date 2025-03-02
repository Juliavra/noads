var lista = [];
//lista.push(`https://www.youtube.com/playlist?list=PLzKOn4-bkF7q549Ln8_JpZ3ZLZcgxyTph`);

function cargarLink() {
    var playlist = document.getElementById("playlist");
    var carpeta = document.getElementById("carpeta");
    var frame = document.getElementById("frame");
    var carpeta_trim = carpeta.value.trim();
    var mensaje = "";
    var carpeta_replace = "";
    if (carpeta_trim.includes("list", 0)) {
        mensaje = carpeta_trim;
    }
    else if (carpeta_trim.includes("https://youtu.be", 0)) {
        carpeta_replace = carpeta_trim.replace("https://youtu.be", "https://www.youtube.com/embed");
        mensaje = carpeta_replace.trim();
    }
    else {
        for (var f = carpeta_trim.indexOf("https", 0); f < carpeta_trim.length; f++) {
            if (carpeta_trim[f] != `"`) {
                mensaje += carpeta_trim[f];
                mensaje = mensaje.trim();
                //console.log(mensaje);
            }
            else { break; }
        }
    }

    //mensaje = `https://www.youtube.com/embed/videoseries?si=Svn0oJAsTBPWfMDI&amp;list=PLzKOn4-bkF7q549Ln8_JpZ3ZLZcgxyTph`;

    /*
    NOA PLAYLIST
    <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/videoseries?si=Svn0oJAsTBPWfMDI&amp;list=PLzKOn4-bkF7q549Ln8_JpZ3ZLZcgxyTph"
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    /**/

    frame.src = `${mensaje}`; console.log("frame.src  " + mensaje);
    lista.push(`${mensaje}`);

    muestraLista(lista);
}//CLOSES cargarLink

function muestraLista(lista) {
    // console.log(`LISTA: ` + `${lista}`);
    //playlist.innerHTML = (`${lista}`);
    var cadena_Lista = "";

    for (i = 0; i < lista.length; i++) {
        cadena_Lista = cadena_Lista + `${lista[i]}` + `<br>`;             //console.log("lista[i]  " + `${lista[i]}`);
    }
    playlist.innerHTML = cadena_Lista;
    //https://www.youtube.com/embed/riVYg2-eKA8?si=JLbmdcdlb4gv7IxK
}


/*
//*********************************************************************************
//*********************************************************************************
COMO CREAR ELEMENTOS EN EL HTML DESDE JAVASCRIPT

if (local == true) {
    source = `"audio/${nombre}.mp3"`;  //console.log(`source: ` + `${source}`);
    const box = `<div class="draggable" id=${nombre} draggable="true" ondragstart="cancion_dragstart(event)">    ${nombre}    </div>`;
    const audio = `<audio class="audio" id=${nombre}> <source src="${source}" type="audio/mpeg"></audio>`;
    array_song_div.push(box);
    console.log("box: "+`${box}`);
    //alert("");
    array_audio_toAppend.push(audio);
  }
    /**/
//*********************************************************************************
//*********************************************************************************


/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/D0Qz-QLVWiA?si=yEii_nyAzDKr5zJK" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*/