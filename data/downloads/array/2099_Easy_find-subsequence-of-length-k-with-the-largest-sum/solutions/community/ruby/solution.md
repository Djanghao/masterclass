# Ruby solution using sorting, with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/3653029/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/3653029/)

---

# Intuition
It's easy to find the k largest numbers with sorting.  The key is to keep track of their original indices so we can keep them in order.

# Approach
1. Map each number to an array of that number and its index.
2. Sort the numbers by value.
3. Take the last k numbers.
4. Sort the numbers by original index to restore the original relative order.
5. Map each subarray to just the number's value.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
def max_subsequence(nums, k)
    nums.each_with_index { |num,i| nums[i] = [num,i] }
    nums.sort!
    nums = nums[-k..-1]
    nums.sort_by! { |arr| arr[1] }
    nums.map { |arr| arr[0] }
end
```