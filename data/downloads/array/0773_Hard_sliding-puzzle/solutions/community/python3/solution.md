# Python | Breadth-First Search (BFS)

**Author:** Khosiyat
**Votes:** 40
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/6080323/](https://leetcode.com/problems/sliding-puzzle/solutions/6080323/)

---

[see the Successfully Accepted Submission](https://leetcode.com/problems/sliding-puzzle/submissions/1462037187/?envType=daily-question&envId=2024-11-25)

# Code
```python3 []
from collections import deque
from typing import List

class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
        # Target state and initial state
        target = "123450"
        start = ''.join(str(num) for row in board for num in row)
        
        # Neighbors map for each index in the 1D representation of the board
        neighbors = {
            0: [1, 3], 1: [0, 2, 4], 2: [1, 5],
            3: [0, 4], 4: [1, 3, 5], 5: [2, 4]
        }
        
        # BFS setup
        queue = deque([(start, 0)])  # (state, moves)
        visited = set()
        visited.add(start)
        
        while queue:
            state, moves = queue.popleft()
            
            # Check if we've reached the target
            if state == target:
                return moves
            
            # Find the index of zero
            zero_index = state.index('0')
            
            # Generate new states by swapping '0' with its neighbors
            for neighbor in neighbors[zero_index]:
                # Convert state to a list for mutation
                new_state = list(state)
                # Swap '0' with the neighbor
                new_state[zero_index], new_state[neighbor] = new_state[neighbor], new_state[zero_index]
                # Convert back to string
                new_state_str = ''.join(new_state)
                
                # If this new state hasn't been visited, add it to the queue
                if new_state_str not in visited:
                    visited.add(new_state_str)
                    queue.append((new_state_str, moves + 1))
        
        # If we exhaust the queue without finding the target
        return -1

```

# Sliding Puzzle Solution

## Steps

### 1. Convert the 2D Board to a 1D String:
- Represent the board state as a single string (e.g., `"412503"`) for easier comparisons and transitions.

### 2. Identify Neighboring States:
- The zero (`0`) can move to an adjacent position on the board. This adjacency depends on the board's layout.
- Predefine a map of possible moves for each index in the 1D array.

### 3. BFS Implementation:
- Use a queue to perform Breadth-First Search (BFS). Each queue entry contains:
  - The current board state.
  - The number of moves taken to reach it.
- Keep track of visited states to avoid processing the same board configuration multiple times.

### 4. Check for the Goal State:
- If the current state matches the solved configuration (`"123450"`), return the number of moves.
- If the queue is exhausted and the goal is not reached, return `-1`.

---

## Explanation of Key Parts

### 1. State Representation:
- Represent the 2D board as a single string for easy manipulation and comparison.

### 2. Neighbors Map:
- Predefine possible moves based on the board layout to avoid calculating valid moves dynamically during BFS.

### 3. BFS Queue:
- Each entry in the queue includes:
  - The current state.
  - The number of moves taken to reach it.

### 4. Visited Set:
- Tracks visited states to prevent processing duplicates.

---

## Complexity

### Time Complexity:
- **O(V + E)**, where:
  - \\(V\\) is the number of possible board states (\\(6! = 720\\)).
  - \\(E\\) is the number of edges (each state has at most 4 neighbors).

### Space Complexity:
- **O(V)** for the visited set and queue.




![image](./images/0.jpeg)