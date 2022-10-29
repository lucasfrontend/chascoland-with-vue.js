<template>
    <div class="">
        <Weather
        :clouds="nubosidad" 
        :wind_speed="velocidad"
        :wind_deg="direccion"
        :temp="temperatura"
        :today="hoy"/>
        <div>
            <h3>Home</h3>
        </div>
        <p>Haber saltado de un avion por primera vez es una experiencia inolvidable e irrepetible, lo sabemos. Pero también sabemos que querés algo más. Volar con tu propio cuerpo...  lo  En nuestro club el Paracaidismo es una forma de vida</p>

        <p></p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatem atque, dolore temporibus modi placeat tempora error nobis numquam est quisquam quibusdam provident nostrum suscipit maiores iure non nisi sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit, consectetur quia veniam porro alias, quisquam accusantium placeat eaque possimus, ea reiciendis. Dignissimos nostrum officia expedita nulla esse nesciunt minus!</p>

        menu click fuera de la pantalla y q se cierre
    </div>

</template>

<script>
import Weather from '@/components/Weather.vue';
import axios from 'axios'

export default {
    name: 'Home',
    data(){
        return {
            nubosidad: '',
            velocidad: '',
            direccion: '',
            temperatura: '',
            hoy: '',

        }

    },
    components: {
      Weather
    },
    methods: {
        getWeather(){
            const lat = '-35.5404833067820' ;
            const lon = '-58.049692027809016';
            const part = 'hourly,daily'; 
            const key = `e7ea28eea6e66941216ebf0b7faa1321`;
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${key}`).then(
                res => {
                    console.log(res.data);
                    if(res.status==200){
                        this.nubosidad = res.data.current.clouds;
                        this.velocidad = res.data.current.wind_speed;
                        this.direccion = res.data.current.wind_deg;
                        this.temperatura = Math.round(res.data.current.temp);
                        this.status = res.data.current.weather[0].main;

                        console.log("estado actual es",this.status)

                        
                    } else {
                        console.log("nads");
                    }
                }
                    
            );
 
        },
        setDate(){
            let d = new Date();
            let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            let today = day + ' ' + date + ' de ' + month + ' ' + year;
            console.log( today)
            this.hoy = today;
        }
    },
    mounted(){
        this.getWeather()
        this.setDate()
    }

}

</script>

<style lang="scss" scoped>

</style>