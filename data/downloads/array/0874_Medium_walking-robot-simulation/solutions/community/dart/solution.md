# 🔥BEATS 💯 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5737512/](https://leetcode.com/problems/walking-robot-simulation/solutions/5737512/)

---



## Intuition

The problem asks us to simulate the movement of a robot on a 2D plane based on a series of commands, where the robot can move forward or change direction (left or right). The goal is to determine the maximum Euclidean distance squared from the origin that the robot reaches during its movement. The challenge lies in efficiently handling the presence of obstacles, which the robot must avoid.

## Approach

1. **Direction Handling**: Use four direction vectors corresponding to North, East, South, and West. These vectors allow us to move the robot in the correct direction based on the current orientation.
2. **Obstacle Handling**: Convert the list of obstacles into a set of string coordinates for quick lookup. This allows for efficient checking if the robot's next move would hit an obstacle.
3. **Command Execution**: Iterate through the list of commands, updating the robot's position or direction based on the command. If the command is to move forward, check for obstacles before moving. Track the maximum squared distance from the origin during the simulation.

## Complexity
- **Time complexity**:  
  The time complexity is $$O(k + c)$$, where `k` is the number of commands and `c` is the number of obstacle checks. The main loop iterates through each command, and within the movement commands, we check for obstacles, which is $$O(1)$$ due to the set lookup.

- **Space complexity**:  
  The space complexity is $$O(c)$$, where `c` is the number of obstacles, as we store them in a set for quick access.

---

## Code Implementations


```dart []
class Solution {
  int robotSim(List<int> commands, List<List<int>> obstacles) {
    // Direction vectors corresponding to North, East, South, and West
    List<List<int>> modes = [[0,1],[1,0],[0,-1],[-1,0]];
    int direction = 0;  // start facing North (index 0 in dx, dy)
    int x = 0;
    int y = 0;

    // Convert obstacles list to a set of string coordinates for quick lookup
    Set<String> obstacleSet = obstacles.map((pos) => "${pos[0]},${pos[1]}").toSet();
    int maxDistSq = 0;

    for (int command in commands) {
      if (command == -2) {
        // Turn left
        direction = (direction + 3) % 4;
      } else if (command == -1) {
        // Turn right
        direction = (direction + 1) % 4;
      } else {
        // Move forward
        for (int step = 0; step < command; step++) {
          int nx = x + modes[direction][0];
          int ny = y + modes[direction][1];
          // Check for obstacle
          if (obstacleSet.contains("$nx,$ny")) {
            break;  // stop moving if there's an obstacle
          }
          x = nx;
          y = ny;
          maxDistSq = max(maxDistSq, x * x + y * y);
        }
      }
    }

    return maxDistSq;
  }

  int max(int a, int b) {
    return (a > b) ? a : b;
  }
}
```


```java []
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public int robotSim(int[] commands, int[][] obstacles) {
        // Direction vectors corresponding to North, East, South, and West
        int[][] modes = {{0,1}, {1,0}, {0,-1}, {-1,0}};
        int direction = 0;  // start facing North
        int x = 0, y = 0;

        // Convert obstacles to a set of string coordinates for quick lookup
        Set<String> obstacleSet = new HashSet<>();
        for (int[] obs : obstacles) {
            obstacleSet.add(obs[0] + "," + obs[1]);
        }

        int maxDistSq = 0;

        for (int command : commands) {
            if (command == -2) {
                // Turn left
                direction = (direction + 3) % 4;
            } else if (command == -1) {
                // Turn right
                direction = (direction + 1) % 4;
            } else {
                // Move forward
                for (int step = 0; step < command; step++) {
                    int nx = x + modes[direction][0];
                    int ny = y + modes[direction][1];
                    // Check for obstacle
                    if (obstacleSet.contains(nx + "," + ny)) {
                        break;  // stop moving if there's an obstacle
                    }
                    x = nx;
                    y = ny;
                    maxDistSq = Math.max(maxDistSq, x * x + y * y);
                }
            }
        }

        return maxDistSq;
    }
}
```

