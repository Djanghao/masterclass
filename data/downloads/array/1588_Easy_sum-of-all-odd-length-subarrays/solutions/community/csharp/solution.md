# C# Short solution, but possibly hard to read

**Author:** igorisk89
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/2907095/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/2907095/)

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
```
public class Solution {
    public int SumOddLengthSubarrays(int[] arr) {
        int count = arr.Length;
        int result = 0;
        for(int i = 0; i < arr.Length; i ++)
        {
            int j = (i + 1)*(count - i)/2;
            if((i + 1)*(count - i)%2 != 0) j+=1;
            result += arr[i] * j;
        }
        
        return result;
    }
}
```