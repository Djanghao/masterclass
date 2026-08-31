# lovely_anna — O(n) SIMPLE MATH ALGORITHM :)

**Author:** lovely_anna
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-good-subsequences/solutions/6028697/](https://leetcode.com/problems/sum-of-good-subsequences/solutions/6028697/)

---

- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$
```javascript 
var sumOfGoodSubsequences = function (a) {
    let M = 1e9 + 7,
        mn = Math.min(...a),
        mx = Math.max(...a)

    let sm = new Array(mx + 1).fill(0),
        ct = Array.from(sm)

    for (let i = a.length - 1; i >= 0; i--) {

        let preSm = (a.at(i) !== mn ? sm.at(a.at(i) - 1) : 0) +
                    (a.at(i) !== mx ? sm.at(a.at(i) + 1) : 0),
            curCt = 1 +
                    (a.at(i) !== mn ? ct.at(a.at(i) - 1) : 0) +
                    (a.at(i) !== mx ? ct.at(a.at(i) + 1) : 0)

        sm[a.at(i)] += preSm + curCt * a.at(i)
        sm[a.at(i)] %= M

        ct[a.at(i)] += curCt
        ct[a.at(i)] %= M
    }

    return sm.reduce((x, y) => (x + y) % M, 0)
}
```
# lovely_anna
## (a JS lover)
![Screenshot from 2024-10-26 22-11-36.png](./images/0.png)

