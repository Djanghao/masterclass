# Efficient Robot Movement Simulation with Obstacle Detection Using Hashing

**Author:** pezerizo
**Votes:** 3
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5734560/](https://leetcode.com/problems/walking-robot-simulation/solutions/5734560/)

---

# Intuition
The robot is moving on a 2D plane and can either move forward or rotate based on a set of commands. It might encounter obstacles, which need to be efficiently checked to avoid slowing down the simulation. The key challenge is to efficiently handle obstacle detection while calculating the maximum distance from the origin during the robot's movement.

# Approach
1. Convert each obstacle's `(x, y)` coordinates into a unique key using a hash function. This allows us to represent the obstacles as unique numbers and check for them in constant time.
   
2. Start the robot at position `(0, 0)` facing north. For each command:
   - If the command is positive, move the robot step by step in the current direction. After each step, check if the next step is blocked by an obstacle. If so, stop the movement for that command.
   - If the command is `-1` (right turn) or `-2` (left turn), adjust the robot's direction accordingly.
   
3. For each valid movement (not blocked by an obstacle), calculate the square of the Euclidean distance from the origin and update the maximum distance.

4. Store obstacles in a hash set to allow for \\(O(1)\\) time complexity when checking if a particular coordinate is blocked by an obstacle.

# Complexity
- Time complexity:
  - The time complexity is \\(O(c * m + o)\\), where \\(c\\) is the number of commands, \\(m\\) is the maximum steps in a command, and \\(o\\) is the number of obstacles.
  
- Space complexity:
  - The space complexity is \\(O(o)\\), where \\(o\\) is the number of obstacles since each obstacle is stored in a hash set.

# Code
```c
long long generateKey(int x, int y) {
    return (long long)(x + 30000) * 60001 + (y + 30000);
}

bool checkObstacle(int x, int y, long long* hashSet, int hashSetSize) {
    long long key = generateKey(x, y);
    for (int i = 0; i < hashSetSize; i++) {
        if (hashSet[i] == key) {
            return true;
        }
    }
    return false;
}

int robotSim(int* commands, int commandsSize, int** obstacles, int obstaclesSize, int* obstaclesColSize) {
    int max_distance = 0;
    int current_distance = 0;

    int next_x = 0, next_y = 0;
    
    long long* obstacleSet = (long long*)malloc(obstaclesSize * sizeof(long long));
    for (int i = 0; i < obstaclesSize; ++i) {
        obstacleSet[i] = generateKey(obstacles[i][0], obstacles[i][1]);
    }

    int current_position[2] = {0, 0};
    int current_direction[2] = {0, 1};

    for (int i = 0; i < commandsSize; ++i) {
        if (commands[i] > 0) {
            for (int step = 0; step < commands[i]; ++step) {
                next_x = current_position[0] + current_direction[0];
                next_y = current_position[1] + current_direction[1];

                if (checkObstacle(next_x, next_y, obstacleSet, obstaclesSize)) {
                    break;
                } else {
                    current_position[0] = next_x;
                    current_position[1] = next_y;
                }

                current_distance = (current_position[0] * current_position[0]) + (current_position[1] * current_position[1]);
                if (current_distance > max_distance) {
                    max_distance = current_distance;
                }
            }
        } else if (commands[i] == -1) {
            int new_x = current_direction[1];
            current_direction[1] = -current_direction[0];
            current_direction[0] = new_x;
        } else if (commands[i] == -2) {
            int new_x = -current_direction[1];
            current_direction[1] = current_direction[0];
            current_direction[0] = new_x;
        }
    }

    free(obstacleSet);
    return max_distance;
}
