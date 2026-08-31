# Ruby recursive with memo solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-i-win/solutions/5601445/](https://leetcode.com/problems/can-i-win/solutions/5601445/)

---


# Code
```
# @param {Integer} max_choosable_integer
# @param {Integer} desired_total
# @return {Boolean}
def can_i_win(max, total, memo = {})
  return true if total <= 0
  return false if max * (max + 1) / 2 < total
  can_win = -> (num, total) {
    return memo[num] if memo.key?(num)
    return false if total <= 0
    max.times { |i| return (memo[num] = true) if (num & (1 << i)) == 0 && !can_win.(num | (1 << i), total - (i + 1)) }
    memo[num] = false
  }  
  can_win.(0, total)
end

```