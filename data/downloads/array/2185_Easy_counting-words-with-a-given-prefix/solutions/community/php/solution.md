# simple solution

**Author:** virensingh616
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5698715/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5698715/)

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
     * @param String[] $words
     * @param String $pref
     * @return Integer
     */
    function prefixCount($words, $pref) {
        
 $cnt=0;
 foreach($words as $val){
     
     if(strpos($val,$pref)===0){
         $cnt++;
     }
  } 
  return $cnt;
    }
}
```