<template>
    <v-row class="contents">
        <v-col sm="12" lg="5">
            <TotalPageCharts />
        </v-col>
        <v-col sm="12" lg="7">
            <ProgressCharts />
        </v-col>
    </v-row>
</template>

<script>
import ProgressCharts from './ProgressCharts.vue';
import TotalPageCharts from './TotalPageCharts.vue';

export default {
    name: 'DashboardContaner',
    components: { ProgressCharts, TotalPageCharts },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
