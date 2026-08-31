# CSplayTreeMap 470ms

**Author:** _-k-
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909708/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909708/)

---

Because apparently Ruby implementation of Containers::Heap is not fast enough.

# Code
```ruby []
def max_kelements(a, k)

  h=CSplayTreeMap.new and a.tally.each{ h[_1]=_2 }
  k.times.sum{ h.max_key.tap{|m| 
    h[k=(2+m)/3]=h[k].to_i+1 and 1>h[m]-=1 and h.delete m } }
 
end
```