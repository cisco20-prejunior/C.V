    window.addEventListener("scroll", ()=>{
        const $word = document.querySelector(".habilidades__word"),
                $excel = document.querySelector(".habilidades__excel"),
                $ingles = document.querySelector(".habilidades__ingles"), 
                $distanciaIngles = Math.round($ingles.getBoundingClientRect().bottom),
                $distanciaExcel = Math.round($excel.getBoundingClientRect().bottom),
                $distanciaWord = Math.round($word.getBoundingClientRect().bottom);
        if(!$word.classList.contains("habilidades__word__after" ) && $distanciaWord < window.innerHeight){
            $word.classList.add("habilidades__word__after");
        } else if ($word.classList.contains("habilidades__word__after")&& ($distanciaWord <  0 || $distanciaWord > window.innerHeight)) {
            $word.classList.remove("habilidades__word__after")
        }         
        if(!$excel.classList.contains("habilidades__excel__after" ) && $distanciaExcel < window.innerHeight){
            $excel.classList.add("habilidades__excel__after");
        } else if ($excel.classList.contains("habilidades__excel__after")&& ($distanciaExcel <  0 || $distanciaExcel > window.innerHeight)) {
            $excel.classList.remove("habilidades__excel__after")
        }
        if(!$ingles.classList.contains("habilidades__ingles__after" ) && $distanciaIngles < window.innerHeight){
            $ingles.classList.add("habilidades__ingles__after");
        } else if ($ingles.classList.contains("habilidades__ingles__after")&& ($distanciaIngles < 0  || $distanciaIngles > window.innerHeight)) {
            $ingles.classList.remove("habilidades__ingles__after")
        }
    })

document.querySelector("#btn-contact").addEventListener("click", () =>{
    const 	overlay = document.getElementById('overlay'),
                popup = document.getElementById('popup'),
                body = document.querySelector("#body");
            body.style.overflow = "hidden";
            overlay.classList.add('active');
            popup.classList.add('active');
})


document.querySelector(".form").addEventListener("submit", async(e)=>{
    e.preventDefault();
    const db = firebase.firestore(),
            name = document.querySelector("#name").value,
            email = document.querySelector("#email").value,
            message = document.querySelector("#message").value;
    const response =  await db.collection("propuestas").doc().set({
        name,
        email,
        message
    })
    if(response){
        alert("No se pudo enviar el mensaje, por favor intentelo más tarde")
        console.log(response)
    } else{
        alert("Mensaje enviado correctamente, nos pondremos en contacto pronto")
    }
    document.querySelector(".form").reset();
})

document.getElementById('btn-cerrar-popup').addEventListener('click', function(e){
    const body = document.querySelector("#body");
            body.style.overflow = "";
    e.preventDefault();
    overlay.classList.remove('active');
	popup.classList.remove('active');
});