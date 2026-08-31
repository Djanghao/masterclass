# Ruby O(N) time and O(k) space with explanation

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/5076775/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/5076775/)

---

# Intuition

By going from left to right, the leftmost element (a0) always has to be reduced to 0. That means the leftmost element and its group have to be reduced by the remaining leftmost (a0). Example:

[7,9,10,11,14] with k = 2 - after reducing the leftmost element and its group, we will get [0,2,10,11,14].

We can apply that until we get to the end of the last group of the array.

GROUP [7,9] (-7)      | GROUP [2, 10] (-2)   | GROUP [8,11] (-8)
[7,9,10,11,14] -> [0,2,10,11,14] -> [0,0,8,11,14] -> [0,0,0,3,14]

Because of that, we'll consider it's impossible to reduce all elements to 0 if the accumulated reduction makes the curr element be less than 0. (e.g. [10,3,7] with k = 2 cannot be reduce to 0 because the reduction for the leftmost element and its group would result in [0,-7,7]).

When you get to the last group, you cannot change the value that gets subtracted from all of the elements of thaat group. So we get the value that gets subtracted from the leftmost element and subtract it from the remaining elements.

GROUP [3,14] (-3)
[0,0,0,3,14] -> [0,0,0,0,11] 

In the example above, we don't get an array full of zeros, so it's impossible to get one for k = 2.

As we would subtract the remaining leftmost element from its k-sized group for each element the array has, that would result in an algorithm with O(n*k) time-complexity. We can improve that by storing the accumulated subtracted value. When the size of the group used for the subtracting value is greater than k, we update the subtracted value to not consider it.


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n) - numbers are seen once

- Space complexity:
O(k) - the queue stores at most k elements

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def check_array(nums, k)
    reduce_in = 0
    queue = []

    nums.each.with_index do |n, i|
        delta_reduction = if i <= nums.length - k 
                n - reduce_in
              else
                # don't update delta_reduction or reduce_in if we're in the last group
                0
              end
        reduce_in += delta_reduction
        queue.push(delta_reduction)

        return false if delta_reduction < 0 || n - reduce_in != 0

        reduce_in -= queue.shift if queue.length >= k
    end

    true
end
```