# I ❤️ Ruby

**Author:** 0x81
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3321968/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3321968/)

---

```ruby
def zero_filled_subarray(nums) =
    nums.map! { (_1 <=> 0).abs }
        .join
        .gsub(/0+/)
        .map(&:size)
        .sum { _1.succ * _1 / 2 }
```
```ruby
def zero_filled_subarray a
    c = 0
    a.sum do
        c = _1.zero? ? c + 1 : 0
    end
end
```
```ruby
def zero_filled_subarray(a, c = 0) = a.sum { c = _1.zero? ? c + 1 : 0 }
```