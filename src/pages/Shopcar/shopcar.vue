
<template>
    <div class="pickerDemo">
        <div class="showTime">
            <p class="timeDes">点击选择时间</p>
            <div class="selectTime" @click="selectData">选择时间{{this.selectedValue}}</div>
            <div>选择的时间是{{this.selectedValue}}               
            </div>
        </div>
        <!-- @touchmove.prevent 阻止默认事件，此方法可以在选择时间时阻止页面也跟着滚动。 -->
        <div class="pickerPop" @touchmove.prevent>
            <!-- 年月日时分选择 -->
            <mt-datetime-picker
                lockScroll="true"
                ref="datePicker"
                v-model="dateVal"   
                class="myPicker"
                type="datetime"
                year-format="{value}年"
                month-format="{value}月"
                date-format="{value}日"
                hour-format="{value}时"
                minute-format="{value}分"
                @confirm="dateConfirm">
            </mt-datetime-picker>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'pickerDemo',
    data () {
        return {
            dateVal: '', // 默认是当前日期
            selectedValue: ''
        }
    },
    components: {
    },
    created () {
    },
    mounted () {
        let that = this
    },
    methods: {
        selectData () { // 打开时间选择器
            // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
            if (this.selectedValue) {
                this.dateVal = this.selectedValue
            } else {
                this.dateVal = new Date()
            }
            this.$refs['datePicker'].open()
        },
        dateConfirm(timer){
            this.selectedValue=timer;
            this.dateVal=timer;
            console.log(this.dateVal)
        }
    }
}
</script>
<style scoped lang="scss">
</style>
