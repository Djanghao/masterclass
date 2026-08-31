# Set. One-liner. Beats 100% on time. O(n) time and space complexity

**Author:** gebeleysis
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/3362185/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/3362185/)

---

# Intuition
It can be seen that it doesn't matter how many repetitions of the same number we have in the input array. Whether a certain number is repeated 1 or 100 times, it won't change the number of "operations".
Then, at each step, removing the smallest number from the other numbers, doesn't change the number of remaining operations.
As a result, what we're actually counting is the number of _different_ elements the array holds _except_ for zeroes as they don't increase the number of operations.

# Approach
1. Make a set of different elements in `nums`
2. Remove `0` from that set
3. Return the number of elements in the set

These are three operations and, for even better readability can be written on 3 lines. But still, one-liner! :D

# Complexity
- Time complexity: O(n)
Initialising the set with an array means iterating over each element of the array. Adding that element to the set is O(1) but because there are n elements we get O(n)
The subtraction is O(1) * with the amount of elements being subtracted, which is 1 so the subtraction is constant time.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
Worst case the set will have the same length as the input array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minimumOperations(_ nums: [Int]) -> Int {
        Set(nums).subtracting(Set([0])).count
    }
}
```