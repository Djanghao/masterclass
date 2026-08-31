# JAVA DP solution - O(m*n)

**Author:** rishabhs72
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-window-subsequence/solutions/1643455/](https://leetcode.com/problems/minimum-window-subsequence/solutions/1643455/)

---

dp[i][j] = max substring length of s1[:j] containing s2[:i] as subsequence. Hence, we will find our answer (min substring) in last row when all the characters of s2 are seen, i.e. i=s2.length() - 1
```
class Solution {
    /**
    	 a, b, c, d,e,b,d,d,e  s1(9)
    b	-1, 1, 2, 3,4,1,2,3,4
    d	-1,-1,-1, 3,4,5,2,3,4
    e	-1,-1,-1,-1,4,5,6,7,4

s2(3)
    */
    public String minWindow(String s1, String s2) {
        int m = s2.length(); //num of rows, smaller string
        int n = s1.length(); //cols, big string
        if(m>n)return "";
        int[][] dp = new int[m][n];
        //dp[i][j] - min len of s1[:j] substring cantaining s2[:i] as subsequence
        for(int[] row: dp)Arrays.fill(row, -1);
        
        //first row
        for(int j=0; j<n; j++){
            if(s1.charAt(j)==s2.charAt(0))dp[0][j] = 1;
            else if(j>0 && dp[0][j-1]!=-1)dp[0][j] = 1+dp[0][j-1];
            //else keep -1 -- no match
        }
        //for(int j=0; j<n; j++)System.out.println(dp[0][j]);
        for(int i=1; i<m; i++){
            for(int j=1; j<n; j++){
                if(s1.charAt(j) == s2.charAt(i)){
                    //System.out.println(i+","+j);
                    //if(j==0)dp[i][j]=1;
                    if(dp[i-1][j-1] != -1)dp[i][j]=1+dp[i-1][j-1];
                }else if(dp[i][j-1]!=-1)dp[i][j] = 1 + dp[i][j-1];//no match some continued
                
            }
        }
        //get min from last row, not -1 though
        int min_len = Integer.MAX_VALUE;
        String result = "";
        for(int j=0; j<n; j++){
            if(dp[m-1][j]!=-1){
                if(dp[m-1][j]<min_len){
                    min_len = dp[m-1][j];
                    System.out.println(min_len);
                    result = s1.substring(j-min_len+1,j+1);
                }
            }
        }
        return result;
    }
}
```