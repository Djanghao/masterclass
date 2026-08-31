# Ruby: bit manipulation

**Author:** lacrosse
**Votes:** 1
**Link:** [https://leetcode.com/problems/naming-a-company/solutions/3163365/](https://leetcode.com/problems/naming-a-company/solutions/3163365/)

---

# Code
```ruby
def distinct_names(ideas)
  h = Hash.new(0)
  ideas.each { |idea| h[idea[1..]] |= 1 << idea[0].ord - ?a.ord }
  heads = Array.new(26) { [0] * 26 }
  2 * ideas.sum { |idea|
    head = idea[0].ord - ?a.ord
    existing = h[idea[1..]]
    26.times.sum {
      if existing[_1] > 0
        0
      else
        heads[head][_1] += 1
        heads[_1][head]
      end
    }
  }
end
```

# Time complexity

$$\\mathcal{O}(n)$$

# Space complexity

$$\\mathcal{O}(n)$$