<template>
    <v-container class="overflow-auto" style="max-height: 87vh;" fluid>
        <v-row>
            <v-col cols="12" md="6" xs="12">
                <h4 class="text-h4">
                    Baleygr
                </h4>
                <span class="subtitle">
                    Un plugin para visualizar documentos en diferentes formatos
                </span>
                <div class="mb-2 text-center">
                    <stack-icon color="teal" icon="mdi-vuejs" text="VueJs" />
                    <stack-icon color="yellow" icon="mdi-language-javascript" text="Javascript" />
                </div>
                <v-divider class="mb-4" />
                <p class="text-body-1">
                    En el mundo actual, la gestión documental es una parte fundamental de cualquier proyecto o empresa. La
                    capacidad de trabajar con documentos en diversos formatos es crucial para la eficiencia y la
                    productividad. Un plugin para visualizar documentos en diferentes formatos puede ser una herramienta
                    invaluable para cualquier proyecto o empresa que busque mejorar su gestión documental.
                </p>
            </v-col>
            <v-col md="6" xs="12">
                <v-img src="/baleygrLogo.jpg" max-height="270" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h5 class="text-h5 mb-3">
                    Beneficios para los usuarios
                </h5>
                <v-list lines="two">
                    <v-list-item v-for="(bu, i) in beneficiosUsuarios" :key="i" :title="bu.title" :subtitle="bu.text">
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col>
                <h5 class="text-h5 mb-3">
                    Beneficios para las empresas
                </h5>
                <v-list>
                    <v-list-item v-for="(bu, i) in benefciosEmpresa" :key="i" :title="bu.title" :subtitle="bu.text" />
                </v-list>
            </v-col>
        </v-row>
        <p class="text-center mt-5">
            Fase de desarrollo activo
        </p>
    </v-container>
</template>
<script>
export default {
    computed: {
        beneficiosUsuarios() {
            return [
                { title: 'Mayor accesibilidad:', text: 'Los usuarios podrán acceder a sus documentos sin importar el formato en el que se encuentren, lo que facilita la búsqueda y el uso de la información.'},
                { title: 'Mejora en la experiencia de usuario', text: 'Visualizar los documentos en un formato familiar y fácil de usar mejora la experiencia general del usuario.' },
                { title: 'Reducción de la necesidad de software adicional', text: ' No es necesario instalar software adicional para ver diferentes tipos de documentos, lo que ahorra tiempo y espacio en el disco duro.' },
                { title: 'Mayor flexibilidad', text: 'Los usuarios pueden elegir el formato que mejor se adapte a sus necesidades, lo que les da más control sobre cómo trabajan con sus documentos.' },
            ]
        },
        benefciosEmpresa() {
            return [
                { title: 'Aumento de la productividad', text: 'Los empleados pueden trabajar con mayor eficiencia al no tener que perder tiempo buscando y convirtiendo documentos.' },
                { title: 'Reducción de costes', text: 'Se reduce la necesidad de adquirir software adicional para la gestión documental.' },
                { title: 'Mejora de la imagen profesional', text: 'La empresa se proyecta como una organización moderna y eficiente que se preocupa por la experiencia de sus usuarios.' },
            ]
        },
    }
};
</script>