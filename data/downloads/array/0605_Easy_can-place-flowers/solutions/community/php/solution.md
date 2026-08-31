# ✅ [PHP][JavaScript] 2 Different Approaches

**Author:** akunopaka
**Votes:** 7
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/3318158/](https://leetcode.com/problems/can-place-flowers/solutions/3318158/)

---

## SOLUTION #1
This solution loops through an array of flowerbeds and checks the adjacent elements to determine if a flower can be placed.
It iterates over the flowerbed array and checks if the current index and the two adjacent indices are all 0. If they are, it decreases the number of flowers that need to be placed by 1 and then skips the next index. At the end, it checks if the number of flowers that need to be placed is less than or equal to 0.

*Time complexity*: O(N) where N is the length of the flowerbed array. This is because the algorithm iterates through the entire array once in the loop. 
*Space complexity*: O(1) because no additional space is used. 

```javascript []
var canPlaceFlowers = function (flowerbed, n) {
    flowerbed.unshift(0);
    flowerbed.push(0);
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i - 1] + flowerbed[i] + flowerbed[i + 1] == 0) {
            n--;
            i++;
        }
    }
    return n <= 0;
}
```
```php []
class Solution
{
    function canPlaceFlowers(array $flowerbed, int $n): bool
    {
        array_unshift($flowerbed, 0);
        array_push($flowerbed, 0);
        $flowerbedLength = count($flowerbed);
        for ($i = 1; $i < $flowerbedLength - 1; $i++) {
            if ($flowerbed[$i] + $flowerbed[$i - 1] + $flowerbed[$i + 1] == 0) {
                $n--;
                $i++;
            }
            if ($n <= 0) return true;
        }
        return $n <= 0;
    }
}
```


## SOLUTION #2 
The approach for this problem is to iterate through the flowerbed array and count the number of consecutive zeroes.
For each element in the array, it checks if it is 0 (has no flowers). 
If it is 0, it will increment the current variable by 1. 
If the element is the first element in the array, the current variable will be incremented by 1 again. 
If the element is the last element in the array, the current variable will be incremented by 1 once more. 
For every consecutive zeroes, we need to calculate the number of flowers that can be placed.
The n variable will be reduced by the amount of possible flowers that can be placed in the current gap. If the n variable is reduced to 0 or less, it will return true. If the loop is completed without n being reduced to 0 or less, it will return false.

*Time complexity*: O(n) - As the solution only iterates through the array once, the time complexity is linear. 
*Space complexity*: O(1) - The solution does not require any additional space, therefore the space complexity is constant.

```php []
class Solution
{
    /**
     *  SOLUTION 2 - without modifying the input array
     * @param Integer[] $flowerbed
     * @param Integer $n
     * @return Boolean
     */
    function canPlaceFlowers(array $flowerbed, int $n): bool
    {
        $count = 0;
        $flowerbedLength = count($flowerbed);
        for ($i = 0; $i <= $flowerbedLength; $i++) {
            if ($flowerbed[$i] == 0 &&
                $i < $flowerbedLength) {
                $count++;
                if ($i == 0) $count++;
                if ($i == $flowerbedLength - 1) $count++;
            } else {
                $n -= intdiv($count - 1, 2);
                if ($n <= 0) return true;
                $count = 0;
            }
        }
        return false;
    }
}
```
```javascript []
var canPlaceFlowers = function (flowerbed, n) {
    let current = 0;
    const size = flowerbed.length;
    for (var i = 0; i <= size; i++) {
        if (i < size && flowerbed[i] == 0) {
            current++;
            if (i == 0) current++;
            if (i == size - 1) current++;
        } else {
            n -= Math.trunc((current - 1) / 2);
            if (n <= 0) return true;
            current = 0;
        }
    }
    return false;
};
```
##### If my work was useful for you, please upvote
\uD83D\uDC4D\uD83D\uDC4D\uD83D\uDC4D
