# Swift "inside-out" Fisher–Yates shuffle

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/885475/](https://leetcode.com/problems/shuffle-an-array/solutions/885475/)

---

Swift "inside-out" Fisher\u2013Yates shuffle
```
class Solution {

    private var array: [Int]

    init(_ nums: [Int]) {
        array = nums
    }
    
    /** Resets the array to its original configuration and return it. */
    func reset() -> [Int] {
        return array
    }
    
    /** Returns a random shuffling of the array. */
    func shuffle() -> [Int] {
        var result = [Int](), count = 0
        for item in array {
            let rand = Int.random(in: 0...count)
            if rand == count {
                result.append(item)
            } else {
                result.append(result[rand])
                result[rand] = item
            }
            count += 1
        }
        return result
    }
}
```
... and build-in Swift solution )
```
class Solution {

    private var array: [Int]

    init(_ nums: [Int]) {
        array = nums
    }
    
    /** Resets the array to its original configuration and return it. */
    func reset() -> [Int] {
        return array
    }
    
    /** Returns a random shuffling of the array. */
    func shuffle() -> [Int] {
        return array.shuffled()
    }
}
```