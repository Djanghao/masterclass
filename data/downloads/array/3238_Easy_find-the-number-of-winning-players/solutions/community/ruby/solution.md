# Ruby one-liner, beats 100%/100%

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5592110/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5592110/)

---

```
# @param {Integer} n
# @param {Integer[][]} pick
# @return {Integer}
def winning_player_count(n, pick)
  pick.group_by(&:first).count { _2.map(&:last).tally.values.max > _1 }  
end
```