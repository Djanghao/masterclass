# [C++/Java/Python] Using Door Status as Markers w/ Detailed Explanation

**Author:** Xiangcan
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/3610345/](https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/3610345/)

---

#### Intuition:

We know there's at most `k` houses, but not exactly how many. To determine the exact number of houses, we can use a marker system. In this scenario, the doors of the houses serve as the marker. If the door is open, it indicates that we've already visited (counted) this house. If the door is closed, we haven't counted this house yet.

Initially, we ensure all houses are marked as not visited by closing all the doors as we pass them, until we have moved `k` times. Now, we are sure all the houses have their doors closed.

Then, starting from the position we stopped at, we open each door as we pass by a house. The moment we encounter an open door, we've completed a full circle of the street. The number of houses we've visited (counted) till this point is the number of houses on the street.

This approach ensures we count each house exactly once and does not miss any house, as the street is circular.

#### Algorithm:
* Initialization: Start at some arbitrary house on the street.

* Step 1: Close all the doors of at most `k` houses by moving to the left and closing any open door we find along the way. This is done so that we can later use the status of the doors (`open` or `closed`) as a marker to keep track of the houses we have visited.

* Step 2: Now that all the doors are closed, start from the house we stopped at, but this time, open the doors as we move to the left. This is done in order to mark the houses that we visit. If we encounter an open door, this means that we've made a complete loop and have visited all the houses in the street.

* Step 3: Return the number of houses visited before encountering an open door as the answer. This is equivalent to the number of houses on the street.

#### Complexity Analysis:

Time complexity: `O(k)`, where `k` is the maximum number of houses that can be on the street. This is because we make at most `2k` moves: `k` moves to close the doors and another `k` moves to open the doors and count the houses.

Space complexity: `O(1)`, as it does not use any additional space that scales with the input size.

C++:
```
class Solution {
public:
    int houseCount(Street* street, int k) {
        for (int i = 0; i < k; i++) {
            if (street->isDoorOpen())
                street->closeDoor();
            street->moveLeft();
        }
        int i = 0;
        for (; i < k; i++) {
            if (street->isDoorOpen()) 
                break;
            street->openDoor();
            street->moveLeft();
        }
        return i;
    }
};
```

Java:
```
class Solution {
    public int houseCount(Street street, int k) {
        for (int i = 0; i < k; i++) {
            if (street.isDoorOpen())
                street.closeDoor();
            street.moveLeft();
        }
        int i = 0;
        for (; i < k; i++) {
            if (street.isDoorOpen()) 
                break;
            street.openDoor();
            street.moveLeft();
        }
        return i;
    }
}
```

Python3:
```
class Solution:
    def houseCount(self, street: Optional['Street'], k: int) -> int:
        for i in range(0, k):
            if street.isDoorOpen():
                street.closeDoor();
            street.moveLeft();
        count = 0;
        for i in range(0, k):
            if street.isDoorOpen():
                break;
            street.openDoor();
            street.moveLeft();
            count += 1;
        return count;
```