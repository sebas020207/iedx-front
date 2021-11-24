# Tutorial GIT

Para poder comprender mejor el uso de los comandos, se recomienda ver [este video](https://drive.google.com/file/d/1VqxUQ00tOj3kSWqMDfFEDmXcG8Ld7KpB/view).

### Para clonar el proyecto en tu computadora:
```
$ git clone https://gitlab.com/javastanticteam/idx-front.git
$ cd idx-front
```

### Para ver el estado de tu repositorio local
```
$ git status
```

### Para agregar un archivo o carpeta a tus cambios
```
$ git add nombre_archivo
```

### Para hacer un commit (un paquete con todos tus cambios)
```
$ git commit -m "Mensaje locochon donde expliques que cambios hiciste"
```

### Para subir tus cambios
```
$ git push origin nombre_rama
```

### Para actualizar tu local con los cambios del repositorio
```
$ git pull origin nombre_rama
```

### Para crear una nueva rama
```
$ git branch nombre_rama
```

### Para pasar a una rama
```
$ git checkout nombre_rama
```

### Para crear una nueva rama y pasar a la rama
```
$ git checkout -b nombre_rama
```

### Para guardar tus credenciales de gitlab en local
```
$ git config credential.helper store
```


### REACT
Instalar dependencias del archivo package.json
```
$ npm install
```

Instalar nueva libreria
```
$ npm install nombre-libreria
```

Ejecutar proyecto en modo desarrollo
```
$ npm start
```
