# [Python] 3-sum-ish

**Author:** zhuzhengyuan824
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4405825/](https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4405825/)

---

(nums[i] + nums[j] + nums[k]) % d == 0
==>  (a + b) % d == 0
==>  a % d == -b % d

Time: O(n^2)

``` py
class Solution:
    def divisibleTripletCount(self, A: List[int], d: int) -> int:
        ans = 0
        for i in range(len(A)):
            seen = Counter()
            for j in range(i+1, len(A)):
                ans += seen[-A[j]%d]
                seen[(A[i]+A[j])%d] += 1
        return ans
```