# Java || Python || TS || Simple Sorting

**Author:** subscriber6436
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/4742188/](https://leetcode.com/problems/sum-in-a-matrix/solutions/4742188/)

---

# Complexity
- Time complexity: **O(NM log M)**

- Space complexity: **O(1)**

# Code
```java []
class Solution {
    public int matrixSum(int[][] nums) {
        int n = nums.length;
        int m = nums[0].length;
        int ans = 0;

        for (int i = 0; i < n; i++) Arrays.sort(nums[i]);

        for (int j = 0; j < m; j++) {
            int cur = 0;

            for (int i = 0; i < n; i++) {
                cur = Math.max(cur, nums[i][j]);
            }
            
            ans += cur;
        }
        
        return ans;
    }
}
```
```python []
class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        n, m = len(nums), len(nums[0])
        ans = 0

        for i in range(n):
            nums[i].sort()

        for j in range(m):
            cur = 0

            for i in range(n):
                cur = max(cur, nums[i][j])

            ans += cur

        return ans
```
```typescript []
function matrixSum(nums: number[][]): number {
    const n = nums.length;
    const m = nums[0].length;
    let ans = 0;

    for (let i = 0; i < n; i++) nums[i].sort((a, b) => a - b)

    for (let j = 0; j < m; j++) {
        let cur = 0;

        for (let i = 0; i < n; i++) {
            cur = Math.max(cur, nums[i][j]);
        }

        ans += cur;
    }

    return ans;
};
```