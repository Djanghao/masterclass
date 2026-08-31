# C# Solution for Asteroid Collision Problem

**Author:** Aman_Raj_Sinha
**Votes:** 8
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/3790224/](https://leetcode.com/problems/asteroid-collision/solutions/3790224/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is to use a stack to simulate the collisions between asteroids. We can iterate through the asteroids and use the stack to keep track of the asteroids that have not collided yet. When a negative asteroid is encountered, we check if it can collide with any positive asteroids in the stack and update the stack accordingly.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize an empty stack to store the asteroids that have not collided yet.
1. Iterate through the asteroids array.
1. If the current asteroid is positive, push it into the stack as it will not collide with any other asteroids moving in the same direction.
1. If the current asteroid is negative, check if it can collide with any positive asteroids in the stack. To do this, keep popping positive asteroids from the stack while they are smaller than the absolute value of the negative asteroid. Handle the collisions based on the sizes of the asteroids.
1. After processing all the asteroids, the stack will contain the asteroids that have not collided yet. Convert the stack into an array and return the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(n), where n is the number of asteroids in the input array. In the worst case, we might need to iterate through the entire array once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) as well. In the worst case, all asteroids might end up in the stack before they collide or move in the same direction, resulting in a stack with a size equal to the number of asteroids.

# Code
```
public class Solution {
    public int[] AsteroidCollision(int[] asteroids) {
        Stack<int> stack = new Stack<int>();
    
        foreach (int asteroid in asteroids) {
            if (asteroid > 0) {
                stack.Push(asteroid);
            } else {
                while (stack.Count > 0 && stack.Peek() > 0 && stack.Peek() < Math.Abs(asteroid)) {
                    stack.Pop();
                }
                
                if (stack.Count == 0 || stack.Peek() < 0) {
                    stack.Push(asteroid);
                } else if (stack.Peek() == Math.Abs(asteroid)) {
                    stack.Pop();
                }
            }
        }
        
        int[] result = new int[stack.Count];
        for (int i = stack.Count - 1; i >= 0; i--) {
            result[i] = stack.Pop();
        }
        
        return result;
    }
}
```