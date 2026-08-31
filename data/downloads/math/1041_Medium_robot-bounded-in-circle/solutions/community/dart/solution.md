# Dart solution O(n) 270ms

**Author:** Yakudzae
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/5141274/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/5141274/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool isRobotBounded(String instructions) {
    int x = 0;
    int y = 0;
    RobotMode mode = RobotMode.up;

    for(int i = 0; i<4; i++){
        for(String instruction in instructions.split('')){
            if(instruction == 'G'){
                switch(mode){
                    case RobotMode.up:
                        y+=1;
                    case RobotMode.left:
                        x-=1;
                    case RobotMode.right:
                        x+=1;
                    case RobotMode.down:
                        y-=1;
                }
            }
            else{
                if(instruction == 'L'){
                    switch(mode){
                        case RobotMode.up:
                            mode = RobotMode.left;
                        case RobotMode.left:
                            mode = RobotMode.down;
                        case RobotMode.right:
                            mode = RobotMode.up;
                        case RobotMode.down:
                            mode = RobotMode.right;
                    }
                    continue;
                }
                if(instruction == 'R'){
                    switch(mode){
                        case RobotMode.up:
                            mode = RobotMode.right;
                        case RobotMode.left:
                            mode = RobotMode.up;
                        case RobotMode.right:
                            mode = RobotMode.down;
                        case RobotMode.down:
                            mode = RobotMode.left;
                    }
                    continue;
                }
            }
        }
    }

    return x==0 && y==0 ? true : false;
  }
}

enum RobotMode {up, left, right, down}
```