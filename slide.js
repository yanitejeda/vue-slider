Vue.config.devtools = true


const slide = new Vue ({
    el: '#box',
    data: {
         elenco : [
            {   picture : 'img/01.jpg',
                titolo: 'Svezia',
                testo : ' del testo a caso',
            },
            {   picture : 'img/02.jpg',
                titolo: 'Svizzera',
                testo : ' del testo a caso',
            },
            {   picture : 'img/03.jpg',
                titolo: 'Londra',
                testo : ' del jbsjbdjbdjsbjdbj testo a caso',
            },
            {   picture : 'img/04.jpg',
                titolo: 'Dresden',
                testo : ' del testo a caso',
            },
            {   picture : 'img/05.jpg',
                titolo: 'Temae BeachTahiti',
                testo : ' del testo  lsdsdjsjdisdhisha caso',
            },
        ],
        currentActivePicture: 0
    },


    methods:{
        arrowUp(){
           // this.currentActivePicture --
            
          let newCurretPicuture = this.currentActivePicture-1
          if ( newCurretPicuture < 0){
              newCurretPicuture = this.elenco.length -1;    
          }
          this.currentActivePicture = newCurretPicuture
        },

        arrowDown(){
           // this.currentActivePicture ++
            
          let newCurretPicuture = this.currentActivePicture + 1
          if ( newCurretPicuture > this.elenco.length - 1 ){
              newCurretPicuture = 0;    
          }
          this.currentActivePicture = newCurretPicuture
        }

        
    }
})