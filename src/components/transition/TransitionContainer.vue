<template>
    <div class="contents">
        <h3>인수인계</h3>

        <Settings />
    </div>
</template>
<script>
import Settings from '@/components/transition/Settings.vue';

export default {
    name: 'TransitionContainer',
    components: { Settings },
};
</script>
<style lang="scss" scoped>
.contents {
    h3 {
        margin-bottom: 10px;
    }
}
</style>
