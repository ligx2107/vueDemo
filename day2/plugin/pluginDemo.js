/**
 * plugin即为带有install方法的对象，通过Vue.use()方法安装插件
 * install方法接收两个参数，第一个参数为Vue本身，第二个为可选参数
 */

const pluginDemo = {
    install: function(vue, options){
        // 全局自定义指令
        vue.directive('upper-text', function(element, binding){
            element.innerText = binding.value.toUpperCase();
        });

        vue.directive('lower-text', function(element, binding){
            element.innerText = binding.value.toLowerCase();
        });

        // 给Vue自身添加属性
        vue.projectName = 'Vue demos';
        vue.showInfo = function(){
            console.log('some informations');
        }

        // 给Vue原型上增加数据，供Vue实例使用
        vue.prototype.$random = function(min, max){
            return Math.random() * (max - min) + min;
        }
    }
};