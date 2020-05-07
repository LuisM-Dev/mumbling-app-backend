# base image
FROM node:10.16.3-jessie as builder

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# add app
COPY . /usr/src/app

#Run linter
RUN npm run linter

# Run tests
RUN npm test

# Run test coverage
RUN npm run coverage

# Start App
CMD ["npm", "start"]