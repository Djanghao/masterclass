# Ruby - Count mismatches and ensure the same chars, O(N)

**Author:** shhavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1108422/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1108422/)

---

To satisfy the condition (swap at most two pairs of chars) string `s1` and `s2` should consist of the same characters.
And at most two indexes `i` may have `s1[i] != s2[i]`.

```ruby
def are_almost_equal(s1, s2)
  s1 = s1.chars
  s2 = s2.chars
  return false unless s1.sort == s2.sort
  s1.zip(s2).count { |a, b| a != b } <= 2
end
```

Time complexity: O(N * log(N))
Space complexity: O(N)

Iterate strings once. Count mismatches and ensure the same chars.

```ruby
def are_almost_equal(s1, s2)
  first_swap_pair = nil
  cnt = 0
  s1.chars.zip(s2.chars).each do |a, b|
    next if a == b
    return false if cnt == 2
    first_swap_pair = [a, b] if cnt == 0
    return false if first_swap_pair != [b, a] if cnt == 1
    cnt += 1
  end
  cnt != 1
end
```
Time complexity: **O(N)**
Space complexity: **O(N)** (because of `zip`) - can be **O(1)** with cycle `for i in 0...s1.size` then `a = s1[i]; b = s2[i]`
