# DP, Backtracking both solution | Easy to UnderStand | Simple | Faster | MrMagician

**Author:** Mrmagician
**Votes:** 23
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/471249/](https://leetcode.com/problems/letter-case-permutation/solutions/471249/)

---

**Please do upvote, it motivates me to write more such posts\uD83D\uDE05**

```
var letterCasePermutation = function(S) {
    return permut(S, 0);
};


function permut(str, pos, out = [], curr= ""){
    if(pos===str.length || curr.length===str.length){
        out.push(curr);
    }
    else{
        if(isAlpha(str[pos])){
            let up = curr + str[pos].toUpperCase();
            let low = curr + str[pos].toLowerCase();
            permut(str, pos+1, out, up);
            permut(str, pos+1, out, low);
        }
        else{
            permut(str, pos+1, out, curr + str[pos]);
        }
        
    }
    return out;
}

function isAlpha(ch){
    return /[a-zA-Z]/i.test(ch)
}
```

**Now, the DP based solution**

```

var letterCasePermutation = function(S) {
    return permut(S);
};


function permut(str, out = []){
    str = str.split("");
    let till = ""
    for(let i of str){
        if(out.length===0){
            if(isAlpha(i)){
                out.push(i.toUpperCase());
                out.push(i.toLowerCase());
            }
            else{
                out.push(i);
            }
        }
        else{
            let alpha = isAlpha(i);
            if(alpha){
                let up = i.toUpperCase()
                let low = i.toLowerCase()
                out = attach(out, up).concat(attach(out, low));
                out.push(till + up);
                out.push(till + low);
            }
            else{
                out = attach(out, i);
                out.push(till + i);
            }
            
        }
        till += i;
    }
    let set = new Set(out);
    return Array.from(set);
}
    
function attach(out, ch){
    let newOut = [...out];
    for(let i = 0; i<out.length; i++){
        newOut[i] += ch;
    }
    return newOut
}

function isAlpha(ch){
    return /[a-zA-Z]/i.test(ch)
}
```