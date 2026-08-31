# PHP

**Author:** stuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/3024856/](https://leetcode.com/problems/hamming-distance/solutions/3024856/)

---

![Screen Shot 2023-01-09 at 8.10.49 AM.png](./images/0.png)


# Code
```
class Solution
{

  /**
   * @param Integer $x
   * @param Integer $y
   * @return Integer
   */
  public function hammingDistance($x, $y)
  {
    $x_bin = sprintf("%08b", $x);
    $y_bin = sprintf("%08b", $y);

    $pad_length = max([
      strlen($x_bin),
      strlen($y_bin),
    ]);

    $x_bin = str_pad($x_bin, $pad_length, '0', STR_PAD_LEFT);
    $y_bin = str_pad($y_bin, $pad_length, '0', STR_PAD_LEFT);

    $hamm_dist  = 0;
    foreach (str_split($x_bin) as $k => $bit) {
      if (!isset($y_bin[$k]) || $bit !== $y_bin[$k]) {
        $hamm_dist++;
      }
    }
    return $hamm_dist;
  }
}
```