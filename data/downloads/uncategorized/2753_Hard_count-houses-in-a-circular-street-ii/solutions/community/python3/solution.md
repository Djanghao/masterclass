# Simple linear solutions in C++, Java and Python to keep only one door open.

**Author:** cpcs
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3693747/](https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3693747/)

---

# Intuition
If there is only one door open and we continue moving right, when we reach it again the distance is the answer.

# Approach
Our loop executes whenever there is at least one open door.
1. Set saved distance = 0.
2. Find one open door.
3. Close it.
4. Try finding another open door. If we cannot find one, this means the previous open door was the only one, return the saved distance. Otherwise update the saved distance into the distance between step 2 and step 2. Go to step 2.

# Complexity
- Time complexity:
O(k)

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
 *     void closeDoor();
 *     bool isDoorOpen();
 *     void moveRight();
 * };
 */
class Solution {
    int tryMoveToOpen(Street* street, int k, bool considerCurrent = false) {
        if (street->isDoorOpen() && considerCurrent) {
            return 0;
        }
        int r = 1;
        for (street->moveRight(); !street->isDoorOpen() && r <= k; street->moveRight(), ++r)
        ;
        return r;
    }
public:
     int houseCount(Street* street, int k) {
       for (int r = 0;;) {
           tryMoveToOpen(street, k, true);
           int d = tryMoveToOpen(street, k);
           if (d > k) {
               return r;
           }
           r = d;
           street->closeDoor();
       }
       return -1;
    }
};

```

Java
```
/**
 * Definition for a street.
 * class Street {
 *     public Street(int[] doors);
 *     public void closeDoor();
 *     public boolean isDoorOpen();
 *     public void moveRight();
 * }
 */
class Solution {
    private int tryMoveToOpen(Street street, int k, boolean considerCurrent) {
        if (street.isDoorOpen() && considerCurrent) {
            return 0;
        }
        int r = 1;
        for (street.moveRight(); !street.isDoorOpen() && r <= k; street.moveRight(), ++r)
        ;
        return r;
    }
        
    public int houseCount(Street street, int k) {
        for (int r = 0;;) {
           tryMoveToOpen(street, k, true);
           int d = tryMoveToOpen(street, k, false);
           if (d > k) {
               return r;
           }
           r = d;
           street.closeDoor();
       }
    }
}
```

Python
```
# Definition for a street.
# class Street:
#     def closeDoor(self):
#         pass
#     def isDoorOpen(self):
#         pass
#     def moveRight(self):
#         pass
class Solution:
    def tryMoveToOpen(self, street: Optional['Street'], k: int, consider_current: bool) -> int:
        if street.isDoorOpen() and consider_current:
            return 0
        r = 1
        street.moveRight()
        while not street.isDoorOpen() and r <= k:
            street.moveRight()
            r += 1
        return r
    
    def houseCount(self, street: Optional['Street'], k: int) -> int:
        r = 0
        while True:
           self.tryMoveToOpen(street, k, True)
           d = self.tryMoveToOpen(street, k, False)
           if d > k:
               return r
           r = d
           street.closeDoor()
        return -1
```