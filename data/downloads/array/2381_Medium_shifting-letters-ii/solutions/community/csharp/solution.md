# C# intuitive

**Author:** tugushev
**Votes:** 0
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/4405508/](https://leetcode.com/problems/shifting-letters-ii/solutions/4405508/)

---

# Intuition
Calculate the numbers each letter should be shifted then shift

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
    public string ShiftingLetters(string s, int[][] shifts) {
        
        const int FIRST = 0;
        const int LAST = 1;
        const int DIR = 2;

        int[] realShifts = new int[s.Length];

        for (int i = 0; i< shifts.Length; i++)
        {
            for (int j = shifts[i][FIRST]; j<= shifts[i][LAST]; j++)
            {
                if (shifts[i][DIR] == 1)
                {
                    realShifts[j]++;
                }
                else
                {
                    realShifts[j]--;
                }
            }
        }

        char[] arr = s.ToCharArray();

        for(int i=0; i<arr.Length; i++)
        {
            arr[i] = shift(arr[i], realShifts[i]);
        }

        return new string(arr);
    }

    char shift(char c, int shift)
    {

        shift = shift % 26;

        if (c + shift > 'z')
        {
            shift = shift - 26;
        }

        if (c + shift < 'a')
        {
            shift = shift + 26;
        }

        return (char)(c + shift);
    }
}
```