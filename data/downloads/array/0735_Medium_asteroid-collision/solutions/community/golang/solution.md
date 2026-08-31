# Go Solution | Easy Explanation | O(N) Time & Space Complexity

**Author:** vibhushit
**Votes:** 7
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/4025988/](https://leetcode.com/problems/asteroid-collision/solutions/4025988/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can simulate the asteroid collisions using a stack data structure. The stack will help us keep track of the asteroids that haven't collided yet. We iterate through the list of asteroids, and for each asteroid, we check if it collides with the top asteroid on the stack. If a collision occurs, we determine which asteroid(s) get destroyed based on their sizes. We continue this process until we have processed all the asteroids. The stack will then contain the surviving asteroids.

# Approach
<!-- Describe your approach to solving the problem. -->
- Use a stack to simulate asteroid collisions.
- Iterate through the asteroids.
- For each asteroid:
    1. If it doesn't collide or is moving to the right, add it to the stack.
    2. If it is moving to the left and can collide:
        a. Check if it collides with the top asteroid on the stack.
        b. Handle the collision:
        - If both asteroids are destroyed, pop the top asteroid from the stack.
        - If only the current asteroid is destroyed, pop it and recheck with the current asteroid.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(N), where N is the number of asteroids in the input list. We iterate through the list of asteroids once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(N) as well. In the worst case, all the asteroids may survive and be stored in the stack.

# Code
```
func asteroidCollision(asteroids []int) []int {
    var result []int // Initialize the result stack to store asteroids that haven't collided

    for i := 0; i < len(asteroids); i++ {
        asteroid := asteroids[i]

        // If the result stack is empty, the current asteroid doesn't collide,
        // or the current asteroid is moving to the right, add it to the result.
        if len(result) == 0 || result[len(result)-1] < 0 || asteroid > 0 {
            result = append(result, asteroid)
        } else {
            top := result[len(result)-1]

            // Check if the current asteroid collides with the top asteroid on the result stack.
            if -asteroid == top {
                result = result[:len(result)-1] // Both asteroids are destroyed.
            } else if -asteroid > top {
                result = result[:len(result)-1] // The current asteroid destroys the top asteroid.
                i--                            // Recheck with the current asteroid.
            }
        }
    }

    return result
}

```