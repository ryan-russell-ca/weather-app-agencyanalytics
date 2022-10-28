FROM node:16-alpine
WORKDIR /app
ARG HOST_ORIGIN
ARG WEATHER_SECRET
ENV NODE_ENV production
ENV HOST_ORIGIN ${HOST_ORIGIN}
ENV WEATHER_SECRET ${WEATHER_SECRET}
ENV ROBOT_NOINDEX true
COPY --from=weather-server-build:latest /app .
COPY --from=weather-app-build:latest /app/build ./build

EXPOSE 8080
CMD ["yarn", "start"]