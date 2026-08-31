# Quick Prefix Sum + Hashmap

**Author:** bradleyboyuyang
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3994969/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3994969/)

---

# Intuition
Under modular system, the question occurs to me almost directly is [974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) which use a k-modular system and prefix sum to count all subarrays. It turns out that the two questions are almost the same. I highly suggest to compare the two questions and you will learn a lot on prefix sum.


```python
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        mp = defaultdict(int)
        mp[0] = 1
        count, cumsum = 0, 0    
        for num in nums:
            cumsum += num
            count += mp[cumsum%k]
            mp[cumsum%k] += 1
        return count

```

We apply exactly the same approach here.


# Code
```
class Solution:
    def countInterestingSubarrays(self, nums: List[int], modulo: int, k: int) -> int:
        from collections import defaultdict
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + (nums[i] % modulo == k)

        count = defaultdict(int)
        ans = 0
        for i in range(n + 1):
            j = prefix[i] - k
            ans += count[j%modulo]
            count[prefix[i] % modulo] += 1
        return ans
```