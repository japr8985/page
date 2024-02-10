<template>
    <MenuCoreBtn :show="show" @click="show = true" @mustBeClosed="closeMenu" text="Proyectos">
        <template #icon>
            mdi-application-array-outline
        </template>
        <v-container fluid>
            <v-row>
                <v-col v-for="card in cards" :key="card.title" cols="12" xs="12" :md="card.flex">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card :image="card.src" height="200px" theme="dark" class="readable-background"
                            @click.prevent="closeDialogAndGo(card.resume)" :elevation="isHovering ? 12 : 1"
                            :class="{ 'on-hover': isHovering }" v-bind="props">
                            <v-card-title class="text-center">
                                <!-- <v-icon :href="card.github">mdi-github</v-icon> -->
                                <v-btn icon="mdi-github" variant="text" :href="card.github" v-if="card.github"></v-btn>
                                {{ card.title }}
                            </v-card-title>
                            <v-card-text>
                                {{ card.text }}
                            </v-card-text>
                        </v-card>
                    </v-hover>

                </v-col>
            </v-row>
        </v-container>
    </MenuCoreBtn>
</template>
<script>
export default {
    data: () => ({
        cards: [
            {
                title: 'Baleygr',
                src: '/baleygrLogo.jpg',
                flex: 3,
                text: 'Plugin de Vue3, que brinda la facilidad de visualizar documentos en el navegador. Es una herramienta sencilla y flexible que te permite mostrar documentos de diferentes formatos, como PDF, Word y Excel.',
                class: 'readable-background',
                github: 'https://github.com/japr8985/baleygr',
                resume: '/baleygr'
            },
            {
                title: 'Chunks en Laravel',
                src: '/laravelByChunks.png',
                flex: 3,
                text: 'Lorem Ipsum',
                class: 'readable-background',
                github: '#',
                resume: '/laravel-chunks'
            },
            {
                title: 'Gannet',
                src: '/gannet.png',
                flex: 3,
                text: 'Plataforma de gestión para agencias navieras con una interfaz intuitiva y un enfoque en la innovación',
                class: 'readable-background',
                resume: '/gannet'
            }
        ],
        show: false,
    }),
    methods: {
        async closeDialogAndGo(path) {
            this.show = false
            await navigateTo(path)
        },
        closeMenu(val) {
            this.show = val;
        }
    }
}
</script>
<style lang="scss">
.readable-background {
    .v-img__img.v-img__img--cover {
        filter: blur(1px);
        opacity: 0.4;
    }
}
</style>