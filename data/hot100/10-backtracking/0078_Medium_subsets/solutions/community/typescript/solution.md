# JavaScript/TypeScript Backtrack: Faster than 100%

**Author:** andacal
**Votes:** 7
**Link:** [https://leetcode.com/problems/subsets/solutions/1112454/](https://leetcode.com/problems/subsets/solutions/1112454/)

---

```
function subsets(nums: number[]): number[][] {
    const result: Set<Array<number>> = new Set();
    
    const search = (s: Array<number>, index: number) => {
        result.add(s)
        
        for (let i=index; i<nums.length; i++) {
            search([...s, nums[i]], i+1);
        }
    }
    
    search([], 0);
    
    return Array.from(result);
};
```