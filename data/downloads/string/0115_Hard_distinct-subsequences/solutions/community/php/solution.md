# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 4
**Link:** [https://leetcode.com/problems/distinct-subsequences/solutions/2040129/](https://leetcode.com/problems/distinct-subsequences/solutions/2040129/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
public int numDistinct(String S, String T) {
    // array creation
    int[][] mem = new int[T.length()+1][S.length()+1];

    // filling the first row: with 1s
    for(int j=0; j<=S.length(); j++) {
        mem[0][j] = 1;
    }
    
    // the first column is 0 by default in every other rows but the first, which we need.
    
    for(int i=0; i<T.length(); i++) {
        for(int j=0; j<S.length(); j++) {
            if(T.charAt(i) == S.charAt(j)) {
                mem[i+1][j+1] = mem[i][j] + mem[i+1][j];
            } else {
                mem[i+1][j+1] = mem[i+1][j];
            }
        }
    }
    
    return mem[T.length()][S.length()];
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    int numDistinct(string s, string t) {
	//we use unsigned int because there is a case with a quite large data
        vector<vector<unsigned int>> dp(t.size() + 1, vector<unsigned int>(s.size() + 1));
        
		//set as default value of  the first line as 1
        for (int j = 0; j <= s.size(); j++)dp[0][j] = 1;

//logic of the loop is above
        for (int i = 1; i <= t.size(); i++) {
            for (int j = 1; j <= s.size(); j++) {

					if (t[i - 1] == s[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
                }
                else {
                    dp[i][j] = dp[i][j - 1];
                }
            }
        }
        return dp[dp.size() - 1][dp[0].size() - 1];
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        ## RC ##
		## APPROACH : DP ##
		## LOGIC ##
		#	1. Point to be noted, empty seq is also subsequence of any sequence i.e "", "" should return 1. so we fill the first row accordingly
		#	2. if chars match, we get the maximum of [diagonal + upper, upper + 1] (Try below example)
		#	3. if no match, we pull the upper value
		
        ## EXAMPLE : "axacccax" "aca"	##
		## STACK TRACE ##
        # [      ""  a  c  a
        #     "" [1, 0, 0, 0], 
        #     a  [1, 1, 0, 0], 
        #     x  [1, 1, 0, 0], 
        #     a  [1, 2, 0, 0], 
        #     c  [1, 2, 2, 0], 
        #     c  [1, 2, 4, 0], 
        #     c  [1, 2, 6, 0], 
        #     a  [1, 3, 6, 6], 
        # ]
        
		## TIME COMPLEXITY : O(MxN) ##
		## SPACE COMPLEXITY : O(MxN) ##

        dp = [[0] * (len(t)+1) for _ in range(len(s)+1)]
        
        for k in range(len(dp)):
            dp[k][0] = 1
        
        for i in range(1, len(dp)):
            for j in range(1, len(dp[0])):
                if(s[i-1] == t[j-1] and dp[i-1][j-1]):
                    dp[i][j] = max(dp[i-1][j-1] + dp[i-1][j], dp[i-1][j]+1)
                else:
                    dp[i][j] = dp[i-1][j]
        # print(dp)
        return dp[-1][-1]
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var numDistinct = function(s, t) {
    
    //Create DP array containig possible results for each char in t
    let dp = Array(t.length+1).fill(0);
    
    //Base case - empty string 1 result
    dp[0] = 1;
    
    //Iterate s string
    for (let i = 0; i < s.length; i++) {
        //Iterate t string (from end to start so we don't process data that we've just entered)
        for (let j = dp.length-1; j >= 0; j--) {
          //Char match  
            if (s[i] === t[j]) {
                //Add this char count to next position
                dp[j+1] += dp[j]
            }
        }
    }
    
    return dp[t.length];
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class Solution {
    fun numDistinct(s: String, t: String): Int {
        val lenS = s.length
        val lenT = t.length
        
        val dp = Array(lenS + 1){ IntArray(lenT + 1) {idxT -> if(idxT == 0) 1 else 0 }}
        for(idxS in 1..lenS){
            for(idxT in 1..lenT){
                dp[idxS][idxT] = if(s[idxS - 1] == t[idxT - 1]){
                    dp[idxS - 1][idxT] + dp[idxS - 1][idxT - 1]
                }else{
                    dp[idxS - 1][idxT]
                }
            }
        }
        
        return dp[lenS][lenT]
    }
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    func numDistinct(_ s: String, _ t: String) -> Int {
        let s = Array(s), t = Array(t)
        var memo = Array(repeating: Array(repeating: -1, count: t.count), count: s.count)
        
        func numDistinct(_ i: Int, _ j: Int) -> Int {
            if j < 0 { return 1 }
            if i < 0 { return 0 }
            
            if memo[i][j] != -1 { return memo[i][j] }
            
            if s[i] != t[j] {
                memo[i][j] = numDistinct(i - 1, j)
            } else {
                memo[i][j] = numDistinct(i - 1, j) + numDistinct(i - 1, j - 1)
            }
            
            return memo[i][j]
        }
        
        return numDistinct(s.count - 1, t.count - 1)
    }

}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***