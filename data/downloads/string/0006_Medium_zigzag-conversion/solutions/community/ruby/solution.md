# Simple Ruby solution

**Author:** ike18t
**Votes:** 3
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/650486/](https://leetcode.com/problems/zigzag-conversion/solutions/650486/)

---

```
def convert(s, num_rows)
  return s if s.size < num_rows || num_rows <= 1
  
  idxs = (1..num_rows).to_a + (2...num_rows).to_a.reverse
  
  s.chars.each_with_object([]).with_index do |(c, acc), idx|
    (acc[idxs[idx % idxs.size]] ||= '') << c
  end.join
end
```