# Finding Unique Combinations that Sum to a Target Value with Duplicate Handling

**Author:** authxth
**Votes:** 2
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/5628769/](https://leetcode.com/problems/combination-sum-ii/solutions/5628769/)

---

# Intuition
The problem is about finding all unique combinations of numbers from a given list that add up to a target sum. The main challenge is to handle duplicates in the list while generating these combinations.


# Approach
1. Sort the List: Start by sorting the candidates array. This helps in skipping duplicates easily and ensures that combinations are generated in a sorted order.
2. Use DFS for Combinations: Implement Depth-First Search (DFS) to explore all potential combinations. Use recursion to explore each number and decide whether to include it in the current combination or not.
3. Skip Duplicates: Within the DFS loop, skip over duplicates by checking if the current number is the same as the previous one. This avoids generating the same combination multiple times.
4. Base Cases: Handle cases where the sum becomes zero (a valid combination) or where the remaining sum is less than the current number (no valid combination from this point onward).

# Complexity
- Time complexity: n is the number of candidates. This is because each number can either be included or not in each combination, leading to exponential growth in possible combinations.
- Space complexity: Space complexity: \uD835\uDC42(\uD835\uDC5B)O(n), where 
n is the maximum depth of the recursion stack and the space required to store the result combinations.

# Code
```
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const ans: number[][] = [];
    const t: number[] = [];
    const dfs = (i: number, s: number) => {
        if (s === 0) {
            ans.push(t.slice());
            return;
        }
        if (i >= candidates.length || s < candidates[i]) {
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) {
                continue;
            }
            t.push(candidates[j]);
            dfs(j + 1, s - candidates[j]);
            t.pop();
        }
    };
    dfs(0, target);
    return ans;
}
```