<template>
    <Form @onSubmit="handleSubmit"/>
    <List @onRemove="handleRemove" :items="notes"/>
</template>

<script>
import Form from '@/components/Notes/Form'
import List from '@/components/Notes/List'

export default {
  components: {
    Form,
    List
  },
  data () {
    return {
      notes: [
        {
          title: 'Learn Vue 3',
          tags: [
            {
              title: 'home',
            }
          ]
        },
        {
          title: 'Work Vue 3',
          tags: [
            {
              title: 'home',
            },
            {
              title: 'work',
            }
          ]
        },
        {
          title: 'Lore Vue 3',
          tags: []
        }
      ]
    }
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    handleSubmit (item) {
      const note = {
        title: item.title,
        tags: item.tags
      }
      this.notes.push(note);
    },
    handleRemove (index) {
      this.notes.splice(index, 1);
    }
  }
}
</script>
