# ✅Beats 100%- C++, JAVA, Python, JavaScript || Easiest Solutions with explanation ||

**Author:** Vivekkrsk
**Votes:** 23
**Link:** [https://leetcode.com/problems/path-crossing/solutions/4443564/](https://leetcode.com/problems/path-crossing/solutions/4443564/)

---


---

# **Please Upvote If It Is Helpfull**

---
# Approach
<!-- Describe your approach to solving the problem. -->

1. **Initialization:**
   - Create an `unordered_set` named `visitedPoints` to track visited coordinates.
   - Initialize `currentX` and `currentY` to 0, representing the starting position.
   - Add the starting point (0, 0) to `visitedPoints`.

2. **Iterate Through Path:**
   - For each direction character in `movementPath`:
     - Update `currentX` and `currentY` based on the direction:
       - 'N': Move one step north (increment `currentY`).
       - 'S': Move one step south (decrement `currentY`).
       - 'E': Move one step east (increment `currentX`).
       - 'W': Move one step west (decrement `currentX`).
     - Check if the new coordinates (`currentX`, `currentY`) are already in `visitedPoints`:
       - If yes, a crossing has occurred, so return `true`.
     - Add the new coordinates to `visitedPoints`.

3. **No Crossing Detected:**
   - If the loop completes without finding any crossings, return `false`.

4. **Key Idea:**
   - The code efficiently tracks visited points using a set, enabling fast lookups to detect crossings.
   - It simulates the movement along the path, updating coordinates and checking for previously visited points.

5. **Time and Space Complexity:**
   - Time complexity: O(n), where n is the length of the movement path.
   - Space complexity: O(n), due to the potential size of the `visitedPoints` set.


# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```C++ []
class Solution {
public:
    bool isPathCrossing(string movementPath) {
        unordered_set<string> visitedPoints;
        int currentX = 0, currentY = 0;
        visitedPoints.insert(to_string(currentX) + "," + to_string(currentY));
        
        for (auto direction : movementPath) {
            if (direction == 'N') ++currentY;
            else if (direction == 'S') --currentY;
            else if (direction == 'E') ++currentX;
            else --currentX;
            
            if (visitedPoints.count(to_string(currentX) + "," + to_string(currentY))) {
                return true;
            }
            
            visitedPoints.insert(to_string(currentX) + "," + to_string(currentY));
        }
        
        return false;
    }
};

```
```JAVA []
import java.util.HashSet;
import java.util.Set;

public class Solution {
    public boolean isPathCrossing(String movementPath) {
        Set<String> visitedPoints = new HashSet<>();
        int currentX = 0, currentY = 0;
        visitedPoints.add(currentX + "," + currentY);

        for (char direction : movementPath.toCharArray()) {
            if (direction == 'N') currentY++;
            else if (direction == 'S') currentY--;
            else if (direction == 'E') currentX++;
            else currentX--;

            String point = currentX + "," + currentY;
            if (visitedPoints.contains(point)) {
                return true;
            }

            visitedPoints.add(point);
        }

        return false;
    }
}


```
```python []
def isPathCrossing(movementPath):
    visitedPoints = set()
    currentX, currentY = 0, 0
    visitedPoints.add((currentX, currentY))

    for direction in movementPath:
        if direction == 'N':
            currentY += 1
        elif direction == 'S':
            currentY -= 1
        elif direction == 'E':
            currentX += 1
        else:
            currentX -= 1

        if (currentX, currentY) in visitedPoints:
            return True

        visitedPoints.add((currentX, currentY))

    return False

```
```javascript []
function isPathCrossing(movementPath) {
    const visitedPoints = new Set();
    let currentX = 0, currentY = 0;
    visitedPoints.add(`${currentX},${currentY}`);

    for (const direction of movementPath) {
        if (direction === 'N') currentY++;
        else if (direction === 'S') currentY--;
        else if (direction === 'E') currentX++;
        else currentX--;

        const point = `${currentX},${currentY}`;
        if (visitedPoints.has(point)) {
            return true;
        }

        visitedPoints.add(point);
    }

    return false;
}

```
```ruby []
def is_path_crossing(movement_path)
    visited_points = Set.new
    current_x, current_y = 0, 0
    visited_points << "#{current_x},#{current_y}"

    movement_path.chars.each do |direction|
        case direction
        when 'N' then current_y += 1
        when 'S' then current_y -= 1
        when 'E' then current_x += 1
        when 'W' then current_x -= 1
        end

        return true if visited_points.include?("#{current_x},#{current_y}")

        visited_points << "#{current_x},#{current_y}"
    end

    false
end


```
```C# []
using System.Collections.Generic;

public class Solution {
    public bool IsPathCrossing(string movementPath) {
        var visitedPoints = new HashSet<string>();
        int currentX = 0, currentY = 0;
        visitedPoints.Add($"{currentX},{currentY}");

        foreach (char direction in movementPath) {
            if (direction == 'N') currentY++;
            else if (direction == 'S') currentY--;
            else if (direction == 'E') currentX++;
            else currentX--;

            string point = $"{currentX},{currentY}";
            if (visitedPoints.Contains(point)) {
                return true;
            }

            visitedPoints.Add(point);
        }

        return false;
    }
}

```
```Go []
package main

import (
    "fmt"
    "strings"
)

func isPathCrossing(movementPath string) bool {
    visitedPoints := map[string]bool{}
    currentX, currentY := 0, 0
    visitedPoints[fmt.Sprintf("%d,%d", currentX, currentY)] = true

    for _, direction := range movementPath {
        switch direction {
        case 'N':
            currentY++
        case 'S':
            currentY--
        case 'E':
            currentX++
        case 'W':
            currentX--
        }

        point := fmt.Sprintf("%d,%d", currentX, currentY)
        if visitedPoints[point] {
            return true
        }

        visitedPoints[point] = true
    }

    return false
}


```
---


---

