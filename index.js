
   
            var app = new Vue({
                el: "#app",
                data:{
                    
                    pessoas:[
                        {id:'1',nome:'Primeiro',valor:'1111'},
                        {id:'2',nome:'Segundo',valor:'2222'}
                    ],
                    pessoa: {id:'',nome:'',valor:''},
                    pessoaAlterar: {}
                    
                }
                ,
             methods: {
                gravar: function(){
                        this.pessoas.push(this.pessoa);
                        this.pessoa = Vue.util.extend({},this.pessoa);
                        this.pessoa = {id:'',nome:'',valor:''}; 
                },
                editar: function(){
                       
                        var indice = this.pessoas.indexOf(this.pessoaAlterar);
                        this.pessoas.splice(indice,1,this.pessoa);
                        this.pessoa = Vue.util.extend({},this.pessoa);
                        this.pessoa = {id:'',nome:'',valor:''};
                   
                },
                apagar: function(pessoaExcluir){
                    var indice = this.pessoas.indexOf(pessoaExcluir);
                   
                    this.pessoas.splice(indice,1);
                },
                alterar: function(pessoaAlterar){
                        this.pessoaAlterar = pessoaAlterar;
                        this.pessoa = Vue.util.extend({},pessoaAlterar);
    
                }
            }
    
            })
    
           
    
    
            
    