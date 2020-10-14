let nextTodoId = 0
export const addNews = ([headline,description,author,date]) => ({
  type: 'ADD_NEWS',
  id: nextTodoId++,
  payload:[headline,description,author,date]
})


export const removeNews = payload => ({
    type: 'REMOVE_NEWS',
  payload
  })