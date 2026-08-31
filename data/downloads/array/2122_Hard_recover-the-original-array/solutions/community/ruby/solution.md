# ruby 2-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/5842338/](https://leetcode.com/problems/recover-the-original-array/solutions/5842338/)

---

```ruby []
def recover_array(a) =

  a.sort!.uniq[1..].map{ 1>1&d=_1-a[0] and t=a.tally and break a.map{|x|
    t[x]-=1 and 1/~t[x+d]-=1 and x+d/2 if t[x]>0 } rescue 0 }.compact
```