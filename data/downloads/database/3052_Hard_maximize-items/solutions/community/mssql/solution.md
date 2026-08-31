# MS SQL Server - Two simple Select statements with Union

**Author:** Athenaeum101
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-items/solutions/4782415/](https://leetcode.com/problems/maximize-items/solutions/4782415/)

---

# Intuition
Select each item_type and count separately, then union together.
The number of prime combinations that can fit into 500,000 is equal to 500,000 divided by sum(square_footage) for all 'prime_eligible' items, rounded down.  Multiply this number by the number of prime items per combination to get the number of total prime items that can fit.  Do something similar for 'not_prime' items as well.

# Approach
<!-- Describe your approach to solving the problem. -->
Select each item_type and count separately, then union together.
The number of prime item combinations that can fit in the warehouse is equal to 500,000 divided by the total sq. ft of all 'prime_eligible' items in the Inventory table, rounded down.  Multiply this number of combinations by the number of items in each combination for the total items.

Find the number of 'not_prime' items that can occupy the remaining square_footage by taking 500,000 mod [total sq. ft of one 'prime_eligible combination'].  Then divide this number by the total sq. ft of one 'not_prime' combination.  This is the number of combinations that can fit in the remaining space.  Multiply this by the number of 'not_prime' items per combination to get the total number of 'not_prime' items.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
Select 'prime_eligible' item_type, floor(500000/sum(square_footage))*count(square_footage) item_count
from inventory
where item_type = 'prime_eligible'
UNION
Select 'not_prime', floor((500000 % (select sum(square_footage) from inventory where item_type = 'prime_eligible'))/sum(square_footage))*count(square_footage)
from inventory
where item_type = 'not_prime'
```