# Create T3 App
This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

### ct3a-docker config
https://github.com/ajcwebdev/ct3a-docker

## Docker y Kubernetes
### Construye las imágenes
docker compose up
docker compose up --build

### Construcción de las imágenes de forma independiente (opcional)
### Construye la imagen de la aplicación Next.js
docker build -t mi-usuario/ct3-app .
  
### Construye la imagen del servidor NGINX
cd nginx
docker build -t mi-usuario/ct3-app-nginx .
  
## Publica las imágenes en Docker Hub
docker push mi-usuario/ct3-app
docker push mi-usuario/ct3-app-nginx

## Ejecutar archivos yaml
en el servidor que tiene kubernetes, entrar al directorio k8s
kubectl apply -f namespace.yaml
kubectl apply -f .

## Fuente y guía
https://steveholgado.com/nginx-for-nextjs/