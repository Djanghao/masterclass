# Ruby 1-liner

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solutions/4065527/](https://leetcode.com/problems/neighboring-bitwise-xor/solutions/4065527/)

---

```ruby
# @param {Integer[]} derived
# @return {Boolean}
def does_valid_array_exist(derived)
  derived.inject(:^) == 0
end
```