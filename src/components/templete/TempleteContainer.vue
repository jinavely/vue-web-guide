<template>
    <v-card>
        <v-toolbar color="cyan" flat>
            <v-toolbar-title>Templete</v-toolbar-title>

            <template v-slot:extension>
                <v-tabs v-model="tab" show-arrows>
                    <v-tab>Layouts</v-tab>
                    <v-tab>Buttons</v-tab>
                    <v-tab>Icons</v-tab>
                    <v-tab>Forms</v-tab>
                    <v-tab>Popups</v-tab>
                    <v-tab>Typography</v-tab>
                    <v-tab>Accordions</v-tab>
                    <v-tab>Tabs</v-tab>
                    <v-tab>Tables</v-tab>
                    <v-tab>Datepickers</v-tab>
                    <v-tab>Sliders</v-tab>
                    <v-tab>Etcs</v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
            <v-tab-item> <Layouts /> </v-tab-item>
            <v-tab-item> <Buttons /> </v-tab-item>
            <v-tab-item> <Icons /> </v-tab-item>
            <v-tab-item> <Forms /> </v-tab-item>
            <v-tab-item> <Popups /> </v-tab-item>
            <v-tab-item> <Typography /> </v-tab-item>
            <v-tab-item> <Accordions /> </v-tab-item>
            <v-tab-item> <Tabs /> </v-tab-item>
            <v-tab-item> <Tables /> </v-tab-item>
            <v-tab-item> <Datepickers /> </v-tab-item>
            <v-tab-item> <Sliders /> </v-tab-item>
            <v-tab-item> <Etcs /> </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
import Accordions from './Accordions.vue';
import Buttons from './Buttons.vue';
import Icons from './Icons.vue';
import Datepickers from './Datepickers.vue';
import Forms from './Forms.vue';
import Layouts from './Layouts.vue';
import Popups from './Popups.vue';
import Tables from './Tables.vue';
import Tabs from './Tabs.vue';
import Typography from './Typography.vue';
import Sliders from './Sliders.vue';
import Etcs from './Etcs.vue';

export default {
    name: 'TempleteContainer',
    components: {
        Layouts,
        Buttons,
        Icons,
        Forms,
        Popups,
        Typography,
        Accordions,
        Tabs,
        Tables,
        Datepickers,
        Sliders,
        Etcs,
    },
    data() {
        return {
            tab: [],
        };
    },
    methods: {
        addItem(item) {
            const removed = this.items.splice(0, 1);
            this.items.push(...this.popup.splice(this.popup.indexOf(item), 1));
            this.popup.push(...removed);
            this.$nextTick(() => {
                this.currentItem = 'tab-' + item;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.content-temp {
    margin: 0;
    flex-direction: column;
    ::v-deep {
        h4 {
            margin: 0 0 10px 0;
            ~ h4 {
                margin: 20px 0 10px 0;
            }
            .v-btn {
                margin: 0;
                padding: 0;
                min-width: 0;
                box-shadow: none;
                background: transparent;
            }
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
    }
}
.v-tabs-items {
    padding: 20px;
}
</style>
