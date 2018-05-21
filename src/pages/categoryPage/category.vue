<template>
    <div>
      <div class="md-example-child md-example-child-date-picker md-example-child-date-picker-0">
        <md-date-picker
          ref="datePicker"
          today-text="今天"
          :minDate="minDate"
          :maxDate="maxDate"
          :default-date="currentDate"
          is-view
          @initialed="onDatePickerInitialed"
        ></md-date-picker>
      </div>
    </div>
</template>

<script>
  import {DatePicker} from 'mand-mobile'
    export default {
      data: () => ({
        minDate: new Date('2013/9/9'),
        maxDate: new Date('2020/9/9'),
        currentDate: new Date(),
      }),
      methods: {
        onDatePickerInitialed() {
          console.log(`[Mand Mobile] DatePicker getFormatDate: ${this.$refs.datePicker.getFormatDate('yyyy/MM/dd')}`)
        },
      },
      components: {
        [DatePicker.name]: DatePicker,
      },
    }
</script>


<style scoped>

</style>
