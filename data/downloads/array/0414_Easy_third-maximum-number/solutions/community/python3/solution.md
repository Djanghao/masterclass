# ✅ Python || 🔥Multiple Approaches🔥 || Comparison and Summary || Look at once  🔥🔥🔥

**Author:** Kashyap_Gohil
**Votes:** 37
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/4967441/](https://leetcode.com/problems/third-maximum-number/solutions/4967441/)

---

# Comparison of Three Approaches 
Approach	| Description	| Time Complexity | 	Space Complexity	| Comments
------------|---------------|-----------------|-------------------------|----------
| 1. Sorting and Indexing	| Sorts the unique elements and returns the third element from the end.	| **O(n log n)** (due to sorting)	| **O(n)** (potentially for creating a new set)	| Simplest approach conceptually.|
| 2. Set Operations	| Creates a set to remove duplicates, removes the two largest elements, and returns the maximum remaining element.	| **O(n)** (worst-case for set creation and finding max)	| **O(n)** (potentially for creating a new set)	| Avoids full sorting but might be less space-efficient.|
| 3. Maintaining Three Variables (Method 1 & 2)	| Iterates through the list and keeps track of the three largest unique elements encountered so far. | **O(n)** (single loop)	| **O(1)** | (uses constant extra space)	| Most space-efficient approach.Method 1 and 2 have slightly different implementations but similar complexity.|

# \uD83D\uDD3C IF YOU FIND THIS POST HELPFUL PLEASE UPVOTE \uD83D\uDC4D
# Approch 1:  Sorting and Indexing
```
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        if len(set(nums)) >= 3:
            return sorted(set(nums))[-3]
        else:
            return sorted(set(nums))[-1]
```

# Approch 2: Set Operations
```
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        nums = set(nums)
        if len(nums) < 3:
            return max(nums)
        else:
            nums.remove(max(nums))
            nums.remove(max(nums))
            return max(nums)
```
# Approch 3: Maintaining Three Variables (Method 1 & 2)
## Method 1 
```
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        n = len(nums)
        result = 0

        Max = max(nums)
        secondMax = min(nums)
        thirdMax = float("-inf")

        for i in range(n):
            if nums[i] < Max and nums[i]  > secondMax:
                thirdMax = secondMax
                secondMax = nums[i]
            elif nums[i] < secondMax and nums[i] > thirdMax:
                thirdMax = nums[i]
            else:
                pass

        if len(set(nums)) >= 3:
            result = thirdMax
        else:
            result = Max
        return result


```
## Method 2 
```
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        first, second, third = float('-inf'), float('-inf'), float('-inf')

        for num in nums:
            if num > first:
                first, second, third = num, first, second
            elif first > num > second:
                second, third = num, second
            elif second > num > third:
                third = num

        if third != float('-inf'):
            return third
        else:
            return first
```
### \uD83D\uDD3C If you found my solution and information helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions. \uD83D\uDD3C
![upvote.jpg](./images/0.jpeg)



