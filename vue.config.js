const path = require('path');
module.exports = {
    //基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '' : './',
    //输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    //eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    /**
     * webpack配置，see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
     **/
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule
        .use("svg-sprite-loader")
        .loader("svg-sprite-loader")
        .options({
            symbolId: "icon-[name]",
            include: ["./src/icons"]
        });
    },
    configureWebpack: (config) => {
        config.resolve = {    //配置解析别名
            extensions: ['.js','.json','.vue'], //  自动添加文件名后缀
            alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname,'./src'),
            '@c': path.resolve(__dirname,'./src/components')
        }
        }
    },
    //生产环境是否生成sourceMap文件
    productionSourceMap: false,
    //css相关配置
    css: {
        //是否使用css分离插件 ExtractTextPlugin
        extract: true,
        //开启 CSS source maps?
        sourceMap: false,
        //css预设器配置项
        loaderOptions: {
            sass: {
                prependData: '@import"./src/styles/main.scss";'
            }
        },
        //启用 CSS modules for all css / pre-processor files.
        // modules: false
    },
    //use thread-loader for babel & TS in production build
    //enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    /**
     * PWA插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/pacjages/%40vue/cli-plugin-pwa
     */
    pwa: {},
    //webpack-dev-server相关配置
    devServer: {
        open: false,    //编译完成时是否打开网页
        host: '0.0.0.0',    //指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 8080, //访问端口
        https: false,   //编译失败时刷新页面
        hot: true,  //开启热加载
        hotOnly: false,
        //设置代理
        // 'proxy' 定义代理服务器的主机名称和端口
        // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
        // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
        proxy: {
            '/devApi': {
                target: 'http://www.web-jshtml.cn/productapi/token',
                changeOrigin: true,
                pathRewrite: {
                    '^/devApi':''
                }
            }
        }
    },
    /**
     * 第三方插件配置
     */
    pluginOptions: {}
}