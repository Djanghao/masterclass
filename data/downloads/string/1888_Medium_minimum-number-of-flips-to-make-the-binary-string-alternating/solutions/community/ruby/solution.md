# Ruby solution

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1257934/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1257934/)

---

Let `k` - number of flips needed to make string look like `010101...`
Then `n - k` - number of flips needed to convert string to `101010...`

Now lets put the first one character to the end of the string.
Indexes `1..n - 1` become `0..n - 2`
And `0` becomes `n - 1`
How `k` and `n - k` change?
If `n` is even then `k` becomes `n - k` (and `n - k` becomes `k`).
If `n` is odd it depends on the first number: `k` becomes `n - k \xB1 1`.

```ruby
def min_flips(s)
  n = s.size
  s = s.bytes.map { _1 - 48 } # '0'.ord == 48
  k = s.each_with_index.count { |x, i| x != (i.even? ? 0 : 1) }
  res = [k, n - k].min
  return res if res.zero? || n.even?
  for c in s
    k = c.zero? ? n - k - 1 : n - k + 1
    res = [res, k, n - k].min
  end
  res
end
```

Time complexity: `O(N)`
Space complexity: `O(N)`