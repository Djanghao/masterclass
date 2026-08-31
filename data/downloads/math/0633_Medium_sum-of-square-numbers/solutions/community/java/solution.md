# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS -Maths -Interview Solution

**Author:** lancertech6
**Votes:** 137
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5324398/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5324398/)

---

![Screenshot 2024-06-17 063634.png](./images/0.png)


# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

https://youtu.be/nbC60whebTs


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2100 Subscribers*
*Current Subscribers: 1998*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires determining whether a given non-negative integer \\( c \\) can be expressed as the sum of two squares. A mathematical theorem by Fermat states that a number can be represented as the sum of two squares if and only if all prime factors of the form \\( 4k + 3 \\) have even powers in its prime factorization. Leveraging this theorem, we can design an efficient algorithm to solve the problem.


# Approach
<!-- Describe your approach to solving the problem. -->
1. **Prime Factorization**:
    - We start by iterating over possible divisors `i`  from `2` to `\u221Ac`.
    - For each `i`, if `i` is a divisor of `c`, we count how many times `i` divides `c` (i.e., the power of `i` in the prime factorization of `c`.
    - If `i mod 4 = 3` and the power of `i` is odd, then `c` cannot be expressed as the sum of two squares, and we return `false`.

2. **Remaining Prime Factor**:
    - After checking all divisors up to ` \u221A{c}`, if the remaining value of ` c `1 is of the form ` 4k + 3 `, it must be raised to an even power. If it's not, we return `false`.

3. **Final Check**:
    - If none of the above conditions for returning `false` are met, we return `true`.

# Complexity
- **Time Complexity**: ` O(sqrt{c}) ` because we iterate from 2 to ` sqrt{c} `1.
- **Space Complexity**: ` O(1) ` as we use only a constant amount of extra space.

---

# Step By Step Explanation

Let's use an example ` c = 45 ` to demonstrate the approach.

1. **Initialization**:
    - Start with ` c = 45 `.

2. **Prime Factorization**:

| Iteration | Divisor  (i)  |  c \\% i  | c / i | Exponent Count | Comment                                |
|-----------|-----------------|--------------|-------------|----------------|----------------------------------------|
| 1         | 2               | 45 % 2 != 0  | -           | 0              | 2 is not a factor of 45                |
| 2         | 3               | 45 % 3 == 0  | 45 / 3 = 15 | 1              | 3 is a factor, count exponent          |
| 3         | 3               | 15 % 3 == 0  | 15 / 3 = 5  | 2              | 3 is a factor, count exponent          |
| 4         | 3               | 5 % 3 != 0   | -           | -              | 3 is no longer a factor                |
| 5         | 5               | 5 % 5 == 0   | -           | -              | 5 is a factor but does not affect logic|

3. **Final Prime Factorization Check**:
    - Remaining \\( c = 5 \\).
    - \\( 5 \\% 4 \
eq 3 \\) so final check passes.

4. **Conclusion**:
    - Since all conditions are satisfied, \\( c = 45 \\) can be expressed as a sum of two squares.

---

# Code
```java []
class Solution {
    public boolean judgeSquareSum(int c) {
        for (int divisor = 2; divisor * divisor <= c; divisor++) {
            if (c % divisor == 0) {
                int exponentCount = 0;
                while (c % divisor == 0) {
                    exponentCount++;
                    c /= divisor;
                }
                if (divisor % 4 == 3 && exponentCount % 2 != 0) {
                    return false;
                }
            }
        }
        return c % 4 != 3;
    }
}

```
```C++ []
class Solution {
public:
    bool judgeSquareSum(int c) {
        for (int divisor = 2; divisor * divisor <= c; divisor++) {
            if (c % divisor == 0) {
                int exponentCount = 0;
                while (c % divisor == 0) {
                    exponentCount++;
                    c /= divisor;
                }
                if (divisor % 4 == 3 && exponentCount % 2 != 0) {
                    return false;
                }
            }
        }
        return c % 4 != 3;
    }
};
```
```Python []
class Solution(object):
    def judgeSquareSum(self, c):
        divisor = 2
        while divisor * divisor <= c:
            if c % divisor == 0:
                exponentCount = 0
                while c % divisor == 0:
                    exponentCount += 1
                    c //= divisor
                if divisor % 4 == 3 and exponentCount % 2 != 0:
                    return False
            divisor += 1
        return c % 4 != 3
```
```JavaScript []
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let i = 0;
    let j = Math.ceil(Math.sqrt(c));
    while(i<=j){
        let sum = i*i + j*j;
        if(sum < c){
            i++;
        }else if (sum > c){
            j--;
        }else{
            return true;
        }
    }
    return false;
};
```
![upvote.png](./images/1.png)
