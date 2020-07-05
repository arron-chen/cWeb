<template>
    <div class="cb-pagination">
        <span>共{{totalCount}}记录 第{{currentPage}}/{{totalPage}}页</span>
        <ul>
            <li
                :class="['prev', {'disabled': currentPage <= 1}]"
                @click="currentPage <= 1 ? '' : handleClickPage(currentPage-1)"
            >
               上一页
            </li>
            <li
                @click="handleClickPage(i)"
                v-for="(i,index) in showPage"
                :class="{'activePage': currentPage === i}"
                :key="index"
                v-if="i > 0"
            >{{i}}</li>
            <li
                :class="['next',{'disabled': currentPage >= totalPage}]"
                @click="currentPage >= totalPage ? '' : handleClickPage(currentPage+1)"
            >
               下一页
            </li>
        </ul>
        <select @change="handleClickPage(currentPage)" v-model="limitNum">
            <option v-for="(item,index) in limitNums" :value="item" :key="index">{{item}}</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            limitNums: [3,5,10,15,20],
            limitNum: 3
        };
    },
    props: {
        currentPage: {
            default: 1
        },
        pageSize: {
            default: 10
        },
        totalCount: {
            required: true
        }
    },
    computed: {
        totalPage() {
            return Math.ceil(this.totalCount / this.pageSize);
        },
        showPage() {
            let pageNum = Number(this.totalPage),
                index = Number(this.currentPage),
                arr = [];
            if (pageNum <= 9) {
                for (let i = 1; i <= pageNum; i++) {
                    arr.push(i);
                }
                return arr;
            }
            if (index < 5) return [1, 2, 3, 4, 5, 6, 7, "+", pageNum];
            if (index >= pageNum - 1)
                return [
                    1,
                    2,
                    "-",
                    pageNum - 5,
                    pageNum - 4,
                    pageNum - 3,
                    pageNum - 2,
                    pageNum - 1,
                    pageNum
                ];
            if (index === pageNum - 2)
                return [
                    1,
                    2,
                    "-",
                    pageNum - 5,
                    pageNum - 4,
                    pageNum - 3,
                    pageNum - 2,
                    pageNum - 1,
                    pageNum
                ];
            return [
                1,
                "-",
                index - 2,
                index - 1,
                index,
                index + 1,
                index + 2,
                "+",
                pageNum
            ];
        }
    },
    methods: {
        handleClickPage(i) {
            let num = this.limitNum;
            this.$emit("pageClick", {i, num})
        }
    }
};
</script>
<style lang="less">
.cb-pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        line-height: 40px;
        white-space: nowrap;
        margin-left: 10px;
    }
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        padding: 0 0 0 10px;
        li {
            padding: 0 5px;
            cursor: pointer;
        }
        .disabled {
            color: #000 !important;
            cursor: default;
        }
        .prev {
            color: #4646dc;
        }
        .next {
            color: #4646dc;
        }
        .activePage {
            color: #4646dc;
        }
    }
}
</style>
