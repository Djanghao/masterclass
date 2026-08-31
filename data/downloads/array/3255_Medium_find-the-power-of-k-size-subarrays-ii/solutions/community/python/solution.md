# simple and easy explained Python solution using consecutiveSize 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5709847/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5709847/)

---


# if it's help, please up \u2B06 vote! \u2764\uFE0F

###### Let's Connect on LinkedIn: www.linkedin.com/in/shishirrsiam
###### Let's Connect on Facebook: www.fb.com/shishirrsiam


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
class Solution(object):
    def resultsArray(self, nums, k):
        # Get the length of the input array
        n = len(nums)

        # If k is 1, simply return the original array as each element is its own consecutive sequence
        if k == 1:
            return nums

        # Initialize a list to store the results
        ans = []
        
        # Initialize index variable i and consecutiveSize
        i, consecutiveSize = 1, 1
        
        # Iterate through the nums array starting from the second element
        while i < n:
            # Check if the current element is consecutive to the previous one
            if nums[i] - 1 == nums[i - 1]:
                # If they are consecutive, increment the consecutive size
                consecutiveSize += 1
            else:
                # If not consecutive, reset the consecutive size to 1
                consecutiveSize = 1
            
            # If we have processed at least k elements
            if i >= k - 1:
                # Check if the length of consecutive elements is at least k
                if consecutiveSize >= k:
                    # If true, add the current element to the results
                    ans.append(nums[i])
                else:
                    # If false, add -1 to indicate that there is no valid consecutive sequence
                    ans.append(-1)
            
            # Move to the next index
            i += 1
        
        # Return the results array
        return ans
```