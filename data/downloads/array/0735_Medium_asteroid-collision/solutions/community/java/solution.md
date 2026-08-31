# TO THE POINT EXPLANATION|| JAVA C++ PYTHON ||O(N)

**Author:** Abhishekkant135
**Votes:** 92
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/5470817/](https://leetcode.com/problems/asteroid-collision/solutions/5470817/)

---

# BOISS JUST UPVOTE , I WORK SO HARD WRITNG THIS OUT AND YOU SHAMELESS PEOPLE SONT EVEN LIKE THE POST . PLS UPVOTE IT.

# Intuition

1. **Stack-based Approach**: Use a stack to keep track of the asteroids as they move.
2. **Collision Handling**: When a new asteroid is about to collide with the top of the stack, determine the outcome based on their sizes.
3. **Preserve Order**: The order of remaining asteroids should be preserved.

# Steps of Approach

1. **Initialize an empty stack** to keep track of moving asteroids.
2. **Iterate through each asteroid** in the input list:
   - If the asteroid is moving to the right (positive value), push it onto the stack.
   - If the asteroid is moving to the left (negative value), check for collisions:
     - If the stack is empty or the top of the stack is also moving left, push the current asteroid onto the stack.
     - Otherwise, compare the absolute values of the top of the stack and the current asteroid to handle the collision.
3. **Return the stack** as the final state of the asteroids.

### Python Solution with Comments
```python
class Solution(object):
    def asteroidCollision(self, asteroids):
        """
        :type asteroids: List[int]
        :rtype: List[int]
        """
        stack = []
        
        for asteroid in asteroids:
            while stack and asteroid < 0 < stack[-1]:
                if stack[-1] < -asteroid:
                    stack.pop()
                    continue
                elif stack[-1] == -asteroid:
                    stack.pop()
                break
            else:
                stack.append(asteroid)
        
        return stack
```

### C++ Solution with Comments
```cpp
class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        stack<int> stack;
        
        for (int asteroid : asteroids) {
            bool alive = true;
            while (!stack.empty() && asteroid < 0 && stack.top() > 0) {
                if (stack.top() < -asteroid) {
                    stack.pop();
                    continue;
                } else if (stack.top() == -asteroid) {
                    stack.pop();
                }
                alive = false;
                break;
            }
            if (alive) {
                stack.push(asteroid);
            }
        }
        
        vector<int> result(stack.size());
        for (int i = stack.size() - 1; i >= 0; --i) {
            result[i] = stack.top();
            stack.pop();
        }
        
        return result;
    }
};
```

### Java Solution with Comments
```java
class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> stack = new Stack<>();
        
        for (int asteroid : asteroids) {
            boolean alive = true;
            while (!stack.isEmpty() && asteroid < 0 && stack.peek() > 0) {
                if (stack.peek() < -asteroid) {
                    stack.pop();
                    continue;
                } else if (stack.peek() == -asteroid) {
                    stack.pop();
                }
                alive = false;
                break;
            }
            if (alive) {
                stack.push(asteroid);
            }
        }
        
        int[] result = new int[stack.size()];
        for (int i = stack.size() - 1; i >= 0; --i) {
            result[i] = stack.pop();
        }
        
        return result;
    }
}
```

# Explanation:

- **Stack Usage**: The stack helps in simulating the movement and collision of asteroids.
- **Collision Handling**: When a new asteroid collides with the top of the stack, handle the collision based on the sizes and directions of the asteroids.
- **Order Preservation**: The final state of the asteroids is preserved by returning the contents of the stack.

**Time Complexity**: O(n), where n is the length of the input list. Each asteroid is processed once.
**Space Complexity**: O(n), for storing asteroids in the stack.