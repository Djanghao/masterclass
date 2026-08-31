# ✅🔥| Java & Python Solution with Full Explanation | 💯🎯

**Author:** anushdubey01
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5145934/](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5145934/)

---

# Java & Python Explanation
___
## Java Code Explanation
___
### Intuition - 
To solve the problem of finding a permutation of the given numbers such that the sum of absolute differences between consecutive numbers (including the difference between the last and the first number) is minimized, we can use a dynamic programming approach. This approach leverages memoization to efficiently solve overlapping subproblems, allowing us to explore all possible permutations systematically and select the optimal one.

### Approach - 
1. **Dynamic Programming State Definition**: 
   - `mem[last][mask]`: This array stores the minimum score for a subproblem where `last` is the index of the last chosen number, and `mask` is a bitmask representing which numbers have been chosen.
   - `bestPick[last][mask]`: This array records the index of the next number to pick for the optimal solution for the state represented by `last` and `mask`.

2. **Base Case**: 
   - If all numbers have been chosen (`Integer.bitCount(mask) == nums.length`), the function returns the absolute difference between the last chosen number and the first number in the array (`Math.abs(last - nums[0])`).

3. **Recurrence Relation**: 
   - For each possible next number that hasn't been chosen yet, calculate the potential score by adding the absolute difference between the current `last` number and the next number to the score of the subproblem where the next number is chosen. Update the `mem` and `bestPick` arrays accordingly to store the minimum score and the best choice of the next number.

4. **Memoization**: 
   - Store the results of each subproblem in the `mem` array to avoid redundant computations, thereby enhancing efficiency.

5. **Constructing the Optimal Permutation**: 
   - Use the `bestPick` array to backtrack and construct the optimal permutation from the recorded choices.

### Complexity - 
- **Time Complexity**: \\(O(n^2 \\cdot 2^n)\\)
There are \\(n \\cdot 2^n\\) subproblems, and for each subproblem, we iterate over \\(n\\) possible next numbers.

- **Space Complexity**: \\(O(n \\cdot 2^n)\\)
This is due to the space required for the `mem` and `bestPick` arrays.

This implementation uses recursive dynamic programming to explore all possible permutations, memoizes the results to avoid redundant calculations, and constructs the optimal permutation by backtracking through the recorded choices.


___

## Python Code Explanation
___
### Intuition - 
The problem requires finding a permutation of the given numbers such that the sum of absolute differences between consecutive numbers, including the difference between the last and the first number, is minimized. This can be efficiently approached using dynamic programming combined with memoization. This method allows us to explore all permutations systematically and store the results of subproblems to avoid redundant calculations.

### Approach - 
1. **Dynamic Programming State Definition**:
   - `bestPick[last][mask]`: This 2D list records the index of the next number to pick for the optimal solution given that `last` is the index of the last chosen number and `mask` is a bitmask representing which numbers have been chosen.

2. **Memoization with Caching**:
   - Use the `functools.lru_cache` decorator to memoize the results of the recursive function `getScore`. This function calculates the minimum score for a subproblem where `last` is the index of the last chosen number and `mask` is a bitmask representing the chosen numbers.

3. **Base Case**:
   - If all numbers have been chosen (`mask.bit_count() == len(nums)`), the function returns the absolute difference between the last chosen number and the first number in the array (`abs(last - nums[0])`).

4. **Recurrence Relation**:
   - For each possible next number that hasn't been chosen yet, calculate the potential score by adding the absolute difference between the current `last` number and the next number to the score of the subproblem where the next number is chosen. Update the `bestPick` array to store the index of the optimal next choice.

5. **Constructing the Optimal Permutation**:
   - Use the `bestPick` array to backtrack and construct the optimal permutation from the recorded choices.

### Complexity - 
- **Time Complexity**: \\(O(n^2 \\cdot 2^n)\\)
There are \\(n \\cdot 2^n\\) subproblems, and for each subproblem, we iterate over \\(n\\) possible next numbers.

- **Space Complexity**: \\(O(n \\cdot 2^n)\\)
This is due to the space required for the `bestPick` array and the memoization cache.

This implementation uses recursive dynamic programming to explore all possible permutations, memoizes the results using `functools.lru_cache` to avoid redundant calculations, and constructs the optimal permutation by backtracking through the recorded choices in the `bestPick` array.


---
# Code
``` Java []
class Solution {
  public int[] findPermutation(int[] nums) {
    final int n = nums.length;
    int[][] mem = new int[n][1 << n]; // DP table to store minimum scores
    int[][] bestPick = new int[n][1 << n]; // Table to store best picks

    // Initiate the recursive function starting with the first element (index 0) and the mask representing the first element chosen (1)
    getScore(nums, 0, 1, bestPick, mem);
    return construct(bestPick); // Construct the result permutation
  }

  private int getScore(int[] nums, int last, int mask, int[][] bestPick, int[][] mem) {
    if (Integer.bitCount(mask) == nums.length) // Base case: all numbers are chosen
      return Math.abs(last - nums[0]);
    if (mem[last][mask] > 0) // Return memoized result if already computed
      return mem[last][mask];

    int minScore = Integer.MAX_VALUE;
    for (int i = 1; i < nums.length; ++i) {
      if ((mask & (1 << i)) != 0) // Skip if this number is already chosen
        continue;
      int nextMinScore = Math.abs(last - nums[i]) + getScore(nums, i, mask | (1 << i), bestPick, mem);
      if (nextMinScore < minScore) { // Update minimum score and best pick
        minScore = nextMinScore;
        bestPick[last][mask] = i;
      }
    }

    return mem[last][mask] = minScore; // Memoize the result
  }

  private int[] construct(int[][] bestPick) {
    int[] ans = new int[bestPick.length];
    for (int i = 0, last = 0, mask = 1; i < bestPick.length; ++i) {
      ans[i] = last; // Add the best pick to the result array
      last = bestPick[last][mask]; // Update last to the next best pick
      mask |= 1 << last; // Update mask to include the new pick
    }
    return ans; // Return the constructed permutation
  }
}
```

``` Python []
class Solution:
  def findPermutation(self, nums: List[int]) -> List[int]:
    n = len(nums)
    bestPick = [[0] * (1 << n) for _ in range(n)]  # Initialize the bestPick array

    @functools.lru_cache(None)  # Use LRU cache for memoization
    def getScore(last: int, mask: int) -> int:
      if mask.bit_count() == len(nums):  # Base case: all numbers are chosen
        return abs(last - nums[0])

      minScore = math.inf
      for i in range(1, len(nums)):
        if mask >> i & 1:  # Skip if this number is already chosen
          continue
        nextMinScore = abs(last - nums[i]) + getScore(i, mask | (1 << i))
        if nextMinScore < minScore:  # Update minimum score and best pick
          minScore = nextMinScore
          bestPick[last][mask] = i

      return minScore

    getScore(0, 1)  # Start the recursion with the first element chosen
    return self._construct(bestPick)  # Construct the result permutation

  def _construct(self, bestPick: List[List[int]]) -> List[int]:
    ans = []
    last = 0
    mask = 1
    for _ in range(len(bestPick)):  # Backtrack to build the optimal permutation
      ans.append(last)
      last = bestPick[last][mask]
      mask |= 1 << last
    return ans  # Return the constructed permutation
```

