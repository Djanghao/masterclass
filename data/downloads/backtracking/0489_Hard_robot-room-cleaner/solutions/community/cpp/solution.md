# [C++] Algorithm walk-through, and code with detailed comments.

**Author:** astrob3rry
**Votes:** 70
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/1028277/](https://leetcode.com/problems/robot-room-cleaner/solutions/1028277/)

---

- Even though we do not have a matrix given, and do not know where the robot should start, we can use **relative coordinates** to represent the positions. We can assume the current cell that the robot is at is `(0, 0)`, then the cell to its left will be `(0, -1)`, and the cell above it will be `(-1, 0)`, etc. Then, we should also use a **hash set** to keep track of the cells that the robot has already visited. 
- For any of the location our robot is currently at, it has 4 choices to expand: `up, right, down, left.` **Note** that in order to move left, we need to make sure that the robot is currently facing left before we call `move()`. Therefore, the core of this problem is that **we need to know the direction the robot is facing before we move to the next cell**, only then we can move to the correct cell.


**Assume we already know the current direction that the robot is facing is left, what can we do at this point?**
- We can ask the robot to keep moving, until it can't go any further. 

**When the robot keeps moving left, but then hit an obstacle, or run into a cell that has been visited before. What can we do?**
- What we can do is we can try to ask the robot to make a turn, so that it will face towards another direction, then it can keep moving. Since the robot can't move when it's facing left, we can first ask the robot to make a right turn once, so it now is facing up, and we should now check if it can go up. If it can, then go up. We can keep asking the robot to make right turns until all the possible directions(up, right, down) are explored. Finally, when all the directions are tried, the robot should be facing the direction that it originally was, which is left in our case.

**What happens if the robot has exhausted all the directions that it can visit?**
- If this is the case, then we should go back to the cell that we originally came from. As we mentioned above, after trying out all the possible directions, the robot will be facing the direction that it originally was. This is where we do **backtracking** to restore to the original state. Therefore, what we can do is to ask this robot to make 2 right turns, and then move once. However, we should also make sure that this robot is facing the exact same direction, so we should make another 2 right turns.

```cpp
class Solution {
public:
    void cleanRoom(Robot& robot) {
        // {-1, 0} -> go up
        // {0, 1} -> go right
        // {1, 0} -> go down
        // {0, -1} -> go left
        // face direction: 0(up) 1(right) 2(down) 3(left)
        vector<vector<int>> directions = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
        unordered_set<string> visited;
        cleanRoomRecursive(robot, visited, directions, 0, 0, 0);
    }
private:
    void cleanRoomRecursive(Robot &robot, unordered_set<string> &visited, const vector<vector<int>> &directions, int i, int j, int faceDirection) {
        // mark the current cell as visited(make sure that each time you call this function, the cell has not been visited yet)
        visited.insert(to_string(i) + "," + to_string(j));
        // clean the current cell
        robot.clean();
        
        // try out 4 differnt directions
        // k = 0: keep moving towards the current direction that we're facing
        // k = 1: make 1 right turn already, and try that new direction
        // k = 2: make 2 right turns already, and try that new direction
        // k = 3: make 3 right turns already, and try that new direction
        for (int k = 0; k < 4; ++k) {
            int nextFaceDirection = (faceDirection + k) % 4;
            int iNext = i + directions[nextFaceDirection][0];
            int jNext = j + directions[nextFaceDirection][1];
            // next cell has not been visited and is accessible
            if (!visited.count(to_string(iNext) + "," + to_string(jNext)) && robot.move()) {
                cleanRoomRecursive(robot, visited, directions, iNext, jNext, nextFaceDirection);
                // come back from the above recursive call, and the robot is currently at (iNext, jNext)
                // we should do a backtracking here to ask the robot to return back to (i, j)
                robot.turnRight();
                robot.turnRight();
                robot.move();
                robot.turnRight();
                robot.turnRight();
            }
            // the current direction has been explored
            // we should make a right turn, and try to explore another direction
            robot.turnRight();
        }
    }
    
};
```


**Q:** What does `int nextFaceDirection = (faceDirection + k) % 4;` mean?
**A:** Assume the robot is currently facing left, so `faceDirection` is 3, and you want the robot to try all the directions in the following sequence: 3(left), 0(up), 1(right), 2(down).
As you can see, since the starting direction is 3(facing left), when you add 1(turn right once), the answer becomes 4. However, the correct answer should be 0(up), since now the robot is facing up. That's why we introduce the modulo operation here, it is used to make sure that the direction always falls into the range of `0, 1, 2, 3`.
