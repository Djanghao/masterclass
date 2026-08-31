# Official Solution

**Link:** [https://leetcode.com/problems/max-consecutive-ones/solution/](https://leetcode.com/problems/max-consecutive-ones/solution/)

---

[TOC]

## Solution

The constraints for this problem make it easy  
to understand that it can be done in one iteration.

> The length of input array is a positive integer and will not exceed 10,000

How else do you expect to find the number of 1's in an array without making at least one pass through the array. So let's look at the solution.

### Approach: One pass

**Intuition**

The intuition is pretty simple. We keep a count of the number of 1's encountered. And reset the count whenever we encounter anything other than 1 (which is 0 for this problem). Thus, maintaining count of 1's between zeros or rather maintaining counts of contiguous 1's. It's the same as keeping a track of the number of hours of sleep you had, without waking up in between.

**Algorithm**

1. Maintain a counter for the number of `1`'s.

2. Increment the counter by 1, whenever you encounter a `1`.

3. Whenever you encounter a `0`

    a. Use the current count of `1`'s to find the maximum contiguous `1`'s till now.

    b. Afterwards, reset the counter for `1`'s to 0.

4. Return the maximum in the end.

  <center>
  <img src="../Figures/485/485_Max_Consecutive_Ones_1.png" width="500"/>
  </center>
  <br>

  In the above diagram we found out that the maximum number of consecutive `1`'s is 3. There were two breaks in the count we encountered while iterating the array. Every time the break i.e. `0` was encountered we had to reset the count of `1` to zero.

  >Note - The maximum count is only calculated when we encounter a break i.e. 0, since thats where a subarray of 1's ends.

<iframe src="https://leetcode.com/playground/LTSJ7NKJ/shared" frameBorder="0" width="100%" height="361" name="LTSJ7NKJ"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the number of elements in the array.

* Space Complexity: $$O(1)$$. We do not use any extra space.

### Follow up:

You can also try something fancy one liner [solution](https://leetcode.com/articles/duplicate-zeros/) as shared by [Stefan Pochmann](https://leetcode.com/stefanpochmann/).

```python
def findMaxConsecutiveOnes(self, nums):
  return max(map(len, ''.join(map(str, nums)).split('0')))
```

Note, how he converts the list into a string, using `map` and `join` functions. Then, splits the resultant string on `0`. The maximum of the lengths of these list of strings of `1`'s is the answer we are looking for.