if('serviceWorker' in navigator){
    console.log('Puedes usar los serviceWorker en tu navegador');

    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceWorker cargado correctamente', res))
                            .catch(err => console.log('serviceWorker no se ha podido registrar', err));
}else{
    console.log('No puedes usar sw en tu navegador');
}

var text2= '123456789'
            function validate(text1)
            
            {
            
             if (text1==text2)
            
             load('videos/video2.webm');
            
             else
            
             {
            
                alert("Antídoto incorrecto");
            
             }
            
            }
            
            function load(url)
            
            {
            
             location.href=url;
            
            }
            