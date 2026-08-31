# One line .map

**Author:** catagalan-mtl
**Votes:** 2
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/4839916/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/4839916/)

---


# Code
```
# @param {Integer[]} candies
# @param {Integer} extra_candies
# @return {Boolean[]}
def kids_with_candies(candies, extra_candies)
   candies.map { |kid| kid + extra_candies >= candies.max }
end
```