# PHP

**Author:** stuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/4105329/](https://leetcode.com/problems/split-with-minimum-sum/solutions/4105329/)

---

![Screen Shot 2023-09-29 at 8.34.46 AM.png](./images/0.png)


# Code
```
class Solution
{

  /**
   * @param Integer $num
   * @return Integer
   */
  function splitNum($num)
  {
    $num_parts = str_split((string)$num);

    sort($num_parts);

    $num_1 = "";
    $num_2 = "";
    foreach ($num_parts as $key => $value) {
      $is_even = ($key % 2 === 0);

      if ($is_even) {
        $num_1 .= $value;
      } else {
        $num_2 .= $value;
      }
    }

    return $num_1 + $num_2;
  }
}
```