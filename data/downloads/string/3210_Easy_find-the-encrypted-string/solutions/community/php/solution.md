# Simple Solution 100 %

**Author:** ael-beka
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/6079847/](https://leetcode.com/problems/find-the-encrypted-string/solutions/6079847/)

---

class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return String
     */
    function getEncryptedString($s, $k){

        $i = 0;
        $res_s = "";
        $len = strlen($s);

        while ($i < $len)
        {
            $res_s .= $s[($i + $k) % $len];
            $i++;
        }
        return $res_s;
        
    }
}
```