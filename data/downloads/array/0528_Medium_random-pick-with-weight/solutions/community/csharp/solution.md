# C#, beats 99.20% (Time and space complexities: O(n))

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/5668495/](https://leetcode.com/problems/random-pick-with-weight/solutions/5668495/)

---


```csharp []
using System;

public class Solution {
    private int[] prefixSums;
    private Random random;

    public Solution(int[] w) {
        int n = w.Length;
        prefixSums = new int[n];
        prefixSums[0] = w[0];
        
        // Compute the prefix sums
        for (int i = 1; i < n; i++) {
            prefixSums[i] = prefixSums[i - 1] + w[i];
        }
        
        random = new Random();
    }

    public int PickIndex() {
        int target = random.Next(1, prefixSums[^1] + 1);
        
        // Binary search for the target
        int left = 0, right = prefixSums.Length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (prefixSums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
}

```