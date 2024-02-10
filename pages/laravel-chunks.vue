<template>
    <v-container>
        <h4 class="text-h4">
            Subir y descargar archivos grandes en Laravel sin tocar el php.ini
        </h4>
        <p class="body-text-1 mt-3">
            En el desarrollo web actual, la necesidad de subir y descargar archivos grandes es cada vez más común. Ya sea
            para almacenar imágenes de alta resolución, vídeos, documentos pesados o cualquier otro tipo de archivo, la
            gestión eficiente de estos recursos es crucial para el éxito de un proyecto.
        </p>
        <v-row class="mt-3">
            <v-col>
                <p class="body-text-1">
                    Por defecto, Laravel y PHP tienen ciertas limitaciones en cuanto al tamaño de los archivos que se pueden
                    subir y
                    descargar. Estas limitaciones, definidas en el archivo php.ini, pueden ser un obstáculo para proyectos
                    que
                    requieren manejar archivos voluminosos.
                </p>
            </v-col>
            <v-col>
                <v-img src="/uploadingChunks.jpeg" />
            </v-col>
        </v-row>
        <div class="mt-3">
            <span class="text-h5">
                Beneficios
            </span>
            <v-list lines="two">
                <v-list-item v-for="(bu, i) in beneficios" :key="i" :title="bu.title" :subtitle="bu.text">
                </v-list-item>
            </v-list>
        </div>
        <p class="body-text-1 mt-3">
            La implementación de una solución como la descrita en este artículo te permite superar las limitaciones de
            tamaño de archivos en Laravel sin modificar el php.ini. Esto se traduce en un proyecto más eficiente, escalable
            y seguro, con una mejor experiencia para los usuarios.
        </p>
        <p class="body-text-1 mt-3 text-center">
            ¿Te animas a probar esta solución en tu próximo proyecto?
        </p>
    </v-container>
</template>
<script>
export default {
    computed: {
        beneficios() {
            return [
                { title: 'Evita modificar el php.ini', text: 'Esta solución no requiere modificar el archivo php.ini, lo que reduce riesgos de errores y asegura la compatibilidad con diferentes servidores.' },
                { title: 'Subida y descarga eficiente', text: 'Permite subir y descargar archivos grandes de forma eficiente, sin afectar el rendimiento del servidor o la experiencia del usuario.' },
                { title: 'Escalabilidad', text: ' Se adapta a las necesidades de tu proyecto, permitiendo manejar archivos de cualquier tamaño sin limitaciones.' },
            ]
        }
    }
};
</script>