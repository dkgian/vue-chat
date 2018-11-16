import Vue from 'vue'
import uuidv4 from 'uuid'

const state = {
  all: {},
  allIds: {},
  allMsgIds: {},
}

const mutations = {
}

const actions = {
  seed({ rootState }) {
    const conversationRef = rootState.db.collection('conversations')

    conversationRef.add({
      created: Date.now(),
      user: ['qwe', 'asd'],
      messages: [
        {
          id: uuidv4(),
          text: 'hello',
          sender: 'qwe',
          created: Date.now(),
        },
        {
          id: uuidv4(),
          text: 'hi!',
          sender: 'asd',
          created: Date.now(),
        },
      ],
    })

    conversationRef.add({
      created: Date.now(),
      user: ['qwe', 'asd'],
      messages: [],
    })
  },
}

export default {
  namespace: true,
  state,
  mutations,
  actions,
}
