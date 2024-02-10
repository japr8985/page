<template>
    <v-container fluid fill-height>
        <v-row>
            <v-col class="d-flex align-center justify-center flex-column">
                <v-img src="/logo.png" aspect-ratio="16/9" width="auto" max-height="100" />
                <h1 class="text-h5">
                    Jorge Peraza
                </h1>
                <span class="subtitle">
                    Desarrollador full-stack
                </span>
                <div>
                    <v-btn icon size="large" variant="text" href="https://github.com/japr8985">
                        <v-icon color="info">
                            mdi-github
                        </v-icon>
                    </v-btn>
                    <v-btn icon size="large" variant="text" href="https://www.linkedin.com/in/jorgealejandroperaza/">
                        <v-icon color="info">
                            mdi-linkedin
                        </v-icon>
                    </v-btn>
                </div>
                <span>
                    {{ catchment.title }}
                </span>
                <span>
                    {{ catchment.subtitle }}
                </span>
                <span>
                    {{ catchment.contact }}
                </span>

            </v-col>
            <v-col>
                <v-card elevation="0" class="overflow-y-auto" max-height="80vh">
                    <v-card-title>
                        <v-icon start color="primary">mdi-history</v-icon>Experiencia
                    </v-card-title>
                    <v-card-text>
                        <div v-for="(exp, index) in experiences" :key="index" class="mb-2">
                            <v-hover v-slot="{ isHovering, props }">
                                <v-card variant="outlined" :elevation="isHovering ? 12 : 2" v-bind="props">
                                    <v-card-title>
                                        <v-icon start color="primary">mdi-domain</v-icon>
                                        {{ exp.title }}
                                    </v-card-title>
                                    <v-card-subtitle class="d-flex flex-wrap">
                                        <span>
                                            <v-icon start color="teal">mdi-calendar</v-icon> {{ exp.dates }}
                                        </span>
                                        <v-spacer />
                                        <span>
                                            <v-icon start color="teal">mdi-map-marker</v-icon>
                                            {{ exp.location }}
                                        </span>
                                    </v-card-subtitle>
                                    <v-card-text>
                                        <v-list>
                                            <v-list-item v-for="(item, index) in exp.items" :key="index">
                                                <template #prepend>
                                                    <v-icon color="light-blue-darken-3">mdi-code-braces</v-icon>
                                                </template>
                                                {{ item.text }}
                                            </v-list-item>
                                        </v-list>
                                    </v-card-text>
                                </v-card>
                            </v-hover>

                            <v-divider class="my-2" />
                        </div>

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import Experience from '../page-content/experiences/index';
import about from '../page-content/about/index';

export default defineComponent({
    computed: {
        experiences() {
            return Experience;
        },
        mainMessage() {
            return about.main;
        },
        catchment() {
            return about.catchment;
        }
    },
});
</script>