# O(n) Java solution

**Author:** syftalent
**Votes:** 508
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/69362/](https://leetcode.com/problems/ugly-number-ii/solutions/69362/)

---

The idea of this solution is from this page:http://www.geeksforgeeks.org/ugly-numbers/
   
The ugly-number sequence is 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, \u2026
because every number can only be divided by 2, 3, 5, one way to look at the sequence is to split the sequence to three groups as below:

    (1) 1\xd72, 2\xd72, 3\xd72, 4\xd72, 5\xd72, \u2026
    (2) 1\xd73, 2\xd73, 3\xd73, 4\xd73, 5\xd73, \u2026
    (3) 1\xd75, 2\xd75, 3\xd75, 4\xd75, 5\xd75, \u2026
   
We can find that every subsequence is the ugly-sequence itself (1, 2, 3, 4, 5, \u2026) multiply 2, 3, 5. 

Then we use similar merge method as merge sort, to get every ugly number from the three subsequence.    

Every step we choose the smallest one, and move one step after,including nums with same value.

Thanks for this author about this brilliant idea. Here is my java solution

    public class Solution {
        public int nthUglyNumber(int n) {
            int[] ugly = new int[n];
            ugly[0] = 1;
            int index2 = 0, index3 = 0, index5 = 0;
            int factor2 = 2, factor3 = 3, factor5 = 5;
            for(int i=1;i<n;i++){
                int min = Math.min(Math.min(factor2,factor3),factor5);
                ugly[i] = min;
                if(factor2 == min)
                    factor2 = 2*ugly[++index2];
                if(factor3 == min)
                    factor3 = 3*ugly[++index3];
                if(factor5 == min)
                    factor5 = 5*ugly[++index5];
            }
            return ugly[n-1];
        }
    }