# DP | Memorization | easy to understand | readable | beats 99%

**Author:** gkso07
**Votes:** 25
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4742293/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4742293/)

---

# Intuition


<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires finding the maximum number of operations that can be performed on an array of integers, such that each operation yields the same score. The operations involve selecting pairs of elements from either end or both ends of the array and summing them up.

# Approach
<!-- Describe your approach to solving the problem. -->
- Dynamic Programming with Memoization: We can solve this problem efficiently using dynamic programming with memoization. We define a recursive function that explores all possible choices of pairs of elements, keeping track of the maximum number of operations for each choice.

- Recurrence Relation: The recurrence relation for our function considers three cases: selecting the first two elements, selecting the first and last elements, and selecting the last two elements. We compute the maximum number of operations possible for each case and choose the maximum among them.

- Memoization: We use a 2D memoization array to store the results of subproblems. Before computing the maximum operations for a particular subarray, we check if it has already been computed. If so, we retrieve the result from the memoization table instead of recomputing it.

- Base Cases: We handle base cases where the subarray has only one or no elements. In such cases, the maximum number of operations possible is zero.

- Main Function: In the main function, we initialize the memoization array and call the recursive function with appropriate parameters for each of the three cases: selecting the first two elements, selecting the first and last elements, and selecting the last two elements. Finally, we return the maximum number of operations among these three cases.
# why using only one dp table isn't three dp table is reqired for three case

Using only one dynamic programming (DP) table suffices because the paths corresponding to different previous sum values never collide within the DP table. At any given point where paths might intersect, only one path can pass through, and it will correspond to a specific previous sum value. Consequently, the calculated answer at that point is only relevant for future paths with the same previous sum value. Therefore, a single DP table effectively stores the results for all cases, ensuring accurate memoization and preventing interference between different cases.
because of this one dp table is suffice

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this approach is O(n^2), where n is the number of elements in the input array. This is because the memoization table has dimensions of n * n, and each entry in the table is computed once.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is also O(n^2) due to the memoization table, which stores the results of subproblems. Additionally, the recursive stack can go up to O(n) levels in the worst case. Therefore, the total space complexity is dominated by the memoization table.
# Code
```cpp []
class Solution {
private:
    int findMaxOpsHelper(std::vector<int>& nums, int left, int right, int previousSum, std::vector<std::vector<int>>& memoization) {
        if (left >= right)
            return 0;
        if (memoization[left][right] != 0)
            return memoization[left][right];

        int maxOps = 0;
        if (nums[left] + nums[left + 1] == previousSum)
            maxOps = std::max(maxOps, findMaxOpsHelper(nums, left + 2, right, previousSum, memoization) + 1);
        if (nums[left] + nums[right] == previousSum)
            maxOps = std::max(maxOps, findMaxOpsHelper(nums, left + 1, right - 1, previousSum, memoization) + 1);
        if (nums[right] + nums[right - 1] == previousSum)
            maxOps = std::max(maxOps, findMaxOpsHelper(nums, left, right - 2, previousSum, memoization) + 1);

        return memoization[left][right] = maxOps;
    }
public:
    int maxOperations(vector<int>& nums) {
        int maxOperations = 0;
        int len = nums.size();
        std::vector<std::vector<int>> memoization(len, std::vector<int>(len, 0));
        int start = 0;
        int end = len - 1;

        maxOperations = std::max(maxOperations,
                findMaxOpsHelper(nums, start + 2, end, nums[start] + nums[start + 1], memoization) + 1);
        maxOperations = std::max(maxOperations,
                findMaxOpsHelper(nums, start + 1, end - 1, nums[start] + nums[end], memoization) + 1);
        maxOperations = std::max(maxOperations,
                findMaxOpsHelper(nums, start, end - 2, nums[end] + nums[end - 1], memoization) + 1);

        return maxOperations;
    }
};
```
```java []
class Solution {
    public int maxOperations(int[] nums) {
        int maxOperations = 0;
        int len = nums.length;
        int[][] memoization = new int[len][len];
        int start = 0;
        int end = len - 1;

        maxOperations = Math.max(maxOperations,
                findMaxOpsHelper(nums, start + 2, end, nums[start] + nums[start + 1], memoization) + 1);
        maxOperations = Math.max(maxOperations,
                findMaxOpsHelper(nums, start + 1, end - 1, nums[start] + nums[end], memoization) + 1);
        maxOperations = Math.max(maxOperations,
                findMaxOpsHelper(nums, start, end - 2, nums[end] + nums[end - 1], memoization) + 1);

        return maxOperations;
    }

    private int findMaxOpsHelper(int[] nums, int left, int right, int previousSum, int[][] memoization) {
        if (left >= right)
            return 0;
        if (memoization[left][right] != 0)
            return memoization[left][right];

        int maxOps = 0;
        if (nums[left] + nums[left + 1] == previousSum)
            maxOps = Math.max(maxOps, findMaxOpsHelper(nums, left + 2, right, previousSum, memoization) + 1);
        if (nums[left] + nums[right] == previousSum)
            maxOps = Math.max(maxOps, findMaxOpsHelper(nums, left + 1, right - 1, previousSum, memoization) + 1);
        if (nums[right] + nums[right - 1] == previousSum)
            maxOps = Math.max(maxOps, findMaxOpsHelper(nums, left, right - 2, previousSum, memoization) + 1);

        return memoization[left][right] = maxOps;
    }
}
  
```
```python []
class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        maxOperations = 0
        length = len(nums)
        memoization = [[0] * length for _ in range(length)]
        start = 0
        end = length - 1

        maxOperations = max(maxOperations, self.findMaxOpsHelper(nums, start + 2, end, nums[start] + nums[start + 1], memoization) + 1)
        maxOperations = max(maxOperations, self.findMaxOpsHelper(nums, start + 1, end - 1, nums[start] + nums[end], memoization) + 1)
        maxOperations = max(maxOperations, self.findMaxOpsHelper(nums, start, end - 2, nums[end] + nums[end - 1], memoization) + 1)

        return maxOperations

    def findMaxOpsHelper(self, nums: List[int], left: int, right: int, previousSum: int, memoization: List[List[int]]) -> int:
        if left >= right:
            return 0
        if memoization[left][right] != 0:
            return memoization[left][right]

        maxOps = 0
        if nums[left] + nums[left + 1] == previousSum:
            maxOps = max(maxOps, self.findMaxOpsHelper(nums, left + 2, right, previousSum, memoization) + 1)
        if nums[left] + nums[right] == previousSum:
            maxOps = max(maxOps, self.findMaxOpsHelper(nums, left + 1, right - 1, previousSum, memoization) + 1)
        if nums[right] + nums[right - 1] == previousSum:
            maxOps = max(maxOps, self.findMaxOpsHelper(nums, left, right - 2, previousSum, memoization) + 1)

        memoization[left][right] = maxOps
        return maxOps

```