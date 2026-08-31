# Ruby verbose solution

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/5334324/](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/5334324/)

---

# Intuition
An odd number can't be turned into an even number by increasing or decreasing it by 2. That means we have to split the numbers into odd and even to get to the answer.

If we always start from the minimum element that hasn't been converted to target, we're always guaranted to get the minimum steps to get from nums[left] to target[left]. 

We don't need to keep count of negative changes (i.e. nums[left] - target[left] < 0) because that will be taken care of by a positive change, as we're guaranted to get a similar array in the end.

By taking that into consideration, we get the code bellow.

# Code
```
# @param {Integer[]} nums
# @param {Integer[]} target
# @return {Integer}
def make_similar(nums, target)
    # Divide numbers by odd and even
    odd_nums = nums.select { _1 % 2 == 1}.sort
    even_nums = nums.select { _1 % 2 == 0}.sort
    odd_targets = target.select { _1 % 2 == 1 }.sort
    even_targets = target.select { _1 % 2 == 0 }.sort

    # Calculate the number of operations for the odd numbers and the even numbers
    operations(odd_targets, odd_nums) + operations(even_targets, even_nums)
end

def operations(target, nums)
    (0..target.length - 1).sum do |idx|
        # if the leftmost number that wasn't changed isn't equal to target,
        # we must add the operation to the count if the change is positive.
        if target[idx] - nums[idx] > 0
            (target[idx] - nums[idx]) / 2
        else 
            0
        end
    end
end
```