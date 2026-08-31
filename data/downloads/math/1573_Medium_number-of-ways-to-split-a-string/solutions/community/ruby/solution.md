# [Ruby] O(n)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/830503/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/830503/)

---

```
def num_ways(s)
  count1 = s.count('1')
  return 0 if count1%3 != 0

  result = if count1 == 0
    (s.length-2)*(s.length-1)/2
  else
    cur_count = 0
    indexes = []
    s.chars.each_with_index do |c, i|
      cur_count += 1 if c == '1'
      indexes[0] = i if !indexes[0] && cur_count == count1/3
      indexes[1] = i if !indexes[1] && cur_count == count1/3 + 1
      indexes[2] = i if !indexes[2] && cur_count == 2*count1/3
      indexes[3] = i if !indexes[3] && cur_count == 2*count1/3 + 1
    end
    (indexes[1] - indexes[0])*(indexes[3] - indexes[2])
  end
  result%(10**9+7)
end
```