# DFS TypeScript

**Author:** vibecastor
**Votes:** 1
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/5375120/](https://leetcode.com/problems/permutations-ii/solutions/5375120/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Depth-First Search (DFS) and a counts object to handle duplicates efficiently

# Approach
<!-- Describe your approach to solving the problem. -->
- counts: An object that tracks the count of each number in the input array
- results: An array to store all the unique permutations
- path: An array to store the current permutation being constructed

### count num occurances of each number in the input array
```
for (const num of nums) {
    num in counts ? counts[num]++ : counts[num] = 1;
}
```

### DFS Helper
- if path is same length at the input save a copy to the output
- iterate over the keys of the counts object (this is what avoids duplicate values)
- choose to add a number to the path if it's count is greater than zero
- decrement the choosen number's count
- recursively call dfs function 
- after the recursion remove the choosen number and increment the count
- return the result

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N!)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N * N!) - result array will hold N! permutations and the stack will go N deep

# Code
```
function permuteUnique(nums: number[]): number[][] {
    const counts = {};
    const results = [];
    const path = [];


    for (const num of nums) {
        num in counts ? counts[num]++ : counts[num] = 1;
    }

    function dfs() {
        if (path.length === nums.length) {
            results.push([...path]);
            return;
        }

        for (const num of Object.keys(counts)) {
            if (counts[num] > 0) {
                counts[num] -= 1;
                path.push(num);

                dfs();
                counts[num] += 1;
                path.pop();
            }
        }
    }

    dfs();

    return results;
};
```