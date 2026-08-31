# Python - O(N) Time Complexity and O(1) Space with only one for loop

**Author:** bangoc
**Votes:** 4
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1426592/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1426592/)

---

- Loop over the array
- Check an element
	- if the current element with its **previous** element and the **next** element combine a decrement or increment. We will swap the current element and after element.


```
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        for i in range(1, len(nums) -1):
            pre = nums[i-1]
            current = nums[i]
            next = nums[i+1]
            
            # If block will run when we meet 1 2 3 or 6 4 2
            if (pre < current < next) or (pre > current > next):
                # Swap next and current
                # For example: 
                # 1 2 3 -> 1 3 2
                # 6 4 2 -> 6 2 4
                nums[i+1], nums[i] = nums[i], nums[i+1]
                
        return nums
```