# Easy Kotlin Solution

**Author:** user3156ly
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/5599930/](https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/5599930/)

---

# Intuition
The problem involves counting the number of houses in a street where each house has a door that can be either open or closed. The approach involves first closing all doors, then opening one door to mark the starting point, and finally counting the number of doors until we find the one we opened initially, indicating a full loop through all houses.

# Approach
1. **Initial Setup**: Close all doors and move to the right `k` times to ensure all doors are closed.
2. **Mark Starting Point**: Open one door to mark the beginning of the count.
3. **Counting Houses**: Move to the next door and start counting. Continue moving right and counting until we encounter the door we initially opened, indicating we have looped through all houses.
4. **Return Count**: Return the counter value representing the total number of houses.

# Complexity
- Time complexity: $$O(n)$$, where \\(n\\) is the number of houses. This is because we potentially need to move through all houses once.
- Space complexity: $$O(1)$$, as we are using a constant amount of extra space regardless of the number of houses.




```
class Solution {
    fun houseCount(street: Street, k: Int): Int {
        // 1st step closing all the doors
        for( i in 0 .. k) {
            street.closeDoor()
            street.moveRight()
        }
        // just open One in order to know the begin
        street.openDoor()
        // move to next door to right direction
        street.moveRight()
        // now I know I have least one door that I did open 
        var counter = 1
        
        // If the door is opened. It means I found 
        // the door that I self did open than it is the begin
        while(!street.isDoorOpen()) {  // while the doors are closed ...
            // I count one more door
            counter++
            // and move to Rigth direction
            street.moveRight()
        }

        return counter
    }
}
```