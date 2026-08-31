# C# Solution for Freedom Trail Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/freedom-trail/solutions/5077481/](https://leetcode.com/problems/freedom-trail/solutions/5077481/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to recursively explore all possible rotations of the ring for each character of the key, memoizing the results to avoid redundant calculations.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	The function DFS recursively tries all possible rotations of the ring for each character of the key.
2.	For each character, it calculates the minimum steps required by considering all occurrences of that character in the ring.
3.	It memoizes the results to avoid redundant calculations.
4.	The function RotateRing rotates the ring accordingly for each recursive call.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Since we memoize the results, the time complexity is reduced significantly compared to brute force.
\u2022	However, in the worst case, where all characters in the key are unique and occur at all positions in the ring, the time complexity could still be exponential.
\u2022	Overall, the time complexity is still relatively high, possibly exponential, but reduced due to memoization

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space complexity is dominated by the memoization dictionary, which can grow up to O(n * m), where n is the length of the ring and m is the length of the key.
\u2022	Additionally, the recursion stack may also contribute to the space complexity.
\u2022	Overall, the space complexity is O(n * m).

# Code
```
public class Solution {
    public int FindRotateSteps(string ring, string key) {
        Dictionary<string, int> memo = new Dictionary<string, int>();
        return DFS(ring, key, 0, memo);
    }

    private int DFS(string ring, string key, int index, Dictionary<string, int> memo) {
        if (index == key.Length) return 0;
        string keyRing = ring + index.ToString(); // Create a unique key for memoization
        if (memo.ContainsKey(keyRing)) return memo[keyRing];
        
        char target = key[index];
        int minSteps = int.MaxValue;
        
        // Find all occurrences of the target character in the ring
        for (int i = 0; i < ring.Length; i++) {
            if (ring[i] == target) {
                int stepsToRotate = Math.Min(i, ring.Length - i); // Calculate steps to rotate
                string rotatedRing = RotateRing(ring, i); // Rotate the ring
                int steps = stepsToRotate + 1 + DFS(rotatedRing, key, index + 1, memo); // Calculate total steps
                minSteps = Math.Min(minSteps, steps);
            }
        }
        
        memo[keyRing] = minSteps; // Memoize the result
        return minSteps;
    }
    
    private string RotateRing(string ring, int steps) {
        return ring.Substring(steps) + ring.Substring(0, steps);
    }
}
```