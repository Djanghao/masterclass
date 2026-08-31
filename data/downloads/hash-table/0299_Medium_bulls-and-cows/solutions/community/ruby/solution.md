# Ruby code golf solution

**Author:** killer-whale
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/5329778/](https://leetcode.com/problems/bulls-and-cows/solutions/5329778/)

---

```ruby
def get_hint(s,g)=(a,b=(s+=??).chars.zip(g.chars).select{_1!=_2}.transpose;"#{s.size-a.size}A#{a.tally.sum{[_2,b.count(_1)].min}}B")
```