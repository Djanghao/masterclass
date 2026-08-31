# Javascript O(n) Time, O(1) Space Simple

**Author:** c3mohamn
**Votes:** 8
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/2097125/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/2097125/)

---

#### Intuition

1. We cannot move Rs and Ls past eachother. 
2. We cannot move Rs to the left.
3. We cannot move Ls to the right.

```javascript
/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    let i = 0;
    let j = 0;
    
    while (i < start.length || j < end.length) {
        if (start[i] === 'X') {
            i++;
            continue;
        }
        
        if (end[j] === 'X') {
            j++;
            continue;
        }
        
		// Breaking (1)
        if (start[i] !== end[j]) return false;
        
		// Breaking (2)
        if (start[i] === 'R' && i > j) return false;
		
		// Breaking (3)
        if (start[i] === 'L' && j > i) return false;
        
        i++;
        j++;
    }
    
    return true;
};
```

Example:

start: XXRLX
end:  XXLRX

This breaks (1) because the first non-X we find in start and end respectively will be R and L. We will never be able to swap R and L.

start: XXRXX
end:  XRXXX

This breaks (2) because the index of the start R is greater than the index of end R. We can only move R to the right.

start: XXLXX
end:  XXXLX

This breaks (3) because the index of the start L is less than the index of end L. We can only move L to the left.

There are implicit swapping rules and we just ensure that those rules are followed.