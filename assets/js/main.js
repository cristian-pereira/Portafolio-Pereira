function perfil() {
    const name = document.querySelector('#name'),
          subName = document.querySelector('#subName'),
          img = document.querySelector('#perfil'),
          num = document.querySelector('#num'),
          repositorios = document.querySelector('#repositorios')

    fetch('https://api.github.com/users/camilo51')
    .then(resp => resp.json())
    .then(respuesta => {
        console.log(respuesta);
        img.src = `${respuesta.avatar_url}`;
        name.append(respuesta.name)
        subName.append(`@${respuesta.login}`)
        num.append(`Cantidad de repositorios de GitHub: ${respuesta.public_repos}`)
        // repositorios(
        //     fetch(respuesta.repos_url).then(entrada => entrada.json())
        //     .then(entry => {
        //         console.log(entry)
        //         entry.forEach(element => {
        //             console.log(element)
        //              repositorios.append(element.name)
        //         });
        //     })
        //     .catch(err => err)
        // )
    })
}
perfil()
function boton() {
    const btn = document.querySelector('.boton__responsivo'),
          btn_contenedor = document.querySelector('.boton__contenedor'),
          header = document.querySelector('.header__navegacion');

    btn.addEventListener('click', () => {
        btn_contenedor.classList.toggle('boton__x')
        header.classList.toggle('header__responsivo')
        console.log('Hola Mundo')
    })
}
boton()