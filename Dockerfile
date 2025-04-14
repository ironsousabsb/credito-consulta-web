FROM node:22.14.0 AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build -- --configuration=production

FROM nginx:alpine

COPY --from=builder /app/dist/credi-consulta-web/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

