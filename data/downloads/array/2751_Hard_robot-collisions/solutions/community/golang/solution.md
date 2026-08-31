# ✅🚀 🔥 || Beats 100% ||  || Java, Python, C++, JS, Go || Beginner Friendly🔥✨🌟

**Author:** kartikdevsharma_
**Votes:** 13
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5468452/](https://leetcode.com/problems/robot-collisions/solutions/5468452/)

---



# Intuition


The problem involves simulating collisions between robots moving on a line. The key insights are:

1. Collisions only occur between robots moving towards each other (one moving left, one moving right).
2. The order of collisions matters, so we need to process them in the correct sequence.
3. We can use a stack to keep track of potential collisions.

# Approach

1. Sort the robots based on their positions to process them in order from left to right.
2. Use a stack to keep track of robots moving right.
3. For each robot moving left, simulate collisions with robots moving right (from the stack).
4. Update health values based on collision outcomes.
5. Collect the health of surviving robots in their original order.

# Complexity

- Time complexity: O(n log n)
  - Sorting the robots takes O(n log n) time.
  - Processing each robot takes O(n) time in the worst case (if all robots collide).
  - The final collection of surviving robots takes O(n) time.
  - Overall, the dominant factor is the sorting, so the time complexity is O(n log n).

- Space complexity: O(n)
  - We use additional space for the indices array and the stack, both of which can contain up to n elements in the worst case.
  - The answer list also takes up to O(n) space.

# Code Explanation

I'll break down the code and explain each part in detail:

```java
class Solution {
    public List<Integer> survivedRobotsHealths(int[] positions, int[] healths, String directions) {
        int n = positions.length;
```
This is the class and method definition. The method takes three parameters:
- `positions`: An array of integers representing the positions of robots.
- `healths`: An array of integers representing the health of each robot.
- `directions`: A string where each character ('L' or 'R') represents the direction of each robot.
`n` is the number of robots.

```java
        Integer[] indices = new Integer[n];
        for (int i = 0; i < n; i++) {
            indices[i] = i;
        }
```
This creates an array of Integer objects, `indices`, where each element is the index of a robot. This will be used to sort the robots by position while keeping track of their original indices.

```java
        // Sort indices based on positions
        Arrays.sort(indices, (a, b) -> positions[a] - positions[b]);
```
This sorts the `indices` array based on the positions of the robots. The lambda expression `(a, b) -> positions[a] - positions[b]` is a comparator that compares robots by their positions. After this step, `indices` contains the indices of robots sorted by their positions.

```java
        Deque<Integer> stack = new ArrayDeque<>();
        boolean[] eliminated = new boolean[n];
```
- `stack` is used to keep track of robots moving right ('R'). We use a Deque for efficient push and pop operations.
- `eliminated` is a boolean array to mark which robots have been eliminated in collisions.

```java
        for (int index : indices) {
            if (directions.charAt(index) == 'L') {
```
This loop iterates through the sorted indices. For each robot, it first checks if it's moving left ('L').

```java
                while (!stack.isEmpty() && !eliminated[index]) {
                    int top = stack.peek();
```
If the robot is moving left, it checks for collisions with robots moving right (stored in the stack). It continues this process until either the stack is empty or the current robot is eliminated.

```java
                    if (healths[index] < healths[top]) {
                        eliminated[index] = true;
                        healths[top]--;
                    } else if (healths[index] > healths[top]) {
                        stack.pop();
                        eliminated[top] = true;
                        healths[index]--;
                    } else {
                        stack.pop();
                        eliminated[top] = true;
                        eliminated[index] = true;
                        break;
                    }
                }
```
This block handles the collision logic:
- If the left-moving robot has less health, it's eliminated and the right-moving robot loses 1 health.
- If the left-moving robot has more health, the right-moving robot is eliminated, removed from the stack, and the left-moving robot loses 1 health.
- If they have equal health, both are eliminated and the loop breaks.

```java
            } else {
                stack.push(index);
            }
        }
```
If the robot is moving right ('R'), it's simply pushed onto the stack.

```java
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (!eliminated[i]) {
                result.add(healths[i]);
            }
        }
        return result;
    }
}
```
Finally, this creates the result list. It iterates through all robots in their original order, adding the health of non-eliminated robots to the result list.



### Code
```java []
class Solution {
    public List<Integer> survivedRobotsHealths(int[] positions, int[] healths, String directions) {
        int n = positions.length;
        Integer[] indices = new Integer[n];
        for (int i = 0; i < n; i++) {
            indices[i] = i;
        }
        
        // Sort indices based on positions
        Arrays.sort(indices, (a, b) -> positions[a] - positions[b]);
        
        Deque<Integer> stack = new ArrayDeque<>();
        boolean[] eliminated = new boolean[n];
        
        for (int index : indices) {
            if (directions.charAt(index) == 'L') {
                while (!stack.isEmpty() && !eliminated[index]) {
                    int top = stack.peek();
                    if (healths[index] < healths[top]) {
                        eliminated[index] = true;
                        healths[top]--;
                    } else if (healths[index] > healths[top]) {
                        stack.pop();
                        eliminated[top] = true;
                        healths[index]--;
                    } else {
                        stack.pop();
                        eliminated[top] = true;
                        eliminated[index] = true;
                        break;
                    }
                }
            } else {
                stack.push(index);
            }
        }
        
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (!eliminated[i]) {
                result.add(healths[i]);
            }
        }
        return result;
    }
}
```
```python []
from typing import List

class Solution:
    def survivedRobotsHealths(self, positions: List[int], healths: List[int], directions: str) -> List[int]:
        n = len(positions)
        indices = sorted(range(n), key=lambda i: positions[i])
        stack = []
        
        for i in indices:
            if directions[i] == 'R':
                stack.append(i)
            else:
                while stack and healths[i] > 0:
                    j = stack[-1]
                    if healths[i] < healths[j]:
                        healths[j] -= 1
                        healths[i] = 0
                    elif healths[i] > healths[j]:
                        healths[i] -= 1
                        healths[j] = 0
                        stack.pop()
                    else:
                        healths[i] = healths[j] = 0
                        stack.pop()
                        break
        
        return [h for h in healths if h > 0]
```
## Approach 2
# Intuition

The problem involves simulating collisions between robots moving on a line. The key insights are:

1. Collisions only occur between robots moving towards each other (one moving left, one moving right).
2. The order of collisions matters, so we need to process them in the correct sequence.
3. We can use a stack-like structure to keep track of potential collisions.
4. By combining position and index information, we can optimize sorting and reduce memory usage.

# Approach

1. Combine position and index information into a single long value for efficient sorting.
2. Sort the robots based on their positions to process them in order from left to right.
3. Use the sorted array itself as a stack-like structure to keep track of robots moving right.
4. For each robot moving left, simulate collisions with robots moving right (from the stack).
5. Update health values based on collision outcomes.
6. Collect the health of surviving robots.

# Complexity

- Time complexity: O(n log n)
  - Sorting the robots takes O(n log n) time.
  - Processing each robot takes O(n) time in the worst case (if all robots collide).
  - The final collection of surviving robots takes O(n) time.
  - Overall, the dominant factor is the sorting, so the time complexity is O(n log n).

- Space complexity: O(n)
  - We use the `robots` array which contains n elements.
  - The answer list also takes up to O(n) space.
  - No additional data structures are used, optimizing space usage.

# Code Explanation

Let's break down the code and explain each part in detail:

```java
class Solution {
    public List<Integer> survivedRobotsHealths(int[] positions, int[] healths, String directions) {
        var robots = new long[positions.length];
        for (int i = 0; i < robots.length; i++) {
            robots[i] = (((long) positions[i]) << 32) | i;
        }
```
- We create a `long` array `robots` to store both position and index information for each robot.
- For each robot, we combine its position (shifted left by 32 bits) with its index using bitwise operations.
- This allows us to sort based on position while keeping track of the original indices.

```java
        Arrays.sort(robots);
```
- We sort the `robots` array, which effectively sorts the robots by their positions.

```java
        int sl = 0;
        for (long posAndIndex : robots) {
            int robot = (int) posAndIndex;
```
- `sl` acts as a stack pointer for our stack-like structure.
- We iterate through the sorted `robots` array.
- `robot` is extracted as the original index of the current robot (lower 32 bits of `posAndIndex`).

```java
            if(directions.charAt(robot) == 'R') {
                robots[sl++] = robot;
            }
```
- If the robot is moving right, we "push" its index onto our stack (which is just the `robots` array itself).
- `sl` is incremented to point to the next empty position in the stack.

```java
            else {
                while(sl != 0 && healths[robot] != 0) {
                    int other = (int) robots[sl - 1];
```
- If the robot is moving left, we simulate collisions with robots moving right (stored in our stack).
- We continue this process while there are robots in the stack and the current robot hasn't been eliminated.
- `other` is the index of the top robot in our stack.

```java
                    if (healths[other] > healths[robot]) {
                        healths[robot] = 0;
                        healths[other]--;
                    } else if (healths[other] < healths[robot]) {
                        healths[other] = 0;
                        healths[robot]--;
                        sl--;
                    } else {
                        healths[other] = 0;
                        healths[robot] = 0;
                        sl--;
                    }
                }
            }
        }
```
- This block handles the collision logic:
  - If the right-moving robot has more health, the left-moving robot is eliminated and the right-moving robot loses 1 health.
  - If the left-moving robot has more health, the right-moving robot is eliminated, removed from the stack, and the left-moving robot loses 1 health.
  - If they have equal health, both are eliminated and the right-moving robot is removed from the stack.

```java
        var ans = new ArrayList<Integer>(positions.length);
        for (int health : healths) {
            if (health > 0) ans.add(health);
        }
        return ans;
    }
}
```
- Finally, we create the result list by iterating through the `healths` array and adding non-zero health values.
- This preserves the original order of the surviving robots.


```java []
class Solution {
    public List<Integer> survivedRobotsHealths(int[] positions, int[] healths, String directions) {
        var robots = new long[positions.length];
        for (int i = 0; i < robots.length; i++) {
            robots[i] = (((long) positions[i]) << 32) | i;
        }
        Arrays.sort(robots);
        int sl = 0;
        for (long posAndIndex : robots) {
            int robot = (int) posAndIndex;
            if(directions.charAt(robot) == 'R') {
                robots[sl++] = robot;
            } else {
                while(sl != 0 && healths[robot] != 0) {
                    int other = (int) robots[sl - 1];
                    if (healths[other] > healths[robot]) {
                        healths[robot] = 0;
                        healths[other]--;
                    } else if (healths[other] < healths[robot]) {
                        healths[other] = 0;
                        healths[robot]--;
                        sl--;
                    } else {
                        healths[other] = 0;
                        healths[robot] = 0;
                        sl--;
                    }
                }
            }
        }
        var ans = new ArrayList<Integer>(positions.length);
        for (int health : healths) {
            if (health > 0) ans.add(health);
        }
        return ans;
    }
}
```
```python []
# This solution isnt based on the approach2 we used for java and other lang
def survivedRobotsHealths(positions: List[int], healths: List[int], directions: str) -> List[int]:
    left, right = [], []
    for i in sorted(range(len(positions)), key=lambda i: positions[i]):
        if directions[i] == 'R':    right.append(i)
        else:
            while right and healths[right[-1]] < healths[i]:
                right.pop()
                healths[i] -= 1
            if not right:   left.append(i)
            elif healths[right[-1]] == healths[i]:    right.pop()
            else:           healths[right[-1]] -= 1
    return [healths[i] for i in sorted(left+right)]


it = iter(stdin)
output = open("user.out","w")
for array in it:
    output.write(dumps(survivedRobotsHealths(loads(array),loads(next(it)),loads(next(it)))).replace(' ', '') + '\
')
exit()
```

```cpp []
#include <vector>
#include <string>
#include <algorithm>

class Solution {
public:
    std::vector<int> survivedRobotsHealths(std::vector<int>& positions, std::vector<int>& healths, std::string directions) {
        int n = positions.size();
        std::vector<long long> robots(n);
        for (int i = 0; i < n; ++i) {
            robots[i] = (static_cast<long long>(positions[i]) << 32) | i;
        }
        std::sort(robots.begin(), robots.end());
        
        int sl = 0;
        for (long long pos_and_index : robots) {
            int robot = pos_and_index & 0xFFFFFFFF;
            if (directions[robot] == 'R') {
                robots[sl++] = robot;
            } else {
                while (sl > 0 && healths[robot] > 0) {
                    int other = robots[sl - 1];
                    if (healths[other] > healths[robot]) {
                        healths[robot] = 0;
                        healths[other]--;
                    } else if (healths[other] < healths[robot]) {
                        healths[other] = 0;
                        healths[robot]--;
                        sl--;
                    } else {
                        healths[other] = healths[robot] = 0;
                        sl--;
                    }
                }
            }
        }
        
        std::vector<int> ans;
        for (int health : healths) {
            if (health > 0) ans.push_back(health);
        }
        return ans;
    }
};

```
```javascript []
/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    const robots = positions.map((pos, i) => BigInt(pos) << 32n | BigInt(i));
    robots.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    
    let sl = 0;
    for (let posAndIndex of robots) {
        const robot = Number(posAndIndex & 0xFFFFFFFFn);
        if (directions[robot] === 'R') {
            robots[sl++] = robot;
        } else {
            while (sl > 0 && healths[robot] > 0) {
                const other = robots[sl - 1];
                if (healths[other] > healths[robot]) {
                    healths[robot] = 0;
                    healths[other]--;
                } else if (healths[other] < healths[robot]) {
                    healths[other] = 0;
                    healths[robot]--;
                    sl--;
                } else {
                    healths[other] = healths[robot] = 0;
                    sl--;
                }
            }
        }
    }
    
    return healths.filter(health => health > 0);
};

```

```go []
func survivedRobotsHealths(positions []int, healths []int, directions string) []int {
    robots := make([]int64, len(positions))
    for i, pos := range positions {
        robots[i] = int64(pos)<<32 | int64(i)
    }
    sort.Slice(robots, func(i, j int) bool { return robots[i] < robots[j] })
    
    sl := 0
    for _, posAndIndex := range robots {
        robot := int(posAndIndex & 0xFFFFFFFF)
        if directions[robot] == 'R' {
            robots[sl] = int64(robot)
            sl++
        } else {
            for sl > 0 && healths[robot] > 0 {
                other := int(robots[sl-1])
                if healths[other] > healths[robot] {
                    healths[robot] = 0
                    healths[other]--
                } else if healths[other] < healths[robot] {
                    healths[other] = 0
                    healths[robot]--
                    sl--
                } else {
                    healths[other], healths[robot] = 0, 0
                    sl--
                }
            }
        }
    }
    
    ans := []int{}
    for _, health := range healths {
        if health > 0 {
            ans = append(ans, health)
        }
    }
    return ans
}
```
