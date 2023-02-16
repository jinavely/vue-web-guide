<template>
    <v-app-bar flat app color="#f5f5f5">
        <div class="header">
            <!-- dashboard -->
            <div class="controls">
                <div class="login">
                    <router-link to="/login" v-if="!login.show">
                        <v-icon dark>mdi-login</v-icon>
                        LOGIN
                    </router-link>
                    <span class="name" v-else
                        >{{ login.name }} <em>님</em></span
                    >
                </div>

                <v-text-field
                    class="search"
                    placeholder="Search"
                ></v-text-field>
                <v-btn class="vector mx-2 bell">
                    <v-icon dark />
                </v-btn>
                <v-btn
                    dark
                    small
                    color="#DADADA"
                    class="languge"
                    @click="changeLocale"
                >
                    {{ $t('laguge') }}
                </v-btn>
            </div>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        // login
        login: {
            show: false,
            name: '홍길순',
        },

        primaryDrawer: {
            model: null,
        },
        // 타이틀
        header: [
            {
                id: '0',
                path: '/',
                title: 'Welcome Back',
                name: '노기철',
                description: '판매 추이, 관리 및 고객 주문 예측 대시보드',
            },
            {
                id: '1',
                path: '/products',
                title: 'Products',
                name: '',
                description: '',
            },
            {
                id: '2',
                path: '/order',
                title: 'Orders',
                name: '',
                description: '',
            },
            {
                id: '3',
                path: '/delivery',
                title: 'Delivery',
                name: '',
                description: '',
            },
            {
                id: '4',
                path: '/transactions',
                title: 'Transactions',
                name: '',
                description: '',
            },
            {
                id: '5',
                path: '/notifications',
                title: 'Notifications',
                name: '',
                description: '',
            },
            {
                id: '5',
                path: '/stats',
                title: 'Statistics',
                name: '',
                description: '',
            },
        ],
        // popover
        fav: true,
        menu: false,
        message: false,
        hints: true,
    }),
    methods: {
        click() {
            this.$emit('click', this.primaryDrawer);
        },
        // 다국어
        changeLocale() {
            if (this.$i18n.locale === 'en') return (this.$i18n.locale = 'ko');
            this.$i18n.locale = 'en';
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep {
    .v-toolbar__content {
        align-items: flex-start;
        height: auto;
        margin: 35px 54px 0 54px;
        padding: 0;
        .header {
            display: flex;
            width: 100%;
            justify-content: space-between;
            .title-info {
                .v-toolbar__title {
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 28px;
                }
                .description {
                    color: #a1a1a1;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                }
            }
            .controls {
                display: flex;
                align-items: center;
                .login {
                    margin-right: 18px;
                    > a {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 38px;
                        min-width: auto;
                        mix-blend-mode: normal;
                        border-radius: 10px;
                        padding: 10px;
                        box-shadow: none;
                        background-color: rgb(218, 218, 218);
                        border-color: rgb(218, 218, 218);
                        text-decoration: none;
                        color: #000;
                        .v-icon {
                            margin-right: 5px;
                            color: #000;
                        }
                    }
                    .name {
                        font-size: 20px;
                        line-height: 29px;
                        color: #6a6a6a;
                        em {
                            font-style: normal;
                            font-size: 12px;
                        }
                    }
                }
                .search {
                    width: 200px;
                    height: 38px;

                    ::placeholder {
                        font-size: 14px;
                        line-height: 16px;
                    }
                    .v-input__slot {
                        &:before,
                        &:after {
                            display: none;
                        }
                        .v-text-field__slot {
                            height: 38px;
                            line-height: 38px;
                            mix-blend-mode: normal;
                            border-radius: 10px;
                            margin-bottom: 0;
                            padding: 0 18px 0 42px;
                            background: #dadada
                                url('../../assets/images/common/search.svg')
                                no-repeat 18px 50%;
                            input {
                                height: 100%;
                                max-height: 100%;
                            }
                        }
                    }
                }
                .bell {
                    width: 38px;
                    height: 38px;
                    min-width: auto;
                    mix-blend-mode: normal;
                    border-radius: 10px;
                    padding: 0;
                    box-shadow: none;
                    background-color: rgb(218, 218, 218);
                    border-color: rgb(218, 218, 218);
                    .v-icon {
                        width: 38px;
                        height: 38px;
                        min-width: auto;
                        background: url('../../assets/images/common/vector.svg')
                            no-repeat 50% 50%;
                    }
                }
                .languge {
                    width: 38px;
                    height: 38px;
                    min-width: auto;
                    mix-blend-mode: normal;
                    border-radius: 10px;
                    padding: 10px;
                    box-shadow: none;
                    .v-btn__content {
                        color: #000;
                        font-size: 16px;
                        line-height: 19px;
                    }
                }
            }
        }
    }
}
</style>
