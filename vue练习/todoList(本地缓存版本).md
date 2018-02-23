```
<script>
  import Store from './store.js'
export default {
  name: 'App',
//  my
  data: function () {
    return{
      title: "this is a todoList",
      items: Store.fetch(),//此处与没缓存的不同
      newItem: ''
    }
  },
//  添加了监控是否数据是否改变吗，每次改变都将其存入localStorage中
  watch: {
    items: {
      handler: function (items) {
       Store.save(items)
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function (item) {
      console.log(item.isFinished = !item.isFinished)
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = ''
    }
  }
}
</script>
```