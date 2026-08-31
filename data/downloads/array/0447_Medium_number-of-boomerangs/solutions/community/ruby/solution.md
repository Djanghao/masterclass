# Ruby 1-line solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/5547905/](https://leetcode.com/problems/number-of-boomerangs/solutions/5547905/)

---

# Code
```
# @param {Integer[][]} p
# @return {Integer}
def number_of_boomerangs(p) = 
  p.size.times.inject(0) { _1 + p.rotate![...-1].each_with_object(Hash.new(0)) { |(a, b), h| h[(p[-1][0] - a) ** 2 + (p[-1][1] - b) ** 2] += 1 }.values.sum { |x| x * (x - 1) }}
```