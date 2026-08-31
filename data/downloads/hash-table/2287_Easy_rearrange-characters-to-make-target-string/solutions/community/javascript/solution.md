# JavaScript

**Author:** Netant007
**Votes:** 5
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2086620/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2086620/)

---

```
var rearrangeCharacters = function(s, target) {
    let min=s.length
    for(let l of target){
        let re = new RegExp(l, 'g')
        min=Math.min(min,Math.trunc((s.match(re)?.length || 0)/target.match(re).length))
    }
    return min
};
```