# Easy to Understand Swift DP Solution

**Author:** iCodeForExcellence
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1033684/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1033684/)

---

```
class Solution {
    func minDistance(_ word1: String, _ word2: String) -> Int {
        //Base checks
        if(word1 == word2) {
            return 0
        }
       
        if(word1.count == 0) {
            return word2.count
        }
        
        if(word2.count == 0) {
            return word1.count
        }
        

        var dp = Array(repeating:Array(repeating:0,count:word2.count + 1),count:word1.count + 1)
        
        let arr1 = Array(word1)
        let arr2 = Array(word2)
        for i in 1...arr1.count {
            for j in 1...arr2.count {
                if(arr1[i - 1] == arr2[j - 1]) {
                    dp[i][j] =  dp[i - 1][j - 1] + 1
                }
                else {
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
                }
            }
        }
        let lcsLen = dp[arr1.count][arr2.count]
        
        return arr1.count - lcsLen + arr2.count - lcsLen
}
```