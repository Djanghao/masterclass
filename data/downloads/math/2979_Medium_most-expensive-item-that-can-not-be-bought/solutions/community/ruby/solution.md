# Chicken McNugget Theorem ruby

**Author:** dmtrr
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5738918/](https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5738918/)

---

# Approach
Chicken McNugget Theorem

# Complexity
- Time complexity
O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(1)

# Code
```ruby []
# @param {Integer} prime_one
# @param {Integer} prime_two
# @return {Integer}
def most_expensive_item(prime_one, prime_two)
   prime_one*prime_two - prime_one - prime_two
end
```