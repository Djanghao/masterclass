# TypeScript Generator Solution, beats 95%

**Author:** ProdigySim
**Votes:** 7
**Link:** [https://leetcode.com/problems/permutations/solutions/1542317/](https://leetcode.com/problems/permutations/solutions/1542317/)

---

I tend to like to use generators for problems like this, and I don't see a lot of that in the solution section, so I decided to add my own.

This solution recursively finds all permutations of smaller subsets of the input, and builds upon them one item at a time by inserting each item into each slot in the previous permutations.

```
Input: [1,2,3]
0 items: []
1 item: [1]
2 items: [2,1], [1,2]
3: items: [3,2,1], [2,3,1], [2,1,3], [3,1,2], [1,3,2], [1,2,3] 
```
```typescript
function permute(nums: number[]): number[][] {
    // Return an array of all permutations.
    return Array.from(permutationsOf(nums));
};

function *permutationsOf(nums: number[]) {
    // Remove the top item in the set
    const top = nums.pop();
    if(top === undefined) {
        // If the input is the empty set, yield the empty set.
        yield []
        return;
    }
    
    // Iterate through all permutations of n-1 items
    for(const perm of permutationsOf(nums)) {
        // Insert the current number at every possible index in the permutation
        // e.g. [1,2,3] + 4
        //   ---> [4,1,2,3]
        //   ---> [1,4,2,3]
        //   ---> [1,2,4,3]
        //   ---> [1,2,3,4]
        for(let i = 0; i <= perm.length; i++) {
            // Clone the permutation since we will modify it.
            const clone = [...perm];
            // Insert item at the appropriate index
            clone.splice(i, 0, top);
            // Yield result.
            yield clone;
        }
    }
}
```

Runtime: 88 ms, faster than 95.40% of TypeScript online submissions for Permutations.
Memory Usage: 41.6 MB, less than 95.82% of TypeScript online submissions for Permutations.