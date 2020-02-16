# build environment
FROM node:10 as build
# Create app directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
COPY . .

# If you are building your code for production
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /etc/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'