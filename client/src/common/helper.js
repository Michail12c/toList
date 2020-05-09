export const constructorContent = (elem, arr1, arr2, arr3) => {
  if(elem.typeTodo === 'task'){
   return arr1.push(elem)
  }else if(elem.typeTodo === 'project'){
   return arr2.push(elem)
  }else if(elem.typeTodo === 'idea'){
  return arr3.push(elem)
  }
}