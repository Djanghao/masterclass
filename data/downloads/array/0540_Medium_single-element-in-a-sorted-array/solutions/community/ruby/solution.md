# Ruby Binary Search O( logn) with Explanation

**Author:** kenhufford
**Votes:** 2
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/628635/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/628635/)

---

We want to solve in log n time complexity so we know we need to half the input every time.  This seems like a big clue for binary search.  So how can we use b-search?

Here are two cases:
#1 [1,1,2,3,3,4,4,8,8]
#2 [3,3,7,7,10,11,11]

In case #1, the target is on the left side and in case #2 it's on the right side.  If we find the (EVEN) mid point of the array, what can that tell us?  

Note: The even mid point is important because it splits the array such that there are even lengths on the left and right side, so we know that each side is either perfectly pairs, has an odd one out, or that the mid is the target.

#1 Mid is 4 which is even.  If the mid number is equal to the number to its left, then the target number MUST be on the left side.

#2 Mid is 3 which is odd so we adjust it to be even.  Since mid is now 2, we can see that the number to the left doesn't match but the number to the right does, since it does, we know the target number must be on the right side.

#3 If neither side matches or our search's start and finish are equal, we know we are the target number.

```
def single_non_duplicate(nums, start = 0, finish = nums.length-1)
    return nums[start] if start == finish
    mid = (start+finish)/2
    mid -= 1 if mid % 2 == 1
    return single_non_duplicate(nums, start, mid-2) if nums[mid] == nums[mid-1]
    return single_non_duplicate(nums, mid+2, finish) if nums[mid] == nums[mid+1]
    return nums[mid] 
end
```