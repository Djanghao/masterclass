# Easy to understand Swift solution

**Author:** olegmetallic
**Votes:** 3
**Link:** [https://leetcode.com/problems/seat-reservation-manager/solutions/4255433/](https://leetcode.com/problems/seat-reservation-manager/solutions/4255433/)

---

# Approach
This solution can be improved by using linked list instead of array, so the reserve operation will take constant time, instead of O(n). But for simplicity I used usual array. So `reserve` func just removes and returns the first element of the array and the `unreserve` searches for the first seat number larger than a given and insert given seat at this index, if it wasn't found just append given seat to the end of the array.

# Complexity
- Time complexity:
O(n) - `reserve` (for linked list it will be O(1))
O(n) - `unreserve`

- Space complexity:
O(n) - store seats

# Code
```
class SeatManager {
    private var seats = [Int]()
    
    init(_ n: Int) {
        seats = (1...n).map { $0 }
    }
    
    func reserve() -> Int {
        seats.removeFirst()
    }
    
    func unreserve(_ seatNumber: Int) {
        if let index = seats.firstIndex { seat in
            seatNumber < seat
        } {
            seats.insert(seatNumber, at: index)
        } else {
            seats.append(seatNumber)
        }
    }
}
```