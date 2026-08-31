# too easy easy

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4379706/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4379706/)

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
def smallest_equal(nums)
    nums.each_with_index do |v, i|
        if i % 10 == v
            return i
        end
    end

    -1
end
```