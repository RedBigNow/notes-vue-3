<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, id) in getNotes" :key="id">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <span style="cursor: pointer;" @click="deleteNote(note)">&#10005;</span>
      </div>
      <div class="note-footer">
        <TagList isPreview v-if="note.tags && note.tags.length > 0" :items="note.tags" />
      </div>
    </div>
  </div>
</template>

<script>
import TagList from '@/components/UI/TagList'

export default {
  components: { TagList },
  mounted () {
    this.setLocalNotes()
  },
  watch: {
    getNotes: {
      handler(notes) {
        localStorage.setItem("notes", JSON.stringify(notes))
      },
      deep: true,
    }
  },
  computed: {
    getNotes() {
      return this.$store.getters.getNotes
    }
  },
  methods: {
    setLocalNotes () {
      this.$store.dispatch('setLocalNotes')
    },
    deleteNote (note) {
      this.$store.dispatch('deleteNote', note)
    }
  }
}
</script>

<style lang="scss">
.notes-list {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
}

.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);

  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}

.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>
