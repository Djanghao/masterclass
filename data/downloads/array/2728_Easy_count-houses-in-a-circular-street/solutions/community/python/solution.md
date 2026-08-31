# Close all doors, C++, Java & Python

**Author:** cpcs
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/3610444/](https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/3610444/)

---

# Intuition
1. Close all doors.
2. Open one door.
3. Go to one direction until you reach the open door and count the number of doors.


# Approach
<!-- Describe your approach to solving the problem. -->
Always move to the same direction (say left) and close all the doors (for k times). Then open one door, always move to the same direction again until you reach the open door again.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
C++
```
/**
 * Definition for a street.
 * class Street {
 * public:
 *     Street(vector<int> doors);
 *     void openDoor();
 *     void closeDoor();
 *     bool isDoorOpen();
 *     void moveRight();
 *     void moveLeft();
 * };
 */
class Solution {
public:
    int houseCount(Street* street, int k) {
        for (int i = 0; i < k; ++i) {
            street->closeDoor();
            street->moveLeft();
        }
        street->openDoor();
        int r = 1;
        for (street->moveLeft(); !street->isDoorOpen(); street->moveLeft(), ++r)
        ;
        return r;
    }
};
```

Java
```
/**
 * Definition for a street.
 * class Street {
 *     public Street(int[] doors);
 *     public void openDoor();
 *     public void closeDoor();
 *     public boolean isDoorOpen();
 *     public void moveRight();
 *     public void moveLeft();
 * }
 */
class Solution {
    public int houseCount(Street street, int k) {
        for (int i = 0; i < k; ++i) {
            street.closeDoor();
            street.moveLeft();
        }
        street.openDoor();
        int r = 1;
        for (street.moveLeft(); !street.isDoorOpen(); street.moveLeft(), ++r)
        ;
        return r;
    }
}
```

Python
```
# Definition for a street.
# class Street:
#     def openDoor(self):
#         pass
#     def closeDoor(self):
#         pass
#     def isDoorOpen(self):
#         pass
#     def moveRight(self):
#         pass
#     def moveLeft(self):
#         pass
class Solution:
    def houseCount(self, street: Optional['Street'], k: int) -> int:
        for i in range(0, k):
            street.closeDoor()
            street.moveLeft()
        r = 1
        street.openDoor()
        street.moveLeft()
        while not street.isDoorOpen():
            street.moveLeft()
            r += 1
        return r
```