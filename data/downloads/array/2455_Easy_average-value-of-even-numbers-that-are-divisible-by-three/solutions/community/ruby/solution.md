# Math and Simple Logic

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/4616076/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/4616076/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def average_value(nums)
    count = 0
    total_sum = 0
    nums.each do |v|
        if v.even? and v%3 == 0
            total_sum += v
            count += 1
        end
    end
    
    if count == 0
        return 0
    else
        return total_sum/count
    end
end
```