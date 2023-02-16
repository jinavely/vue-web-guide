<template>
    <div class="contents">
        <h3>프로젝트 리스트</h3>

        <v-skeleton-loader
            class="mx-auto"
            type="card-heading, table-thead, table-tbody"
            v-if="loader"
        ></v-skeleton-loader>

        <v-row v-else class="table">
            <v-col sm="4">
                <v-select
                    :items="items"
                    label="선택하세요"
                    filled
                    @change="handleListFilter"
                ></v-select>
            </v-col>
            <v-col>
                <table>
                    <colgroup>
                        <col width="12%" />
                        <col width="12%" />
                        <col width="12%" />
                        <col width="12%" />
                        <col width="20%" />
                        <col width="20%" />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>1depth</th>
                            <th>2depth</th>
                            <th>3depth</th>
                            <th>4depth</th>
                            <th>파일명</th>
                            <th>비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(item, index) in newListItem"
                            :key="index"
                            :class="`${item.depth1 === '' ? '' : 'major_tr'}`"
                            ref="trRef"
                        >
                            <td>{{ item.depth1 }}</td>
                            <td>{{ item.depth2 }}</td>
                            <td>{{ item.depth3 }}</td>
                            <td>{{ item.depth4 }}</td>
                            <td>
                                <a :href="item.link" target="_blank">
                                    {{ item.filename }}
                                </a>
                            </td>
                            <td>{{ item.etc }}</td>
                        </tr>
                    </tbody>
                </table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { projectList } from '../../data/mockdb';

export default {
    name: 'ProjectList',
    components: {},
    data: () => ({
        // Skeleton
        loader: false,

        // Tab
        tab: null,
        listItems: [],

        // selectbox
        newListItem: [],
        itemStr: 'all',

        numbers: 4,
    }),

    computed: {
        items() {
            const list = this.listItems.map((el) =>
                el.depth1 ? el.depth1 : null,
            );
            return ['모두선택', ...list];
        },
    },

    created() {
        this.initialize();
    },

    methods: {
        // getProjectList
        initialize() {
            this.loader = true;
            try {
                setTimeout(() => (this.loader = false), 500);
                // const { data } = await getProjectLists();
                this.listItems = projectList;
                this.newListItem = this.listItems;
            } catch (error) {
                console.log(error);
            }
        },

        // filter
        handleListFilter(val) {
            switch (val) {
                case '모두선택':
                    this.itemStr = 'all';
                    break;
                case '메인':
                    this.itemStr = 'main';
                    break;
                case '예약':
                    this.itemStr = 'reserve';
                    break;
                case '고객센터':
                    this.itemStr = 'customer';
                    break;
                case '회원':
                    this.itemStr = 'member';
                    break;
                case '이용안내':
                    this.itemStr = 'user-infomation';
                    break;
                case '차량목록':
                    this.itemStr = 'car';
                    break;
                case '마이페이지':
                    this.itemStr = 'mypage';
                    break;
                default:
                    this.itemStr = 'all';
                    break;
            }

            let type = this.listItems.filter((el) =>
                el.type === this.itemStr ? (this.newListItem = el) : null,
            );
            this.itemStr === 'all'
                ? (this.newListItem = this.listItems)
                : (this.newListItem = type);
        },
    },
};
</script>

<style lang="scss" scoped>
.contents {
    h3 {
        margin-bottom: 10px;
    }

    .table {
        flex-direction: column;
        overflow-y: auto;

        .v-select {
            height: 40px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;

            .major_tr:not(:first-child) {
                border-top: 2px solid #666;
            }

            thead {
                th {
                    position: sticky;
                    top: 0;
                }
            }

            th,
            td {
                padding: 12px;
                border-bottom: 1px solid #eee;
                font-size: 12px;
            }

            th {
                background: #1976d2;
                color: #fff;
                text-align: center;
            }

            td {
                &:empty {
                    height: 43px;
                }
                color: #666;

                &a.on {
                    color: blue;
                    font-weight: bold;
                }
            }

            th + th,
            td + td {
                border-left: 1px solid #eee;
            }

            tr.border td {
                border-top: 2px solid #ddd;
            }
        }
    }
}
// dark mode
.theme--dark {
    .contents {
        table {
            thead {
                th {
                    background: #fff;
                    color: #000;
                }
            }
            tbody {
                .major_tr:not(:first-child) {
                    border-top: 2px solid #1976d2;
                }
                td {
                    background: #1e1e1e;
                    color: #fff;

                    a {
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
