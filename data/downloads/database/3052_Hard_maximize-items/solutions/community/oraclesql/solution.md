# Oracle solution

**Author:** yucan29
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-items/solutions/5807426/](https://leetcode.com/problems/maximize-items/solutions/5807426/)

---

```oraclesql []
with w_prime as 
(
    select 
        item_type,
        sum(square_footage) as total_prime_footage,
        count(*) as prime_item_cnt
    from Inventory i
    group by
        item_type
)
select 
    item_type,   
    case 
        when item_type = 'prime_eligible' then floor(500000/total_prime_footage)*prime_item_cnt 
        when item_type = 'not_prime'      then floor(mod(500000,lag(total_prime_footage) over(order by item_type desc)) / total_prime_footage)*prime_item_cnt
    end as item_count    
from w_Prime    
order by
    item_count desc;

```