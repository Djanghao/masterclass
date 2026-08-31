# Python O(nlogn) (faster than 100.00%) with explanation

**Author:** bixing
**Votes:** 85
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/1085859/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/1085859/)

---

We have two arrays, by calculating the sum, we can know which is larger and which is the smaller.
To reach a same sum value (reduce the difference on sum to 0):
* For larger array, at each operation, we want to decrease the number as much as possible.
Since the min value we can decrease to is 1, at position` i`, the max contribution (to reduce the difference) we can "gain"  is ` larger_array[i] - 1`
* Similarly, for smaller array, we want to increase the number as much as possible.  
Since the max value we can increase to is 6, the "gain" at position `i` is ` 6-smaller_array[i]`

Thus, following this idea, we can: 
1. calculate the "gain" at each position in the larger and smaller array
2. sort them together in an ascending order.
3. by accumulating the "gain" from large to small, we can know the least steps to reduce the difference to 0 
```
class Solution:
    def minOperations(self, nums1: List[int], nums2: List[int]) -> int:
        
		# step1. determine the larger array and the smaller array, and get the difference on sum
        sum1 = sum(nums1)
        sum2 = sum(nums2)
        
        if sum1==sum2:
            return 0
        elif sum1>sum2:
            larger_sum_nums = nums1
            smaller_sum_nums = nums2
        else:
            larger_sum_nums = nums2
            smaller_sum_nums = nums1
		
        sum_diff = abs(sum1-sum2)
            
        # step2. calculate the max "gain" at each position (how much difference we can reduce if operating on that position)    
        gains_in_larger_array = [num-1 for num in larger_sum_nums]
        gains_in_smaller_array = [6-num for num in smaller_sum_nums]
        
		# step3. sort the "gain" and check the least number of steps to reduce the difference to 0
        gains = gains_in_larger_array + gains_in_smaller_array
        gains.sort(reverse = True)
        
        count = 0
        target_diff = sum_diff
        
        for i in range(len(gains)):
            target_diff -= gains[i]
            count += 1
            
            if target_diff <= 0:
                return count
		
		# return -1 if the difference still cannot be reduced to 0 even after operating on all positions
        return -1
```