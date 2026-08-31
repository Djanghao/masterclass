# 🔥🔥 Very Easy Solution Using Set and only One loop and One Condition 🔥🔥

**Author:** sandrosamy
**Votes:** 3
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/3706864/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/3706864/)

---

# Code
``` Javascript []
function countGoodSubstrings(s){
    let res = 0
    for(let i = 0; i < s.length; i++){
        if(new Set(s.substring( i, i+3)).size === 3) res++
    }
    return res
};
```
``` Typescript []
function countGoodSubstrings(s: string): number {
    let res: number = 0
    for(let i: number = 0; i < s.length; i++){
        if(new Set<string>(s.substring( i, i+3)).size === 3) res++
    }
    return res
};
```