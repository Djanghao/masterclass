# Ruby O(N)

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-modular-exponentiation/solutions/4443392/](https://leetcode.com/problems/double-modular-exponentiation/solutions/4443392/)

---

```ruby
# @param {Integer[][]} variables
# @param {Integer} target
# @return {Integer[]}
def get_good_indices(variables, target)
  (0...variables.length).select { |idx|
    (((variables[idx][0] ** variables[idx][1]) % 10) ** variables[idx][2]) % variables[idx][3] == target
  }
end
```