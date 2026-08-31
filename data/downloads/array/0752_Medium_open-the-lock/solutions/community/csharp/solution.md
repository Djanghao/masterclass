# C# Solution for Open the Lock Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/5057271/](https://leetcode.com/problems/open-the-lock/solutions/5057271/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution : using BFS to explore all possible states of the lock while avoiding deadends, and finding the shortest path to the target state.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialize a HashSet to store deadends and visited states, and a Queue for BFS traversal.
2.	Enqueue the initial state \u201C0000\u201D and mark it as visited.
3.	While the queue is not empty, dequeue the current state and explore its neighboring states.
4.	For each wheel of the lock, consider both forward and backward rotations.
5.	Enqueue valid states that are not deadends and mark them as visited.
6.	Repeat until the target state is reached or all possible states are explored.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Similar to the Java solution, the BFS explores all possible states, which is O(10^n).
\u2022	Checking deadends and visited states takes O(1) time.
\u2022	Therefore, the time complexity is O(10^n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	We use HashSet and Queue to store deadends, visited states, and states in the BFS traversal.
\u2022	The space complexity is O(10^n) in the worst case, similar to the Java solution.

# Code
```
public class Solution {
    public int OpenLock(string[] deadends, string target) {
        HashSet<string> deadSet = new HashSet<string>(deadends);
        HashSet<string> visited = new HashSet<string>();
        Queue<string> queue = new Queue<string>();
        queue.Enqueue("0000");
        visited.Add("0000");
        int level = 0;

        while (queue.Count > 0) {
            int size = queue.Count;
            for (int i = 0; i < size; i++) {
                string current = queue.Dequeue();
                if (deadSet.Contains(current)) continue;
                if (current == target) return level;

                for (int j = 0; j < 4; j++) {
                    for (int k = -1; k <= 1; k += 2) {
                        char[] currentArray = current.ToCharArray();
                        int digit = (currentArray[j] - '0' + k + 10) % 10;
                        currentArray[j] = (char) (digit + '0');
                        string next = new string(currentArray);
                        if (!visited.Contains(next) && !deadSet.Contains(next)) {
                            queue.Enqueue(next);
                            visited.Add(next);
                        }
                    }
                }
            }
            level++;
        }
        return -1; // Target not reachable
    }
}
```