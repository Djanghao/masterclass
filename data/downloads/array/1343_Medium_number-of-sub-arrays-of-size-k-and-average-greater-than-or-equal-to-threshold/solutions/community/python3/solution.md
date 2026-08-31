# [Python 3] Sliding window - Fixed size approach | O(N) Time | O(1) Space

**Author:** open_sourcerer_
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/3999839/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/3999839/)

---

# Intuition
The question asks us to do something in a subarray of size `k`. This is quite standard with **Sliding Window** - *fixed size* problems, where `k` is the fixed size of the window.

### What is a Sliding Window of fixed size ?
> The fixed-size sliding window technique is a computer science algorithm that uses a predefined window size that remains constant throughout the problem-solving process. The window size is usually stated in the problem, for example, "find the highest sum of three contiguous numbers in the following array". The window size will be three, and the action will be summing and comparing. 
> 
> The fixed-size sliding window technique is often used to deal with problems involving subarrays of a fixed size. These problems may include finding the maximum or minimum sum of consecutive `k` elements in an array. 


# Approach
The idea behind having a fixed sliding window is to maintain two pointers that are k apart from each other and fit a certain constraint.
1. Keep two pointers `l` and `r`

2. Expand the window until we get a window size `k`. We can do this by moving `r` towards right until we get a size `k` - you can do this either by a `while` loop or a regular `for` loop. At each point of expanding the window, we will add the current value to our running sum

3. Close the window once we have window of size `k`, that is `l - r > k`. While closing the window, that is incrementing left pointer by 1, we will also remove that value from the running sum

4. Once we get a running sum equal to threshold, we increment our result counter by 1

# Complexity
- Time complexity:
O(N) - N being number of elements in arr

- Space complexity:
O(1) - Because we only use three additional variables

# Code
```
class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        leftIdx, subarraySum, subarrayCount = 0, 0, 0

        for rightIdx in range(len(arr)):

            # close window
            if rightIdx - leftIdx + 1 > k:
                subarraySum -= arr[leftIdx]
                leftIdx += 1

            # open window
            subarraySum += arr[rightIdx]
            if ((rightIdx - leftIdx + 1) == k) and (subarraySum / k) >= threshold:
                subarrayCount += 1
        return subarrayCount
        
```

#### Note:
Please leave a comment if you think something is incorrect. 

\uD83D\uDC4D **Upvote if you like the approach.** 

Thank you.
