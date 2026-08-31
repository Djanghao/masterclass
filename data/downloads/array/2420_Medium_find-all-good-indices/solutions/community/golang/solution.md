# Go Solution | O(n) | Explanation

**Author:** zell_dev
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/4903980/](https://leetcode.com/problems/find-all-good-indices/solutions/4903980/)

---

**Step 1: Initialize Tracking Arrays**
Create two boolean arrays, isNonIncreasingCheck and isNonDecreasingCheck, to track indices based on the conditions mentioned. These arrays will be used to determine if a particular index in nums satisfies the non-increasing and non-decreasing conditions to the left and right, respectively.

**Step 2: Determine Non-Increasing Sequences**
Iterate through the array nums from the beginning (index 1) to the end. Check each element to identify non-increasing sequences of at least k length to the left of an index. Set isNonIncreasingCheck at the index to true if the condition is met, indicating a valid non-increasing sequence at that index.

**Step 3: Determine Non-Decreasing Sequences**
Iterate through nums in reverse, starting from the second last element, to identify non-decreasing sequences of at least k length to the right of an index. Mark isNonDecreasingCheck at each qualifying index. This step ensures that the right-hand side condition for being a "good" index is checked.

**Step 4: Aggregate Good Indices**
Iterate through the range [k, n - k) and check both conditions (non-increasing to the left and non-decreasing to the right) using the previously filled boolean arrays. If both conditions are true for a given index, it is considered a "good" index and is added to the answer array.


```
func goodIndices(nums []int, k int) []int {
    n := len(nums)
    
    isNonIncreasingCheck := make([]bool, n)
    isNonDecreasingCheck := make([]bool, n)
    
    count := 1
    for i := 1; i < n; i++ {
        if count >= k {
            isNonIncreasingCheck[i] = true
        }
        
        if nums[i] <= nums[i-1] {
            count++
        } else {
            count = 1
        }
    }
    
    count = 1
    for i := n - 2; i >= 0; i-- {
        if count >= k {
            isNonDecreasingCheck[i] = true
        }
        
        if nums[i + 1] >= nums[i] {
            count++
        } else {
            count = 1
        }
    }
    
    ans := make([]int, 0)
    for i := k; i < n - k; i++ {
        if isNonDecreasingCheck[i] && isNonIncreasingCheck[i] {
            ans = append(ans, i)
        }
    }
    
    return ans
}
```

If you found it helpful, please consider giving it an upvote! It'll motivate me to share more solutions in the future. If you have any questions or suggestions, please let me know. Happy coding