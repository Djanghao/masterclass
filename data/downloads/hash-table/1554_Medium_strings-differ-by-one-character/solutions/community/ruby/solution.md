# Ruby - O(mn)

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/1787862/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/1787862/)

---

```
def differ_by_one(dict)
    h = {}
    dict.each do |s|
        for i in 0...s.length
            temp = s.dup
            temp[i] = '*'
            h[temp] ? (return true) : h[temp] = true
        end
    end
    false 
end
```