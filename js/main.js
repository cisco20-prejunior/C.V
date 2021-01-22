    window.addEventListener("scroll", ()=>{
        const $word = document.querySelector(".habilidades__word"),
                $excel = document.querySelector(".habilidades__excel"),
                $ingles = document.querySelector(".habilidades__ingles"),
                $distanciaIngles = Math.round($ingles.getBoundingClientRect().bottom),
                $distanciaExcel = Math.round($excel.getBoundingClientRect().bottom),
                $distanciaWord = Math.round($word.getBoundingClientRect().bottom);
        if(!$word.classList.contains("habilidades__word__after" ) && $distanciaWord < 710){
            $word.classList.add("habilidades__word__after");
        } else if ($word.classList.contains("habilidades__word__after")&& ($distanciaWord <  0 || $distanciaWord > 710)) {
            $word.classList.remove("habilidades__word__after")
        }         
        if(!$excel.classList.contains("habilidades__excel__after" ) && $distanciaExcel < 710){
            $excel.classList.add("habilidades__excel__after");
        } else if ($excel.classList.contains("habilidades__excel__after")&& ($distanciaExcel <  0 || $distanciaExcel > 720)) {
            $excel.classList.remove("habilidades__excel__after")
        }
        if(!$ingles.classList.contains("habilidades__ingles__after" ) && $distanciaIngles < 710){
            $ingles.classList.add("habilidades__ingles__after");
        } else if ($ingles.classList.contains("habilidades__ingles__after")&& ($distanciaIngles <  0 || $distanciaIngles > 720)) {
            $ingles.classList.remove("habilidades__ingles__after")
        }
    })