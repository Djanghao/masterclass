# GO : Narayana Pandita's Algo : Space Complexity - O(1) : Time Complexity - O(n)

**Author:** Prophet0fRegret
**Votes:** 3
**Link:** [https://leetcode.com/problems/next-permutation/solutions/4471600/](https://leetcode.com/problems/next-permutation/solutions/4471600/)

---

# Intuition
When solving this problem I was not able to find any other optimal solution than the Narayana Padita's algorithm. Implemented it in a clean way, explaining the details and the algo. Hope it's helpful

# Approach
**This problem consists of three phases:** 
- **Find the first peak.**
- **Find the first element on the right of the peak, which is larger than the first element on the left of the peak, and swap both of them.**
- **Reverse the order of all elements lying between the peak & the last index of the array.** 

***Example for this problem - [1,3,6,8,7,2].***

1. In this problem, we basically start **traversing the array from the last index to the first**. While doing so we find the last number with an increasing pattern, after which the value decreases.

    So for our example, the increasing pattern goes from`2`(index : 5) upto`8`(index : 3), after which there is a fall in the value to`6`(index : 2)

    Mark the index as the`peakIndex`.

2. Now we have two conditions, either we find the **peak** somewhere between the bounds of the array, or we find it on the first element. 
 
    If the peak is found on the first element of the array, that means the array is sorted in the non-increasing order (or you can say, $$descending$$). We directly skip to phase 3.

    If not, now consider the element on the left of the`peakIndex`, here`6`(index : 2), which we detected as the fall in value from the peak. Then we loop from the last index of the array up to the`peakIndex`, & find the first value that is greater than the value beside`peakIndex`, as we marked,`6`.

    In this case, the value is`7`(index : 4), which we swap with`6`(index : 2)

3. Once the element on the **left of the peak pivot** is assigned correctly, we need to rearrange the elements from the **peak pivot upto the end of the array** in the $$increasing$$ $$order$$ $$of$$ $$value$$, which will give us the least greatest permutation of the values after the current one.

    So we use two pointer appoach to swap the elements, using one pointer from the lastIndex of the array, & the other being the`peakIndex`, where we swap the elements on these indexes and decrement / increment the values of both respectively, simultaneously.

    If no`peakIndex` reaches the starting of the array in **Phase 2**, that means the array is sorted in the $$descending$$ order, & as the question suggests, we perform this phase where all the elements are reversed using swapping.

***Performing the above operations gives us the final value in the array as : [1,3,7,2,6,8]***

# Complexity
- Time complexity:
$$Linear$$ $$Time$$ $$Complexity$$ : $$O(n)$$

- Space complexity:
$$Constant$$ $$Space$$ $$Complexity$$ : $$O(1)$$

# Code
```
func nextPermutation(nums []int)  {
    length := len(nums)
    var peakIndex int = length-1
    var largeIndex int = length-1

    // Find the final index of increasing order
    for ; peakIndex > 0; peakIndex-- {
        if nums[peakIndex-1] < nums[peakIndex] {
            break
        }
    }

    // Find the largest element from the right of peak, when compared to the
    // element immediate left of the peak (peakIndex - 1)
    if peakIndex != 0 {
        for ; largeIndex >= peakIndex; largeIndex-- {
            if nums[peakIndex-1] < nums[largeIndex] {
                // Swap the elements, peakIndex-1 & largeIndex.
                nums[largeIndex], nums[peakIndex-1] = nums[peakIndex-1], nums[largeIndex]
                break
            }
        }
    }

    // Reverse the order of elements starting from the end of the array, 
    // uptill the peak
    for i:=length-1; i>peakIndex; i, peakIndex = i-1, peakIndex+1 {
        nums[i], nums[peakIndex] = nums[peakIndex], nums[i]
    }
}
```