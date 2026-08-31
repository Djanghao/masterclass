# easy brute force solution

**Author:** virensingh616
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/5682513/](https://leetcode.com/problems/unique-email-addresses/solutions/5682513/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param String[] $emails
     * @return Integer
     */
    function numUniqueEmails($emails) {
 
 foreach($emails as $val){
     $mail=explode("@",$val);
     $pos1=strpos($mail[0],"+");
     $str=$mail[0];
       if(isset($pos1) && $pos1!==false){
        $str=substr_replace($mail[0],"",$pos1,strlen($mail[0]));
    }
  
        $str=str_replace(".","",$str);
        $email[$str."@".$mail[1]]=$str."@".$mail[1];
 
 }
        return count($email);
 
    }
}
```