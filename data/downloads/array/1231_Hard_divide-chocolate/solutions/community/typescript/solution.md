# Maximizing Sweetness Using Binary Search

**Author:** BysahaOleh
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/5220990/](https://leetcode.com/problems/divide-chocolate/solutions/5220990/)

---

# Intuition
The problem is about dividing an array of sweetness levels into k + 1 pieces such that the minimum sweetness of any piece is maximized. This can be approached using binary search, where we try to find the maximum possible minimum sweetness.

# Approach
1. **Define Check Function**: Implement a helper function `check(minSweetness)` that determines if it is possible to divide the array into k + 1 pieces with each piece having at least `minSweetness` sweetness. This function iterates through the array, accumulating sweetness until it reaches or exceeds `minSweetness`, then resets and counts a piece. The goal is to ensure we have at most k + 1 pieces.
2. **Binary Search Initialization**: Initialize binary search boundaries:
   - `left` to 0, representing the minimum possible sweetness.
   - `right` to the sum of all sweetness values, representing the maximum possible sweetness.
3. **Binary Search Execution**: Perform binary search:
   - Calculate the middle point `mid`.
   - Use the `check` function to determine if `mid` is a valid minimum sweetness.
   - Adjust the search boundaries based on the result of the `check` function:
     - If `check(mid)` returns true, move `right` to `mid - 1` to find a potentially smaller valid minimum sweetness.
     - If `check(mid)` returns false, move `left` to `mid + 1` to find a larger valid minimum sweetness.
4. **Result**: The final answer is `left - 1`, which gives the maximum minimum sweetness after binary search completes.

# Complexity
- Time complexity:
  - The binary search runs in $$O(\\log S)$$ where S is the sum of the sweetness values.
  - The `check` function runs in $$O(n)$$ where n is the length of the sweetness array.
  - Thus, the overall time complexity is $$O(n \\log S)$$.

- Space complexity:
  - The space complexity is $$O(1)$$ as we only use a few additional variables.

# Code
```
function maximizeSweetness(sweetness: number[], k: number): number {
    const check = (minSweetnes: number): boolean => {
        let sum = 0;
        let pieces = 0;

        for (let i = 0; i < sweetness.length; i++) {
            sum += sweetness[i];

            if (sum >= minSweetnes) {
                sum = 0;
                pieces++;
            }
        }

        return pieces <= k;
    }

    let left = 0, right = sweetness.reduce((a, e) => a + e, 0);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left - 1;
};
```