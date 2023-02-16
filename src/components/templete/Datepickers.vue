<template>
    <v-row class="content-temp">
        <h3>Datepicker</h3>
        <v-col cols="12" sm="6" md="4">
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="date"
                        label="날짜를 입력하세요."
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    scrollable
                    @input="menu = false"
                ></v-date-picker>
            </v-menu>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Datepickers',
    data() {
        return {
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            menu: false,
        };
    },
};
</script>

<style lang="scss" scoped></style>
