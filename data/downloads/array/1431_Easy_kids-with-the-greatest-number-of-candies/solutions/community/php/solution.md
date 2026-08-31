# ✅ [PHP][JavaScript] 3 Approaches

**Author:** akunopaka
**Votes:** 5
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/3427322/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/3427322/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

### Map Method Approach for Kids with Candies Problem

This solution uses the map() method to iterate through the array of candies, and for each candy, it adds the extra candies to it and checks if the sum is greater than or equal to the maximum candy value in the array. If it is, it pushes true, else it pushes false.

Time Complexity: O(n) - We iterate through the array once, so the time complexity is linear.
Space Complexity: O(n) - We store the results in an array, so the space complexity is linear.
```javascript []
var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max);
};
```
```php []
class Solution
{
    function kidsWithCandies(array $candies, int $extraCandies): array {
        $max = max($candies);
        return array_map(function ($candy) use ($max, $extraCandies) {
            return $max <= ($candy + $extraCandies);
        }, $candies);
    }
}
```
#### For - Traditional Iterative Approach
This solution uses a for loop to iterate through the array of candies, and for each candy, it adds the extra candies to it and checks if the sum is greater than or equal to the maximum candy value in the array. If it is, it pushes true to an empty array, else it pushes false.

Time Complexity: O(n) - We iterate through the array once, so the time complexity is linear.
Space Complexity: O(n) - We store the results in an array, so the space complexity is linear.
```javascript []
var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies), result = [];
    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= max);
    }
    return result;
};
```
```php []
class Solution
{
    function kidsWithCandies(array $candies, int $extraCandies): array {
        $max = max($candies);
        $length = count($candies);
        $res = [];
        for ($i = 0; $i < $length; $i++) $res[] = $max <= ($candies[$i] + $extraCandies);
        return $res;
    }
}
```
#### forEach - Iterative Approach
This solution uses a forEach loop to iterate through the array of candies, and for each candy, it adds the extra candies to it and checks if the sum is greater than or equal to the maximum candy value in the array. If it is, it pushes true to an empty array, else it pushes false.

Time Complexity: O(n) - We iterate through the array once, so the time complexity is linear.
Space Complexity: O(n) - We store the results in an array, so the space complexity is linear.

```javascript []
var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies), result = [];
    candies.forEach(candy => result.push(candy + extraCandies >= max));
    return result;
};
```
```php []
class Solution
{
    function kidsWithCandies(array $candies, int $extraCandies): array {
        $max = max($candies);
        $res = [];
        foreach ($candies as $candy) $res[] = $max <= ($candy + $extraCandies);
        return $res;
    }
}
```



##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDC4D**
