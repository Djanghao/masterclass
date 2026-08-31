# Simple & Detailed Approach in Swift 🚦 Dynamic Programing

**Author:** lebon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5191426/](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5191426/)

---

# Intuition
The problem requires counting the total number of ways to reach a given stair k, considering that Alice starts from stair 1 and can perform two types of operations: moving down one stair or jumping to a higher stair with a dynamic increment. The problem seems to involve combinations and permutations.

# Approach

To solve this problem, we can use a combination formula to count the number of ways to reach stair `k` for each possible number of jumps. We iterate through a range of possible jump counts and calculate the number of remaining steps for each jump count. Then, we use the combination formula to calculate the total number of ways to reach stair `k` with the current jump count and add it to the total ways.

1. Implement a function `combinations` to calculate combinations (`n` choose `k`) using the factorial formula.
2. Implement a function `waysToReachStair` to count the total number of ways to reach stair `k`.
3. Iterate through a range of possible jump counts.
4. Calculate the remaining steps for each jump count using bitwise left shift.
5. Calculate the combinations using the `combinations` function and add them to the total number of ways.
6. Return the total number of ways to reach stair `k`.

# Complexity
- **Time complexity**: $$O(logk)$$
  The time complexity is dominated by the loop iterating through a range of possible jump counts, which has a logarithmic complexity.
- **Space complexity**: $$O(1)$$
  The space complexity is constant as we only use a fixed amount of memory for variables and calculation.

![Screenshot 2024-05-22 at 06.22.32.png](./images/0.png)

# Code
``` swift []
class Solution {
    // Function to calculate combinations (n choose k)
    func combinations(_ n: Int, _ k: Int) -> Int {
        if k > n {
            return 0 // If k is greater than n, return 0 (no combinations possible)
        }
        if k == 0 || k == n {
            return 1 // If k is 0 or equal to n, return 1 (only one combination possible)
        }
        var result: Int = 1
        for i in 1...k {
            result *= (n - k + i) // Calculate numerator of combination formula
            result /= i // Calculate denominator of combination formula
        }
        return result
    }

    // Function to count the total number of ways to reach stair k
    func waysToReachStair(_ k: Int) -> Int {
        var totalWays: Int = 0
        for i in 0..<32 {
            let n = i + 1 // Stair number (1-indexed)
            let remainingSteps = (1 << i) - k // Calculate the number of remaining steps
            if remainingSteps < 0 {
                continue // If remaining steps are negative, skip to the next iteration
            }
            // Calculate combinations and add to the total number of ways
            totalWays += combinations(n, remainingSteps)
        }
        return totalWays
    }
}

```