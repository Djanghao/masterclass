# Easy Swift Solution with Time Complexity O(K ^ N) and Space Complexity O(K ^ N)

**Author:** debashishdash03
**Votes:** 0
**Link:** [https://leetcode.com/problems/cracking-the-safe/solutions/5828703/](https://leetcode.com/problems/cracking-the-safe/solutions/5828703/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    // Dictionary to store visited nodes
    private var visited = Set<Int>()
    
    // To store the answer sequence
    private var answer = ""
    
    // The modulus for trimming the prefix when moving to the next node
    private var modulus: Int = 0
    
    /**
     * Starts the process to find the sequence that cracks the safe.
     *
     * - Parameters:
     *   - n: The number of digits in the safe's combination
     *   - k: The range of digits from 0 to k-1 that can be used in the combination
     * - Returns: A string representing the minimum length sequence that cracks the safe
     */
    func crackSafe(_ n: Int, _ k: Int) -> String {
        // Calculate the modulus used for creating n-1 length prefixes
        modulus = Int(pow(10.0, Double(n - 1)))
        
        // Start DFS from node 0
        dfs(0, k)
        
        // Append the initial prefix of "0"s to complete the sequence
        for _ in 0..<n-1 {
            answer.append("0")
        }
        
        return answer
    }
    
    /**
     * Performs DFS to find the Eulerian path/circuit in the De Bruijn graph.
     *
     * - Parameters:
     *   - node: The current node in the graph
     *   - k: The range of digits from 0 to k-1
     */
    private func dfs(_ node: Int, _ k: Int) {
        // Try all possible next digits to create an edge from the current node
        for x in 0..<k {
            // Create the new edge by appending digit x to the current node
            let edge = node * 10 + x
            
            // If the edge has not been visited, add it to the visited set
            if visited.insert(edge).inserted {
                // Calculate the next node by removing the oldest digit (modulus)
                let nextNode = edge % modulus
                // Perform DFS on the next node
                dfs(nextNode, k)
                // Append the current digit to the answer
                answer.append("\\(x)")
            }
        }
    }
}
```