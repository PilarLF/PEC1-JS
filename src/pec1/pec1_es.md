# Respuestas a las preguntas teóricas

## Ejercicio T1

### T1.1
Descripción de la imagen: nos encontramos con un respositorio remoto en GitHub y tres desarrolladores que cuentan con un repositorio local cada uno. El **desarrollador 1** realiza sus cambios en el repositorio local (`git add.`, `git commit -m ""`) y los comparte (`git push origin main`) al repositorio remoto. Después lo hace el desarrollador 2 (`git pull origin main`, trayendo los cambios realizados por dev1 del repositorio remoto a su local). El **desarrollador 2 realizará** sus cambios en el respositorio local y lo compartirá (`git add.`, `git commit -m ""`, `git push origin main`). Siempre se trabaja sobre la misma rama main. 
Por último, se une el **desarrollador 3**. Al unirse más tarde, primero debe clonar el repositorio remoto en su repositorio local (`git clone url`) y realizar los cambios correspondientes (`git add.`, `git commit -m ""`). Estos cambios serán enviados al repositorio remoto (`git push origin main`). 

### T1.2
Pueden haber conflictos, ya que dev1 y dev2 podrían modificar la misma línea de código en styles.css. Esto es habitual cuando un equipo trabaja en paralelo y modifica el mismo código. Cuando hay cambios conflictivos de un mismo archivo, Git lanzará un mensaje de error indicando la presencia del conflicto, que deberá ser resuelto manualmente por uno de los desarrolladores. Una vez resuelto el conflicto, se añadirá los cambios con `git add`y `git commit`[^1][^2]. 


[^1]: https://certidevs.com/tutorial-git-conflictos 
[^2]: http://codigoelectronica.com/blog/que-es-el-trabajo-colaborativo-con-git#google_vignette

## Ejercicio T2
### (0.5 puntos) ¿El contenido de qué commits contiene el commit C6? 
C6 contiene el commit de C1, C2, C5 y C6. C1 y C2 son commits de la rama principal. Se crea la rama Hotfix, donde se produce el commit C5. Finalmente, C6 es hijo de C5 y se encuentra en la rama principal tras realizar un merge de ambas ramas. No contiene ni  C3 ni C4, porque estos se encuentran en la rama Feature (se fusionarán en C6, pero más adelante)

### (0.5 puntos) ¿El contenido de qué commits contiene el commit C7? 
Contiene C1, C2, C3, C4 y C6. Esto ocurre porque C7 procede de la unión de las ramas main y Feature. Por tanto, podrá haber un conflicto en el commit 7. 

### (1 punto) ¿Se puede dar un conflicto? ¿En qué punto? Explica los motivos.
Sí, puede desarrollarse un conflicto en el commit 7, ya que mientras se desarrollaba la rama Feature, se estaba resolviendo un bug en otra rama (Hotfix). Cuando se realiza un merge commit en C7 para integrarlas, puede aparecer un conflicto por haberse modificado las mismas líneas de código durante el desarrollo en paralelo de las mismas. El conflicto se solventará manualmente por el desarrollador para poder integrar ambas ramas correctamente. 
