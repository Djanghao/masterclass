# JavaScript 2 solutions, O(n) time O(1) space

**Author:** rockwell153
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/849986/](https://leetcode.com/problems/total-hamming-distance/solutions/849986/)

---

```
const totalHammingDistance = nums => {
    let t = 0
    let mask = 1
    
    for ( let i = 0; i < 32; i++ ) {
        let c = nums.reduce( ( a, n ) => a + ( n & mask ? 1 : 0 ), 0 )
        
        t += c * ( nums.length - c )

        mask <<= 1
    }

    return t
}

const totalHammingDistance = nums => {
    const bits = []
    let num, mask, d
    
    for ( let i = 0; i < nums.length; i++ ) {
        mask = 1
        d = 0
        
        while ( mask <= nums[i] ) {
            if ( mask & nums[i] ) {
                bits[d] = 1 + ( bits[d] || 0 )
            }
            mask <<= 1
            d++
        }
    }

    return bits.reduce( ( a, x ) => a + x * ( nums.length - x ), 0 )
}
```