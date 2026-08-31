# C#

**Author:** ChangDaze
**Votes:** 1
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/3473785/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/3473785/)

---

# Intuition
simulate
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
simulate and brute force
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:?
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution
        {
            public int[] ExecuteInstructions(int n, int[] startPos, string s)
            {
                int[] result = new int[s.Length];

                for(int i = 0;i<s.Length ;i++)
                {
                    int row = startPos[0];
                    int col = startPos[1];
                    int count = 0;

                    foreach(char c in s.Substring(i, s.Length-i))
                    {
                        if (c == 'R')
                            col++;
                        else if (c == 'L')
                            col--;
                        else if (c == 'U')
                            row--;                        
                        else if (c == 'D')
                            row++;                        

                        if (row >= n || row < 0 || col >= n || col < 0)
                            break;
                        count++;                        
                    }
                    result[i] = count;
                }
                return result;
            }
            
        }
```