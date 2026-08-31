# Counting valid arrays ending @ i

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/4538217/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/4538217/)

---

A lot of counting problems with subarrays can be solved by using this trick:
Count number of **valid subarrays ending @ i**.

What is a valid subarray? The one that contains at least one even number (even x even = even, even x odd = even, odd x odd = odd). So we need at least 1 even number to have an even product.

Algo:
1. Traverse left-2-right.
2. For each **even** num in array `count += last_even_num_idx + 1`

```
class Solution:
    def evenProduct(self, nums: List[int]) -> int:
        """
        ret # of subarrays with % 2 == 0 product
        
        9 6 7 9 8 
        
        Valid arrays ending @ i
        
        9 X 0
        9 6 \u221A  2: 9,6  6
        9 6 7 \u221A  2: 9,6,7  6,7
        9 6 7 9 \u221A  2:  9,6,7,9  6,7,9
        9 6 7 9 8 \u221A  5:  9,6,7,9,8  6,7,9,8  7,9,8  9,8  8
        """
        N = len(nums)
        count = 0
        last_even = 0
        for i,num in enumerate(nums):
            if num % 2 == 0:
                last_even = i + 1
            count += last_even
        return count
```