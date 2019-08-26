let resFromApi= [{id:1231456,tr:12345},{id:156,tr:12345},{id:11456,tr:12345}]
let arr=[]

for (let i = 0; i <= resFromApi.length-1; i++) {
    arr.push(resFromApi[i].id)
}

console.log(arr);
