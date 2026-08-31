# Сlean one-cycle solution  - Python, Go, Java

**Author:** klakovskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/3899199/](https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/3899199/)

---

# Intuition
The initial solution involves passing through k houses, closing all the doors, and then counting all the closed doors by after that opening them.

# Approach
However, I later wondered if it's possible to achieve this by only going through one round (k houses). I realized that I can open one door, move in the opposite direction, closing all doors while remembering the last one closed.

# Complexity
- Time complexity: O(k)
- Space complexity: O(1)

# Code
python
```
class Solution:
    def houseCount(self, street: Optional['Street'], k: int) -> int:
        r = 0
        street.moveLeft()
        street.openDoor()
        
        for i in range(1, k+1):
            street.moveRight()
            if street.isDoorOpen():
                r = i
            street.closeDoor()
        return r
```
go
```
func houseCount(street Street, k int) int {
    res := 0
    street.MoveLeft()
    street.OpenDoor()

    for i:=1;i<=k;i++{
        street.MoveRight()
        if street.IsDoorOpen() {res = i}
        street.CloseDoor()
    }
    return res
}
```
java
```
class Solution {
    public int houseCount(Street street, int k) {
        int r = 0;
        street.moveLeft();
        street.openDoor();

        for (int i = 1; i <= k; ++i) {
            street.moveRight();
            if (street.isDoorOpen()) {
                r = i;
            }
            street.closeDoor();
        }
        return r;
    }
}
```

