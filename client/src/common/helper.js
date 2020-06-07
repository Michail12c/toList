export const constructorContent = (elem, arr1, arr2, arr3) => {
  if(elem.typeTodo === 'task'){
   return arr1.push(elem)
  }else if(elem.typeTodo === 'project'){
   return arr2.push(elem)
  }else if(elem.typeTodo === 'idea'){
  return arr3.push(elem)
  }
}

export const countDone = (arr) => {
  let count = 0; 
  arr.forEach(elem => {
    if(elem.priority === '4'){
      count++
    }
  })
  return count; 
}
