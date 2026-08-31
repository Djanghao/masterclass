# [Java/Python 3] Bit manipulations analysis.

**Author:** rock
**Votes:** 12
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2646655/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2646655/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**xor of any two duplicates is `0`**. Thefore, we need to get rid of all pairs of duplicates. The xor of the remaining distinct numbers is the solution.

Since each number will pair with all numbers of the other array, which implies if the other array has even size the number will occur even times in the final xor operation, and we can exclude the number. **Hence we only count in the number if the other array has odd size.**
# Approach
<!-- Describe your approach to solving the problem. -->
1. If `nums1` has odd size, xor of all numbers in `nums2`; otherwise the result is `0`
2. if `nums2` has odd size, xor of all numbers in `nums1`; otherwise the result is `0`
3. return the xor value of above 1 & 2.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(m + n)`, where `m = nums1.length, n = nums2.length`.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(1)`
# Code
```java
class Solution {
    public int xorAllNums(int[] nums1, int[] nums2) {
        int odd1 = nums1.length % 2, odd2 = nums2.length % 2;
        int xor1 = 0, xor2 = 0;
        for (int n : nums1) {
            xor1 ^= n;
        }
        for (int n : nums2) {
            xor2 ^= n;
        }
        return (odd1 * xor2) ^ (odd2 * xor1);
    }
}
```
or 
```java
class Solution {
    public int xorAllNums(int[] nums1, int[] nums2) {
        int xor = nums1.length % 2 * IntStream.of(nums2).reduce(0, (a, b) -> a ^ b);
        xor ^= nums2.length % 2 * IntStream.of(nums1).reduce(0, (a, b) -> a ^ b);
        return xor;
    }
}
```
# Code
```python
class Solution:
    def xorAllNums(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = map(len, (nums1, nums2))
        return (m % 2 * reduce(xor, nums2)) ^ (n % 2 * reduce(xor, nums1))
```
