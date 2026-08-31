# 💥 Runtime beats 100.00%, Memory beats 78.57% [EXPLAINED]

**Author:** r9n
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/5796472/](https://leetcode.com/problems/divide-chocolate/solutions/5796472/)

---

# Intuition
I have to divide a chocolate bar into pieces so that the smallest piece I get is as large as possible. To do this, I\u2019ll use binary search to find the maximum possible minimum sweetness of any piece.

# Approach
Binary Search: I search for the largest possible minimum sweetness between 1 and the total sweetness divided by the number of pieces.

Feasibility Check: For each sweetness value, I check if I can cut the chocolate into enough pieces where each piece has at least that sweetness. If yes, I try a higher sweetness; otherwise, I try lower.

# Complexity
- Time complexity:
O(n log S): n is the number of chocolate chunks, and S is the total sweetness. This comes from binary search (log S) and checking each possible division (O(n)).

- Space complexity:
O(1): Only a few variables are used for calculations, no extra space proportional to input size.

# Code
```csharp []
public class Solution {
    public int MaximizeSweetness(int[] sweetness, int k) {
        int low = 1, high = sweetness.Sum() / (k + 1);
        
        while (low < high) {
            int mid = (low + high + 1) / 2;
            if (CanDivide(sweetness, k, mid)) {
                low = mid;  // We try to maximize the minimum sweetness
            } else {
                high = mid - 1;
            }
        }
        
        return low;
    }

    private bool CanDivide(int[] sweetness, int k, int minSweetness) {
        int pieces = 0, currentSum = 0;
        
        foreach (var sweet in sweetness) {
            currentSum += sweet;
            if (currentSum >= minSweetness) {
                pieces++;
                currentSum = 0;  // Start a new piece
            }
        }
        
        return pieces >= k + 1;  // We need at least k+1 pieces
    }
}

```