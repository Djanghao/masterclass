# PHP - O(1) solution with clear explanation.

**Author:** terrylinooo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3972411/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3972411/)

---

# Approach

## (1)

When we need the sum of the first `n` numbers (i.e., `1 + 2 + ... + n`),  we can directly use the formula for the sum of the first n positive integers.

The array will be:
```php
for ($i = 1; $i <= $n; $i++) {
    $result[] = $i;
}
```
The sum:

```
$n * ($n + 1) / 2
```

## (2)

When `n > half`, we first consider the sum of numbers from `1` to `half`. This is because adding any two numbers from this set would not exceed the target.

The array will be:
```php
for ($i = 1; $i <= $half; $i++) {
    $result[] = $i;
}
```
The sum:
```
 $half * ($half + 1) / 2
```

## (3)

Next, we add numbers starting from `target`. This ensures that when combined with any number from `1` to `half`, it won't result in the sum being the target. We keep adding these numbers until we reach the desired length of `n`.

The array will be:
```php
for ($i = $target; count($result) < $n; $i++) {
    $result[] = $i;
}
```
The sum:

```
($n - $half) * $target + ($n - $half) * ($n - $half - 1) / 2
```

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $target
     * @return Integer
     */
    function minimumPossibleSum($n, $target) {
        $half = intval($target / 2);
        
        if ($n <= $half) {
            // See (1)
            return $n * ($n + 1) / 2;
        }

        // See (2)
        $halfSum = $half * ($half + 1) / 2;

        // See (3)
        $remainSum = ($n - $half) * $target + ($n - $half) * ($n - $half - 1) / 2;
         
        return $halfSum + $remainSum;
    }
}
```