let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
 ]
 function filter (objects, value, name) {
  let newArray = [];
  objects.forEach(elem => {
    console.log(elem[value], name);
   if (elem[value] == name) { 
   newArray.push(elem);
   }
  })
  return newArray;
 }
  let result = filter(objects, 'surname', 'Петров');
  console.log(result);
/*   let arr = objects.splice(0,1);
  console.log(objects); */