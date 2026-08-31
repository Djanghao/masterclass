# [Python, Java, C++] Elegant & Short | HashMap

**Author:** Kyrylo-Ktl
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6128583/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6128583/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```python3 []
class Solution:
    def minOperations(self, nums: list[int], k: int) -> int:
        operations = 0

        for num in set(nums):
            # Already equal to k
            if num == k:
                continue

            # Edge case, impossible to change
            if num < k:
                return -1

            # Possible to change in one operation
            operations += 1

        return operations
```
```java []
class Solution {
    public int minOperations(int[] nums, int k) {
        int operations = 0;

        Set<Integer> uniqueNums = new HashSet<>();
        for (int num : nums)
            uniqueNums.add(num);

        for (int num : uniqueNums) {
            // Already equal to k
            if (num == k)
                continue;

            // Edge case, impossible to change
            if (num < k)
                return -1;

            // Possible to change in one operation
            operations += 1;
        }

        return operations;
    }
}
```
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int operations = 0;

        std::unordered_set<int> uniqueNums(nums.begin(), nums.end());

        for (int num : uniqueNums) {
            // Already equal to k
            if (num == k)
                continue;

            // Edge case, impossible to change
            if (num < k)
                return -1;

            // Possible to change in one operation
            operations += 1;
        }

        return operations;
    }
};
```
