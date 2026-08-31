# php: only logic+arithmetics

**Author:** V-Isa
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/5715758/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/5715758/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer $money
     * @param Integer $children
     * @return Integer
     */
    function distMoney($money, $children) {
        if ($money < $children || 4 === $money && 1 === $children) {
            return -1;
        }
        $remainingAfterEachGets1 = $money - $children;
        $possibleMaxNumberWih8 = (int)($remainingAfterEachGets1 / 7);
        if (1 > $possibleMaxNumberWih8) {
            return 0;
        }
        if ($children < $possibleMaxNumberWih8) {
            return $children - 1;
        }
        $possibleRemainingMoney = $remainingAfterEachGets1 - ($possibleMaxNumberWih8 * 7);
        if ($children === $possibleMaxNumberWih8) {
            return 0 === $possibleRemainingMoney ? $possibleMaxNumberWih8 : $possibleMaxNumberWih8 - 1;
        }
        $childrenWithLessThan8 = $children - $possibleMaxNumberWih8;
        if (3 === $possibleRemainingMoney && 1 === $childrenWithLessThan8) {
            return $possibleMaxNumberWih8 - 1;
        }
        return $possibleMaxNumberWih8;
    }
}
```