# [Swift] One Set Solution

**Author:** alptekin35
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/522524/](https://leetcode.com/problems/design-phone-directory/solutions/522524/)

---

```
class PhoneDirectory {

    /** Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory. */
    
    var set:Set<Int> = Set()
    init(_ maxNumbers: Int) {
        for i in 0..<maxNumbers{
            set.insert(i)
        }
    }
    
    /** Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available. */
    func get() -> Int {
        if set.isEmpty{
            return -1
        }
        return set.removeFirst()
    }
    
    /** Check if a number is available or not. */
    func check(_ number: Int) -> Bool {
        return set.contains(number)
    }
    
    /** Recycle or release a number. */
    func release(_ number: Int) {
        set.insert(number)
    }
}
```