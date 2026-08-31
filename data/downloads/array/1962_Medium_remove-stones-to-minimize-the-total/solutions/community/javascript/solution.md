# JavaScript  —  4 Lines, Greedy  —  Time: O(n), 100%  —  Space: O(1), 100%

**Author:** tzachari
**Votes:** 9
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2961518/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2961518/)

---

# Approach
1. Make a `count` array (max size: 10\u2075), where `count[i]` is the # of piles with `i` stones.
2. Iterate through `count` starting from the highest `i`. While a given `count[i] > 0`:
    1. If `k > 0`: decrement `k`, decrement `count[i]` & increment `count[ceil(i/2)]`.
    2. Else: add `i` to sum & decrement `count[i]`.
3. Return sum.

# Complexity
- Time complexity: O(n), beats 100%
- Space complexity: O(1), beats 100%

# Code
```
const minStoneSum = ( piles, k ) => {
    let c = Array(10001).fill(0), s = 0
    piles.forEach( i => c[i]++ )
    for ( let i = c.length-1; i > 0; i-- )
        while ( c[i]-- > 0 )
            k-- > 0 ? c[Math.ceil(i/2)]++ : s += i
    return s
}
```