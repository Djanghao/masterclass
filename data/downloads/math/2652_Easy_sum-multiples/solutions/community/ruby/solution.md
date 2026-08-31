# Ruby one-liner

**Author:** DNNX
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/3461892/](https://leetcode.com/problems/sum-multiples/solutions/3461892/)

---

```
# @param {Integer} n
# @return {Integer}
def sum_of_multiples(n)
  (1..n).sum { |i| i.gcd(105) > 1 ? i : 0 }  
end
```