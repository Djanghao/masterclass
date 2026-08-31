# Ruby naïve solution

**Author:** alanparmenter
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/3941202/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/3941202/)

---

```
def process_queries(queries, m)
  p = (1..m).to_a
  a = []
  for q in queries
    a << p.index(q)
    p.delete(q)
    p.unshift(q)
  end
  a
end
```