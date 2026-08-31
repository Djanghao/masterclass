# ruby 1-liner

**Author:** _-k-
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/2855070/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/2855070/)

---

```
def find_winners(a)

  a.transpose.then{|w,l| [w&w-l, l.tally.reject{1<_2}.keys] }.map &:sort

end
```