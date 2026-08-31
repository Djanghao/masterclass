# Simple iterative DP Java solution with explanation

**Author:** shaka_shadows
**Votes:** 202
**Link:** [https://leetcode.com/problems/scramble-string/solutions/29396/](https://leetcode.com/problems/scramble-string/solutions/29396/)

---

Explanation in code itself. The iterative version of the idea is considerably slower than the recursive simply because here we consider all possible states, while the recursive will only compute required states as it founds them. Time complexity of both is, in any case, the same.
    
    public class Solution {
    	public boolean isScramble(String s1, String s2) {
    		if (s1.length() != s2.length()) return false;
    		int len = s1.length();
    		/**
    		 * Let F(i, j, k) = whether the substring S1[i..i + k - 1] is a scramble of S2[j..j + k - 1] or not
    		 * Since each of these substrings is a potential node in the tree, we need to check for all possible cuts.
    		 * Let q be the length of a cut (hence, q < k), then we are in the following situation:
    		 * 
    		 * S1 [   x1    |         x2         ]
    		 *    i         i + q                i + k - 1
    		 * 
    		 * here we have two possibilities:
    		 *      
    		 * S2 [   y1    |         y2         ]
    		 *    j         j + q                j + k - 1
    		 *    
    		 * or 
    		 * 
    		 * S2 [       y1        |     y2     ]
    		 *    j                 j + k - q    j + k - 1
    		 * 
    		 * which in terms of F means:
    		 * 
    		 * F(i, j, k) = for some 1 <= q < k we have:
    		 *  (F(i, j, q) AND F(i + q, j + q, k - q)) OR (F(i, j + k - q, q) AND F(i + q, j, k - q))
    		 *  
    		 * Base case is k = 1, where we simply need to check for S1[i] and S2[j] to be equal 
    		 * */
    		boolean [][][] F = new boolean[len][len][len + 1];
    		for (int k = 1; k <= len; ++k)
    			for (int i = 0; i + k <= len; ++i)
    				for (int j = 0; j + k <= len; ++j)
    					if (k == 1)
    						F[i][j][k] = s1.charAt(i) == s2.charAt(j);
    					else for (int q = 1; q < k && !F[i][j][k]; ++q) {
    						F[i][j][k] = (F[i][j][q] && F[i + q][j + q][k - q]) || (F[i][j + k - q][q] && F[i + q][j][k - q]);
    					}
    		return F[0][0][len];
    	}
    }