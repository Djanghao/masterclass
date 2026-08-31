# Ruby O(N) 1-liner

**Author:** FNkWJgsm3QruaF
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4572566/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4572566/)

---

```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def min_operations(nums, k)
  (nums.reduce(:^) ^ k).to_s(2).count("1")
end
```