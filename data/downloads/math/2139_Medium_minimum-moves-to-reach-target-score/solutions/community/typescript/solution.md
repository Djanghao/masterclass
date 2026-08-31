# Easy to understand O(n) TypeScript

**Author:** gidramch
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1695145/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1695145/)

---

```
function minMoves(target: number, maxDoubles: number): number {
    let count = 0;
    
	// Start from target and loop until target = 1
	
    while (target > 1) {
		
		// If target is currently even and we have remaining doubles, use the double 
		// i.e. divide by 2 because we are working backward
        if (maxDoubles > 0 && target % 2 == 0) {
            maxDoubles--;
            target /= 2;
			
		// Otherwise just decrement target
        } else {
            target--;
        }
		
		// Whether we divide by 2 or we subtract one, we count it as an operation
		count++;
    }
    
    return count;
};
```