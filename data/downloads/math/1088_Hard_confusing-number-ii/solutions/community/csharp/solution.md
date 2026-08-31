# 💥Runtime AND memory beats 100%! [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number-ii/solutions/5778457/](https://leetcode.com/problems/confusing-number-ii/solutions/5778457/)

---

# Intuition
I had to understand how the digits behave when rotated 180 degrees. Digits like 6 and 9 can be flipped, while others, such as 2 and 3, become invalid. A number is confusing if, after rotating each of its digits, the resulting number is valid but different from the original. This led me to focus on two key tasks: generating all valid numbers within the given range and determining if they are "confusing" when rotated.


The challenge is generating these numbers efficiently, avoiding invalid digits, and checking if the rotated number differs from the original. This is where the DFS (Depth-First Search) approach becomes useful: by exploring valid digit combinations, I can build numbers progressively and prune the search when numbers exceed the given upper limit.


# Approach
DFS Generation of Valid Numbers: I use DFS to generate all numbers between 1 and n that consist only of digits that can be rotated (0, 1, 6, 8, 9). The DFS builds numbers by recursively appending valid digits, ensuring the current number is within the range [1, n].


Rotation Check: For each valid number generated, I calculate its rotated version by mapping each digit to its rotated counterpart (6 to 9, 9 to 6, etc.). I ignore leading zeros when interpreting the rotated number. If the rotated number is different from the original, I classify the number as "confusing."


Backtracking and Pruning: DFS naturally lends itself to backtracking. As I build each number, I check if it exceeds n, and if it does, I stop further exploration from that point (pruning). This helps avoid unnecessary computation and keeps the process efficient.


Base Cases:


I skip numbers that start with 0 (except for the number 0 itself), as this leads to incorrect results.
For each valid number, I compare it with its rotated version to see if it's truly "confusing."


# Complexity
- Time complexity:
The time complexity is O(5^k), where k is the number of digits in the input number n. This is because there are 5 possible valid digits (0, 1, 6, 8, 9), and for each position in a number up to n, I can choose one of these 5 digits. This forms a tree-like structure where each level of recursion explores 5 options.


- Space complexity:
The space complexity is O(k), where k is the number of digits in the input number n. This is primarily due to the depth of the recursion stack in the DFS process. Each recursive call handles one digit at a time, so the maximum depth is proportional to the number of digits in n. Additionally, the space needed to store the rotated mappings and to compare numbers is constant and does not depend on the size of n.


# Code
```csharp []
public class Solution {
    // Dictionary to map each valid digit to its rotated counterpart
    private static readonly Dictionary<int, int> rotationMap = new Dictionary<int, int> {
        { 0, 0 }, { 1, 1 }, { 6, 9 }, { 8, 8 }, { 9, 6 }
    };
    
    public int ConfusingNumberII(int n) {
        return DFS(0, 0, n, 1);
    }

    private int DFS(long currentNum, long rotatedNum, int n, int digitPlace) {
        if (currentNum > n) return 0;
        
        // Check if the number is "confusing" (rotated is different)
        int count = (currentNum != rotatedNum && currentNum != 0) ? 1 : 0;

        foreach (var digit in rotationMap.Keys) {
            // Skip leading zero
            if (currentNum == 0 && digit == 0) continue;

            long nextNum = currentNum * 10 + digit;
            if (nextNum > n) break;

            long nextRotated = rotationMap[digit] * digitPlace + rotatedNum;
            count += DFS(nextNum, nextRotated, n, digitPlace * 10);
        }

        return count;
    }
}

```