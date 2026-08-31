# ruby 1-liner

**Author:** _-k-
**Votes:** 4
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/2782764/](https://leetcode.com/problems/orderly-queue/solutions/2782764/)

---

```
def orderly_queue(s, k)
  k>1 ? s.chars.sort.join : s.size.times.map{s[_1..]+s[..._1]}.min
end
```