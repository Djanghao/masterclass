# Simple solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/4879435/](https://leetcode.com/problems/type-of-triangle/solutions/4879435/)

---


# Code
```
# @param {Integer[]} nums
# @return {String}
def triangle_type(nums)

    nums.sort!
    # a + b > c is a rule for triangles to be valid.
    if nums[0] + nums[1] <= nums[2]
        return "none"
    end

    freq = Hash.new(0)
    max_freq = 0
    nums.each do |num|
        freq[num] += 1
        max_freq = [max_freq, freq[num]].max
    end

    case max_freq
    when 3
        return "equilateral"
    when 2
        return "isosceles"
    when 1
        return "scalene"
    end    
end
```