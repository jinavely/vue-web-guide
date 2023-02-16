<template>
    <div class="section">
        <EnvironmentProject />
        <EnvironmentStructure />
    </div>
</template>

<script>
import EnvironmentProject from './EnvironmentProject.vue';
import EnvironmentStructure from './EnvironmentStructure.vue';

export default {
    name: 'EnvironmentContainer',
    components: { EnvironmentProject, EnvironmentStructure },
};
</script>

<style lang="scss" scoped></style>
