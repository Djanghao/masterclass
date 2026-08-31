# C# Clear O(N) Solution

**Author:** AIP
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/3148214/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/3148214/)

---

# Intuition
We need to find the longest sequence between the closest NO_FORT and MY_FORT elements.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
We can scan the array looking for NO_FORT and MY_FORT elements. To calculate the sequence length we need 2 indexes: previous and current.
Possible pairs:
NO_FORT vs NO_FORT - BAD
NO_FORT vs MY_FORT - GOOD
MY_FORT vs NO_FORT - GOOD
MY_FORT vs MY_FORT - BAD
So we just need to find the max length for GOOD pairs.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    const int NO_FORT = -1;
    const int ENEMY = 0;
    const int MY_FORT = 1;

    public int CaptureForts(int[] forts) {
        int max = 0;
        int previous = -1; // index of previous NO_FORT or MY_FORT 
        for (int i=0; i<forts.Length; i++) {
            if (forts[i] == NO_FORT || forts[i] == MY_FORT) {
                if (previous >= 0 && forts[i] != forts[previous]) 
                    max = Math.Max(i - previous - 1, max);            
                previous = i;
            }
        }
        return max;
    }
}
```