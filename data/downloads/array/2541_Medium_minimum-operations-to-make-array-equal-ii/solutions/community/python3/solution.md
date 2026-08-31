# [Java/Python 3] Modulos and balance check w/ brief explanation and analysis.

**Author:** rock
**Votes:** 28
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082021/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082021/)

---


1. Traverse `nums1` and `nums2` and check if each of the corresponding difference is divisible by `k`;  If not, impossible to make the two arrays equal; 
2. If yes, accumulate the difference to `bal`, which will be `0` after traversal if it is possible to make the two arrays equal;
3. Accumulate the times of the positive difference of `k`, and return it if `bal == 0`.

```java
    public long minOperations(int[] nums1, int[] nums2, int k) {
        if (k == 0) {
            return Arrays.equals(nums1, nums2) ? 0 : -1;
        }
        long ops = 0, bal = 0;
        for (int i = 0; i < nums1.length; ++i) {
            int diff = nums1[i] - nums2[i];
            if (diff % k != 0) {
                return -1;
            }
            if (diff > 0) {
                ops += diff / k;
            }
            bal += diff;
        } 
        return bal == 0 ? ops : -1;        
    }
```
```python
    def minOperations(self, nums1: List[int], nums2: List[int], k: int) -> int:
        if k == 0:
            return 0 if nums1 == nums2 else -1
        ops = bal = 0
        for a, b in zip(nums1, nums2):
            if (a - b) % k != 0:
                return -1
            bal += a - b
            if a > b:
                ops += (a - b) // k
        return ops if bal == 0 else -1       
```

**Analysis**

Time: `O(n)`, space: `O(1)`.