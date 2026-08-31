# Greedy

**Author:** gleete
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/5919089/](https://leetcode.com/problems/destroying-asteroids/solutions/5919089/)

---



# Code
```swift []
class Solution {
    func asteroidsDestroyed(_ mass: Int, _ asteroids: [Int]) -> Bool {
        var mass = mass
        var ast = asteroids.sorted()
        for x in ast {
            if mass < x {
                return false
            }
            mass += x
        }
        return true
    }
}
```