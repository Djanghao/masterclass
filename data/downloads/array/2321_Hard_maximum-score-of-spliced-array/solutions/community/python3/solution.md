# Python | Easy to Understand | With Explanation | No Kadane

**Author:** Mikey98
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2198195/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2198195/)

---

```
class Solution:
    def maximumsSplicedArray(self, nums1: List[int], nums2: List[int]) -> int:
        # create a difference array between nums1 and nums2
        # idea: find two subarray(elements are contiguous) in the diff
        # one is the subarray that have the minimum negative sum
        # another one is the subarray that have the maximum positive sum
        # so there are four candidates for maximum score:
        # 1. original_sum1 
        # 2. original_sum 
        # 3. original_sum1 - min_negative_sum
        # 4. original_sum2 + max_positive_sum
        
        original_sum1 = sum(nums1)
        original_sum2 = sum(nums2)
        diff = [num1 - num2 for num1, num2 in zip(nums1, nums2)]
        min_negative_sum = float('inf')
        max_positive_sum = - float('inf')
        cur_negative_sum = 0
        cur_positive_sum = 0
        
        for val in diff:
            cur_negative_sum += val

            if cur_negative_sum > 0:
                cur_negative_sum = 0
            
            cur_positive_sum += val
            
            if cur_positive_sum < 0:
                cur_positive_sum = 0
                    
            min_negative_sum = min(min_negative_sum, cur_negative_sum)
            max_positive_sum = max(max_positive_sum, cur_positive_sum)

        return max(original_sum1 - min_negative_sum, original_sum2 + max_positive_sum, original_sum2, original_sum1)
```

**Feel free to ask if you have questions :)
Please upvote if you find it helpful, many thanks!**