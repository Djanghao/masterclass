# Linear Solution with Monotonic Stack

**Author:** code_maniac
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/5265508/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/5265508/)

---

# Intuition
*For each element in array, find for how many subarrays it is the max/min.*

# Approach
Read function doc comment.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
/*
Re-phrase problem statement.
Instead of finding all subarray's range ( min and max), let's focus on one element at a time. Let's aspire for O(n).

Sum of range of all subarrays = Sum of ( max - min ) of all subarrays = Sum of max of all subarrays - Sum of min of all subarrays

We can tackle maxSum and minSum separately now in a similar way.

Let's find sum of max of all subarrays but focusing on one element at once.
Each subarray will have a max.
** For each element in array, find for how many subarrays it is the max. **

The contribution for each element in maxSum will be ( val * #subarrays)

For number of subarrays it is part of as max element, we need two things:
1. Prev smaller
2. Next smaller 
( Think about it!)

If prevSmaller = leftIdx, nextSmaller = rightIdx , then 
#subarrays for idx = (rightIdx - idx) * (idx- leftIdx)

Default value for left boundary = -1
Default value for right boundary = len(nums) ( Again, think about it!)

Similarily solve for minSum.
We can do it with monotonic stacks.
*/
func subArrayRanges(nums []int) int64 {
    var ans int64
    var stack []int
    
    // MinSum
    for right:=0;right<=len(nums);right++{
        for len(stack)!=0 && (right == len(nums) || nums[right] <= nums[stack[len(stack)-1]]){
            mid := stack[len(stack)-1] // target for prevSmaller and nextSmaller
            stack = stack[:len(stack)-1] // pop
            left := -1
            if len(stack)!=0{
                left = stack[len(stack)-1]
            }
            // For mid, we have both info i.e prevSmaller and nextSmaller. Can calculate how many subarrays it part of as min
            contri := nums[mid]*(right-mid)*(mid-left)
            ans -= int64(contri)
        }
        stack = append(stack,right)
    }

    stack = stack[:len(stack)-1] // pop to remove extra index len(nums) pushed in last iteration

    // MaxSum
    for right:=0;right<=len(nums);right++{
        for len(stack)!=0 && (right == len(nums) || nums[right] >= nums[stack[len(stack)-1]]){
            mid := stack[len(stack)-1] // target for prevGreater and nextGreater
            stack = stack[:len(stack)-1] // pop
            left := -1
            if len(stack)!=0{
                left = stack[len(stack)-1]
            }
            // For mid, we have both info i.e prevGreater and nextGreater. Can calculate how many subarrays it part of as max
            contri := nums[mid]*(right-mid)*(mid-left)
            ans += int64(contri)
        }
        stack = append(stack,right)
    }

    return ans
}
```