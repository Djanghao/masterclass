# 100% of ruby users beaten WTF

**Author:** ARKye03
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/5047995/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/5047995/)

---

# Intuition
It took me a lot to understand, because lcm was wrong in my head, the first thing I did was to google lcm, then think in a solution, I found one that solved like 70 cases but after that was too slow, then I saw 2nd hint(lcm formula) looking for that in google for ruby I found that is indeed buuiltin, after that the solution was too easy

# Complexity
- Time complexity:
1 Hour

- Space complexity:
What is this?

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}

def subarray_lcm(nums, k)
  output = 0
  (0...nums.length).each do |i|
    lcm = nums[i]
    (i...nums.length).each do |j|
      lcm = lcm.lcm(nums[j])
      break if lcm > k

      output += 1 if lcm == k
    end
  end
  output
end
```