# Ruby solution using a hash.

**Author:** LinkSake
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/3573167/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/3573167/)

---

# Approach
Using a hash map we'll store a the numbers in the nums array and the frequency that we encounter them. In the loop will be looking for `k - n` where `n` is the current number we're looking in the loop, by performing the substraction we get the number that will be needed for `n` to become `k`, if this number is present we'll decrease the frequency since we "used it"; if we didn't find this number we'll add `n` and/or +1 to is frequency to be used later on with different `n`.

Since the problem ask us the number of operations we need can make to get `k`, everytime we encounter a number that added to `n` gets us `k` we add +1 to our ops counter.   

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def max_operations(nums, k)
  nums_map = Hash.new 0 # Makes the default value 0 instead of nil
  ops = 0

  nums.each do |n|
    unless n >= k
      if nums_map[k - n] > 0
        nums_map[k - n] -= 1
        ops += 1
      else
        nums_map[n] += 1
      end
    end
  end

  ops
end
```