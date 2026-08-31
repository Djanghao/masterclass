# BAD 🤡👌 || SLOW 🤡👌 || NO 3D DP bullsh*t  HERE 🤡👌 || TYPESCRIPT 🤡👌 || DONT CLICK 🤡👉

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/scramble-string/solutions/3358897/](https://leetcode.com/problems/scramble-string/solutions/3358897/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function isScramble(s1: string, s2: string): boolean {
    if(s1 === s2) return true;

    let s1Trimmed = s1;
    let s2Trimmed = s2;
    
    while(s1Trimmed[0] === s2Trimmed[0]) {
        s1Trimmed = s1Trimmed.substring(1)
        s2Trimmed = s2Trimmed.substring(1)
    }

    // while(s1Trimmed[s1Trimmed.length-1] === s2Trimmed[s2Trimmed.length-1]) {
    //     s1Trimmed = s1Trimmed.substring(0, s1Trimmed.length-1);
    //     s2Trimmed = s2Trimmed.substring(0, s2Trimmed.length-1);
    // }

    s1 = s1Trimmed;
    s2 = s2Trimmed;

    
    // console.log(s1, s2)

    if(s1.length === 1 && s1 === s2) return true;
    if(s1.length === 1 && s1 !== s2) return false;

    let map = {};
    let map2 = {};
    for(let i=0; i<s1.length; i++) {
        map[s1[i]] = map[s1[i]] === undefined ? 1 : map[s1[i]]+1;
        map2[s2[i]] = map2[s2[i]] === undefined ? 1 : map2[s2[i]]+1
    }
    if(Object.keys(map).some(k => map[k] !== map2[k])) return false;

        
    for(let i=1; i<s1.length; i++) {
        let s1l = s1.substring(0, i);
        let s1r = s1.substring(i);
        let s2lnonswap = s2.substring(0, i);
        let s2rnonswap = s2.substring(i);
        let s2lswap = s2.substring(0, s1.length-i);
        let s2rswap = s2.substring(s1.length-i);
        if(isScramble(s1l, s2lnonswap) && isScramble(s1r, s2rnonswap)) return true;
        if(isScramble(s1l, s2rswap) && isScramble(s1r, s2lswap)) return true;
    }

    return false
};
```