# ✅✅✅SIMPLE AND EASY SOLUTION 🔥🔥🔥USING JAVA AND PYTHON ✅✅✅WITH EXPLANATION

**Author:** user0517qU
**Votes:** 72
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5734055/](https://leetcode.com/problems/walking-robot-simulation/solutions/5734055/)

---

# PLEASE UPVOTE IF YOU FIND IT HELPFULL!!!!!
# Intuition
The problem involves simulating the movement of a robot on a 2D plane based on a sequence of commands. The robot moves in specific directions and needs to avoid obstacles. The goal is to determine the maximum distance from the origin that the robot can reach during its movement.

# Approach
1. **Initialization**:
   - Start by initializing the robot's position at the origin `(0,0)` and facing "upward" which corresponds to the positive y-direction.
   - Define possible directions the robot can move: up, right, down, and left.

2. **Direction Handling**:
   - The robot changes its direction based on the commands `-1` (turn right) and `-2` (turn left). 
   - Use a list to store the four possible movement directions and adjust the current direction index when the robot turns.

3. **Movement**:
   - For forward movement commands, update the robot's position step by step.
   - Before each step, check if the next position is an obstacle. If it is, stop moving in that direction.

4. **Distance Calculation**:
   - After each move, calculate the Euclidean distance squared from the origin. Keep track of the maximum distance encountered.

5. **Final Output**:
   - Return the maximum distance squared as the result.

# Complexity
- **Time complexity**: 
  - The time complexity is $$O(n + k)$$, where $$n$$ is the number of commands and $$k$$ is the number of obstacles. Converting the list of obstacles to a set allows for $$O(1)$$ lookup times during movement.

- **Space complexity**:
  - The space complexity is $$O(k)$$, where $$k$$ is the number of obstacles stored in a set for quick lookup.

# Code
```python3 []
class Solution:
    def robotSim(self,commands,obstacles):
        x,y,d=0,0,0
        direction=[(0,1),(1,0),(0,-1),(-1,0)]
        max_distance=0
        obstacles=set(map(tuple,obstacles))
        
        for cmd in commands:
            if cmd==-1:
                d=(d+1)%4
            elif cmd==-2:
                d=(d-1)%4
            else:
                for _ in range(cmd):
                    nx,ny=x+direction[d][0],y+direction[d][1]
                    if (nx,ny) in obstacles:
                        break
                    x,y=nx,ny
                    max_distance=max(max_distance,x*x+y*y)
        
        return max_distance

```
```JAVA []
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int robotSim(int[] commands, int[][] obstacles) {
        int x=0,y=0,d=0;
        int[][] direction={{0,1},{1,0},{0,-1},{-1,0}};
        int maxDistance=0;
        Set<String> obstacleSet=new HashSet<>();
        for(int[] obstacle:obstacles){
            obstacleSet.add(obstacle[0]+","+obstacle[1]);
        }
        for(int cmd:commands){
            if(cmd==-1){
                d=(d+1)%4;
            }else if(cmd==-2){
                d=(d+3)%4;
            }else{
                for(int i=0;i<cmd;i++){
                    int nx=x+direction[d][0];
                    int ny=y+direction[d][1];
                    if(obstacleSet.contains(nx+","+ny)){
                        break;
                    }
                    x=nx;
                    y=ny;
                    maxDistance=Math.max(maxDistance,x*x+y*y);
                }
            }
        }
        return maxDistance;
    }
}
```
