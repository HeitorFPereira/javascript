var agora = new Date()
var hora = agora.getHours()
if (hora < 13){
    console.log(`Bom dia`)
} else{
    if (hora > 18){
        console.log(`Boa noite`)
    } else{
       if (hora < 18)
       console.log(`Boa tarde`)
    }
}