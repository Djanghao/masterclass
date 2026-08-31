# Easy Ruby!

**Author:** bradyhelms
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/4796571/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/4796571/)

---

# Intuition
Need to reverse the numbers, add them to the original array, and count duplicates

# Approach
This is pretty trivial in Ruby, but could be done different for decreased complexity and runtime.

Code does the following:
- duplicates the original array 'nums'
- iterates over duplicated array
- each value is: converted to string, reversed, converted back to int and then pushed to original array
- implicitly return the length of nums with duplicates removed.

# Code
```
# @param {Integer[]} nums
# @return {Integer}

def count_distinct_integers(nums)
    numDup = nums.dup
    numDup.each do |num|
        nums.push(num.to_s.reverse.to_i)
    end
    nums.uniq.length
end
```