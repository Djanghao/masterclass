# ⛳️ Simple TypeScript solution using Binary Search | O(logn) & O(1)

**Author:** AlexanderFSP
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/4112395/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/4112395/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function search(reader: ArrayReader, target: number): number {
	let start = 0;
    let end = 10 ** 4;    
    
    while (start <= end) {
        const middleIdx = start + Math.floor((end - start) / 2);
        const middleVal = reader.get(middleIdx);
        
        if (middleVal === target)
            return middleIdx;
        
        if (middleVal > target)
            end = middleIdx - 1;
        else
            start = middleIdx + 1;
    }
    
    return -1;
};
```