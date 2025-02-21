let arrayList = [{name: 'abc', id: 3}, {name: 'xyz', id: 43}];
console.log('arrayList>>>', arrayList);

let tempArray=arrayList.map(item=>({name: item.name, id: item.id, name_id: item.name+item.id}))
console.log("tempArray>>>>", tempArray)