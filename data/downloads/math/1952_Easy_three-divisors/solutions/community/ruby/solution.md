# Divide number by 2

**Author:** user7666jM
**Votes:** 0
**Link:** [https://leetcode.com/problems/three-divisors/solutions/6069179/](https://leetcode.com/problems/three-divisors/solutions/6069179/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Every number will have at least 1 and the number itself as factors.
Beyond that the next factors are likely to exist between 1 and the num/2 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
require 'prime'
# @param {Integer} n
# @return {Boolean}
def is_three(n)
   divisors = [1] 

   if n > 1
       divisors << n
   end

    (1..(n.to_f/2)).each do |num|
        next if divisors.include?(num)
        if n%num == 0
            divisors << num
        end
    end
    
    divisors.size == 3
end
```