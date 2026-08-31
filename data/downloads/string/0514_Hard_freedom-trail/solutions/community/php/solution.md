# Mastering Dynamic Programming: Solving the "Road to Freedom" Puzzle in Fallout 4

**Author:** shoks927
**Votes:** 0
**Link:** [https://leetcode.com/problems/freedom-trail/solutions/5079940/](https://leetcode.com/problems/freedom-trail/solutions/5079940/)

---

**Introduction:**
Dynamic programming is a powerful technique used in computer science and programming to solve complex problems efficiently. In this article, we'll explore the concept of dynamic programming through the lens of a fascinating puzzle encountered in the popular video game Fallout 4. The "Road to Freedom" quest within the game presents players with a challenge reminiscent of dynamic programming, requiring them to decipher a code using a rotating dial. We'll delve into the problem statement, discuss various methodologies and approaches to solving it, and dissect the code implementation in PHP.

**Understanding the Problem:**
In the "Road to Freedom" quest, players encounter a rotating dial called the "Freedom Trail Ring." The objective is to spell out a specific keyword by aligning the characters of the keyword with the characters engraved on the outer ring of the dial. Players can rotate the ring clockwise or anticlockwise to align each character of the keyword and then press a center button to confirm the character selection. The goal is to determine the minimum number of steps required to spell out the entire keyword.

**Dynamic Programming Approach:**
Dynamic programming is a technique used to solve problems by breaking them down into smaller subproblems and solving each subproblem only once, storing the results to avoid redundant computations. This approach is well-suited for the "Road to Freedom" puzzle, where we can consider each character of the keyword as a subproblem and calculate the minimum steps required to align that character with the ring.

**Memoization for Optimal Performance:**
To optimize our dynamic programming solution, we employ memoization, a technique that involves storing the results of expensive function calls and returning the cached result when the same inputs occur again. In our implementation, we use a two-dimensional array to memoize the minimum steps required to spell each character of the keyword from different positions on the ring.

**Exploring the Code Implementation:**
The provided PHP code implements the solution to the "Road to Freedom" puzzle using dynamic programming and memoization. Let's break down the key components of the code:

**Function Signature**:
 The findRotateSteps function takes two parameters: ring, representingthe characters engraved on the outer ring, and key, representing the keyword that needs to be spelled.

Initialization: The code initializes variables to store the lengths of the ring and the keyword, creates a two-dimensional array (dp) for memoization, and constructs a lookup table (positions) to store the positions of each character in the ring.

Dynamic Programming Function: Within the findRotateSteps function, there's a nested function (dfs) responsible for recursive dynamic programming. This function calculates the minimum steps required to spell the keyword from a given position on the ring.

Memoization: The dp array stores the minimum steps required to spell each character of the keyword from different positions on the ring. Before performing any calculations, the code checks if the result is already memoized to avoid redundant computations.

Recursion: The heart of the dynamic programming solution lies in the recursive function dfs. This function explores all possible rotations of the ring to find the optimal alignment for each character of the keyword.

Base Cases: The recursion terminates when the end of the keyword is reached (keyIndex == keyLen). At this point, the function returns 0, indicating that no further steps are needed.

Optimization: Within the recursion, the code calculates the minimum steps required for each possible rotation of the ring, considering both clockwise and anticlockwise movements. It then selects the optimal path with the minimum steps.

Conclusion:
In conclusion, the "Road to Freedom" puzzle in Fallout 4 provides an engaging challenge that can be tackled using dynamic programming techniques. By breaking down the problem into smaller subproblems and employing memoization for optimal performance, we can efficiently determine the minimum number of steps required to spell out a keyword using the rotating dial. The provided PHP implementation showcases the power of dynamic programming in solving real-world problems, whether in video games or other domains of computer science and programming.







# Code
```
class Solution {
    /**
     * @param String $ring
     * @param String $key
     * @return Integer
     */
    function findRotateSteps($ring, $key) {
        $ringLen = strlen($ring);
        $keyLen = strlen($key);
        
        // Create a 2D array to store the minimum steps
        $dp = array_fill(0, $keyLen, array_fill(0, $ringLen, 0));
        
        // Store the positions of each character in the ring for quick lookup
        $positions = [];
        for ($i = 0; $i < $ringLen; $i++) {
            $char = $ring[$i];
            if (!isset($positions[$char])) {
                $positions[$char] = [];
            }
            $positions[$char][] = $i;
        }
        
        // Function to find the minimum steps to spell the key
        $dfs = function ($ringIndex, $keyIndex) use (&$dp, &$ring, &$key, &$ringLen, &$keyLen, &$positions, &$dfs) {
            if ($keyIndex == $keyLen) {
                return 0;
            }
            if ($dp[$keyIndex][$ringIndex] > 0) {
                return $dp[$keyIndex][$ringIndex];
            }
            
            $steps = PHP_INT_MAX;
            $char = $key[$keyIndex];
            foreach ($positions[$char] as $newRingIndex) {
                $clockwise = abs($newRingIndex - $ringIndex);
                $anticlockwise = $ringLen - $clockwise;
                $steps = min($steps, min($clockwise, $anticlockwise) + 1 + $dfs($newRingIndex, $keyIndex + 1));
            }
            
            $dp[$keyIndex][$ringIndex] = $steps;
            return $steps;
        };
        
        // Start the recursion from the beginning of the key
        return $dfs(0, 0);
    }
}

// Example usage:
$solution = new Solution();
echo $solution->findRotateSteps("godding", "gd"); // Output: 4

```