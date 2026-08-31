# Ruby - T O(n), S O(1), 100% 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2478457/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2478457/)

---

```
# @param {String} s
# @return {Integer}
def minimum_moves(s)
  n = s.length
  i = 0

  result = 0
  while i < n
    if s[i] == 'X'
      i += 3
      result += 1
    else
      i += 1
    end
  end

  result
end