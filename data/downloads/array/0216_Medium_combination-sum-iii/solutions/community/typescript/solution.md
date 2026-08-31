# Combination Sum III

**Author:** authxth
**Votes:** 2
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/5628886/](https://leetcode.com/problems/combination-sum-iii/solutions/5628886/)

---

# Intuition
The function aims to find all possible combinations of `k` numbers that add up to `n`, where each number is between 1 and 9 and each number can only be used once in each combination.


# Approach
1. Base Case Check: If the remaining sum `s` is zero and the length of the combination `t` equals `k`, add the current combination to the result list.
2. Pruning Conditions: If the index `i` exceeds 9, the remaining sum `s` is less than `i`, or the length of `t` is greater than or equal to `k`, terminate the current branch of recursion.
3. DFS Traversal: Use Depth-First Search (DFS) to explore all possible numbers:
    - For each number from the current index `i` to 9, add the number to the current combination, recursively process the next number, and then backtrack by removing the last added number.
4. Start DFS: Begin the DFS with `i` set to 1 and the target sum n.




# Complexity
- Time complexity:where \uD835\uDC58 is the number of elements in the combination. This is because the combinations are limited to choosing `k` elements from a set of 9, and each combination is checked.
- Space complexity:  where \uD835\uDC58 is the maximum depth of the recursion stack and the space needed to store intermediate combinations.
# Code
```
function combinationSum3(k: number, n: number): number[][] {
    const ans: number[][] = [];
    const t: number[] = [];
    const dfs = (i: number, s: number) => {
        if (s === 0) {
            if (t.length === k) {
                ans.push(t.slice());
            }
            return;
        }
        if (i > 9 || i > s || t.length >= k) {
            return;
        }
        for (let j = i; j <= 9; j++) {
            t.push(j);
            dfs(j + 1, s - j);
            t.pop();
        }
    };
    dfs(1, n);
    return ans;
}
```