# Swift

**Author:** ksmirnovnn
**Votes:** 1
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/4978345/](https://leetcode.com/problems/water-and-jug-problem/solutions/4978345/)

---

# Intuition
The problem is essentially asking whether we can measure out the target amount of water using the two jugs. The operations allowed are equivalent to either adding or subtracting an amount of water equivalent to x or y. Therefore, if the target is a multiple of the greatest common divisor (GCD) of x and y, we can reach the target.

# Approach
The approach is to first check if the sum of x and y is less than the target. If it is, we return false because it\u2019s impossible to reach the target. Then we check if x, y, or their sum is equal to the target. If any of these conditions are true, we return true. Finally, we check if the target is a multiple of the GCD of x and y. If it is, we return true; otherwise, we return false.

The GCD is calculated using the Euclidean algorithm. This algorithm uses recursion to find the GCD. If b is 0, it returns a; otherwise, it calls itself with b and the remainder of a divided by b. This process continues until b is 0, at which point a is the GCD of the original a and b.


# Complexity
- Time complexity:
The time complexity is O(log(min(x,y))) , because the Euclidean algorithm runs in logarithmic time.

- Space complexity:
The space complexity is O(1) , because only a constant amount of space is used. The recursion stack for the Euclidean algorithm does not exceed O(log(min(x,y))) , which can be considered constant for practical input limits.

# Code
```
class Solution {
    func canMeasureWater(_ x: Int, _ y: Int, _ target: Int) -> Bool {
        if x + y < target { return false }
        if x == target || y == target || x + y == target { return true }
        return target % gcd(x, y) == 0
    }
    
    func gcd(_ a: Int, _ b: Int) -> Int {
        return b == 0 ? a : gcd(b, a % b)
    }
}

```