# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/6154364/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/6154364/)

---

**Heap of Character Frequencies (accepted answer)**
```
import Collections
struct HeapItem: Comparable {
    var ch: Character, count:Int
    init(_ a:Character, _ b:Int) {ch=a;count=b}
    static func <(l:Self, r:Self) -> Bool { l.ch < r.ch }
}
class Solution {
    func repeatLimitedString(_ s: String, _ repeatLimit: Int) -> String {
        let freq = Dictionary(zip(s,repeatElement(1,count:s.count)), uniquingKeysWith: +)
        var heap = Heap(freq.map(HeapItem.init))
        var result = ""
        
        while var item = heap.popMax() {
            while true {
                result += String(repeating: item.ch, count: min(item.count, repeatLimit))
                item.count -= repeatLimit
                guard item.count > 0, let next = heap.popMax() else { break }
                result.append(next.ch) // poke one char from next largest character
                if next.count > 1 {
                    heap.insert(HeapItem(next.ch, next.count-1))
                }
            }
        }
        return result
    }
}
```