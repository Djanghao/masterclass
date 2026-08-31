# SIMPLEST Ruby Soln - O(n) time

**Author:** andykimchris
**Votes:** 1
**Link:** [https://leetcode.com/problems/candy/solutions/4039086/](https://leetcode.com/problems/candy/solutions/4039086/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Think of seeing a line of kids and the neighbor is either if you're looking at them from the start or from the end.

# Approach
<!-- Describe your approach to solving the problem. -->
Create a candies array to track count of candies. Go through ratings initially and give candies appropriately if a kid has a higher rating than his opposite neighbor.

Once you move through the whole line, check the line again in reverse and ensure no kid with a higher rating has less candies than the neighbor. 

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} ratings
# @return {Integer}
def candy(ratings)
    candies = [1] * ratings.size

    ratings.each_with_index do |r,i|
        next if i == 0
        candies[i] = candies[i-1] + 1 if r > ratings[i-1]
    end

    (ratings.size - 2).downto(0) do |i|
        r = ratings[i]

        if r > ratings[i+1] && candies[i+1] >= candies[i]
            candies[i] = candies[i+1] + 1
        end
    end

    candies.sum
end
```