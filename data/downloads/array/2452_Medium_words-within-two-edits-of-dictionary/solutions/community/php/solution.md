# PHP

**Author:** stuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2837550/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2837550/)

---

![Screen Shot 2022-11-21 at 6.47.59 PM.png](./images/0.png)


# Code
```
class Solution
{

  /**
   * @param String[] $queries
   * @param String[] $dictionary
   * @return String[]
   */
  function twoEditWords($queries, $dictionary)
  {

    $ans = [];
    foreach ($queries as $key => $q_word) {
      $q_word_parts = str_split($q_word);

      foreach ($dictionary as $d_word) {
        $d_word_parts = str_split($d_word);
        $word_diff = array_diff_assoc($q_word_parts, $d_word_parts);
        if (count($word_diff) < 3) {
          $ans[] = $q_word;
          break;
        }
      }
    }
  return $ans;
  }
}
```