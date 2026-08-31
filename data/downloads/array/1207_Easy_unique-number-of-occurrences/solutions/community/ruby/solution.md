# Ruby - funny 1-liner

**Author:** Aetherus
**Votes:** 5
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/2861105/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/2861105/)

---

I feel the code is a little bit funny because it starts with a bang and ends with a bang, though they are totally different things.

By the way, `Array#uniq!` returns `nil` if the items in the receiver are already unique, or the receiver itself with all duplicates removed if the receiver has duplicated items in it.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
# @param {Integer[]} arr
# @return {Boolean}
def unique_occurrences(arr)
  !arr.tally.values.uniq!
end
```