# PHP

**Author:** stuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/3056070/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/3056070/)

---

![Screen Shot 2023-01-15 at 3.09.30 PM.png](./images/0.png)


# Code
```
class Solution
{

  /**
   * @param int $num
   * @return Boolean
   */
  function sumOfNumberAndReverse($num)
  {

    if ($num === 0) {
      return true;
    }


    for ($i = 0; $i < $num; $i++) {
      $i_r = strrev((string) $i);
      if (($i + $i_r) === $num) {
        return true;
      }
    }
    return false;
  }
}
```