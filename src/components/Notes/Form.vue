<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">

      <textarea
        v-model="value"
        required
        placeholder="Type ur note"
      />

      <TagList @onItemClick="handleTagClick" :items="tags"/>

      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagList from '@/components/UI/TagList'

export default {
  components: {
    TagList
  },
  data () {
    return {
      value: '',
      tags: [
        {
          title: 'home',
          isActive: false
        },
        {
          title: 'work',
          isActive: false
        },
        {
          title: 'travel',
          isActive: false
        }
      ],
      activeTags: []
    }
  },
  methods: {
    onSubmit () {
      this.activeTags = this.tags.filter(tag => tag.isActive === true); // Создаем новый массив с активными тегами для добавления их в заметку
      this.$emit('onSubmit', { title: this.value, tags: this.activeTags })
      this.value = '' // Очищаем input с заголовком
      this.tags.forEach((tag) => { tag.isActive = false }) // Сбрасываем активные классы у тегов
    },
    handleTagClick(tag) {
      tag.isActive = !tag.isActive // Смена активного класса у тега по клику
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  textarea {
    margin-bottom: 0;
  }
}
</style>
