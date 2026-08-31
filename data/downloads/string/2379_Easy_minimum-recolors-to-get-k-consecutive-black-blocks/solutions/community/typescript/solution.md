# Sliding Window || Java & JavaScript || easy to understandable code

**Author:** astiksarathe
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/3059610/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/3059610/)

---

# Java Code
```
class Solution {
    public int minimumRecolors(String blocks, int k) {
         int mini = k, whiteBlockCount = 0;

        for(int i = 0; i < blocks.length(); i++) {
            if(blocks.charAt(i) == 'W') whiteBlockCount++;
            
            if(i >= k - 1) {
                if(i-k >= 0 && blocks.charAt(i - k) == 'W') whiteBlockCount--;
                mini = Math.min(mini, whiteBlockCount);
            }
        }
        
        return mini;
    }
}
```
# JavaScript Code
```
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let min = k,  whiteBlockCount = 0;

    for(let i = 0; i < blocks.length; i++) {
        if(blocks[i] === "W") whiteBlockCount++;
        
        if(i >= k - 1) {
            if(blocks[i - k] === "W") whiteBlockCount--;
            min = Math.min(min, whiteBlockCount);
        }
    }
    
    return min;
};
```

