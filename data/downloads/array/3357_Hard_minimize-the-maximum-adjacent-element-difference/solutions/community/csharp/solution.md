# C# Solution

**Author:** advalas
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6113327/](https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6113327/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I wasnt able to complete this during the contest a few weeks ago but it was bugging me that i didnt finish it. I decided to come back to it and see if i could finish it in C# since nobody else has done that.

# Approach
<!-- Describe your approach to solving the problem. -->
The algorithm processes the input array in two main passes:
First pass: Calculates initial values
Second pass: Handles sequences of -1 values
## First Pass
In the first loop, the function iterates through adjacent pairs of elements in the array and does the following:
If both elements are positive, it updates maxAdj with the maximum absolute difference between adjacent positive elements.
If at least one element is positive, it updates minA (minimum of positive elements) and maxB (maximum of positive elements).
## Second Pass
The second loop is more complex and handles sequences of -1 values in the array:
It identifies sequences of -1 values.
For each sequence, it considers the values immediately before and after the sequence (if they exist).
It calculates a local result based on these surrounding values and the length of the -1 sequence.
The global result res is updated with the maximum of these local results.

## Key Variables

- maxAdj: Maximum difference between adjacent positive elements
- minA: Minimum value among positive elements
- maxB: Maximum value among positive elements
- res: Accumulates the maximum result from the second pass
- min2R: A threshold value used in calculations

## Final Result

The function returns the maximum of two values:
maxAdj: The maximum difference between adjacent positive elements
(res + 1) / 2: Half of the maximum result from the second pass, rounded up

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```csharp []
public class Solution {
    public int MinDifference(int[] A) {
    int n = A.Length, maxAdj = 0, minA = int.MaxValue, maxB = 0;
    for (int i = 0; i < n - 1; ++i) {
            int a = A[i], b = A[i + 1];
            if (a > 0 && b > 0) {
                maxAdj = Math.Max(maxAdj, Math.Abs(a - b));
            }
            else if (a > 0 || b > 0) {
                minA = Math.Min(minA, Math.Max(a, b));
                maxB = Math.Max(maxB, Math.Max(a, b));
            }
        }

        int res = 0, min2R = (maxB - minA + 2) / 3 * 2;
        for (int i = 0; i < n; ++i) {
            if ((i > 0 && A[i - 1] == -1) || A[i] > 0) continue;

            int j = i;

            while (j < n && A[j] == -1) {
                j++;
            }

            int a = int.MaxValue, b = 0;

            if (i > 0) {
                a = Math.Min(a, A[i - 1]);
                b = Math.Max(b, A[i - 1]);
            }

            if (j < n) {
                a = Math.Min(a, A[j]);
                b = Math.Max(b, A[j]);
            }

            if (j - i == 1) {
                res = Math.Max(res, Math.Min(maxB - a, b - minA));
            }

            else {
                res = Math.Max(res, Math.Min(maxB - a, Math.Min(b - minA, min2R)));
            }
        }
        return Math.Max(maxAdj, (res + 1) / 2);
    }
}
```