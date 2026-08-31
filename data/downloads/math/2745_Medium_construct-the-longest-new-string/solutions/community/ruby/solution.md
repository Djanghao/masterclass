# 1-liner + similar from CF

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-longest-new-string/solutions/3684839/](https://leetcode.com/problems/construct-the-longest-new-string/solutions/3684839/)

---

```ruby
def longest_string x, y, z
    4 * [x, y].min + z * 2 + (x != y ? 2 : 0)
end
```
Similar: https://codeforces.com/problemset/problem/1148/A