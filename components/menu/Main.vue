<template>
    <div class="menu-wrapper">
        <v-layout class="overflow-visible d-flex justify-space-between" style="height: 56px;">
            <v-bottom-navigation active color="primary" style="position: fixed;">
                <v-btn :to="{ name: 'index'}">
                    <v-icon>mdi-home</v-icon>
                    <v-tooltip activator="parent" location="top">
                        Inicio
                    </v-tooltip>
                </v-btn>
                <v-divider vertical color="info" class="ml-4"></v-divider>
                <MenuProjects />
                <v-divider vertical color="info" class="ml-4"></v-divider>
                <!-- <v-btn :to="{ name: 'education'}">
                    <v-icon>mdi-school</v-icon>
                </v-btn> -->
                <v-btn href="mailto:japr8985@gmail.com">
                    <v-icon>mdi-email</v-icon>
                    <v-tooltip activator="parent" location="top">
                        Contacto
                    </v-tooltip>
                </v-btn>
            </v-bottom-navigation>
        </v-layout>
    </div>
</template>
<style lang="scss">
.menu-wrapper {
    max-width: 50vw;
    transform: translate(50%, 0);
}

$layout-breakpoint-small: 768px;

@media (max-width: $layout-breakpoint-small) {
    .menu-wrapper {
        max-width: 100%;
        transform: translate(0, 0);
    }
}
</style>