# PHP

**Author:** stuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/3831246/](https://leetcode.com/problems/minimize-string-length/solutions/3831246/)

---

![Screen Shot 2023-07-28 at 9.23.35 PM.png](./images/0.png)


# Code
```
class Solution
{
  /**
   * @param String $s
   * @return Integer
   */
  public function minimizedStringLength($s)
  {
    $s_parts = str_split($s);
    return count(array_unique($s_parts));
  }
}
```