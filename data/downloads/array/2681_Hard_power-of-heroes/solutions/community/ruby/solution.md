# Ruby solution (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/3520471/](https://leetcode.com/problems/power-of-heroes/solutions/3520471/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n * log(n))$$

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}

@mod = 1000000007

def sum_of_power(nums)
    nums.sort!
    nums.map! { |num| num % @mod }
    sum = 0
    sums = [0]
    sum_of_sums = [0]
    
    nums.each do |num|
        sum += num + sum_of_sums[-1]
        sums << sum % @mod
        sum_of_sums << (sum_of_sums[-1] + sums[-2]) % @mod
    end
    
    sums.shift
    
    total = 0
    
    (0...nums.length).each do |i|
        total = (total + sums[i] * nums[i] ** 2) % @mod
    end
    
    total
end
```