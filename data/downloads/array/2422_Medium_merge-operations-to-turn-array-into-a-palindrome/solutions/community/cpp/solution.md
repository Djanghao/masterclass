# C++ : 🔥Fast unique approach, no array copying, no long longs, no prefix sums

**Author:** terrificP
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/4122285/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/4122285/)

---

You have probably already figured out the greedy two pointer approach. 

Many using Python will simply record the sum of the merge operations in the array itself, but in C++ this will overflow the int array since the maximum element after merging can be on the order of 10^5 * 10^9.

So naturally, you might then be tempted to use two `long long` prefix sums, or even copy the entire array into a `long long` vector (don't do that)!

These approaches will work, however, there is a simpler way. Since we are overflowing when we only add, what about only adding from one side, and subtracting from the other?

We start with a `twoWaySum` at 0. Every iteration we check if it is still 0. If so, we add the number at the left pointer and subtract the number at the right pointer, and move them both inward.

If they were equal, the `twoWaySum` is still 0. If not, we know a merge would have been needed, and the sign will tell us whether it was the left or the right pointer that needed to be moved. If positive, we add the number at the left pointer and move it inward. If negative, we subtract the number at the right pointer and move it inward.

One thing to note is that this method requires checking if `i <= j` rather than `i < j`, and also we need to check if the `twoWaySum` is 0 at the end. I will let you try it yourself and find out why, shouldn't be too hard to see on paper.

And yes I somewhat code-golfed this for fun. If you know a better way leave a comment.

- Time: $$O(n)$$

- Space: $$O(1)$$


```
  int minimumOperations(vector<int> &nums)
  {
    int merges = 0;
    int i = 0;
    int j = nums.size() - 1;
    int twoWaySum = 0;
    while (i <= j)
      if (twoWaySum && ++merges)
        if (twoWaySum > 0)
          twoWaySum -= nums[j--];
        else
          twoWaySum += nums[i++];
      else
        twoWaySum += nums[i++] - nums[j--];

    return merges + (twoWaySum != 0);
  }
```