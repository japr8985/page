<template>
    <v-btn>
        <v-icon>
            <slot name="icon"></slot>
        </v-icon>
        <v-dialog :model-value="dialog" @update:modelValue="$emit('mustBeClosed')">
            <slot />
        </v-dialog>
        <v-tooltip activator="parent" location="top">
            {{ text }}
        </v-tooltip>
    </v-btn>
</template>
<script>
export default {
    props: {
        show: {
            require: true
        },
        text: String
    },
    computed: {
        dialog() {
            return this.show
        }
    }
};
</script>
<style lang="scss">
.v-overlay__scrim {
    background-color: rgb(14, 11, 11) !important;
    opacity: 0.64 !important;
    filter: blur();
}
</style>