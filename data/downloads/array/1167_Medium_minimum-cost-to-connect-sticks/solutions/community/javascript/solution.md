# Javascript easy to understand, with comments

**Author:** emarkov1
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/853159/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/853159/)

---

```
// we need to combine smallest sticks each time
// when we combined the sticks we add it to the combined arr
const connectSticks = sticks => {
    if(sticks.length <= 1) return 0
    // sorting at the beginning
    sticks.sort((a,b)=>a-b)
    const combined = []
    let res = 0
    while(sticks.length || combined.length > 1){
        let curSum = 0
        // we need to sticks to combine => counter is 2
        let counter = 2
        while(counter--){
            // if we have original stick and it is less than first combined -> take original
            const condition = sticks.length && (!combined.length || (sticks[0] < combined[0]))
            // add to curSum and remove first from either combined or original sticks array
            curSum += condition ? sticks.shift() : combined.shift()
        }
        // add to result and add the stick that we combined to combined array
        res += curSum
        combined.push(curSum)
    }
    return res
}
```