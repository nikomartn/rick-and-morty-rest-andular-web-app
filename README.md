# RickAndMorty

1. Instalar nvm, npm, @angular/cli
2. Crear proyecto
3. Correr proyecto
4. Limpiar proyecto
5. Crear barra de shell //https://www.logolynx.com/images/logolynx/b4/b4c778e995540fc7d344a1ddf33a035b.png
6. Poner reset.scss 
7. Construir el menu
8. Añadir el gradient
9. Añadir el shadow
10. Añadir cursor pointer
11. ng g m people --routing
12. ng g c people/people
13. ng g c people/person
14. Construir person similar al de la página //https://rickandmortyapi.com/api/character/avatar/489.jpeg
15. Pasarle input de PersonModel
16. Pasarle el rickoftheday desde people
17. Hacer que el botón cambie de color [style.background-color] = "deadcolor"
18. Mover Rick del dia a su propio compònente
19. Hacer buscador de Ricks
20. Capturar entrada de búsqueda
    - Importar FormsModule EN EL MODULO DONDE SE QUIERE
    - [(ngModel)]="property"
    - (ngModelChange)="onevent()"
21. Ocultar resultados si la cadena está vacía
22. Crear servicio de peoplequery
23. Ponerle funcion query al servicio
24. Inyectar servicio a rickgoogle
25. Hacer que muestre los resultados tras la subscripción
26. Añadirle Input de query a rickgoogle
27. Importar HttpClientModule
28. Inyectarle al servicio el httpclient
29. Hacer que el servicio devuelva buenos resultados (mirar)
30. Añadirle función al servicio para rick aleatorio
31. Añadirle a rick of the day que use el servicio para tener un rick aleatorio.
32. Añadir modulo para sitios
33. Enrutar módulo (loadchildren.then())