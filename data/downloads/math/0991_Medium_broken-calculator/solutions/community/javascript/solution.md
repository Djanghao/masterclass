# JS, Python, Java, C++ | Simple Solution w/ Detailed Explanation | beats 100%

**Author:** sgallivan
**Votes:** 24
**Link:** [https://leetcode.com/problems/broken-calculator/solutions/1076063/](https://leetcode.com/problems/broken-calculator/solutions/1076063/)

---

*(Note: This is part of a series of Leetcode solution explanations ([**index**](https://dev.to/seanpgallivan/leetcode-solutions-index-57fl)). If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The first thing we should be able to understand is that one of the operations increases **X** while the other one decreases it. So the natural tendency is to think about the solution in terms of applying these operations in order. That is, multiply as many times as you need to before subtracting as many times as you need to.

We see that that's not a viable solution, however, once we recognize that one of the operations is quite obviously multiplicative rather than additive, meaning that a subtraction done *before* a multiplication has twice the impact, for example.

So the trick here is to think of the problem backwards: moving from **Y** to **X** instead of from **X** to **Y**. If **Y** is odd, we're forced to do the additive operation (reversed from the subtractive operation) as we can't divide an odd number by **2** and be able to reach **X**. If **Y** is even, we can prioritize the division operation instead. At each step we can increment our **ans**.

Once **Y** drops below **X**, the remaining difference must be made via the additive operation, so we can just **return** that difference plus **ans**.

**To illustrate why the backwards order leads to the correct solution**, let's take a look at an example: **X = 3, Y = 13**. Under the naive approach discussed at the very beginning of this section, we could apply the multiplication operation **3** times to achieve **24**, then apply the subtraction operation **11** times to bring **Y** back down to **13**.

As we observed before, that **11** is not very efficient, considering that some/all of those subtraction operations could have been done before some/all of the multiplication operations with greater impact.

So what if we had applied as many of those operations as necessary just *before* the last of the three multiplications? Then we would only have needed **5** operations to effect **10** subtraction, plus the leftover **1** to get to **11** at the end.

If we go back one more step before the second of three multiplications, we could have instead done **2** operations then which would have the effect of **8** substraction, plus an extra operation after the second multiplication (adding another **2** subtraction), plus the final operation after all multiplications to reach **11**.

This quickly begins to represent a binary representation of our target difference of **11**:
```js
     Total multiplications:                                 In binary: (11 = 1011)
        3    2    1    0
                      11   =   11 in 11 operations                   1011   =   11
                  5    1   =   11 in 6 operations                 101 + 1   =   6
             2    1    1   =   11 in 4 operations              10 + 1 + 1   =   4
        1    0    1    1   =   11 in 3 operations           1 + 0 + 1 + 1   =   3
```
We can already see that this is starting to look like our backwards approach. At each additional multiplication operation available, we're forced to perform a subtraction operation if the difference is still odd, otherwise, we can divide the remainder by **2** and push it back one multiplication earlier.

Basically, for each multiplication we need to take **X** over **Y**, we take the remaining difference, count the first bit, then shift the difference to the right. And that should sound *exactly* like our backwards approach, because the first bit is a **0** if even and **1** if odd, and shifting to the right is the same as dividing by **2**.

**So why can't we go forwards with X instead of backwards with Y?** As mentioned before, the multiplication operation is, quite obviously, multiplicative, and will have an enhancing effect on any subtraction operations performed before it. Therefore, *we cannot possibly know* how much impact any given subtraction operation will have on the difference between **X** and **Y** until we find out how many multiplication operations we will need after it.

So any solution involving moving **X** to **Y** would at least require "peeking" ahead at part of the solution before progressing with the subtraction operations.

---

#### ***Implementation:***

This solution is almost identical in all four languages.

Python will convert our integer into a float if we simply divide by 2, so we can use the floor division operator instead to maintain the integer.

---

#### ***Javascript Code:***

The best result for the code below is **68ms / 38.2MB** (beats 100% / 90%).
```javascript
var brokenCalc = function(X, Y) {
    let ans = 0
    while (X < Y) {
        ans++
        if (Y % 2) Y++
        else Y /= 2
    }
    return X - Y + ans
};
```

---

#### ***Python Code:***

The best result for the code below is **20ms / 14.1MB** (beats 99% / 90%).
```python
class Solution:
    def brokenCalc(self, X: int, Y: int) -> int:
        ans = 0
        while X < Y:
            ans += 1
            if Y % 2: Y += 1
            else: Y //= 2
        return X - Y + ans
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 35.4MB** (beats 100% / 98%).
```java
class Solution {
    public int brokenCalc(int X, int Y) {
        int ans = 0;
        while (X < Y) {
            ans++;
            if (Y % 2 > 0) Y++;
            else Y /= 2;
        }
        return X - Y + ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 5.8MB** (beats 100% / 81%).
```c++
class Solution {
public:
    int brokenCalc(int X, int Y) {
        int ans = 0;
        while (X < Y) {
            ans++;
            if (Y % 2) Y++;
            else Y /= 2;
        }
        return X - Y + ans;
    }
};
```