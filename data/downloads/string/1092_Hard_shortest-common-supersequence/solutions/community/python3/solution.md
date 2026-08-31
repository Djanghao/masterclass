# ✔💯 DAY 403 | EASY LCS | 0MS-100% |  | [PYTHON/JAVA/C++] | EXPLAINED  Approach 🆙🆙🆙

**Author:** ManojKumarPatnaik
**Votes:** 38
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/3501177/](https://leetcode.com/problems/shortest-common-supersequence/solutions/3501177/)

---



# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99

# Intuition & Approach

##### \u2022	The shortestCommonSupersequence method takes two strings s1 and s2 as input and returns their shortest common supersequence
##### \u2022	The first finds the longest common subsequence (LCS) of s1 and s2 using the lcs helper method
##### \u2022	The lcs method takes two strings s1 and s2 as input and returns their LCS
##### \u2022	It uses dynamic programming to fill a 2D array dp where dp[i][j] represents the length of the LCS of the first i characters of s1 and the first j characters of s2
##### \u2022 Then backtracks from the bottom right corner of the dp array to find the LCS
##### \u2022	The shortestCommonSupersequence method then merges s1 and s2 with the LCS to create the shortest common supersequence
##### \u2022	It uses a StringBuilder to build the merged string
##### \u2022	The method iterates over the characters of the LCS and adds characters from s1 and s2 until the LCS character is found
##### \u2022	It then adds the LCS character to the merged string
##### \u2022	After all the LCS characters have been added, the method adds any remaining characters from s1 and s2 to the merged string
##### \u2022	The method returns the merged string as the shortest common supersequence
##### \u2022	The approach is to find the LCS of the two input strings and then merge the strings with the LCS to create the shortest common supersequence
##### \u2022	The use of dynamic programming to find the LCS allows for an efficient solution

# Code
```java []
public String shortestCommonSupersequence(String s1, String s2) {
    // find the LCS of s1 and s2
    char lcs[] = lcs(s1,s2).toCharArray();
    int i=0,j=0;
    StringBuilder sb = new StringBuilder();
    // merge s1 and s2 with the LCS
    for(char c:lcs){
        // add characters from s1 until the LCS character is found
        while(s1.charAt(i)!=c) sb.append(s1.charAt(i++));
        // add characters from s2 until the LCS character is found
        while(s2.charAt(j)!=c) sb.append(s2.charAt(j++));
        // add the LCS character
        sb.append(c);
        i++;
        j++;
    }
    // add any remaining characters from s1 and s2
    sb.append(s1.substring(i)).append(s2.substring(j));
    // return the merged string
    return sb.toString();
}

// helper method to find the LCS of two strings
String lcs(String s1,String s2){
    int m = s1.length(),n=s2.length();
    int dp[][] = new int[m+1][n+1];
    // fill the dp array using dynamic programming
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(s1.charAt(i-1)==s2.charAt(j-1)){
                dp[i][j]=1+dp[i-1][j-1];
            }else dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
        }
    }
    // backtrack from the bottom right corner of the dp array to find the LCS
    StringBuilder sb = new StringBuilder();
    int i=m,j=n;
    while(i>0 && j>0){
        if(s1.charAt(i-1)==s2.charAt(j-1)){
            sb.append(s1.charAt(i-1));
            i--;
            j--;
        }else if(dp[i-1][j]>dp[i][j-1]) i--;
        else j--;
    }
    // reverse the LCS string and return it
    return sb.reverse().toString();
}
```
```c++ []
class Solution {
public:
    string shortestCommonSupersequence(string s1, string s2) {
        // find the LCS of s1 and s2
        string lcs = getLCS(s1, s2);
        int i = 0, j = 0;
        string result = "";
        // merge s1 and s2 with the LCS
        for (char c : lcs) {
            // add characters from s1 until the LCS character is found
            while (s1[i] != c) {
                result += s1[i];
                i++;
            }
            // add characters from s2 until the LCS character is found
            while (s2[j] != c) {
                result += s2[j];
                j++;
            }
            // add the LCS character
            result += c;
            i++;
            j++;
        }
        // add any remaining characters from s1 and s2
        result += s1.substr(i) + s2.substr(j);
        // return the merged string
        return result;
    }

    // helper method to find the LCS of two strings
    string getLCS(string s1, string s2) {
        int m = s1.length(), n = s2.length();
        vector<vector<int>> dp(m+1, vector<int>(n+1));
        // fill the dp array using dynamic programming
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1[i-1] == s2[j-1]) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                } else {
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        // backtrack from the bottom right corner of the dp array to find the LCS
        string lcs = "";
        int i = m, j = n;
        while (i > 0 && j > 0) {
            if (s1[i-1] == s2[j-1]) {
                lcs = s1[i-1] + lcs;
                i--;
                j--;
            } else if (dp[i-1][j] > dp[i][j-1]) {
                i--;
            } else {
                j--;
            }
        }
        return lcs;
    }
};
```
```python []
class Solution:
    def shortestCommonSupersequence(self, s1: str, s2: str) -> str:
        # find the LCS of s1 and s2
        lcs = self.getLCS(s1, s2)
        i, j = 0, 0
        result = ""
        # merge s1 and s2 with the LCS
        for c in lcs:
            # add characters from s1 until the LCS character is found
            while s1[i] != c:
                result += s1[i]
                i += 1
            # add characters from s2 until the LCS character is found
            while s2[j] != c:
                result += s2[j]
                j += 1
            # add the LCS character
            result += c
            i += 1
            j += 1
        # add any remaining characters from s1 and s2
        result += s1[i:] + s2[j:]
        # return the merged string
        return result

    # helper method to find the LCS of two strings
    def getLCS(self, s1: str, s2: str) -> str:
        m, n = len(s1), len(s2)
        dp = [[0] * (n+1) for _ in range(m+1)]
        # fill the dp array using dynamic programming
        for i in range(1, m+1):
            for j in range(1, n+1):
                if s1[i-1] == s2[j-1]:
                    dp[i][j] = 1 + dp[i-1][j-1]
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        # backtrack from the bottom right corner of the dp array to find the LCS
        lcs = ""
        i, j = m, n
        while i > 0 and j > 0:
            if s1[i-1] == s2[j-1]:
                lcs = s1[i-1] + lcs
                i -= 1
                j -= 1
            elif dp[i-1][j] > dp[i][j-1]:
                i -= 1
            else:
                j -= 1
        return lcs
```

# Complexity
- Time complexity:o(n2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:o(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# optimal 
```java []
    public String shortestCommonSupersequence(String s1, String s2) {
    // find the LCS of s1 and s2
    int m = s1.length(),n=s2.length();
    int dp[][] = new int[m+1][n+1];
    // fill the dp array using dynamic programming
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(s1.charAt(i-1)==s2.charAt(j-1)){
                dp[i][j]=1+dp[i-1][j-1];
            }else dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
        }
    }
    // backtrack from the bottom right corner of the dp array to find the LCS
    StringBuilder sb = new StringBuilder();
    int i=m,j=n;
    while(i>0 && j>0){
        if(s1.charAt(i-1)==s2.charAt(j-1)){
            sb.append(s1.charAt(i-1));
            i--;
            j--;
        }else if(dp[i-1][j]>dp[i][j-1]){//shrink s1
        sb.append(s1.charAt(i-1));
         i--;
        }else{
            sb.append(s2.charAt(j-1));
         j--;
        }
    }
    while(i>0){//remaing 1 element in s1
    sb.append(s1.charAt(i-1));
         i--;
    }
     while(j>0){
    sb.append(s2.charAt(j-1));
         j--;
    }
    // reverse the LCS string and return it
    return sb.reverse().toString();
}
```


![BREUSELEE.webp](./images/0.webp)
![image.png](./images/1.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A