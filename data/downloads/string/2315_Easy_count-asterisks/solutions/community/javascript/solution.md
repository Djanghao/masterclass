# [Javascript] Traffic Light

**Author:** Lynn19950915
**Votes:** 27
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/2208661/](https://leetcode.com/problems/count-asterisks/solutions/2208661/)

---

`"|"` is like a **STATE-SWITCHER** (Traffic light), everytime we meet it, we have to change the state.

```
// o=GREEN light, x=RED light.
-o-   --x--   --o--   -x-
abc | le*et | c**o* | *de |
```

```
var countAsterisks = function(s) {
    let green=true, count=0;
    for(let i=0; i<s.length; i++){
        if(green && s[i]=="*"){count++};
        if(s[i]=="|"){green=!green};
    }
    return count;
};
```

Thanks for your reading and **up-voting** :)

**\u2B50 Check [HERE](https://github.com/Lynn19950915/LeetCode_King) for my full Leetcode Notes ~**