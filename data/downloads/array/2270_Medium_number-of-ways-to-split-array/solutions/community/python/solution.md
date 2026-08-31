# Python: Easily explained brute force to optimized

**Author:** meaditya70
**Votes:** 25
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/2038541/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/2038541/)

---

Here, they are asking to **count such events**/occurances where:
* the array can be splitted into **two non-empty parts**, such that 
* the sum of elements in first part **>=** sum of elements in second parts.

A prefix sum array is an array that stores at ith index,  the sum of all elements encountered from 0th index upto the ith index (inclusive). How can this help?
* The prefix sum has a property that it `avoids recomputation of sum`. 
* The sum upto element i can be obtained by `prefix_sum[i]`.
* The sum from i + 1 to last element of array can be obtained by `prefix_sum[n-1] - prefix_sum[i]`

The full code (***written during contest***) is given below:
```
class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        prefix_sum = [nums[0]]
        n = len(nums)
        for i in range(1, n):
            prefix_sum.append(nums[i] + prefix_sum[-1]) 
        
        count = 0
        for i in range(n-1):
            if prefix_sum[i] >= prefix_sum[n-1] - prefix_sum[i]:
                count += 1
        return count
```

**Time and Space Complexity Analysis:**
We iterate through each element of the array in a linear fashion. Hence, **time complexity = O(n)**.
Also, we maintain a extra space of size 'n' for prefix_sum array. Hence, **space complexity = O(n)**.

***Can we do any better?***
* In terms of time: **NO**. We will need to traverse the array atleast once (at any cost, in any situation).
* In terms of space: **YES**. We actually do not need a complete prefix array.

Let's see how!

We just need to have two sum variables storing the sum of left part and right part.
Initially, the left part will contain the `first element` and right part will contain `sum of array - the first element`.
As we increment the index, we take the current nums[i] value and add it to the left part and remove it from the right part.

Hence ***reducing the space complexity to O(1).***

Simple and Sweet.

The full code (***space optimized***) is given below:
```
class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        count = 0
        left_sum, right_sum = 0, sum(nums)
        for i in range(len(nums) - 1):
            left_sum += nums[i]
            right_sum -= nums[i]
            if left_sum >= right_sum:
                count += 1
        return count
```

Upvote, if helpful.