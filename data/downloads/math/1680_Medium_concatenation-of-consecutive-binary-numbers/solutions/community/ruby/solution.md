# Ruby one line solution

**Author:** piyushsawaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/961497/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/961497/)

---

```
(1..n).map {|n| n.to_s(2) }.join.to_i(2) % (10**9 + 7)