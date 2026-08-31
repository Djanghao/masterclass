# Primitive Swift solution O(1) runtime & O(n) memory

**Author:** yamironov
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-hashset/solutions/455457/](https://leetcode.com/problems/design-hashset/solutions/455457/)

---

Primitive Swift solution O(1) runtime & O(n) memory
```
class MyHashSet {
    var buff: [Bool]
    init() { buff = Array(repeating: false, count: 1000001) }
    func add(_ key: Int) { buff[key] = true }
    func remove(_ key: Int) { buff[key] = false }
    func contains(_ key: Int) -> Bool { return buff[key] }
}
```