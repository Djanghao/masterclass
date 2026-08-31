# Probabilistic banger

**Author:** binarbaum
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5541410/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5541410/)

---

Shuffle and check

```ruby
def rearrange_array(nums)
    nums.shuffle! while nums.each_cons(3).any? do |a, b, c|
        a - b == b - c
    end
    nums
end
```