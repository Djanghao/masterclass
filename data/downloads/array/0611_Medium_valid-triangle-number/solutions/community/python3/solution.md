# 611: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 8
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/3308463/](https://leetcode.com/problems/valid-triangle-number/solutions/3308463/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Sort the input array "nums" in ascending order.
2. Initialize a variable "count" to 0, which will keep track of the number of valid triangles.
3. Loop through all possible triplets in the array, using two pointers "i" and "j".
4. For each triplet, initialize a third pointer "k" to "i + 2".
5. If the first element of the triplet is 0, skip to the next element by using the "continue" statement.
6. If all remaining elements in the array are zero, break out of the loop by using the "break" statement.
7. Loop through all possible second elements of the triplet, starting at "j = i + 1" and ending at "len(nums) - 1".
8. Move the third pointer "k" to the first element that is greater than or equal to the sum of the first two elements.
9. Calculate the number of valid triangles that can be formed with the current pair of first two elements as "k - j - 1", and add it to the "count" variable.
10. Return the final value of "count", which represents the total number of valid triangles that can be formed from the input array.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        nums.sort() # Sort the input array
        count = 0 # Initialize count of valid triangles
        
        # Loop through all possible triplets using two pointers
        for i in range(len(nums) - 2):
            k = i + 2 # Initialize third pointer to i + 2
            
            # If the first element of the triplet is 0, move to the next element
            if nums[i] == 0:
                continue
                
            # If all remaining elements in the array are zero, break out of the loop
            if nums[i+1] == 0 and nums[-1] == 0:
                break
            
            # Loop through all possible second elements of the triplet
            for j in range(i + 1, len(nums) - 1):
                
                # Move the third pointer to the first element that is greater than or equal to the sum of the first two elements
                while k < len(nums) and nums[i] + nums[j] > nums[k]:
                    k += 1
                
                # The number of valid triangles that can be formed with the current pair of first two elements is the difference between the third pointer and the second pointer minus 1
                count += k - j - 1
        
        return count

```