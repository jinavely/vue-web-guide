<template>
    <v-row class="content-temp">
        <h3>Data Table</h3>
        <v-col>
            <template id="t">
                <div class="container">
                    <input type="text" v-model="message" />
                    <button type="button" @click="doCopy">Copy!</button>
                </div>
            </template>
            <h4>
                기본
                <!-- <v-btn>
                    <v-icon v-if="!isCopy">mdi-content-copy</v-icon>
                    <v-icon v-else>mdi-check</v-icon>
                </v-btn> -->
            </h4>

            <pre>
                <code>
                    <table class="table">
                        <colgroup>
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>아이디</th>
                                <th>상품명</th>
                                <th>주문금액</th>
                                <th>배송상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2022.10.11 23:12:15</td>
                                <td>퓨어러브 블라우스</td>
                                <td>100,000원</td>
                                <td>배송중</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2022.10.11 23:12:15</td>
                                <td>브룩클린 슬래이트</td>
                                <td>10,000원</td>
                                <td>배송완료</td>
                            </tr>
                        </tbody>
                    </table>
                </code>
            </pre>

            <h4>
                Dense
                <v-btn title="copy"><v-icon>mdi-content-copy</v-icon></v-btn>
            </h4>
        </v-col>

        <v-divider class="mb-4" />

        <h3>Simple Table</h3>
        <v-col> ssdaf </v-col>

        <v-divider class="mb-4" />

        <h3>Iterator Table</h3>
        <v-col> sadfasdf </v-col>

        <v-divider class="mb-4" />

        <h3>Paging</h3>
        <v-col> sadfasdf </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Tables',
    template: '#t',
    data() {
        return {
            message: 'Copy These Text',
        };
    },
    methods: {
        doCopy: function () {
            this.$copyText(this.message).then(
                function (e) {
                    alert('Copied');
                    console.log(e);
                },
                function (e) {
                    alert('Can not copy');
                    console.log(e);
                },
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.table {
    border-top: 1px solid #000;
    border-bottom: 1px solid #ccc;

    thead {
        tr {
            th {
                padding: 10px;
            }
        }
    }
    tbody {
        tr {
            td {
                padding: 10px;
                text-align: center;
                border-top: 1px solid #ccc;
            }
        }
    }
}
</style>
