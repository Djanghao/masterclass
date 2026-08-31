# Ruby one-liner, faster than 100% (0ms)

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6092770/](https://leetcode.com/problems/stone-removal-game/solutions/6092770/)

---

```ruby []
# @param {Integer} n
# @return {Boolean}
def can_alice_win(n)
  9 < n && n < 19 || 26 < n && n < 34 || 39 < n && n < 45 || n > 48
end
```