# C++, EASY WITH EXPLANATION

**Author:** ImDhruba
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5174514/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5174514/)

---

```
class Solution {
public:
    int numberOfCleanRooms(vector<vector<int>>& room) {
        int rows = room.size();
        int cols = room[0].size();
        unordered_set<string> visited;
        unordered_set<string> cleaned;
        return clean(room, rows, cols, 0, 0, 0, visited, cleaned);
    }

private:
    const vector<int> DIRECTIONS = {0, 1, 0, -1, 0};
    int clean(vector<vector<int>>& room, int rows, int cols, int row, int col,
              int direction, unordered_set<string> visited,
              unordered_set<string> cleaned) {
        // If the robot already visited this space facing this direction
        // Return the number of spaces cleaned
        if (visited.find(to_string(row) + to_string(col) +
                         to_string(direction)) != visited.end()) {
            return cleaned.size();
        }

        // Mark the space as visited facing this direction and cleaned
        visited.insert(to_string(row) + to_string(col) + to_string(direction));
        cleaned.insert(to_string(row) + to_string(col));

        // Clean the next space straight ahead if it's empty and in the room
        int nextRow = row + DIRECTIONS[direction];
        int nextCol = col + DIRECTIONS[direction + 1];
        if (0 <= nextRow && nextRow < rows && 0 <= nextCol && nextCol < cols &&
            room[nextRow][nextCol] == 0) {
            return clean(room, rows, cols, nextRow, nextCol, direction, visited,
                         cleaned);
        }

        // Otherwise turn right and clean the current space
        return clean(room, rows, cols, row, col, (direction + 1) % 4, visited,
                     cleaned);
    };
};
```



### **IDEA**

We need to find the number of spaces in the room the robot cleaned. 
It starts in the top left corner of the room facing right. 
Then, it cleans by repeating the following steps:

The robot moves forward until it reaches the edge of the room or hits an object.
The robot turns 90 degrees clockwise (to the right).
The robot will continue the cleaning process indefinitely, but it may get caught in a cycle where it no longer cleans new spaces.

If the robot revisits a cell for the second time while facing the same direction, a cycle has begun. 
This occurs because the robot will now follow the same path as when it last cleaned this cell in this orientation.

    
    
**How to get the DIRECTIONS = {0, 1, 0, -1, 0} array in mind?
    or
How do we find the coordinates of the next cell?**
Ans:
For a given cell (row, col) the coordinates of the next cell depend on the direction the robot is facing:

Facing right (direction 0): (row + 0, col + 1)
Facing down (direction 1): (row + 1, col + 0)
Facing left (direction 2): (row + 0, col - 1)
Facing up (direction 3): (row - 1, col + 0)


Observe that when the robot is facing a given direction, we change the column by the same amount we change the row when the robot faces the next direction.

We can extract the pattern and store it in an array DIRECTIONS = {0, 1, 0, -1, 0}. 
Then, to retrieve the coordinates of the next cell, we use row = row + DIRECTIONS[direction] and col = DIRECTIONS[direction + 1] 
where direction is the current direction the robot is facing.



**How do we update the robot direction when it turns?**

Each time the robot turns right, the direction increases by one, unless the robot is facing up (direction 3). 
To get the next direction, we add one to the current direction, then use modulo 4, 
which ensures the direction will stay between 0 and 3.




**How DIRECTIONS = {0, 1, 0, -1, 0} is working ?**
```
            North
              |
              |    
      West--------- East 
              |
              |
             South
		  
```
     
	 
```
DIRECTIONS = {0, 1, 0, -1, 0};

direction = (direction + 1) % 4    ==> [0, 1, 2, 3]

current pos = [row, col]

int nextRow = row + DIRECTIONS[direction];
int nextCol = col + DIRECTIONS[direction + 1];
 
//Move to East 
if(direction == 0){
  row = row + 0
  col = col + 1    
}

//move to south
if(direction == 1){
  row = row + 1
  col = col + 0   
}

//move to west
if(direction == 2){
  row = row + 0
  col = col - 1   
}

//move to north
if(direction == 3){
  row = row - 1
  col = col + 0   
}

Here from East  90 degree turn gets to South
     from South 90 degree turn gets to West
     from West  90 degree turn gets to North
     from North 90 degree turn gets to East
     
This is how, a clockwise rotation are made.
  ```