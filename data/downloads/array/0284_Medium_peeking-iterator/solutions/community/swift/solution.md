# Swift solution - Peeking Iterator

**Author:** ppujari
**Votes:** 7
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/658888/](https://leetcode.com/problems/peeking-iterator/solutions/658888/)

---

```
class PeekingIterator {
    private var iterator: IndexingIterator<Array<Int>>
    private var lastValue: Int?
    
	
    init(_ arr: IndexingIterator<Array<Int>>) {
        self.iterator = arr
        self.lastValue = iterator.next()
    }
	
    
    func next() -> Int {
        let previous = lastValue
        lastValue = iterator.next()
        return previous ?? 0
    }
    
    
    func peek() -> Int {
        return lastValue ?? 0
    }
    
	
    func hasNext() -> Bool {
        return lastValue != nil
    }
}
```
