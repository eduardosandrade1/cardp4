<template>
    <div id="container__items">
      
      <div class="actions">
        <MenuSize
          @dragenter.prevent
          @dragover.prevent 
        />
        <button class="btn btn-primary btn-lg" @click="save()">
          Salvar
        </button>
      </div>
  
      <Phone
        @dragenter.prevent
        @dragover.prevent
        ondragstart="return false;"
        ondrop="return false;"
        :show-action="showActionItems"
      />
  
      <ModalInfoItem v-if="showmodal" :itemphonearray="itemphonearray" :chave="chaveArrItem" />
      <div class="space-empty" v-else></div>
      
      <ModalQrCode :show="showQrCode" :title="titleQrCode" />

      <ModalError :show="error" :message="messageError" :title="titleError" />

    </div>
  
  </template>
  
  <script>
    import Menu from '../services/menu';
    import Phone from './Phone.vue';
    import MenuSize from './MenuSize.vue';
    import ModalInfoItem from './ModalInfoItem.vue';
    import ModalQrCode from './ModalQrCode.vue';
    import ModalError from './ModalError.vue';

    import menu from '../services/menu';
  
    export default {
      data() {
        return {
          items : [],
          showmodal: false,
          itemphonearray: null,
          MenuItems: this.GenListDefault('', 1),
          chaveArrItem: 0,
          showQrCode: false,
          titleQrCode: '',
          urlQrCode: this.getCurrentUrl(),
          error: false,
          messageError: '',
          titleError: '',
          showActionItems: true,
        }
      },
      components: {
        Phone,
        MenuSize,
        ModalInfoItem,
        ModalQrCode,
        ModalError,
      },
      methods: {
        getCurrentUrl(){
          return window.location.origin;
        },
        getMenu() {
          return this.MenuItems;
        },
  
        getList (){
          return this.items;
        },
  
        getAllList () {
          return this.items;
        },
  
        GenListDefault (tag, qtd) {
          let list = [];
          // img
          for (let i=0; i < qtd; i++) {
              list.push(
                { id: i, title: 'Item '+i, path: 'src/assets/images/banner-default/banner-3.jpg', tag: 'img', list: 1, value: ''},
              )
          }
          // input
          for (let i=qtd; i < (qtd*2); i++) {
            list.push(
              { id: i, title: 'Item '+i, path: '', tag: 'input', list: 1, value: ''},
            );
          }
          // item
          for (let i=qtd*2; i < (qtd*3); i++) {
            list.push(
              { 
                id: i,
                title: 'Item '+i,
                path: 'src/assets/images/sem-img.jpg',
                tag: 'item',
                list: 1,
                value: '',
                name: 'Título',
                time: (i/100),
                description: 'Descrição do item',
                price: 0.99
              },
            );
          }
          return list;
        },
  
        startDrag (event, item) {
          event.dataTransfer.dropEffect = 'move';
          event.dataTransfer.effectAllowed = 'move';
          event.dataTransfer.setData('itemID', item.id)
        },
  
        onDrop (event, list) {
          const itemID = event.dataTransfer.getData('itemID');
          const item = this.MenuItems.find((item) => item.id == itemID)
          this.items.push(item)
        },
  
        toTop(actualPosistion) {
          if (actualPosistion > 0) {
            this.items.splice(actualPosistion - 1 , 0 , this.items.splice(actualPosistion,1)[0] );
          }
        },
  
        toBottom(actualPosistion) {
          this.items.splice(actualPosistion + 1 , 0 , this.items.splice(actualPosistion,1)[0] );
        },
  
        toTrash(arrPosition) {
          this.items.splice(arrPosition, 1);
        },
  
        showInfoDiv(typeItem, indexElement) {
            this.showmodal = true
            this.chaveArrItem = indexElement;
            this.itemphonearray = this.items[indexElement]
        },
        save() {
          let id = 0;
          if (sessionStorage.getItem('ID')) id = sessionStorage.getItem('ID')
          Menu.save(this.items, id).then(res => {
            if (res.status === 200) {
              this.showQrCode = true;
              this.titleQrCode = "Cardápio feito com sucesso!"
              if (res.data.url) {
                this.urlQrCode += '/menu/'+res.data.url;
              } else {
                this.showQrCode = false;
                this.error = true;
                this.titleError = "Ops,";
                this.messageError = "Ocorreu um erro ao tentar gerar seu QrCode. Por favor, entre em contato com o suporte!"
              }
            }
            console.log('succ: ', res)
          }).catch(err => {
            this.error = true;
            this.titleError = 'Ops,';
            this.messageError = "Ocorreu um erro ao tentar esta ação. Por favor, entre em contato com o suporte!"
            console.log('erro: ', err)
          })
        }
      },
      mounted () {
        if (sessionStorage.getItem('ID')) {
            let tk = 'Bearer ' + sessionStorage.getItem('access_tk');
            const headers = {
              'Authorization': tk,
            }
            menu.get(sessionStorage.getItem('ID'), headers).then(res => {
              if (res.data.length > 0)
                this.items = res.data;

            }).catch(failed => {
              console.log(failed)
            });
        }
      }
    }
  
  </script>
  
  <style>
    #container__items{
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
    .text-center {
      text-align: center;
    }
    .text-start {
      text-align: start;
    }
    .text-end {
      text-align: end;
    }
    
    .btn-primary {
      margin: 10px;
      font-size: 24px;
      width: 100px;
      height: 50px;
      padding: 5px;
      background: #8B8B8B;
      color: #fff;
      outline: none;
      border-radius: 4px;
      border: 1px solid transparent;
      transition: 0.5s;
      cursor: pointer;
    }
    .btn-primary:hover {
        background: #8B8B8B;
        box-shadow: #8B8B8B;
        color: #fff;
        transition: 0.5s;
    }
    .btn-lg {
      width: 95%;
    }
    .space-empty {
      width: 400px;
      height: 700px;
    }
    .actions {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    }
  </style>
  