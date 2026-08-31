# Oracle | Left Join | Count | Sum | Case

**Author:** kunalc_14
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/5508159/](https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/5508159/)

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
```
/* Write your PL/SQL query statement below */
select
    i.invoice_id,
    cu.customer_name,
    i.price,
    count(co.contact_name) as contacts_cnt,
    sum(case
        when co.contact_email in (select email from customers) then 1
        else 0
    end)as trusted_contacts_cnt
from
    invoices i
left join
    customers cu on i.user_id = cu.customer_id
left join
    contacts co on i.user_id = co.user_id
group by
    i.invoice_id,
    cu.customer_name,
    i.price
order by
    1



```