# sort and skip third candy

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4408977/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4408977/)

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
# @param {Integer[]} cost
# @return {Integer}
def minimum_cost(cost)
    if cost.size < 3
        return cost.sum
    end

    cost.sort!
    i = cost.size - 1
    price = 0
    while i > -1
        price += cost[i] 
        price += cost[i -1] if i > 0
        
        i -= 3
    end
    price
end
```