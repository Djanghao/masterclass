# C# Solution for Sliding Puzzle Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/6080700/](https://leetcode.com/problems/sliding-puzzle/solutions/6080700/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem can be represented as a graph traversal problem:
\u2022	Each board configuration is a node in the graph.
\u2022	A valid move (swapping 0 with an adjacent tile) is an edge connecting two nodes.
The goal is to find the shortest path from the initial board configuration to the target configuration ([[1, 2, 3], [4, 5, 0]]). Since we are looking for the shortest path in an unweighted graph, Breadth-First Search (BFS) is the optimal approach.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	State Representation:
	\u2022	Represent the board as a string (e.g., "123450") to simplify comparisons, ensure uniqueness, and use as keys in data structures like queues and sets.
2.	Initial Setup:
	\u2022	Convert the input board to its string representation and store it as the starting state.
	\u2022	Define the target configuration as "123450".
	\u2022	Use a queue for BFS and a visited set to track already explored states.
3.	BFS Traversal:
	\u2022	Start BFS with the initial configuration.
	\u2022	For each state:
	\u2022	Check if it matches the target state. If yes, return the number of moves (steps).
	\u2022	Generate all possible new states by swapping 0 with its adjacent tiles based on its position in the string.
	\u2022	For each new state:
	\u2022	If it hasn\u2019t been visited, mark it as visited and enqueue it for further exploration.
4.	Direction Array:
	\u2022	Use a predefined array to determine valid moves for 0 in the 2x3 grid. This simplifies the logic for generating adjacent states.
5.	Termination:
	\u2022	If the target state is reached, return the number of moves.
	\u2022	If all configurations are explored without finding the target, return -1 (no solution).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1.	State Space:
	\u2022	There are 6! (720) possible configurations of the board, as there are 6 unique tiles (including 0).
	\u2022	BFS explores each state once.
2.	Neighbor Generation:
	\u2022	For each state, up to 4 neighbors can be generated (depending on the position of 0).
3.	Total Complexity:
	\u2022	Exploring 720 states, each with up to 4 neighbors, results in O(720 x 4) = O(720), which is effectively constant because 720 is a fixed value.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1.	Queue:
	\u2022	The queue can hold up to 720 states in the worst case.
2.	Visited Set:
	\u2022	Tracks up to 720 states.
3.	Auxiliary Space:
	\u2022	BFS variables and string manipulations require negligible space.
4.	Total Space Complexity:
	\u2022	O(720) + O(720) = O(720), effectively constant.

# Code
```csharp []
public class Solution {
    public int SlidingPuzzle(int[][] board) {
        string target = "123450";
        string start = string.Join("", board[0]) + string.Join("", board[1]);
        if (start == target) return 0;
        int[][] directions = new int[][] {
            new int[] {1, 3},        
            new int[] {0, 2, 4},     
            new int[] {1, 5},        
            new int[] {0, 4},        
            new int[] {1, 3, 5},     
            new int[] {2, 4}         
        };
        
        Queue<string> queue = new Queue<string>();
        HashSet<string> visited = new HashSet<string>();
        
        queue.Enqueue(start);
        visited.Add(start);
        int steps = 0;
        
        while (queue.Count > 0) {
            int size = queue.Count;
            for (int i = 0; i < size; i++) {
                string current = queue.Dequeue();
                if (current == target) return steps;
                
                int zeroPos = current.IndexOf('0');
                foreach (int nextPos in directions[zeroPos]) {
                    char[] newConfig = current.ToCharArray();
                    newConfig[zeroPos] = newConfig[nextPos];
                    newConfig[nextPos] = '0';
                    string newConfigStr = new string(newConfig);
                    
                    if (!visited.Contains(newConfigStr)) {
                        visited.Add(newConfigStr);
                        queue.Enqueue(newConfigStr);
                    }
                }
            }
            steps++;
        }
        return -1;
    }
}
```