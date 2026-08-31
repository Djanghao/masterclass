# Ruby - Short using MaxHeap library

**Author:** GuptaPrachur10
**Votes:** 2
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/1921550/](https://leetcode.com/problems/last-stone-weight/solutions/1921550/)

---

```
def last_stone_weight(stones)
    h = Containers::MaxHeap.new(stones)
    while h.size>1
        x, y = h.pop, h.pop
        h.push((x-y).abs) if x!=y
    end
    h.size == 0 ? 0 : h.next
end
```