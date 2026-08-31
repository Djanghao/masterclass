# Time running imitation O(1)

**Author:** AlenAmangeldi
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/5227773/](https://leetcode.com/problems/next-closest-time/solutions/5227773/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Imitation of time running
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    let h = +time.substring(0,2)
    let m = +time.substring(3)
    let posNumbers = new Set(time.replace(':', '').split(''))
    
    for(let i = 0; i<=1440; i++){
        let sh = h + ''
        let sm = m + ''
        
        if (m == 59) {
            m = 0
            h++
            if (h > 23) h = 0
        } else {
            m++
        }
        if (h < 10) sh = `0${h}`
        else sh = h + ''
        if (m < 10) sm = `0${m}`
        else sm = m + ''
        if (isValid(sh, sm, posNumbers)){
            return sh + ":" + sm
        }
    }
};

function isValid(hh, mm, posibleNumbers){
    if (posibleNumbers.has(hh[0]) && posibleNumbers.has(hh[1]) && posibleNumbers.has(mm[0]) && posibleNumbers.has(mm[1])){
        return true
    }
    return false
}
```