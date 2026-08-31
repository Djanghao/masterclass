# Swift - BFS

**Author:** ksmirnovnn
**Votes:** 3
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/5056880/](https://leetcode.com/problems/open-the-lock/solutions/5056880/)

---

This solution uses a breadth-first search (BFS) to find the shortest path to the target. It starts from \u201C0000\u201D and generates all possible combinations by rotating each wheel. If a combination is not in the deadends and has not been visited before, it is added to the queue. The process continues until the target is found or all possible combinations have been visited. The depth of the BFS represents the minimum total number of turns required to open the lock. If the target cannot be reached, the function returns -1.



- Initialization: The function openLock takes two parameters: deadends and target. It initializes a set dead with the deadends, a queue with the initial lock state \u201C0000\u201D, a set visited to keep track of visited states, and a counter depth to count the number of turns.
- Check for Deadend: If the initial state \u201C0000\u201D is in the deadends, it returns -1 because the lock cannot be opened.
- Breadth-First Search (BFS): It performs a BFS starting from the initial state. For each state in the queue, it generates all possible states by rotating each wheel in both directions. If a new state is not in the deadends and has not been visited before, it is added to the queue.
- Target Found: If a state is the target, it returns the current depth, which represents the minimum total number of turns required to open the lock.
- Increase Depth: After visiting all states at the current depth, it increases the depth by 1.
- Target Not Found: If the queue is empty and the target has not been found, it returns -1 because it is impossible to open the lock.


This solution uses a BFS because it always visits states closest to the initial state first, ensuring that the first time it visits the target state, it has taken the minimum total number of turns. The use of sets for the deadends and visited states allows for efficient containment checks. The use of a queue ensures that states are visited in the order they are discovered, which is crucial for the BFS. The depth counter keeps track of the number of turns taken to reach the current state. This is the shortest path problem on a graph where nodes are lock states and edges are valid moves between states. The BFS guarantees to find the shortest path in such a graph. The time complexity of this solution is O(N^2 * A^N + D) where A is the number of digits in our alphabet, N is the number of digits in the lock, and D is the size of the deadends. The first part corresponds to the maximum number of valid turning operations (4 directions * 10000 states), and the second part corresponds to the size of the deadends. The space complexity is O(A^N + D), for the queue and the size of the deadends.

# Code
```
class Solution {
    func openLock(_ deadends: [String], _ target: String) -> Int {
        var dead = Set(deadends)
        var queue = ["0000"]
        var visited = Set<String>()
        var depth = 0

        if dead.contains("0000") {
            return -1
        }

        while !queue.isEmpty {
            for _ in 0..<queue.count {
                let node = queue.removeFirst()
                if node == target {
                    return depth
                }

                for i in 0..<4 {
                    let chars = Array(node)
                    for j in -1...1 where j != 0 {
                        var newChars = chars
                        let num = Int(String(chars[i]))!
                        newChars[i] = Character(String((num + j + 10) % 10))
                        let next = String(newChars)

                        if !dead.contains(next) && !visited.contains(next) {
                            visited.insert(next)
                            queue.append(next)
                        }
                    }
                }
            }
            depth += 1
        }

        return -1
    }
}

```