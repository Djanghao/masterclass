# Beat 100% Swift Solution With Explaintation

**Author:** iCodeForExcellence
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/1174688/](https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/1174688/)

---

```
class Solution {
    func countPalindromicSubsequences(_ S: String) -> Int {
        
        let len = S.count
        var dp = Array(repeating:Array(repeating:0,count:len),count:len)
        var input = Array(S)
        var prev = Array(repeating:0,count:len)
        var mapPrev = [Character:Int]()
        let mod = 1000000007;          
        //filling prev array
        for i in 0..<len {
            let ch = input[i]
            if let entry = mapPrev[ch] {
                prev[i] = entry
            }
            else {
                prev[i] = -1
            }
            mapPrev[ch] = i
        }
                       
        var mapNext = [Character:Int]()

        var next = Array(repeating:0,count:len)
        for i in (0..<len).reversed() {
            let ch = input[i]
            if let entry = mapNext[ch] {
                next[i] = entry
            }
            else {
                next[i] = -1
            }
            mapNext[ch] = i
        }
                       
        for i in 0..<len {
            dp[i][i] = 1
        }
                       
        for dist in 0..<len {
            for i in 0..<(len - dist) {
                var j = i + dist
                if(i == j) {
                    dp[i][j] = 1
                }
                else {
                    let sc = input[i]
                    let ec = input[j]
                    
                    if(sc != ec) {
                        dp[i][j] = dp[i+1][j] + dp[i][j-1] - dp[i+1][j-1]
                    }
                    else {
                        let n = next[i]
                        let p = prev[j] 
                        
                        
                        //if next pos of this element is greater than previous position
                        //then there is no cahracter same as start and end in the middle
                        if(n > p) {
                            dp[i][j] = 2 * dp[i+1][j-1] + 2
                        }
                        
                         //if next pos of this element is equal to prev postion
                        //then there is 1 character same as start and end in the middle
                        else if (n == p) {
                            dp[i][j] = 2 * dp[i+1][j-1] + 1
                            
                        }
                        //if next pos of this element is less to prev postion
                        //then there is more than character same as start and end in the middle
                        else {
                            dp[i][j] =  2 * dp[i+1][j-1] - dp[n+1][p-1]
                        }
                    }
                }
                dp[i][j] = dp[i][j] < 0 ? dp[i][j] + 1000000007 : dp[i][j] % 1000000007
                
                
            }
        }
                       
        return dp[0][len-1]
        
        
    }
}
```