<template>
    <div>
        <h1>{{ titulo }}</h1>
        
        <ul>
            <li v-for="foto of fotos">
                <img :src="foto.url" :alt="foto.titulo">
            </li>
        </ul>

    </div>

</template>

<script>
export default {

    data(){

        return {
            titulo: 'Alurapic',
            fotos: [
                {
                    url: 'https://t1.ea.ltmcdn.com/pt/images/5/3/1/o_que_fazer_se_o_meu_cachorro_esta_estressado_20135_600.jpg',
                    titulo: 'Cachorro'
                },
                {
                    url: 'https://t1.ea.ltmcdn.com/pt/images/5/3/1/o_que_fazer_se_o_meu_cachorro_esta_estressado_20135_600.jpg',
                    titulo: 'Cachorrão'
                }
            ]
        };
    }
}
</script>

<style>

</style>
