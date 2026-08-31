# C# matrix exponentiation

**Author:** ConnectedPuddle
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5973573/](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5973573/)

---

# Intuition

The positions of letters within a string do not matter; only their counts do.

The initial state of counts of each letter in `s` can be represented as a $1 \	imes 26$ matrix $A$.

The transformation can be represented as a $26 \	imes 26$ matrix $B$.

The goal is to find the sum of the elements in the $1 \	imes 26$ matrix $A B^t$.

e.g. for `nums`=$[6,6,8,1,9,9,10,3,9,4,8,5,2,8,10,2,6,8,2,3,3,7,2,6,4,2]$ the transformation matrix is:

0 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
0 0 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 0 0 0 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 
1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 
1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 
1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 


# Complexity
- Time complexity: $O(n + log(t))$

- Space complexity: $O(1)$

# Code
```csharp []
public class Solution {
    public int LengthAfterTransformations(string s, int t, IList<int> nums) {
        int p = 1_000_000_007;
        int n = s.Length;
        long[] initial = new long[26];
        for (int i = 0; i < n; i++)
        {
            initial[s[i] - 'a']++;
        }
        long[,] matrix = new long[26, 26];
        for (int row = 0; row < 26; row++)
        {
            int col = (row + 1) % 26;
            for (int i = 0; i < nums[row]; i++)
            {
                matrix[row, (col+i)%26] = 1;
            }
        }
        matrix = Exp(matrix, t);
        long result = 0;
        for (int col = 0; col < 26; col++)
        {
            for (int k = 0; k < 26; k++)
            {
                result += initial[k] * matrix[k, col];
                result %= p;
            }
        }
        return (int)result;

        long[,] Exp(long[,] m, int exp)
        {
            long[,] result = new long[26, 26];
            for (int i = 0; i < 26; i++)
            {
                result[i, i] = 1;
            }
            for (int i = exp; i > 0; i /= 2)
            {
                if (i % 2 == 1)
                {
                    result = Mult(result, m);
                }
                m = Mult(m, m);
            }
            return result;
        }
        
        long[,] Mult(long[,] m1, long[,] m2)
        {
            long[,] result = new long[26, 26];
            for (int i = 0; i < 26; i++)
            {
                for (int j = 0; j < 26; j++)
                {
                    for (int k = 0; k < 26; k++)
                    {
                        result[i, j] += m1[i, k] * m2[k, j];
                        result[i, j] %= p;
                    }
                }
            }
            return result;
        }
    }
}
```