```javascript []
var robotSim = function(commands, obstacles) {
    // Direction vectors corresponding to North, East, South, and West
    const modes = [[0,1], [1,0], [0,-1], [-1,0]];
    let direction = 0;  // start facing North
    let x = 0, y = 0;

    // Convert obstacles to a set of string coordinates for quick lookup
    const obstacleSet = new Set(obstacles.map(([ox, oy]) => `${ox},${oy}`));

    let maxDistSq = 0;

    for (const command of commands) {
        if (command === -2) {
            // Turn left
            direction = (direction + 3) % 4;
        } else if (command === -1) {
            // Turn right
            direction = (direction + 1) % 4;
        } else {
            // Move forward
            for (let step = 0; step < command; step++) {
                const nx = x + modes[direction][0];
                const ny = y + modes[direction][1];
                // Check for obstacle
                if (obstacleSet.has(`${nx},${ny}`)) {
                    break;  // stop moving if there's an obstacle
                }
                x = nx;
                y = ny;
                maxDistSq = Math.max(maxDistSq, x * x + y * y);
            }
        }
    }

    return maxDistSq;
};
```


```python []
class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        # Direction vectors corresponding to North, East, South, and West
        modes = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        direction = 0  # start facing North
        x, y = 0, 0

        # Convert obstacles to a set of string coordinates for quick lookup
        obstacle_set = set(map(tuple, obstacles))

        max_dist_sq = 0

        for command in commands:
            if command == -2:
                # Turn left
                direction = (direction + 3) % 4
            elif command == -1:
                # Turn right
                direction = (direction + 1) % 4
            else:
                # Move forward
                for _ in range(command):
                    nx, ny = x + modes[direction][0], y + modes[direction][1]
                    # Check for obstacle
                    if (nx, ny) in obstacle_set:
                        break  # stop moving if there's an obstacle
                    x, y = nx, ny
                    max_dist_sq = max(max_dist_sq, x * x + y * y)

        return max_dist_sq
```

```cpp []
#include <unordered_set>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        // Direction vectors corresponding to North, East, South, and West
        vector<vector<int>> modes = {{0,1}, {1,0}, {0,-1}, {-1,0}};
        int direction = 0;  // start facing North
        int x = 0, y = 0;

        // Convert obstacles to a set of string coordinates for quick lookup
        unordered_set<string> obstacleSet;
        for (const auto& obs : obstacles) {
            obstacleSet.insert(to_string(obs[0]) + "," + to_string(obs[1]));
        }

        int maxDistSq = 0;

        for (const int command : commands) {
            if (command == -2) {
                // Turn left
                direction = (direction + 3) % 4;
            } else if (command == -1) {
                // Turn right
                direction = (direction + 1) % 4;
            } else {
                // Move forward
                for (int step = 0; step < command; ++step) {
                    int nx = x + modes[direction][0];
                    int ny = y + modes[direction][1];
                    // Check for obstacle
                    if (obstacleSet.find(to_string(nx) + "," + to_string(ny)) != obstacleSet.end()) {
                        break;  // stop moving if there's an obstacle
                    }
                    x = nx;
                    y = ny;
                    maxDistSq = max(maxDistSq, x * x + y * y);
                }
            }
        }

        return maxDist

Sq;
    }
};
```


```typescript []
function robotSim(commands: number[], obstacles: number[][]): number {
    // Direction vectors corresponding to North, East, South, and West
    const modes = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let direction = 0;  // start facing North
    let x = 0, y = 0;

    // Convert obstacles to a set of string coordinates for quick lookup
    const obstacleSet = new Set(obstacles.map(([ox, oy]) => `${ox},${oy}`));

    let maxDistSq = 0;

    for (const command of commands) {
        if (command === -2) {
            // Turn left
            direction = (direction + 3) % 4;
        } else if (command === -1) {
            // Turn right
            direction = (direction + 1) % 4;
        } else {
            // Move forward
            for (let step = 0; step < command; step++) {
                const nx = x + modes[direction][0];
                const ny = y + modes[direction][1];
                // Check for obstacle
                if (obstacleSet.has(`${nx},${ny}`)) {
                    break;  // stop moving if there's an obstacle
                }
                x = nx;
                y = ny;
                maxDistSq = Math.max(maxDistSq, x * x + y * y);
            }
        }
    }

    return maxDistSq;
}
```


