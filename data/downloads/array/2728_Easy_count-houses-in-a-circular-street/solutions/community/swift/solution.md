# Swift | Good Interview Solution

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/3615471/](https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/3615471/)

---

**Create Known State with Sentinel, then Inspect (accepted answer)**
```
class Solution {
    func houseCount(_ street: Street, _ k: Int) -> Int {
        // 1) establish a known state
        // close all doors, then open one door
        (0 ..< k).forEach { _ in 
            street.closeDoor()
            street.moveRight()
        } 
        street.openDoor()
        
        // 2) loop around until open door is found
        // counting the iterations for result
        var result = 0
        repeat {
            street.moveRight()
            result += 1            
        } while !street.isDoorOpen() 
        return result
    }
}
```