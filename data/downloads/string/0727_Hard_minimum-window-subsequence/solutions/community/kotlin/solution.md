# Kotlin - Two Pointers and Dynamic Programming

**Author:** idiotleon
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-window-subsequence/solutions/891713/](https://leetcode.com/problems/minimum-window-subsequence/solutions/891713/)

---

Solutions - [github](https://github.com/An7One/leetcode-solutions-kotlin-an7one/tree/main/src/main/kotlin/com/an7one/leetcode/lvl4/lc0727)

Problems List related to #Subsequence - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_algorithm/dynamic_programming/by_topic/subsequence)
Problem List related to #2DDP - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_algorithm/dynamic_programming/by_dimensions/2_dimensional.txt)
Problem List related to #DP - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_algorithm/dynamic_programming)

Problems List related to #TwoPointers -[github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_technique/n_pointers/by_pointer_amount/2_pointers)

```
/**
 * @author: Leon
 * https://leetcode.com/problems/minimum-window-subsequence/
 *
 * Time Complexity:     O(maxOf(`lenS`, `lenT`)) ~ O(`lenS`)
 * Space Complexity:    O(1)
 *
 * References:
 *  https://leetcode.com/problems/minimum-window-subsequence/discuss/109356/JAVA-two-pointer-solution-(12ms-beat-100)-with-explaination/211042
 */
class Solution {
    fun minWindow(S: String, T: String): String {
        var ans = ""
        // sanity check
        if(S.isEmpty() || T.isEmpty()) return ans
        
        val lenS = S.length
        val lenT = T.length
        
        var idxS = 0
        var idxT = 0
        var len = lenS + 1
        
        while(idxS < lenS){
            if(S[idxS] == T[idxT]){
                ++idxT
             if (idxT == lenT) { // all chars in `CHS_T` have been matched
                    // to check feasibility from left to right of `T`
                    val end = idxS + 1 // `idxS` is the last match index in `CHS_S`/`S`
                    // to check optimization from right to left of T
                    --idxT; // now 'idxT' is the last index in `CHS_T`/`T`
                    while(idxT >= 0){
                        if(S[idxS] == T[idxT]){
                            --idxT
                        }
                        
                        --idxS
                    }
                    
                    ++idxS
                    ++idxT
                    
                    // to record the current smallest candidate
                    if(end - idxS < len){
                        len = end - idxS
                        ans = S.substring(idxS, end) // [idxS, end) is the matching subsequence
                    }
                }
            }
            
            ++idxS
        }
        
        return if(len == lenS + 1) "" else ans
    }
}
```

```
/**
 * https://leetcode.com/problems/minimum-window-subsequence/
 *
 * Time Complexity:     O(`lenT` * `lenS`)
 * Space Complexity:    O(`lenT` * `lenS`)
 *
 * References:
 *  https://leetcode.com/problems/minimum-window-subsequence/discuss/109362/Java-Super-Easy-DP-Solution-(O(mn))
 */
class Solution {
    fun minWindow(S: String, T: String): String {
        var ans = ""
        
        val lenS = S.length
        val lenT = T.length
        
        var idxS = 0
        var idxT = 0
        var len = lenS + 1
        
        while(idxS < lenS){ // all chars in `CHS_T` have been matched
            if(S[idxS] == T[idxT]){
                ++idxT
                
                // to check feasibility from left to right of `T`
                if(idxT == lenT){
                    val end = idxS + 1 // `idxS` is the last match index in `CHS_S`/`S
                    // to check optimization from right to left of T
                    --idxT // now 'idxT' is the last index in `CHS_T`/`T`
                    while(idxT >= 0){
                        if(S[idxS] == T[idxT]){
                            --idxT
                        }
                        
                        --idxS
                    }
                    
                    ++idxS
                    ++idxT
                    
                    // to record the current smallest candidate
                    if(end - idxS < len){
                        len = end - idxS
                        ans = S.substring(idxS, end) // [idxS, end) is the matching subsequence
                    }
                }
            }
            
            
            ++idxS
        }
        
        return if(len == lenS + 1) "" else ans
    }
}
```
