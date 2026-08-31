# [Python3] One Liner with Formal Proof

**Author:** xil899
**Votes:** 85
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3014972/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3014972/)

---

# Intuition
Many of you may get accepted during contest by guessing the answer (the bitwise XOR of all `num` in `nums`). Here we provide a formal proof.

# Key Observations:
1. Fully utilize the symmetry between `i, j, k`.
2. `a ^ a = 0` (the property of bitwise XOR).

# Proof: 

1. First, note that by symmetry of `i` and `j`, we know that the value of `((nums[i] | nums[j]) & nums[k])` and `((nums[j] | nums[i]) & nums[k])` are equal. Which then implies that for a pair of `(i, j)` where `i != j`, the bitwise XOR of `((nums[i] | nums[j]) & nums[k])` and `((nums[j] | nums[i]) & nums[k])` is 0. Thus, we only need to deal with the triplets `(i, j, k)` where `i == j`.

2. Now we only need to consider the triplets `(i, j, k)` where `i == j`, so that `((nums[i] | nums[j]) & nums[k]) = ((nums[i] | nums[i]) & nums[k]) = nums[i] & nums[k]`. By symmetry of `i` and `k`, we know that the value of `nums[i] & nums[k]` and `nums[k] & nums[i]` are equal. Which then implies that for a pair of `(i, k)` where `i != k`, the bitwise XOR of `nums[i] & nums[k]` and `nums[k] & nums[i]` is 0. Thus, we only need to deal with the case of `i == k`.

3. Therefore, we only need to consider the triplets `(i, j, k)` where `i == j == k`, and the final answer reduces to the bitwise XOR of `((nums[i] | nums[j]) & nums[k]) = ((nums[i] | nums[i]) & nums[i]) = nums[i]`.

# Complexity
- Time complexity: `O(N)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def xorBeauty(self, nums: List[int]) -> int:
        return reduce(xor, nums)  
```