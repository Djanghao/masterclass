# php solution easy

**Author:** ryonbass
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/3232429/](https://leetcode.com/problems/distribute-candies/solutions/3232429/)

---

```
class Solution {

    /**
     * @param Integer[] $candyType
     * @return Integer
     */
    function distributeCandies($candyType) {
        $getCandy = count($candyType) / 2;
        $uniqueCandyType = array_unique($candyType);
        return $getCandy <= count($uniqueCandyType) ? $getCandy : count($uniqueCandyType);
    }
}
```