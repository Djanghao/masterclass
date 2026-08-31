# Simple BFS Solution | ✅Beats 100% | Breadth-first-search | C++| Java | Python | JavaScript

**Author:** BijoySingh7
**Votes:** 22
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/6080641/](https://leetcode.com/problems/sliding-puzzle/solutions/6080641/)

---


---

# \u2B06\uFE0F Upvote if it helps \u2B06\uFE0F  

---


## Connect with me on LinkedIn: [Bijoy Sing](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/)

---

###### *Solution in C++, Python, Java, and JavaScript*


```cpp []
class Solution {
public:
    int slidingPuzzle(vector<vector<int>>& board) {
        // Directions for possible swaps based on '0' position
        vector<vector<int>> dir = {{1, 3}, {0, 2, 4}, {1, 5}, {0, 4}, {1, 3, 5}, {2, 4}};
        string target = "123450";
        set<string> vis; // Track visited configurations
        queue<string> q;
        string start = "";

        // Convert 2D board to a single string
        for (auto row : board) {
            for (auto col : row) {
                start += col + '0';
            }
        }

        q.push(start);
        vis.insert(start);
        int step = 0;

        // Perform BFS
        while (!q.empty()) {
            int size = q.size();
            while (size--) {
                string current = q.front();
                q.pop();

                // Check if target is reached
                if (current == target) return step;

                int zero = current.find('0'); // Find position of '0'

                // Generate next moves
                for (auto move : dir[zero]) {
                    string next = current;
                    swap(next[move], next[zero]);
                    if (!vis.count(next)) { // Add unvisited states to the queue
                        vis.insert(next);
                        q.push(next);
                    }
                }
            }
            step++;
        }
        return -1; // Return -1 if target is unreachable
    }
};
```

```python []
class Solution:
    def slidingPuzzle(self, board):
        # Directions for possible swaps based on '0' position
        dir = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]]
        target = "123450"
        vis = set() # Track visited configurations
        q = deque()
        start = ""

        # Convert 2D board to a single string
        for row in board:
            for col in row:
                start += str(col)

        q.append(start)
        vis.add(start)
        step = 0

        # Perform BFS
        while q:
            size = len(q)
            for _ in range(size):
                current = q.popleft()

                # Check if target is reached
                if current == target:
                    return step

                zero = current.find('0') # Find position of '0'

                # Generate next moves
                for move in dir[zero]:
                    next_state = list(current)
                    next_state[zero], next_state[move] = next_state[move], next_state[zero]
                    next_state = ''.join(next_state)
                    if next_state not in vis:  # Add unvisited states to the queue
                        vis.add(next_state)
                        q.append(next_state)
            step += 1
        return -1  # Return -1 if target is unreachable
```

```java []
class Solution {
    public int slidingPuzzle(int[][] board) {
        // Directions for possible swaps based on '0' position
        int[][] dir = {{1, 3}, {0, 2, 4}, {1, 5}, {0, 4}, {1, 3, 5}, {2, 4}};
        String target = "123450";
        Set<String> vis = new HashSet<>(); // Track visited configurations
        Queue<String> q = new LinkedList<>();
        String start = "";

        // Convert 2D board to a single string
        for (int[] row : board) {
            for (int col : row) {
                start += col;
            }
        }

        q.offer(start);
        vis.add(start);
        int step = 0;

        // Perform BFS
        while (!q.isEmpty()) {
            int size = q.size();
            while (size-- > 0) {
                String current = q.poll();

                // Check if target is reached
                if (current.equals(target)) return step;

                int zero = current.indexOf('0'); // Find position of '0'

                // Generate next moves
                for (int move : dir[zero]) {
                    StringBuilder next = new StringBuilder(current);
                    char temp = next.charAt(zero);
                    next.setCharAt(zero, next.charAt(move));
                    next.setCharAt(move, temp);

                    if (!vis.contains(next.toString())) { // Add unvisited states to the queue
                        vis.add(next.toString());
                        q.offer(next.toString());
                    }
                }
            }
            step++;
        }
        return -1; // Return -1 if target is unreachable
    }
}
```

```javascript []
class Solution {
    slidingPuzzle(board) {
        // Directions for possible swaps based on '0' position
        const dir = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
        const target = "123450";
        const vis = new Set(); // Track visited configurations
        const q = [];
        let start = "";

        // Convert 2D board to a single string
        for (let row of board) {
            for (let col of row) {
                start += col;
            }
        }

        q.push(start);
        vis.add(start);
        let step = 0;

        // Perform BFS
        while (q.length > 0) {
            let size = q.length;
            for (let i = 0; i < size; i++) {
                let current = q.shift();

                // Check if target is reached
                if (current === target) return step;

                let zero = current.indexOf('0'); // Find position of '0'

                // Generate next moves
                for (let move of dir[zero]) {
                    let next = current.split('');
                    [next[zero], next[move]] = [next[move], next[zero]];
                    next = next.join('');

                    if (!vis.has(next)) { // Add unvisited states to the queue
                        vis.add(next);
                        q.push(next);
                    }
                }
            }
            step++;
        }
        return -1; // Return -1 if target is unreachable
    }
}
```

---

### Explanation:
1. **Problem Understanding:**
   - You are given a sliding puzzle with a 2x3 grid. The goal is to arrange the grid in the target configuration `"123450"`, where the `0` represents the empty space that can be moved up, down, left, or right.

2. **Approach:**
   - We use **Breadth-First Search (BFS)**, where each state of the board is represented as a string. BFS ensures we find the shortest path to the target configuration.

3. **Steps:**
   - Convert the 2D board into a string for easier manipulation.
   - Use BFS to explore all possible moves. At each state, try to swap the `0` with its adjacent cells.
   - Track visited configurations to avoid revisiting states.
   - Once the target is found, return the number of steps taken.

---

### Complexity Analysis:
- **Time Complexity:**  
   - O(N), where N is the number of possible states (i.e., the number of permutations of the board configuration). In this case, there are at most 720 states for a 2x3 puzzle.

- **Space Complexity:**  
   - O(N), where N is the number of states stored in the queue and the visited set. We store all possible states during the BFS.

---

### *If you have any questions or need further clarification, feel free to drop a comment! \uD83D\uDE0A*

---