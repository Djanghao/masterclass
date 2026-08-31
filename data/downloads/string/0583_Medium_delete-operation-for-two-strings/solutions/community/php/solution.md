# PHP solution | Dynamic Programming

**Author:** nannannanhe
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2150276/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2150276/)

---

The delete operation steps will be (string length of word1 - longest common substring length) + (string length of word2 - longest common substring length), so the problem is how to get the longest common substring's length.

Assume 
$m = strlen($word1), 
$n = strlen($word2)

Create a (m+1)x(n+1) table to record the LCS length.
Table( i, j )'s content is LCS length of $word1[0~(i-1)] (strlen=i) and $word[0~(j-1)] (strlen=j).
Ie., when $word1='food', $word2 = 'money', 
Table(2, 3) is the LCS length of 'fo' and 'mon'.

In the for loop, if $word1[i] == $word2[j], 
the Table(i, j) will be Table(i-1, j-1) +1 (because the substring increases).
If not, the Table(i, j) will be the maximum value between Table(i-1, j) and Table(i, j-1).

Kind of hard to understand, 
try it on pencil and paper to get a better understanding :)

```
class Solution {

    /**
     * @param String $word1
     * @param String $word2
     * @return Integer
     */
    function minDistance($word1, $word2) {
        // find the longest common substring by dp 
        for($i=0;$i<=strlen($word1);$i++){
            for($j=0;$j<=strlen($word2);$j++){
                if($i == 0 || $j == 0){
                    $lcs_length_map[$i][$j] == 0;
                } else {
                    if($word1[$i-1] == $word2[$j-1]){
                        $lcs_length_map[$i][$j] = $lcs_length_map[$i-1][$j-1] +1;
                    }else{
                        $lcs_length_map[$i][$j] = max($lcs_length_map[$i-1][$j], $lcs_length_map[$i][$j-1]);
                    }
                    
                }
            }
        }
        return strlen($word1) + strlen($word2) - (2* $lcs_length_map[strlen($word1)][strlen($word2)]);
    }   
}
```