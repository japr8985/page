<template>
    <v-chip label :color="color" class="ml-2">
        <v-icon>
            <slot name="icon">
                {{ icon }}
            </slot>
        </v-icon>

        <v-tooltip activator="parent" location="bottom">
            {{ text }}
        </v-tooltip>
    </v-chip>
</template>
<script>
export default {
    props: {
        text: String,
        color: String,
        icon: String
    }
};
</script>