# Ruby - Simple Short Linear Time

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1785499/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1785499/)

---

```
def find_rle_array(a, b)
    res, i, j = [], 0, 0
    while i<a.size && j<b.size
        x = a[i].first * b[j].first
        y = [a[i].last, b[j].last].min
        a[i][1]-=y
        b[j][1]-=y
        i+=1 if a[i].last == 0
        j+=1 if b[j].last == 0
        res.last && res.last.first == x ? res.last[1] += y : res<<[x,y]
    end
    res
end
```