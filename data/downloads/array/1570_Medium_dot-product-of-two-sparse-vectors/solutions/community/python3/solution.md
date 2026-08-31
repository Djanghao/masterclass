# Python 3 -> 99.16% faster

**Author:** mybuddy29
**Votes:** 37
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/926985/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/926985/)

---

**Suggestions to make it better are always welcomed.**

We can write 1 liners for below code as well.

**Approach:**
If dotProduct() is called million times, it will be good if we consider **only** the non-zero values to save time. So, let's use dictionary.
Now, we can multiply the values for same indexes in both the dictionaries.

What if 1 dictionary is thousand times bigger than the other? Can we reduce the time it takes to get the result?
If we compare the lengths and loop on the smaller dictionary, we can get result much faster. Time complexity still remains O(len(dictionary)) but it's better.

```
class SparseVector:
    def __init__(self, nums: List[int]):
        self.nums = {i: n for i, n in enumerate(nums) if n}

    def dotProduct(self, vec: 'SparseVector') -> int:
        result = 0
        if len(self.nums) < len(vec.nums):
            for key in self.nums.keys():
                if key in vec.nums:
                    result += self.nums[key] * vec.nums[key]
        else:
            for key in vec.nums.keys():
                if key in self.nums:
                    result += self.nums[key] * vec.nums[key]
                    
        return result      
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**