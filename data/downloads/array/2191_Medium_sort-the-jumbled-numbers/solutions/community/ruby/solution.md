# Simple Ruby one-liner

**Author:** zetacu
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/2776929/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/2776929/)

---

This is a simple one liner on ruby. The complexity will be `O(nlog(n) * m)`. Where `n` will be length of the `nums` array and `m` the length of the biggets number.
```
# @param {Integer[]} mapping
# @param {Integer[]} nums
# @return {Integer[]}
def sort_jumbled(mapping, nums)
  nums.sort_by { |num| num.digits.map{ |digit| mapping[digit] }.reverse.join.to_i }
end
```