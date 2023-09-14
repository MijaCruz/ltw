# ltw

Link Canva: https://www.canva.com/design/DAFuMAMR-XA/6Tgg25HMbJv5qT6A2myAZQ/edit?utm_content=DAFuMAMR-XA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
Link GitHub: https://github.com/MijaCruz/ltw.git
Link Miro: https://miro.com/welcome/dGNKRkg0OFJHTWY0WGM4VTBZM1lHWHREZVBlTlB6QkNRbkc4bmJ1ZHBqcHZPdDlPUnRKYVhiVlZ1bnEzVDdGanwzNDU4NzY0NTYzNDE1NjQ1NDU2fDQ=?share_link_id=357433233552




Frameworks usados: Tailwind, Bootstrap


Plugins de Tailwind usados:
    aspect-ratio


Para colores especificos en Tailwind  
1er modo:
    .text-[Inserte codigo de color aqui]
    .bg-[]

2do modo: en el archivo de tailwind.config
    añadir el metodo colors{}:
        colors:{
            'azul-claro': '#243cff',
        }

Codigo para ejecutar Tailwind en la terminal
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch