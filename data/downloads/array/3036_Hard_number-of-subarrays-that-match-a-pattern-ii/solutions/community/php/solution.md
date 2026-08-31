# in PHP

**Author:** sswspb
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4841612/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4841612/)

---



# Code
```
class Solution {

   /**
    * @param $nums
    * @param $pattern
    * @return int
    */
   public function countMatchingSubarrays($nums, $pattern) {
      $m = count($pattern);
      $n = count($nums);
      $dp = array();
      for ($i = 0; $i < $n - 1; $i++) {
         if ($nums[$i + 1] == $nums[$i]) {
            $dp[$i] = 0;
         } elseif ($nums[$i + 1] < $nums[$i]) {
            $dp[$i] = -1;
         } else {
            $dp[$i] = 1;
         }
      }
      return $this->KMP($dp, $pattern);
   }

   private function KMP($s, $t) {
      $table = $this->buildNextTable($t);
      $res = 0;
      $i = 0;
      $j = 0;
      while ($i < count($s)) {
         if ($s[$i] == $t[$j]) {
            $i++;
            $j++;
            if ($j == count($t)) {
               $res++;
               $j = $table[$j - 1];
            }
         } else {
            if ($j > 0) {
               $j = $table[$j - 1];
            } else {
               $i++;
            }
         }
      }
      return $res;
   }

   private function buildNextTable($t) {
      $table = array();
      $table[0] = 0;
      $i = 1;
      $j = 0;
      while ($i < count($t)) {
         if ($t[$i] == $t[$j]) {
            $table[$i] = $j + 1;
            $i++;
            $j++;
         } else {
            if ($j > 0) {
               $j = $table[$j - 1];
            } else {
               $table[$i] = 0;
               $i++;
            }
         }
      }
      return $table;
   }
}
```