<template>
    <div class="backdrop" @click.self= "closeModal">
        <div class="modal" :class="{promotion: theme ==='promotion'}">
            <slot>default content</slot>
                <div class="actions">
                    <slot name="links"></slot>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['theme'],
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>
<style scoped>
    .modal{
        width: 400px;
        padding:20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    /* .modal h1{
        color:#03cfb4;
        border: none;
        padding: 0;
    } */
    .backdrop{
        top:0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal-promotion{
            background: crimson;
            color: white;
        }
    .modal h1{
        color: #03cfb4;
        border: none;
        padding: 0;
        }
    .modal p{
        font-style: normal;
    }
    .modal-promotion-h1{
            color: white;
        }
    .modal .actions{
        text-align: center;
        margin: 30px 0 10px 0;
    }
    .modal .actions a{
        color: #333;
        padding: 0px;
        border: 1px solid #eeee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
</style>