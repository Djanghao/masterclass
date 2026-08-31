# PHP simple and fast solution without built-in functions

**Author:** oktamovazam1
**Votes:** 5
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/1928828/](https://leetcode.com/problems/first-bad-version/solutions/1928828/)

---

```
/* The isBadVersion API is defined in the parent class VersionControl.
      public function isBadVersion($version){} */

class Solution extends VersionControl {
    /**
     * @param Integer $n
     * @return Integer
     */
    function firstBadVersion($n) {
        $left = 1;
        $right = $n;
        $current = false;
        while($left != $right){
            $current = (int)(($left + $right) / 2);
      if ($this->isBadVersion($current)) {
                $right = $current;
            } else {
                $left = $current + 1;
            }
        }
        return $right;
      
    }
}
```
Please upvote if you like the solution and feel free to ask for more information if you need-