# PHP

**Author:** stuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4164552/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4164552/)

---

![Screen Shot 2023-10-13 at 8.47.46 AM.png](./images/0.png)


# Code
```
class Solution
{

  /**
   * @param int[] $nums
   * @param int $k
   * @return int
   */
  function minOperations($nums, $k)
  {

    $nums = array_reverse($nums);

    $required_collection = array_fill(1, $k, false);



    $hit_count = 0;
    $opt_count = 0;
    foreach ($nums as $key => $value) {
      $opt_count++;


      if (isset($required_collection[$value]) && $required_collection[$value] === false) {
        $required_collection[$value] = true;
        $hit_count++;
        if ($hit_count === $k) {
          return $opt_count;
        }
      }
    }
  }
}
```