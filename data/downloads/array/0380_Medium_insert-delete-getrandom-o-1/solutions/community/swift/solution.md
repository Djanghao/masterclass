# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 4
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/1901774/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/1901774/)

---

```swift
class RandomizedSet {
    
    private var store: Set<Int>

    init() {
        self.store = []
    }
    
    func insert(_ val: Int) -> Bool {
        return store.insert(val).inserted
    }
    
    func remove(_ val: Int) -> Bool {
        return store.remove(val) != nil
    }
    
    func getRandom() -> Int {
        return store.randomElement() ?? 0
    }
}
```