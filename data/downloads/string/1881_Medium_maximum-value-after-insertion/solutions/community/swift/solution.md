# Swift ArraySlice, least memory + fastest

**Author:** Telanir
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/1601194/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/1601194/)

---

```
func maxValue(_ n: String, _ x: Int) -> String {
    
    let isNegative = n.first == "-",
        char = String(x).first!,
        startIndex = n.index(n.startIndex,
                             offsetBy: (isNegative ? 1 : 0) + (x == 0 ? 1 : 0))
    
    var edited = n,
        index: String.Index = n.endIndex
    
    for (i, c) in n[startIndex...].enumerated() {
        
        if (isNegative && char < c)
            || (!isNegative && char > c) {
            
            index = n.index(startIndex, offsetBy: i)
            break
        }
    }
    
    edited.insert(char, at: index)
    
    return edited
}
```