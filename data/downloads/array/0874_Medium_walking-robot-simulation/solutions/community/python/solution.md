# Beats 99.45% | Easy Code |

**Author:** B_I_T
**Votes:** 21
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5734862/](https://leetcode.com/problems/walking-robot-simulation/solutions/5734862/)

---

![image.png](./images/0.png)
# Intuition
- The robot has 4 possible directions (North, East, South, West) and changes its direction based on the commands -1 (right turn) and -2 (left turn).
- When the robot moves, it checks whether there is an obstacle in its path. If an obstacle is encountered, the robot stops before the obstacle.
- We calculate the Euclidean distance after every valid move and keep track of the maximum distance.
# Approach
1. Direction Handling:

- We use a direction variable that keeps track of which way the robot is currently facing.
- Initially, the robot faces North (direction = 1).
- Turning right increments the direction, and turning left decrements it. The modulo operator (%) is used to wrap the direction within the range of 1 to 4 (representing North, East, South, and West).
2. Obstacle Handling:

- A set is used to store the obstacles in the form of (x, y) coordinates. This allows for fast lookups to check whether a particular cell has an obstacle.
3. Movement:

- For each move command, the robot moves step by step in its current direction. If the robot encounters an obstacle, it stops moving in that direction.
- After each valid move, the distance from the origin is calculated, and the maximum distance is tracked.
4. Result:

- The result is the maximum distance from the origin that the robot reaches during its movement.
# Complexity 
- Time Complexity:
    - Obstacle Preparation: O(O), where O is the number of obstacles.
    - Command Execution: Each command is processed in O(1) time, and the total number of commands is C. For each command, the robot might check for obstacles in O(1) time.
    - Thus, the overall time complexity is O(O + C).
- Space Complexity:
    - The space complexity is O(O) to store the obstacle set.
# Code
```cpp []
class Solution {
public:
    static int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        ios::sync_with_stdio(false);
        cin.tie(nullptr);

        int i=0,j=0,res = 0,direction=1;
        set<pair<int,int>> st;
        for(const auto &it : obstacles){
            st.insert({it[0],it[1]});
        }

        for(const auto & command : commands){
            if(command == -1){
                direction = (direction+1) % 5;
                if(direction == 0) direction = 1;
            }else if(command == -2){
                direction = (direction-1);
                if(direction == 0) direction = 4;
            }else{
                int dist = command;
                while(dist > 0){
                    if(direction == 1){
                        if(st.find({i,j+1}) != st.end()) break;
                        j++;
                    }else if(direction == 2){
                        if(st.find({i+1,j}) != st.end()) break;
                        i++;
                    }else if(direction == 3){
                        if(st.find({i,j-1}) != st.end()) break;
                        j--;
                    }else{
                        if(st.find({i-1,j}) != st.end()) break;
                        i--;
                    }
                    res = max(res,i*i + j*j);
                    dist--;
                }
            }
        }
        return res;
    }
};
```
```Java []
class Solution {
    public int robotSim(int[] commands, int[][] obstacles) {
        Set<String> obstacleSet = new HashSet<>();
        for (int[] obstacle : obstacles) {
            obstacleSet.add(obstacle[0] + "," + obstacle[1]);
        }

        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}}; // North, East, South, West
        int x = 0, y = 0, direction = 0, maxDistance = 0;

        for (int command : commands) {
            if (command == -1) {
                direction = (direction + 1) % 4;
            } else if (command == -2) {
                direction = (direction + 3) % 4;
            } else {
                for (int i = 0; i < command; i++) {
                    int newX = x + directions[direction][0];
                    int newY = y + directions[direction][1];
                    if (!obstacleSet.contains(newX + "," + newY)) {
                        x = newX;
                        y = newY;
                        maxDistance = Math.max(maxDistance, x * x + y * y);
                    } else {
                        break;
                    }
                }
            }
        }

        return maxDistance;
    }
}

```
```Python []
class Solution:
    def robotSim(self, commands, obstacles):
        obstacle_set = set(map(tuple, obstacles))
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # North, East, South, West
        x, y, direction = 0, 0, 0
        max_distance = 0

        for command in commands:
            if command == -1:
                direction = (direction + 1) % 4
            elif command == -2:
                direction = (direction + 3) % 4
            else:
                for _ in range(command):
                    new_x, new_y = x + directions[direction][0], y + directions[direction][1]
                    if (new_x, new_y) not in obstacle_set:
                        x, y = new_x, new_y
                        max_distance = max(max_distance, x * x + y * y)
                    else:
                        break

        return max_distance

```
```Javascript []
var robotSim = function(commands, obstacles) {
    let obstacleSet = new Set(obstacles.map(obstacle => obstacle[0] + "," + obstacle[1]));
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];  // North, East, South, West
    let x = 0, y = 0, direction = 0;
    let maxDistance = 0;

    for (let command of commands) {
        if (command === -1) {
            direction = (direction + 1) % 4;
        } else if (command === -2) {
            direction = (direction + 3) % 4;
        } else {
            for (let i = 0; i < command; i++) {
                let newX = x + directions[direction][0];
                let newY = y + directions[direction][1];
                if (!obstacleSet.has(newX + "," + newY)) {
                    x = newX;
                    y = newY;
                    maxDistance = Math.max(maxDistance, x * x + y * y);
                } else {
                    break;
                }
            }
        }
    }

    return maxDistance;
};

```
# 2nd Version
```cpp []
class Solution {
private:
    static const vector<int> X;
    static const vector<int> Y;
public:
    static int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        int i=0,j=0,res = 0,direction=0;
        set<pair<int,int>> st;
        for(const auto &it : obstacles){
            st.insert({it[0],it[1]});
        }

        for(const auto & command : commands){
            if(command == -1){
                direction = (direction+1) % 4;
            }else if(command == -2){
                direction = (direction-1);
                if(direction < 0) direction = 3;
            }else{
                for(int dist=0; dist < command; dist++){
                    int ii = X[direction] + i;
                    int jj = Y[direction] + j;
                    if(st.find({ii,jj}) != st.end()) break;
                    i=ii;j=jj;
                    res = max(res,i*i + j*j);
                }
            }
        }
        return res;
    }
};

const vector<int> Solution::X = {0, 1, 0, -1};
const vector<int> Solution::Y = {1, 0, -1, 0};
```
![Please hit the upvote button (1).png](./images/1.png)
