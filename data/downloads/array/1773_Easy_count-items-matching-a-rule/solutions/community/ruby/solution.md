# Ruby Solution

**Author:** opopopop
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/2681592/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/2681592/)

---

```
def count_matches(items, rule_key, rule_value)
    arr = ['type', 'color', 'name' ]
    count = 0
    items.each { |a| count += 1 if rule_value == a[arr.index(rule_key)] }
    count
end
```