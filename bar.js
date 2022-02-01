var sp3 = window.prompt("Enter Value:");
// var sp3 = "abccc"
var sp1 = sp3.split("");
// console.log("sp1",sp1);
list1 = new Set(sp1);
list2 = []
// console.log("list1",list1);
for(let i=0; i< list1.size; i++){
    // console.log(Array.from(list1)[i]);
    var cnt = 0;
    sp1.forEach((v) => (v === Array.from(list1)[i] && cnt++));
    list2[i] = cnt;
}
// console.log(list2);
list3 = new Set(list2);
// console.log(list3);
// console.log(Array.from(list3)[0],typeof(Array.from(list3)[0]),Array.from(list3)[1]-1,Array.from(list3)[1]);
if(list3.size == 1){
    console.log("YES");
}
if(list3.size > 1){
    // console.log("list if");
    // console.log(Array.from(list3)[0], typeof(Array.from(list3)[0]), Array.from(list3)[1]-1,typeof(Array.from(list3)[1]-1))
    // console.log(Array.from(list3)[0] == Array.from(list3)[1]-1);
    if(Array.from(list3)[0] == Array.from(list3)[1]-1){
        console.log("YES");    
    }
    else{
        console.log("NO");
    }
}
else{
    console.log("NO");
}