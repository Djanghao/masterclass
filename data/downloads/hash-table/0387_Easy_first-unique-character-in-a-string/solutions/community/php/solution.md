# PHP 3 liner - runtime beats 100%

**Author:** doctorilla
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/2755620/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/2755620/)

---

![leet.JPG](./images/0.jpeg)


# Code
```
class Solution {

    function firstUniqChar($s) {

        $u = count_chars($s, 1);

        for ($i = 0; $i < strlen($s); $i++) if ($u[ord($s[$i])] == 1) return strpos($s, $s[$i]);

        return -1;
        
    }
}
```