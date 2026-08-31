# Ruby simple one-liner (sum only)

**Author:** risko
**Votes:** 4
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1898904/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1898904/)

---

```
# @param {String[]} operations
# @return {Integer}
def final_value_after_operations(operations)
    operations.sum{|x| x[1] == "-" ?  -1 : 1}
end
```