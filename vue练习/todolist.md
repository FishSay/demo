### app.vue中的内容
```
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}"
      @click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
  
  <script>
export default {
  name: 'App',
//  my
  data: function () {
    return{
      title: "this is a todoList",
      items: [],
      newItem: ''
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
</template>
```