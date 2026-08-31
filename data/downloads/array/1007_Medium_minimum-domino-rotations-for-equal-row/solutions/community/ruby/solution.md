# Ruby solution

**Author:** ganesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/1870469/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/1870469/)

---

https://github.com/ganeshskudva/Leetcode-Ruby

```
# @param {Integer[]} tops
# @param {Integer[]} bottoms
# @return {Integer}
def min_domino_rotations(tops, bottoms)
  cnt_a = Array.new(7, 0)
  cnt_b = Array.new(7, 0)
  cnt_same = Array.new(7, 0)
  n = tops.length

  (0..n-1).each do |idx|
    a = tops[idx]
    b = bottoms[idx]

    cnt_a[a] += 1
    cnt_b[b] += 1

    cnt_same[a] += 1 if a == b
  end

  ans = n
  (1..6).each do |v|
    if cnt_a[v] + cnt_b[v] - cnt_same[v] == n
      min_swap = [cnt_a[v], cnt_b[v]].min - cnt_same[v]
      ans = [ans, min_swap].min
    end
  end

  ans == n ? -1 : ans
end
```
