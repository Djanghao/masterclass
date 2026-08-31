# easy understanding solution beats 100% in time & space

**Author:** deleted_user
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5282115/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5282115/)

---

# Code

```javascript []
var numberOfChild = function (n, k) {
  let ballPosition = 0; // Start with child 0 holding the ball
  let direction = 1; // Initially, the ball moves towards the right

  for (let i = 0; i < k; i++) {
    if (direction === 1) {
      if (ballPosition === n - 1) direction = -1; 
      ballPosition += direction;
    } else {
      if (ballPosition === 0) direction = 1;  
      ballPosition += direction;
    }
  } 
  return ballPosition;
};
```
```python []
class Solution:
    def numberOfChild(self, n: int, k: int) -> int:
        ball_position = 0  # Start with child 0 holding the ball
        direction = 1  # Initially, the ball moves towards the right

        for _ in range(k):
            if direction == 1:
                if ball_position == n - 1:
                    direction = -1
                ball_position += direction
            else:
                if ball_position == 0:
                    direction = 1
                ball_position += direction

        return ball_position
```
```C++ []
class Solution {
public:
    int numberOfChild(int n, int k) {
        int ballPosition = 0; // Start with child 0 holding the ball
        int direction = 1;    // Initially, the ball moves towards the right

        for (int i = 0; i < k; i++) {
            if (direction == 1) {
                if (ballPosition == n - 1)
                    direction = -1;
                ballPosition += direction;
            } else {
                if (ballPosition == 0)
                    direction = 1;
                ballPosition += direction;
            }
        }
        return ballPosition;
    }
};
```
```java []
class Solution {
    public int numberOfChild(int n, int k) { 
        int ballPosition = 0; // Start with child 0 holding the ball
        int direction = 1; // Initially, the ball moves towards the right

        for (int i = 0; i < k; i++) {
            if (direction == 1) {
                if (ballPosition == n - 1) direction = -1; 
                ballPosition += direction;
            } else {
                if (ballPosition == 0) direction = 1;  
                ballPosition += direction;
            }
        } 
        return ballPosition; 
    }
}
``` 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

