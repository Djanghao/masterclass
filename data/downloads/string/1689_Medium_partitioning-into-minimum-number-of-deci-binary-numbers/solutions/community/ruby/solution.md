# Simple one liner

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/5495886/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/5495886/)

---


# Code
```
# @param {String} n
# @return {Integer}
def min_partitions(n)
    n.to_i.digits.max
end
```