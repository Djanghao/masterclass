# Oracle Easy Solution | Faster Than 100%

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-boolean-expression/solutions/1826606/](https://leetcode.com/problems/evaluate-boolean-expression/solutions/1826606/)

---

```
select 
        a.left_operand, 
        a.operator, 
        a.right_operand,
        case
            when operator = '>' then (case when (b.value > c.value) then 'true' else 'false' end)
            when operator = '=' then (case when (b.value = c.value) then 'true' else 'false' end)
            when operator = '<' then (case when (b.value < c.value) then 'true' else 'false' end)
        end value
from expressions a inner join variables b on a.left_operand = b.name
                    inner join variables c on a.right_operand = c.name
```