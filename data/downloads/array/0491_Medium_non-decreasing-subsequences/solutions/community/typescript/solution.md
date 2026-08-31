# DFS  With Explanation

**Author:** michaeleliot
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/5514774/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/5514774/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Weneed to try each possibility, which amounts to moving through the array and either selecting or not selecting a node for all combinations. We can model this with DFS, where we add to the current path everytime we visit or revisit a node. Once that is in place, we only need to avoid duplicates.

# Approach
<!-- Describe your approach to solving the problem. -->
Create a set as our final return value, and a helper function. Have the helperr function move through the array with a current position j, and an array indicating the current dfs path. If the array is empty or the item can be added onto the path, then add it on and add it to our set once our children are done. At the end, move to the next node, which is equivalent to us skipping over this node. Javascript arrays are objects which are unique even if their contents are the same, so we just stringify the array to ensure uniqueness. At the end, unstringify each array.

# Notes
There are a couple clear improvements here. We could use some kind of caching layer to ensure no duplicates. This saves us on redoing work when we say have two of the same number that are adjacent.

It would be more memory efficient to use a bitmap instead of an array. Since the nums length is always 15 or lower, we can just represent whcih numbers are in the array with a single 32 bit number. In thinking we could also store each array we add to our return value as a number as well, but since we have to return the end array anyway it's not worthwhile to do.

# Complexity
- Time complexity: O(2^n): we have to create every linearly increasing permutation, which in the worst case is exponential to the input array
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(2^n): same as above
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findSubsequences(nums: number[]): number[][] {
    let ret = new Set<string>()
    function helper(j: number, arr: number[]) {
        if (j === nums.length) return
        if (!arr.length || arr[arr.length - 1] <= nums[j]) {
            arr.push(nums[j])
            helper(j + 1, arr)
            if (arr.length > 1) ret.add(JSON.stringify(arr))
            arr.pop()
        }

        helper(j + 1, arr)
    }
    helper(0, [])
    return [...ret.keys()].map(str => JSON.parse(str))

    
};
```