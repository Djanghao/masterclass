# JavaScript Solution

**Author:** dingyangf911
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/948689/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/948689/)

---

```
var smallestRepunitDivByK = function(K) {
    let count = 1
    let start = 1
    let set = new Set()
    while (start) {
        let r = start % K
        if ( r === 0 ) {
            break
        }
        if ( set.has(r) === true ) {
            return -1
        } else {
            set.add(r)
            start = r * 10 + 1
            count++
        }
        
    }
    return count
};