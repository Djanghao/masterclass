# 【Video】Using stack to keep asteroids

**Author:** niits
**Votes:** 81
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/5756593/](https://leetcode.com/problems/asteroid-collision/solutions/5756593/)

---

# Intuition
Using stack to keep asteroids

# Solution Video

https://youtu.be/St0taUTgneM

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 8,370
Thank you for your support!

---

# Approach
This is based on Python code. Other might be different a bit.

1. Initialize an empty list called `res` to store the final result.

2. Iterate through each element `a` in the `asteroids` list.

3. Check the current asteroid `a` and the last asteroid in the `res` list (if it exists) to determine whether there will be a collision or not.

4. The while loop `while res and a < 0 < res[-1]:` checks if the `res` list is not empty and if the current asteroid `a` is negative (moving left) while the last asteroid in `res` (`res[-1]`) is positive (moving right). This condition represents the potential for a collision.

5. If there's a potential collision, we need to resolve it:

   - If the magnitude of the current asteroid `a` is greater than the last asteroid's magnitude in `res` (`-a > res[-1]`), then the current asteroid will destroy the last asteroid in `res`. So, we pop the last asteroid from `res` using `res.pop()`.

   - If the magnitude of the current asteroid `a` is equal to the last asteroid's magnitude in `res` (`-a == res[-1]`), both asteroids will collide and destroy each other. So, we pop the last asteroid from `res` using `res.pop()`.

   - If neither of the above conditions is met, it means the current asteroid `a` will pass safely without any collision, and we break out of the while loop.

6. If the while loop finishes without encountering a collision, i.e., the current asteroid `a` is not destroyed by any other asteroid in `res`, we add the current asteroid `a` to the `res` list using `res.append(a)`.

7. Continue the iteration until all asteroids have been processed.

8. Finally, return the `res` list, which contains the asteroids that survived the collisions.

The algorithm efficiently handles asteroid collisions and returns the result with only the remaining asteroids after all collisions have been resolved.

# Complexity
- Time complexity: O(N)
N is the number of elements in the asteroids list. The for loop iterates through each asteroid once, and each iteration performs constant-time operations. The while loop inside the for loop can execute at most once per iteration. Overall, the code performs linear-time operations for each asteroid, resulting in a linear time complexity.

- Space complexity: O(N)
N is the number of elements in the asteroids list. The res list is the primary data structure that grows linearly with the number of asteroids. In the worst case, the res list will store all the asteroids if there are no collisions. So, the space complexity depends on the size of the input list asteroids.

```python []
class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        
        res = []

        for a in asteroids:

            while res and a < 0 < res[-1]:
                if -a > res[-1]:
                    res.pop()
                    continue
                elif -a == res[-1]:
                    res.pop()
                break
            else:
                res.append(a)

        return res
```
```javascript []
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const res = []
    
    for (let i = 0; i < asteroids.length; i++) {
        const last = res[res.length - 1]
        const cur = asteroids[i]
        
        if (!res.length || last < 0 || cur > 0) {
            res.push(cur)
        } else if (-cur == last) {
            res.pop()
        } else if (-cur > last) {
            res.pop()
            i--
        }
    }
    
    return res  
};
```
```java []
class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> stack = new Stack<>();
        
        for (int a : asteroids) {
            if (a > 0) {
                stack.push(a);
            } else {
                while (!stack.isEmpty() && stack.peek() > 0 && stack.peek() < -a) {
                    stack.pop();
                }

                if (stack.isEmpty() || stack.peek() < 0)  {
                    stack.push(a);
                }

                if (stack.peek() == -a) {
                    stack.pop();
                }
            }
        }

        int[] res = new int[stack.size()];
        int i = stack.size() - 1;

        while(!stack.isEmpty()) {
            res[i--] = stack.pop();
        }

        return res;   
    }
}
```
```C++ []
class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        std::stack<int> stack;

        for (int a : asteroids) {
            if (a > 0) {
                stack.push(a);
            } else {
                while (!stack.empty() && stack.top() > 0 && stack.top() < -a) {
                    stack.pop();
                }

                if (stack.empty() || stack.top() < 0) {
                    stack.push(a);
                }

                if (!stack.empty() && stack.top() == -a) {
                    stack.pop();
                }
            }
        }

        std::vector<int> res(stack.size());
        int i = stack.size() - 1;

        while (!stack.empty()) {
            res[i--] = stack.top();
            stack.pop();
        }

        return res;        
    }
};
```

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Related Video

#605 - Can Place Flowers

https://youtu.be/VK0siutcv0Q

