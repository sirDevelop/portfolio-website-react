FROM node:16-alpine

ENV PORT=3000

WORKDIR /portfolio-website-react
COPY . /portfolio-website-react
RUN npm run build
EXPOSE ${PORT}
CMD ["npm", "start"]


FROM nginx:1.22.1-alpine as prod-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]