# Python - Two pointer - Clear explination with comments

**Author:** iamricks
**Votes:** 15
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/1797115/](https://leetcode.com/problems/3sum-smaller/solutions/1797115/)

---

```
class Solution:
    def threeSumSmaller(self, nums: List[int], target: int) -> int:

        # If we have no triplets we cant find a valid answer so return 0
        if len(nums) < 3:
            return 0
        
        # Result that will be returned
        res = 0 
        
        # We need to sort out array because the question is asking for
        # triplets that are "sorted" i < j < k <, so you cant have an unsorted triplet
        # like 1,3,2
        nums.sort() 
         
        # We need to iterate through the array up until the last 2 numbers
        # We don't need to check the last two numbers because their wont be enough
        # numbers left to complete a triplet
        #
        # EX: [-2,0,0,1,3]
        for i in range(len(nums) - 2):
            
            # Here we keep track of our two pointers, we need to start at i+1 because we are
            # splitting this into a two sum problem
            #
            # [-2] => [0,0,1,3]
            #          L     R
            left = i + 1
            right = len(nums) - 1
            while left < right:
                # Calculate the total sum to of the current index, right pointer and left pointer
                three_sum = nums[i] + nums[left] + nums[right]
                
                # If we have a valid triplet we need to increment our result
                #
                # Q. Why do we increment by doing right - left? 
                # A. The array is sorted, we know every combination will fit if we kept moving the right
                #    pointer left, why do the extra work? Look at the example below:
                #
                # [-2] => [0,0,1,3]
                #          L     R
                #
                # [-2] => [0,0,1,3]
                #          L   R
                #
                # [-2] => [0,0,1,3]
                #          L R
                if three_sum < target:
                    res += right - left
                    
                    # Move the left pointer to see if we can find any more valid answers (left increases the sum)
                    left += 1
                else:
                    # Move the right pointer to see if we can find any more valid answers (right decreases the sum)
                    right -= 1

        return res
```