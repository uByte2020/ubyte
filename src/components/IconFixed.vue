<template>
    <div>
        <a id="whatsapp" 
            target="_blank"
            href="https://api.whatsapp.com/send?phone=244999262168&text=Ol%C3%A1">
            <div class="fixedButton " relative-element-selector :offset="{ top: 40, bottom: 40 }">
            
                <img
                    :src="WhatsappIcon"
                    width="100"
                    height="95"
                    class="TamanhoIcon"
                    :class="{ 'navbar--hidden': showIcon }"
                />
            </div>
        </a>
    </div>
</template>
<script>
// import { Affix } from 'vue-affix';
export default {
    name:"iconFixed",
    components: {
        // Affix,
    },
    props:{
        relativeElementSelector: {
            type: String,
            required: true
        },
        offset: {
            type: Object,
            default: () => {
                return {
                top: 40,
                bottom: 40
                }
            }
        },
        enabled: {
            type: Boolean,
            default: true
        },
        scrollAffix: {
            type: Boolean,
            default: false
        },
        scrollContainerSelector: {
            type: String,
            default: null,
        }
    },
    data(){
        return{
            WhatsappIcon: require("@/assets/svgs/whatsappIcon2.svg"),
            showIcon: false,
            lastScrollPosition: 0
        }
    },
    methods:{
        ScrollOcult(){
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
            }
            this.showIcon = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
            // console.log("Rolando scroll",currentScrollPosition)
            // console.log("Mostrando icon",this.showIcon)
            // console.log("Ultima rolagem icon",this.lastScrollPosition)
        },
    },
    mounted(){
        window.addEventListener("scroll", this.ScrollOcult);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.ScrollOcult)
    }
}
</script>

<style scoped>
.fixedButton{
    position: fixed;
    bottom: 0;
    left: 0;
    transform: translate3d(0, -400%, 0);
    /* justify-content: center; */
}
.navbar--hidden {
  /* box-shadow: none; */
  position: fixed;
  /* transform: translate3d(0, -100%, 0); */
  /* bottom: 1; */
}
.TamanhoIcon{
    
    width: 60px!important;
    height: 60px!important;
}
</style>
