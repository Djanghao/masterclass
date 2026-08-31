# brute force xd

**Author:** 730kFl2EXH
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/5727728/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/5727728/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer} n
# @param {Integer} limit
# @return {Integer}
def distribute_candies(n, limit)
    space = (0..limit).to_a
    result = 0
    space.each do |x|
        space.each do |y|
            space.each do |z|
                result += 1 if x + y + z == n
            end
        end
    end
    result
end
```