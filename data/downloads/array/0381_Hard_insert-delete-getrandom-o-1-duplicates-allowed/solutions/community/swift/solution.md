# swift solution ( 136 ms )

**Author:** osama10
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1088683/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1088683/)

---

```
class RandomizedCollection {
    var array = [Int]()
    var map = [Int: Set<Int>]()
    /** Initialize your data structure here. */
    init() {
        
    }
    
    /** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
    func insert(_ val: Int) -> Bool {
        let result = map[val, default: Set<Int>()].count == 0 ? true: false
        map[val, default: Set<Int>()].insert(array.count)
        array.append(val)
        return result
    }
    
    /** Removes a value from the collection. Returns true if the collection contained the specified element. */
    func remove(_ val: Int) -> Bool {
        if map[val, default: Set<Int>()].count == 0 { return false }
        let indexToRemove = map[val]!.first!
        map[val]!.remove(indexToRemove)
        if indexToRemove < array.count - 1 {
            array.swapAt(indexToRemove, array.count - 1)
            map[array[indexToRemove]]!.remove(array.count - 1)
            map[array[indexToRemove]]!.insert(indexToRemove)
        }
        
        array.removeLast()
        return true
    }
    
    /** Get a random element from the collection. */
    func getRandom() -> Int {
        let index = Int.random(in: 0..<array.count)
        return array[index]
    }
}
```