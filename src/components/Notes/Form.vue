<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea v-model="noteTitle" placeholder="Type ur note" required />
      <TagList :items="getTags"/>
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
  computed: {
    noteTitle: {
      get () {
        return this.$store.state.noteTitle
      },
      set (value) {
        this.$store.commit('setNoteTitle', value)
      }
    },
    getTags() {
      return this.$store.getters.getTags
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('addNote')
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 15px;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  textarea {
    margin-bottom: 10px;
  }

  .btn {
    max-width: 220px;
    margin: 15px auto 0;
  }
}
</style>
