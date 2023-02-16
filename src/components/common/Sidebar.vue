<template>
    <div class="slidebar">
        <v-list>
            <v-list-item two-line>
                <v-list-item-avatar />
                <v-list-item-content>
                    <router-link to="/">
                        <v-list-item-title>Roaming</v-list-item-title>
                        <v-list-item-subtitle>version 1.0</v-list-item-subtitle>
                    </router-link>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                ref="navListRef"
                @click="menuActionClick"
            >
                <v-list-item-content>
                    <router-link :to="item.link"
                        ><v-list-item-title>{{
                            item.title
                        }}</v-list-item-title></router-link
                    >
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-bottom-navigation
            background-color="transparent"
            :fixed="true"
            class="utils"
        >
            <v-switch
                v-model="switch1"
                :label="`${switch1 ? 'DARK' : 'LIGHT'}`"
                @change="toggle_dark_mode"
            />
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    name: 'Slidebar',
    data() {
        return {
            // Nav
            drawer: true,
            items: [
                { title: 'Home', link: '/' },
                { title: 'Environment', link: '/environment' },
                { title: 'Templete', link: '/templete' },
                { title: 'Dashboard', link: '/dashboard' },
                { title: 'Transition', link: '/transition' },
            ],
            color: '#dee2e5',
            colors: ['primary', 'blue', 'success', 'red', 'teal', '#dee2e5'],
            right: false,
            permanent: false,
            mini: false,
            background: false,

            // switch
            switch1: false,
        };
    },
    computed: {
        bg() {
            return this.background
                ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg'
                : undefined;
        },
    },
    mounted() {
        // Nav Active
        this.menuActionClick();

        JSON.parse(localStorage.getItem('dark_theme'))
            ? ((this.$vuetify.theme.dark = true), (this.switch1 = true))
            : ((this.$vuetify.theme.dark = false), (this.switch1 = false));
    },
    watch: {
        $route(to, form) {
            if (to.path !== form.path) this.menuActionClick();
        },
    },
    methods: {
        // Nav Active
        menuActionClick() {
            const path = this.$route.path;
            const list = this.$refs.navListRef;
            Array.from(list).map((el) => el.$el.classList.remove('active'));
            switch (path) {
                case '/':
                    list[0].$el.classList.add('active');
                    break;
                case '/environment':
                    list[1].$el.classList.add('active');
                    break;
                case '/templete':
                    list[2].$el.classList.add('active');
                    break;
                case '/dashboard':
                    list[3].$el.classList.add('active');
                    break;
                case '/transition':
                    list[4].$el.classList.add('active');
                    break;
                default:
                    list[0].$el.classList.add('active');
                    break;
            }
        },

        // dark mode
        toggle_dark_mode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem(
                'dark_theme',
                this.$vuetify.theme.dark.toString(),
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.slidebar {
    .v-list--nav,
    .v-list-item {
        min-height: auto;
        padding: 0;
        margin: 0;
    }
    .v-list-item--two-line {
        align-items: center;
        justify-content: center;
        padding: 22px 20px 30px 20px;
        .v-avatar {
            width: 40px;
            height: 40px;
            background: #017efa
                url('../../assets/images/common/bx_bx-bolt-circle.svg')
                no-repeat 50% 50%;
            border-radius: 8px;
            margin: 0 14px 0 0;
        }
        .v-list-item__content {
            padding: 0;
            > a {
                text-decoration: none;
                color: #000;
            }
            .v-list-item__title {
                font-weight: 900;
                font-size: 24px;
                margin: 0;
                line-height: 28px;
            }
            .v-list-item__subtitle {
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                color: #000;
            }
        }
    }
    .v-list-item:not(.v-list-item--two-line) {
        margin-bottom: 20px !important;
        &:before {
            z-index: -1;
        }
        &.active {
            &:before {
                opacity: 1;
                background-color: #017efa;
            }

            a {
                .v-list-item__title {
                    color: #fff;
                }
            }
        }
        &:hover {
            &:before {
                opacity: 1;
                background-color: #017efa;
            }

            a {
                .v-list-item__title {
                    color: #fff;
                }
            }
        }
        .v-list-item__content {
            padding: 0;
            a {
                font-weight: 600;
                font-size: 18px;
                line-height: 21px;
                text-decoration: none;
                color: #000;
                padding: 11px 18px;

                &.active {
                    background: #017efa;
                    border-radius: 12px;
                }
            }
            .v-list-item__title {
                font-weight: 600;
                font-size: 18px;
                line-height: 21px;
            }
        }
    }

    // dark
    .theme--dark {
        .v-avatar {
            background: #000
                url('../../assets/images/common/bx_bx-bolt-circle.svg')
                no-repeat 50% 50%;
        }
        .v-list-item__content {
            padding: 0;
            > a {
                color: #fff;
            }
            .v-list-item__subtitle {
                color: #fff;
            }
        }
        .v-list-item:not(.v-list-item--two-line) {
            .v-list-item__content {
                a {
                    color: #fff;
                }
            }
        }
        .utils {
            .v-input--switch {
                label {
                    color: #fff;
                }
            }
        }
    }
}
</style>
