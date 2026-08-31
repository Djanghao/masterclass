# Simple one line code with 100% beats 💯

**Author:** PrinceHiremath
**Votes:** 3
**Link:** [https://leetcode.com/problems/water-bottles/solutions/5432395/](https://leetcode.com/problems/water-bottles/solutions/5432395/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    return numBottles+Math.floor((numBottles-1)/(numExchange-1));
};
```
```typescript []
function numWaterBottles(numBottles: number, numExchange: number): number {
    return numBottles+Math.floor((numBottles-1)/(numExchange-1));
};
```
```python3 []
class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        return numBottles+(numBottles-1)//(numExchange-1)
```
```C []
int numWaterBottles(int numBottles, int numExchange) {
    return numBottles+floor((numBottles-1)/(numExchange-1));
}
```
```Java []
class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        return numBottles+((numBottles-1)/(numExchange-1));
    }
}
```
```PHP []
class Solution {

    /**
     * @param Integer $numBottles
     * @param Integer $numExchange
     * @return Integer
     */
    function numWaterBottles($numBottles, $numExchange) {
        return $numBottles+floor(($numBottles-1)/($numExchange-1));
    }
}
```
```kotlin []
class Solution {
    fun numWaterBottles(numBottles: Int, numExchange: Int): Int {
        return numBottles+((numBottles-1)/(numExchange-1));   
    }
}
```
