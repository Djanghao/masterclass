# ruby 1-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/4571397/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/4571397/)

---

```
def shortest_sequence(rolls, k, s=Set[]) =

  rolls.count{ s.clear if (s<<_1).size==k } + 1
```