```rust []
use std::collections::HashSet;

impl Solution {
    pub fn robot_sim(commands: Vec<i32>, obstacles: Vec<Vec<i32>>) -> i32 {
        // Direction vectors corresponding to North, East, South, and West
        let modes = vec![(0,1), (1,0), (0,-1), (-1,0)];
        let mut direction = 0;  // start facing North
        let (mut x, mut y) = (0, 0);

        // Convert obstacles to a set of string coordinates for quick lookup
        let obstacle_set: HashSet<(i32, i32)> = obstacles.iter().map(|v| (v[0], v[1])).collect();

        let mut max_dist_sq = 0;

        for &command in &commands {
            if command == -2 {
                // Turn left
                direction = (direction + 3) % 4;
            } else if command == -1 {
                // Turn right
                direction = (direction + 1) % 4;
            } else {
                // Move forward
                for _ in 0..command {
                    let nx = x + modes[direction].0;
                    let ny = y + modes[direction].1;
                    // Check for obstacle
                    if obstacle_set.contains(&(nx, ny)) {
                        break;  // stop moving if there's an obstacle
                    }
                    x = nx;
                    y = ny;
                    max_dist_sq = max_dist_sq.max(x * x + y * y);
                }
            }
        }

        max_dist_sq
    }
}
```
```go []
func robotSim(commands []int, obstacles [][]int) int {
    // Direction vectors corresponding to North, East, South, and West
    modes := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
    direction := 0  // start facing North
    x, y := 0, 0

    // Convert obstacles to a set of string coordinates for quick lookup
    obstacleSet := make(map[string]struct{})
    for _, obs := range obstacles {
        obstacleSet[fmt.Sprintf("%d,%d", obs[0], obs[1])] = struct{}{}
    }

    maxDistSq := 0

    for _, command := range commands {
        if command == -2 {
            // Turn left
            direction = (direction + 3) % 4
        } else if command == -1 {
            // Turn right
            direction = (direction + 1) % 4
        } else {
            // Move forward
            for step := 0; step < command; step++ {
                nx, ny := x + modes[direction][0], y + modes[direction][1]
                // Check for obstacle
                if _, found := obstacleSet[fmt.Sprintf("%d,%d", nx, ny)]; found {
                    break  // stop moving if there's an obstacle
                }
                x, y = nx, ny
                maxDistSq = max(maxDistSq, x*x+y*y)
            }
        }
    }

    return maxDistSq
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int robotSim(int* commands, int commandsSize, int** obstacles, int obstaclesSize, int* obstaclesColSize) {
    // Direction vectors corresponding to North, East, South, and West
    int modes[4][2] = {{0,1}, {1,0}, {0,-1}, {-1,0}};
    int direction = 0;  // start facing North
    int x = 0, y = 0;

    // Convert obstacles to a set of string coordinates for quick lookup
    char obstacleSet[obstaclesSize][20];
    for (int i = 0; i < obstaclesSize; i++) {
        snprintf(obstacleSet[i], 20, "%d,%d", obstacles[i][0], obstacles[i][1]);
    }

    int maxDistSq = 0;

    for (int i = 0; i < commandsSize; i++) {
        int command = commands[i];
        if (command == -2) {
            // Turn left
            direction = (direction + 3) % 4;
        } else if (command == -1) {
            // Turn right
            direction = (direction + 1) % 4;
        } else {
            // Move forward
            for (int step = 0; step < command; step++) {
                int nx = x + modes[direction][0];
                int ny = y + modes[direction][1];

                // Check for obstacle
                char pos[20];
                snprintf(pos, 20, "%d,%d", nx, ny);

                int isObstacle = 0;
                for (int j = 0; j < obstaclesSize; j++) {
                    if (strcmp(pos, obstacleSet[j]) == 0) {
                        isObstacle = 1;
                        break;
                    }
                }

                if (isObstacle) {
                    break;  // stop moving if there's an obstacle
                }

                x = nx;
                y = ny;
                maxDistSq = max(maxDistSq, x * x + y * y);
            }
        }
    }

    return maxDistSq;
}
```
![image.png](./images/0.png) {:style='width:250px'}```
