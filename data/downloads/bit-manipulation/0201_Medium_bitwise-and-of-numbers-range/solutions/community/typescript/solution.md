# Beats 100% users | Super fast | Simple Approach | Easy to Understand | Beginner Friendly | O(log n)

**Author:** mentez
**Votes:** 3
**Link:** [https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/4761245/](https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/4761245/)

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
``` Java []
class Solution {
    public int rangeBitwiseAnd(int left, int right) {
        while (left < right) {
            right &= right - 1;
        }
        return right;
    }
}
```
``` C++ []
class Solution {
public:
    int rangeBitwiseAnd(int left, int right) {
        while (left < right) {
            right &= right - 1;
        }
        return right;
    }
};
```
``` C []
int rangeBitwiseAnd(int left, int right) {
    while (left < right) {
        right &= right - 1;
    }
    return right;
}
```
``` JavaScript []
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    while (left < right) {
        right &= right - 1;
    }
    return right;
};
```
``` Python3 []
class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
            while (left < right):
                right &= right - 1
            return right
```
``` Python []
class Solution(object):
    def rangeBitwiseAnd(self, left, right):
        while (left < right):
            right &= right - 1
        return right
        """
        :type left: int
        :type right: int
        :rtype: int
        """
```
``` C# []
public class Solution {
    public int RangeBitwiseAnd(int left, int right) {
        while (left < right) {
            right &= right - 1;
        }
        return right;
    }
}
```
``` TypeScript []
function rangeBitwiseAnd(left: number, right: number): number {
    while (left < right) {
        right &= right - 1;
    }
    return right;
};
```
``` Scala []
object Solution {
    def rangeBitwiseAnd(left: Int, right: Int): Int = {
        var ans = right;
        while (left < ans) {
            ans = ans & (ans - 1);
        }
        return ans;
    }
}
```
``` Go []
func rangeBitwiseAnd(left int, right int) int {
    for left < right {
        right &= right - 1
    }
    return right
}
```