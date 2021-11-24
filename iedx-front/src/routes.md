## POST /login
Ruta para iniciar sesion como admin
Request:
```
{
  email: 'ddsadsa@dsadsa.com',
  password: 'dsadsadsa'
}
```
Response: 
```
{ token: 'dsadasdasdasdsadsa' }
```

## GET /products
ruta para obtener todos los productos
filtros: ninguno es requerido
```
{
  is_active: (Boolean) // productos activos o archivados 
  search_item: (string) // nombre para buscar en los productos
}
```

Response:
```
{
  elements: [
    { id: 1, name: 'Nombre', description: 'description' },
  ]
}
```

## GET /products/count
Ruta para obtener los contadores de productos activos, archivados y categorias
Response:
```
{
  active: 23,
  inactive: 2,
  categories: 3
}
```

## GET /quotes
Ruta para obtener las cotizaciones
Filtros: ninguno es requerido
```
{
  order_by: 'date' | 'priority',
  search_item: 'dsadasdsadsa'
}
```
Response:
```
{
  elements: [
    { 
      id: 1,
      name: 'nodsadsa',
      email: 'dsadsa@dsadsa.com',
      phone: '221321321',
      date: 'DD/MM/AA'
    }
  ]
}
```


## GET /users
Ruta para obtener todos los usuarios
Filtros: ninguno es requerido
```
{ 
  order_by: 'a-z' | 'z-a',
  search_item: 'string'
}
```
Response: 
```
{
  elements: [
    { 
      id: 1,
      name: 'dsadsa',
      email: 'dsadsa@dsadsa.com',
      rol: 'Supersayayin'
    }
  ]
}
```

## GET /historical 
Ruta para obtener todos los registros del historial
Filtros: ninguno es requerido

```
{ search_item: 'string', order_by: 'date' }
```

Response:
```
{
  elements: [
    {
      id: 1,
      name: 'dsadsadas',
      date: 'DD/MM/AA',
      hour: 'HH:SS',
      action: 'dasdsadsadsadas'
    }
  ]
}
```

## POST /user
Ruta para crear un usuario
Request: form data
```
{
  name: 'dsadsadsa',
  last_name: 'dsdsadsadsa',
  address: 'dsdsadsa',
  phone: '2222222222',
  email: 'ddsadsa@dsadsa.com',
  role: 1,
  password: 'dsadasdasdas',
  photo: File
}
```

## PUT /user
Ruta para editar un usuario
Request: form data
```
{
  name: 'dsadsadsa',
  last_name: 'dsdsadsadsa',
  address: 'dsdsadsa',
  phone: '2222222222',
  email: 'ddsadsa@dsadsa.com',
  role: 1,
  password: 'dsadasdasdas',
  photo: File
}
```

## POST /product
Ruta para crear un producto 
Request: form data
```
{
  name: 'dsadsadsa',
  description: 'dsdsadsadsa',
  photo: File
}
```

## PUT /product
Ruta para editar un producto 
Request: form data
```
{
  name: 'dsadsadsa',
  description: 'dsdsadsadsa',
  photo: File
}
```

## GET /user/:id
Ruta para obtener un usuario por su id
Response:
```
{
  name: 'ddsadsadas',
  address: 'dsadsadsa',
  phone: '213213213',
  email: 'dsadsadas@dsadsad.com',
  role: 1
}
```

## GET /user/images/:id
Ruta para obtener una imagen de usuario por su id 
Response:
File blob

## GET /product/images/:id
Ruta para obtener una imagen de producto por su id 
Response:
File blob


## GET /categories
Ruta para obtener todas las categorias
Response:
```
{ 
  elements: [
    { id: 1, name: 'dsadsadas' }
  ]
}
```

## GET /subcategory/:category_id
Ruta para obtener todas las subcategorias por el id de su categoria padre 
Response:
```
{ 
  elements: [
    { id: 1, name: 'dsadsadas', category_id: 2 }
  ]
}
```
