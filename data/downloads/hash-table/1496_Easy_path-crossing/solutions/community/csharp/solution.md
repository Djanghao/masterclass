# ✅82.83%🔥Easy Solution🔥with explanation🔥

**Author:** MrAke
**Votes:** 58
**Link:** [https://leetcode.com/problems/path-crossing/solutions/4443588/](https://leetcode.com/problems/path-crossing/solutions/4443588/)

---

![Screenshot 2023-12-23 050842.png](./images/0.png)

---
# Intuition
#### We can use a set to keep track of the visited positions while traversing the given path. If at any point, the current position has already been visited, then the path crosses itself.
---
# Approach
#### 1. Initialize the current position ($$x, y$$) to (0, 0) and create an empty set $$visited$$ to store visited positions.
#### 2. Traverse each character in the given $$path$$.
#### 3. Update the current position based on the direction specified by the character (`N`, `S`, `E`, or `W`).
#### 4. Check if the current position is in the set of visited positions. If it is, return `True` as the path has crossed itself.
#### 5. Add the current position to the set of visited positions.
#### 6. If the traversal completes without finding any crossing, return `False`.
---
# Complexity
- ## Time complexity:
#### $$O(n)$$, where n is the length of the input path. We traverse the path once.
- ## Space complexity:
#### $$O(n)$$, in the worst case, where all positions are unique, and we need to store them in the set.
---
# Code
```python []
class Solution:
    def isPathCrossing(self, path: str) -> bool:
        x, y = 0, 0
        visited = {(0, 0)}

        for direction in path:
            x += 1 if direction == 'E' else (-1 if direction == 'W' else 0)
            y += 1 if direction == 'N' else (-1 if direction == 'S' else 0)

            if (x, y) in visited:
                return True

            visited.add((x, y))

        return False
```
```C++ []
struct pair_hash {
    template <class T1, class T2>
    std::size_t operator () (const std::pair<T1, T2>& p) const {
        auto h1 = std::hash<T1>{}(p.first);
        auto h2 = std::hash<T2>{}(p.second);

        return h1 ^ h2;
    }
};

class Solution {
public:
    bool isPathCrossing(std::string path) {
        int x = 0, y = 0;
        std::unordered_set<std::pair<int, int>, pair_hash> visited;
        visited.insert({0, 0});

        for (char direction : path) {
            x += (direction == 'E') ? 1 : ((direction == 'W') ? -1 : 0);
            y += (direction == 'N') ? 1 : ((direction == 'S') ? -1 : 0);

            if (visited.find({x, y}) != visited.end()) {
                return true;
            }

            visited.insert({x, y});
        }

        return false;
    }
};
```
```javascript []
var isPathCrossing = function(path) {
    let x = 0, y = 0;
    let visited = new Set();
    visited.add("0,0");

    for (let direction of path) {
        if (direction === 'E') {
            x++;
        } else if (direction === 'W') {
            x--;
        } else if (direction === 'N') {
            y++;
        } else if (direction === 'S') {
            y--;
        }

        let currentPos = `${x},${y}`;
        if (visited.has(currentPos)) {
            return true;
        }

        visited.add(currentPos);
    }

    return false;
};
```
```java []
public class Solution {
    public boolean isPathCrossing(String path) {
        int x = 0, y = 0;
        Set<String> visited = new HashSet<>();
        visited.add("0,0");

        for (char direction : path.toCharArray()) {
            if (direction == 'E') {
                x++;
            } else if (direction == 'W') {
                x--;
            } else if (direction == 'N') {
                y++;
            } else if (direction == 'S') {
                y--;
            }

            String currentPos = x + "," + y;
            if (visited.contains(currentPos)) {
                return true;
            }

            visited.add(currentPos);
        }

        return false;
    }
}
```
```C# []
public class Solution {
    public bool IsPathCrossing(string path) {
        int x = 0, y = 0;
        HashSet<string> visited = new HashSet<string>();
        visited.Add("0,0");

        foreach (char direction in path) {
            if (direction == 'E') {
                x++;
            } else if (direction == 'W') {
                x--;
            } else if (direction == 'N') {
                y++;
            } else if (direction == 'S') {
                y--;
            }

            string currentPos = $"{x},{y}";
            if (visited.Contains(currentPos)) {
                return true;
            }

            visited.Add(currentPos);
        }

        return false;
    }
}
```
---
![Screenshot 2023-08-20 065922.png](./images/1.png)


