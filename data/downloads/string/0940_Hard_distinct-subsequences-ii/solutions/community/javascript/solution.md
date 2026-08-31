# lovely_anna

**Author:** lovely_anna
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/5986577/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/5986577/)

---

```javascript 
var distinctSubseqII = function (s) {
    let tillnow = new Array(26).fill(0)

    let cur, pre = 1, M = 1e9 + 7

    for (let i of s) {
        let cidx = i.charCodeAt(0) - "a".charCodeAt(0)

        cur = 2 * pre - tillnow.at(cidx)
        cur = (cur + M) % M

        tillnow[cidx] += cur - pre
        tillnow[cidx] = (tillnow.at(cidx) + M) % M

        pre = cur
    }

    return (cur - 1 + M) % M
}
```
# lovely_anna
## (a javascript lover)
![Screenshot from 2024-10-29 02-02-00.png](./images/0.png)

<!-- ![Screenshot from 2024-10-29 02-01-24.png](./images/1.png) -->
