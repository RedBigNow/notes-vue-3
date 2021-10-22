import { createStore } from 'vuex'

export const store = createStore({
  state: {
    noteTitle: '',
    notes: [
      {
        id: 1,
        title: 'Learn Vue 3',
        tags: [
          {
            title: 'home',
          }
        ]
      },
      {
        id: 2,
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
        id: 3,
        title: 'Lore Vue 3',
        tags: []
      }
    ],
    tags: [
      {
        id: 1,
        title: 'home',
        isActive: false
      },
      {
        id: 2,
        title: 'work',
        isActive: false
      },
      {
        id: 3,
        title: 'travel',
        isActive: false
      }
    ]
  },
  actions: {
    addNote ({commit, getters}) {
      let title = getters.getNoteTitle
      let activeTags = []

      getters.getActiveTags.forEach((tag) => {
        activeTags.push({title: tag.title})
      })

      const note = {
        title: title,
        tags: activeTags
      }

      commit('addNote', note)

      getters.getTags.forEach((tag) => {
        tag.isActive = false
      })
    },
    deleteNote({commit, getters}, item) {
      let index = getters.getNotes.findIndex(noteItem => noteItem.id == item.id)
      commit('deleteNote', index)
    },
    setLocalNotes ({commit}) {
      commit('setLocalNotes', localStorage.getItem("notes"))
    },
    toggleActiveTag({commit, getters}, item) {
      let index = getters.getTags.findIndex(tagItem => tagItem.id == item.id)
      commit('toggleActiveTag', index)
    }
  },
  mutations: {
    setNoteTitle (state, value) {
      state.noteTitle = value
    },
    addNote (state, note) {
      state.notes.push(note)
      state.noteTitle = ''
    },
    deleteNote(state, index) {
      state.notes.splice(index, 1);
    },
    setLocalNotes (state, localNotes) {
      if(localNotes) {
        state.notes = JSON.parse(localNotes)
      }
    },
    toggleActiveTag(state, index) {
      state.tags[index].isActive = !state.tags[index].isActive
    },
  },
  getters: {
    getNoteTitle (state) {
      return state.noteTitle
    },
    getNotes (state) {
      return state.notes
    },
    getTags (state) {
      return state.tags
    },
    getActiveTags (state) {
      return state.tags.filter(tag => tag.isActive == true)
    }
  }
})
