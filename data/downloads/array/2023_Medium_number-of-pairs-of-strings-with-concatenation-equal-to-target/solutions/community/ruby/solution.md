# Simple ruby solution

**Author:** varentina
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/3362425/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/3362425/)

---

```
# @param {String[]} nums
# @param {String} target
# @return {Integer}
def num_of_pairs(nums, target)
    nums.permutation(2).count { _1 + _2 == target }
end
```