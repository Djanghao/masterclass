# Ruby || Lion In Cage

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3492707/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3492707/)

---

# Intuition
Lion In Cage

# Approach
Lion In Cage

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```ruby
MOD = 10**9 + 7

def num_subseq(nums, target)
    nums.sort!
    tmn = nums.collect {|v| target - v }
    res, l, r = 0, 0, nums.size - 1
    nums.size.times.each_with_object(pows = [1]) {|i, pows| 
        pows << (pows.last << 1) % MOD 
    }
    (nums[l] > tmn[r] ? r -= 1 : (res = (res + pows[r - l]) % MOD; l += 1)) while l <= r
    res
end

```