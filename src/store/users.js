const state = {
  all: {},
  currentUser: 'u1',
}

const mutations = {
}

const actions = {
  seed({ rootState }) {
    const userRef = rootState.db.collection('users')
    userRef.doc('u1').set({
      firstName: 'qwe',
      lastName: 'rty',
    })
    userRef.doc('u2').set({
      firstName: 'asd',
      lastName: 'fgh',
    })
  },
}

export default {
  namespace: true,
  state,
  mutations,
  actions,
}
