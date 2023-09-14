# ltw
Frameworks usados: Tailwind, Bootstrap

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

npx tailwindcss -i ./src/input.css -o ./output.css --watch