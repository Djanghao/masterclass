# Ruby solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-good-base/solutions/5646060/](https://leetcode.com/problems/smallest-good-base/solutions/5646060/)

---

# Code
```
# @param {String} n
# @return {String}
def smallest_good_base(n)
  check = -> digits, base { digits.times.inject([0, 1]) { |(t, i), _| [t + i, i * base] }.first }
  n = n.to_i
  (2..59).to_a.reverse.each do |num|
    k = (2..n).bsearch { |x| check.(num, x) >= n }
    return k.to_s if check.(num, k) == n
  end
end
```