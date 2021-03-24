proxyTable: {
    '/api':{
        // target:'http://jsonplaceholder.typicode.com',
        target:'http://localhost:8080',
        changeOrigin:true,

         pathRewrite:{
             '/api':''
         }
    }
}