const bracket = (v1) => {
    var spList1 = v1.split("")
    var v1len = spList1.length / 2
    // console.log("v1len",v1len);
    var cnt = 0;
    for(let i=0; i<spList1.length/2; i++){
        switch(spList1[i]){
            case "(":
                (41 == spList1[spList1.length-i-1].charCodeAt()) ? cnt++ : console.log("No");
                break;
            case "[":
                (93 == spList1[spList1.length-i-1].charCodeAt()) ? cnt++ : console.log("No");
                break;
            case "{":
                (125 == spList1[spList1.length-i-1].charCodeAt()) ? cnt++ : console.log("No");
                break;
        }
    }
    console.log("cnt",cnt);
    (cnt == v1len)? console.log("YES"):console.log("NO");
}
let n = window.prompt(""); // i forgot how many builtiin functions it makes easy and short coding, requires google help
for(i=0;i<n;i++){
    let vstr = window.prompt("")
    bracket(vstr)
}
// bracket("{[()]}")
// bracket("[({})]")
// bracket("[)[]]")