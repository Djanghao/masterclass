# Math solution, O(1) space

**Author:** whitehat
**Votes:** 750
**Link:** [https://leetcode.com/problems/unique-paths/solutions/22958/](https://leetcode.com/problems/unique-paths/solutions/22958/)

---

This is a combinatorial problem and can be solved without DP. For mxn grid, robot has to move exactly m-1 steps down and n-1 steps right and these can be done in any order.

For the eg., given in question, 3x7 matrix, robot needs to take 2+6 = 8 steps with 2 down and 6 right in any order. That is nothing but a permutation problem. Denote down as 'D' and right as 'R', following is one of the path :-

D R R R D R R R

We have to tell the total number of permutations of the above given word. So, decrease both m & n by 1 and apply following formula:-

Total permutations = (m+n)! / (m! * n!)

Following is my code doing the same :-

    public class Solution {
        public int uniquePaths(int m, int n) {
            if(m == 1 || n == 1)
                return 1;
            m--;
            n--;
            if(m < n) {              // Swap, so that m is the bigger number
                m = m + n;
                n = m - n;
                m = m - n;
            }
            long res = 1;
            int j = 1;
            for(int i = m+1; i <= m+n; i++, j++){       // Instead of taking factorial, keep on multiply & divide
                res *= i;
                res /= j;
            }
                
            return (int)res;
        }
    }