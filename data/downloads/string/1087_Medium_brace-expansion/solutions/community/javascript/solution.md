# Javascript Backtracking

**Author:** akerleyman
**Votes:** 3
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/1918256/](https://leetcode.com/problems/brace-expansion/solutions/1918256/)

---

First off I just wanna say I used **@kaien**'s solution(https://leetcode.com/problems/brace-expansion/discuss/312876/Python-backtracking) and converted it to Javascript for those who don't like the other Javascript solutions like myself. Hope it helps someone(if you like the solution upvote his).
```
const expand = (s)=> {
    let res = [];
    
    const gen=(s,word)=>{
        if(!s){
            res.push(word);
        }else{
            if(s[0]=="{"){
                let i = s.indexOf("}");
                let sub = s.slice(1,i);
                sub = sub.split(",");
                for(let letter of sub){
                    gen(s.slice(i+1), word+letter);
                }
            }else{
                    gen(s.slice(1), word + s[0]);
                }
        }
    }
    gen(s, "");
    res.sort();
    return res;
};
```