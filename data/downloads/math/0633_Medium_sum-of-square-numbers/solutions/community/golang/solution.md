# Easy | Two Pointers | 100% Faster

**Author:** gameboey
**Votes:** 59
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5325222/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5325222/)

---

# Intuition
We use a two pointers technique to find two non-negative integers `a` and `b` such that `a^2 + b^2 = c` 

# Approach

- The solution initializes two pointers, `left = 0` and `right = sqrt(c)`.
- We employ this approach by adjusting these pointers based on whether the current sum `left^2 + right^2` equals, exceeds, or falls short of `c`.
- This adjustment continues until `left` exceeds `right`, indicating no valid pair was found.
- If a pair satisfies the given condition during the process, the function returns `true`, else returns `false`.
 
# Complexity
- Time complexity: O(sqrt(c))

- Space complexity: O(1)

# Code
```C++ []
#define ll long long
class Solution {
public:
    bool judgeSquareSum(int c) {
        ll left = 0, right = static_cast<ll>(sqrt(c));
        while(left <= right) {
            if(left * left + right * right == c) return true;
            else if(left * left + right * right > c) right--;
            else left++;
        }

        return false;
    }
};
```
```java []
class Solution {
    public boolean judgeSquareSum(int c) {
        long left = 0, right = (long) Math.sqrt(c);
        while (left <= right) {
            if (left * left + right * right == c) return true;
            else if (left * left + right * right > c) right--;
            else left++;
        }
        return false;
    }
}
```
```python []
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        left, right = 0, int(math.sqrt(c))
        while left <= right:
            if left * left + right * right == c:
                return True
            elif left * left + right * right > c:
                right -= 1
            else:
                left += 1
        return False
```
```javascript []
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0, right = Math.floor(Math.sqrt(c));
    while (left <= right) {
        let sum = left * left + right * right;
        if (sum === c) return true;
        else if (sum > c) right--;
        else left++;
    }
    return false;
};
```
```Go []
func judgeSquareSum(c int) bool {
    left, right := 0, int(math.Sqrt(float64(c)))
	for left <= right {
		sum := left*left + right*right
		if sum == c {
			return true
		} else if sum > c {
			right--
		} else {
			left++
		}
	}
	return false
}
```

---

**Yo-ho-ho! So you've got this non-negative integer `c`, and you're wondering if there are two integers `a` and `b` that satisfy `a^2 + b^2 = c`? Let me tune my soul for this mystery!**

![brook tunin.jpg](./images/0.jpeg)
