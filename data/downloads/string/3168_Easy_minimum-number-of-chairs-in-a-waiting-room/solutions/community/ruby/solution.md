# Ruby one-liner

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5297857/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5297857/)

---

```
# @param {String} s
# @return {Integer}
def minimum_chairs(s, t = 0)
  s.bytes.map { t -= (_1 - 72) / 3 }.max  
end
```