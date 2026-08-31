# [PHP] Serialize / Deserialize using strlen + separator + string as the format

**Author:** venkatrag1
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/4117037/](https://leetcode.com/problems/encode-and-decode-strings/solutions/4117037/)

---

# Approach
For each string, append to a encoded string using string length + separator + string as the format.

During decode substring from start to char before # to get length, extract the string using this length and then set start to next character after the end of the length


# Complexity
- Time complexity:
O(n) for encode and decode 

- Space complexity:
O(n) for encode and decode 

# Code
```
class Codec {
    /**
     * @param String[] $strs
     * @return String
     */
    function encode($strs) {
        $enc_str = "";
        foreach($strs as $s) {
            $enc_str .= strval(strlen($s)) . "#" . $s;
        }
        return $enc_str;
    }
    
    /**
     * @param String $s
     * @return String[]
     */
    function decode($s) {
        $i = 0;
        $dec_str = array();
        while ($i < strlen($s)) {
            $j = $i;
            while (isset($s[$j]) && $s[$j] != "#") {
                $j++;
            }
            $len = intval(substr($s, $i, $j-$i));
            $str = substr($s, $j+1, $len);
            array_push($dec_str, $str);
            $i = $j + 1 + $len;
        }
        return $dec_str;
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * $obj = Codec();
 * $s = $obj->encode($strs);
 * $ans = $obj->decode($s);
 */
```