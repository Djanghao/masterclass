# Sliding window - Find the window with fewest zeros (also the minimum swaps need to do)

**Author:** dungtranm65
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/5813746/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/5813746/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- If we try to fill in the more condensed area of ones, we will likely group all 1s with fewer swaps:
    Examples: 
  - For this ...1,0,1,0,1,1 ... we only need to swaps 2 zeros with 1 to have 6 ones together
  - But for this ...1,0,0,1,1,0... we need to swaps 3 zeros with 1 to have 6 ones together
- Solution:
  - Sliding window
  - Count how many ones to identify the max window of 1s we need to achive
  - Using sliding window for every window of size = Ones
     - Within each window, count the number of zeros, this is also the swaps to make the entire window to become all 1s 
     - Moving the window till the end and choose the minimum one 
                
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MinSwaps(int[] data) {
        int ones = data.Where(e => e == 1).Count();
        int N = data.Length, swaps = 0;

        for (int i = 0; i < ones; i++)
            if (data[i] == 0)
                swaps++;
        int res = swaps;

        for (int l = 1, r = ones; r < N; r++, l++) {
            if (data[l - 1] == 0) swaps--;
            if (data[r] == 0) swaps++;
            res = Math.Min(res, swaps);
        }
        return res;
    }
}
```