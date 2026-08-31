# ruby 3-liner bfs

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/race-car/solutions/4237573/](https://leetcode.com/problems/race-car/solutions/4237573/)

---

```
def racecar(t) =

  (@h ||= ( q=[[0,1,0]] and {}.tap{|h| q.each{|x,s,d|
    x.abs<10001 and !h.dig(x,s) and (h[x]||={})[s]=d and
      q << [x+s,s*2,d+1] << [x,-s/s.abs,d+1] } } ) )[t].values.min
```