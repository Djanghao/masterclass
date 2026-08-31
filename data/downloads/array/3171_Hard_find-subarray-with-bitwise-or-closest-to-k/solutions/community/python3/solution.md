# Updated, LogTrick O(30n), include similar questions.

**Author:** dekail
**Votes:** 17
**Link:** [https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5243284/](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5243284/)

---

This original question (AND of subarray) is exactly same as [LC 1521](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/description/)

Updated: they change the question from AND to OR after the contest....
Now the question is more similar to [LC 898](https://leetcode.com/problems/bitwise-ors-of-subarrays/description/)

# Intuition
Similar to LC 898, we can calculate all the distinct bitwise ORs of all the non-empty subarrays and find out the one is closest to k.

# Complexity
- Time complexity:
$$O(30n)$$, there are only $$O(logU)$$ of possible subarray OR values ending with $$nums[i]$$, where $$U = max(nums)$$. 

# Similar Questions
- [LC 1521](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/description/)
- [LC 898](https://leetcode.com/problems/bitwise-ors-of-subarrays/description/)
- [LC 2411](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/description/)
- [LC 3097](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/description/)

# Code
```
class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:

        # record all subarray OR values that is ending with nums[i - 1]
        # then these OR values can OR with nums[i] can get all subarray OR values that is ending with nums[i]

        # dp: contains all OR values that is ending with nums[i]
        dp = set()
        n = len(nums)

        # result: contains all subarray distinct OR values
        result = set()

        for i in range(n):
            new_dp = set()

            # single nums[i] can be a subarray
            new_dp.add(nums[i])

            # using nums[i] to update all subarray OR values ending with nums[i - 1] to the subarray ending with nums[i]
            for mask in dp:
                new_dp.add(mask | nums[i])
            
            # update all possible subarray result
            result |= new_dp
            dp = new_dp
        
        return min(abs(val - k) for val in result)
```


# Intuition (old version, AND of subarray)
AND of a subarray has an importance property: the longer of the subarray, the smaller of the AND values.

If we need a smallest |k - AND|, we should maintain the AND of the subarray near the value k. If the AND is < k, we should not expand the subarray because it will make the AND smaller and far away from k. Instead, we need to shrink the subarray.

# Complexity
- Time complexity:
$$O(30n)$$

- Space complexity:
$$O(30)$$

# Code 
```
class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        res = inf
        
        # -1 in binary is '111111111'
        current = -1

        n = len(nums)
        left = 0
        count = Counter()
        
        for right in range(n):

            current &= nums[right]

            for idx in range(30):
                b = (nums[right] >> idx) & 1
                # record the bit count in each position
                if b:
                    count[idx] += 1
            
            # update the result
            res = min(res, abs(k - current))
            
            # AND values will decrease to 0 when the size of the subarray increase
            # if the current subarray AND is < k, we shrink the subarray
            while current < k:
                for idx in range(30):
                    b = (nums[left] >> idx) & 1
                    if b:
                        count[idx] -= 1
                    
                    # if the current subarray has all '1' in current bit, we need to set back the AND of current bit
                    # current subarray nums[left + 1: right + 1]
                    # length == right - left
                    if count[idx] == right - left:
                        current |= (1 << idx)
                # update the result
                res = min(res, abs(k - current))
                left += 1
                
        return res
```