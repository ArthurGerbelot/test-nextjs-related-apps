# Install & Build


### Install lib and build bundle

```
cd ./test-nextjs-lib 
yarn install
yarn dist
cd ../test-nextjs-app
yarn install
yarn build
yarn start
cd ..
```

### Update lib into project

```
cd ./test-nextjs-lib 
yarn dist
cd ../test-nextjs-app
yarn upgrade
yarn build
yarn start
cd ..
```

