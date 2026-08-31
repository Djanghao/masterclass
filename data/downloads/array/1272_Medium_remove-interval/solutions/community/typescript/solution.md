# enumerate, outside, inside, crossed, O(n)

**Author:** goodgoodwish
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-interval/solutions/1162335/](https://leetcode.com/problems/remove-interval/solutions/1162335/)

---

```
function removeInterval(intervals: number[][], toBeRemoved: number[]): number[][] {
    let res = [];
    const [s, e] = toBeRemoved;
    
    for (const [a, b] of intervals) {
        if (b <= s || a >= e) {
            res.push([a, b])
            continue
        }
        if (a >= s && b <= e) continue;
        if (a<s && b>s) {
            res.push([a, s])
        }
        if (a<e && b>e) {
            res.push([e, b])
        }
    }
    
    return res;
};
```