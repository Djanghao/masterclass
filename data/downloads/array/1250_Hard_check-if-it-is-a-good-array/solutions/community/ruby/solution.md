# Easy 100%/100% Ruby solution using GCD

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3397829/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3397829/)

---

# Intuition
Any two relatively prime numbers can be used to make one, so any array is "good" unless all numbers share a prime factor.

# Approach
Find the greatest common factor of all numbers in the array and check if it's 1.

# Complexity
- Time complexity:
I think $$O(n)$$, but I'm not sure about the time complexity of repeated GCD.

- Space complexity:
$$O(1)$$

# Code
```
# @param {Integer[]} nums
# @return {Boolean}
def is_good_array(nums)
    return nums[0] == 1 if nums.length == 1
    current = nums.shift
    until nums.empty?
        current = current.gcd(nums.shift)
    end
    current == 1
end
```