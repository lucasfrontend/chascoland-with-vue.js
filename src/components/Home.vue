<template>
    <div class="">
        <Weather v-if="showWeather"
        :clouds="nubosidad" 
        :wind_speed="velocidad"
        :wind_deg="direccion"
        :temp="temperatura"
        :today="hoy"/>
        <div>
            <h3>Home</h3>
        </div>
        <p>Haber saltado de un avion por primera vez es una experiencia inolvidable e irrepetible, lo sabemos. Pero también sabemos que viniste por algo más... No es casualidad que hayas llegado hasta acá solo para probar qué pasaba con vos si saltabas de un avión.... Volar con tu propio cuerpo es algo bastante más increible que saltar arnesado a tu instructor, MUY difícil de explicar. Controlar un giro  tan solo bajando un brazo en caida libre es increible, y subir esa mano y cortar ese giro es más increible aún. Y hay más, en nuestro sagrado deporte siempre hay más. Podés aprendér a volar de head, de sit, de down, volar de panza, volar de .... Existen muchas formas de volar. 
        
            En esta forma de vida la ambición personal. Comenzar a volar te formatea la cabeza. DEspiertan prioridades en tu vida que no conocías, que tenías ahí innatas y dormidas. Y que tienen que ver con tu felicidad plena. Con tus ganas de hacer reales tus sueños más intensos.
        .  lo  En nuestro club el Paracaidismo es una forma de vida</p>

        Es normal que después de conocer el paracaidismo no estés para ningún cumpleaños, para ninguna reunión, y que no aparezcas ni en los casamiento con tal de seguir volando cada vez mejor, a los paracaidistas siempre nos reclaman y con mucha razón. Es que acá siempre tenemos a nuestra otra familia. 
        Desplazarte horizontalmente por la troposfera te va a encantar,         atravesar una nube es hermoso, pero más hermoso todavía es apuntarle a una nube y entonces atravesarla. es una de las primeras cosas que se pide a un alumno recién recibido, que sepa escapar.<p>Como siempre decimos en paracaidismo, planea tu vuelo y vuela tu plan</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatem atque, dolore temporibus modi placeat tempora error nobis numquam est quisquam quibusdam provident nostrum suscipit maiores iure non nisi sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit, consectetur quia veniam porro alias, quisquam accusantium placeat eaque possimus, ea reiciendis. Dignissimos nostrum officia expedita nulla esse nesciunt minus!</p>
        <p>que dia dificil</p>

        <p>El paracaidismo es un diamante en bruto</p>

        <p>
            
            menu click fuera de la pantalla y q se cierre
            2022 te refcordaré como el peor año de mi vida, jueeeera
        año 201....
        Hoy ss el aniversario del intento de suicidio de mi ex,me dejó la casa llena de gas y  un mensaje de voz q transformé en una canción. Ustedes tuvieron novias tóxicas?)
</p>

    </div>

</template>

<script>
import Weather from '@/components/Weather.vue';
import axios from 'axios'

export default {
    name: 'Home',
    data(){
        return {
            showWeather: false,
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