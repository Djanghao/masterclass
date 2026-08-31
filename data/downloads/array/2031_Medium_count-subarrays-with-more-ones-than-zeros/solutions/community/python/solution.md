# python O(n^2) -> O(nlogn) -> O(n)

**Author:** hzhaoc
**Votes:** 27
**Link:** [https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1638197/](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1638197/)

---

change `0`s in `nums` to `1`s and do prefix sum on `nums`. This way, if `prefix[i+k] > prefix[i]`, that means subsequence `nums[i+1] to nums[k]` (both sides inclusive) have more ones than zeros. We iterate through the list of prefix sums, and keep track of counts for each prefix value. 

Number of valid subarrays for `a_0 to a_i` is sum of counts of visited prefix sums that are  `< prefix[i]`

##### a straightfoward `O(n^2)` solution:

```python
class Solution:
    def subarraysWithMoreZerosThanOnes(self, nums: List[int]) -> int:
        nums = [i if i else -1 for i in nums]
        n = len(nums)
        presum = [0] * (n + 1)
        for i in range(1, n+1):
            presum[i] = presum[i-1] + nums[i-1]
        
        cnt = Counter()
        res = 0
        mod = 1000000007
        for i in range(n+1):
            cnt[presum[i]] += 1 
            res += sum([v for k, v in cnt.items() if k < presum[i]]) % mod
        return res % mod
```

##### Binary Indexed Tree
In the solution above, in each iteration, there's at most `O(n)` operations to get sums of all counts whose values are below current prefix sum. One way to fasten this is to use Binary Indexed Tree that supports `O(logn)` value update, and `O(logn)` range sum. Use this on prefix sum counter. the overall run time is `O(nlogn)`

```python
class Solution:
    def subarraysWithMoreZerosThanOnes(self, nums: List[int]) -> int:
        
        def addOne(k):
            while k <= cap:
                cnt[k] += 1
                k += k & -k
        
        def rangeSum(k, res):
            while k:
                res += cnt[k]
                k -= k & -k
            return res % mod
        
        nums = [0] + [i if i else -1 for i in nums]
        n, cap, bot = len(nums), 0, 0
        for i in range(1, n):
            nums[i] += nums[i-1]
            if nums[i] < bot: bot = nums[i]
            if nums[i] > cap: cap = nums[i]
        
        add = -bot + 1   # shift presums to make presums start at 1 to fit BIT indexing
        cap += add
        cnt, res, mod = Counter(), 0, int(10**9+7)
        for i in range(n):
            k = nums[i] + add
            addOne(k)
            res = rangeSum(k-1, res)
            
        return res % mod
```

##### O(n) solution

notice `prefix[i] =` either `prefix[i-1] + 1` or `prefix[i-1] - 1`, 
- if  `prefix[i] = prefix[i-1] + 1`: current number of qualified subarrays = previous number of qualified subarrays + increment
  - increment is number of subarrays ending at `i` with net sum of `1`, i.e, number of subarrays ending at `i-1` with net sum of `0`, which is count of visited `prefix[i-1]`
- if  `prefix[i] = prefix[i-1] - 1`:  current number of qualified subarrays = previous number of qualified subarrays - increment
  - increment = number of subarrays ending at `i-1` with net sum of 1, or count of visited `prefix[i-1] - 1`

this shortcut makes `O(1)` in each iteration. So overall run time is `O(n)`
```python
class Solution:
    def subarraysWithMoreZerosThanOnes(self, nums: List[int]) -> int:
        # O(n)
        nums = [1 if i == 1 else -1 for i in nums]
        presum = [0] + nums
        for i in range(1, len(nums)+1):
            presum[i] += presum[i-1]
        mod = 1_000_000_007
        cnt = Counter()
        cnt[0] = 1
        c = 0
        res = 0
        for i in range(1, len(presum)):
            # c is count of subarrays ending at i which is broken down in following two cases (+1/-1):
            if presum[i] == presum[i-1] + 1:
                # count of subarrays of positive sum ending at i-1 + 
                # count of subarrays of 0 sum ending at i-1, including *empty array* (think about it)
                c += cnt[presum[i-1]] % mod
            else:  # presum[i] == presum[i-1] - 1:
                # count of subarrays of positive sum ending at i-1 - 
                # count of subarrays of 1 sum ending at i-1
                c -= cnt[presum[i-1]-1] % mod
            cnt[presum[i]] += 1
            res += c
        return res % mod
```
you probably noticed this is a DP solution
