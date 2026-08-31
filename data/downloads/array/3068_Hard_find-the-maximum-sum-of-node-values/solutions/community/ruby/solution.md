# python, ruby 1-liners

**Author:** _-k-
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176978/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176978/)

---

ruby
```
def maximum_value_sum(a, k, edges) =

  a.sum{ [k^_1,_1].max } - a.count{ k^_1>_1 }%2 * a.map{ (_1.-_1^k).abs }.min
```

python
```
class Solution:
  def maximumValueSum(self, a, k, edges):

    return sum( max(x,x^k) for x in a ) - sum( x^k>x for x in a )%2 * min( abs(x-(x^k)) for x in a )
```