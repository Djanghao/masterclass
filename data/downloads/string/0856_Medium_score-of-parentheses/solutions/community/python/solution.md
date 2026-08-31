# JS, Python, Java, C++ | Easy O(1) Space Solution w/ Explanation

**Author:** sgallivan
**Votes:** 22
**Link:** [https://leetcode.com/problems/score-of-parentheses/solutions/1080625/](https://leetcode.com/problems/score-of-parentheses/solutions/1080625/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Any time we see a problem that describes a doubling operation and an incrementing operation, we should at least think about a potential binary solution. In this case, those are really the only two operations. Nested doubling operations means powers of **2** depending on the nesting depth, and a simple closed pair of parentheses is a **+1**.

At first glance, the addition operation would seem to cause a problem, but math once again comes to our aid.

Consider the following:
```js
S = "(((()()())))"
  = "(((" 1 + 1 + 1 ")))"    // After replacing completed "()"s with 1s
  = (1 + 1 + 1) * 2^3        // Applying the power operations
  = 2^3 + 2^3 + 2^3          // Through the distributive property of multiplication
```
As we can see, we don't *really* have to wait for the summation before applying the power operation, because it will get distributed across the summation anyway. And since we know how many nested parentheses there are (**pwr**) when we finish a simple parentheses pair, we can immediately add the appropriate value to our answer (**ans**).

This means that we can solve this problem in **O(n) time** and **O(1) space**.

---

#### ***Implementation:***

For JavaScript **S.charAt(i)** is faster at processing string iteration than **S[i]**.

We can start our iteration at **i = 1** because we know the first character is going to be **"("**. We *could* start at **i = 0**, but then we'd have to either start with **pwr = 1** or make sure to decrement **pwr** before the power operation instead of after.

We can use a **bitwise shift** for the power operation to more accurately reflect the solution's binary nature.

---

#### ***Javascript Code:***

The best result for the code below is **64ms / 38.4MB** (beats 99% / 77%).
```javascript
var scoreOfParentheses = function(S) {
    let len = S.length, pwr = 0, ans = 0
    for (let i = 1; i < len; i++)
        if (S.charAt(i) === "(") pwr++
        else if (S.charAt(i-1) === "(") ans += 1 << pwr--
        else pwr--  
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **24ms / 14.0MB** (beats 96% / 90%).
```python
class Solution:
    def scoreOfParentheses(self, S: str) -> int:
        pwr, ans = 0, 0
        for i in range(1, len(S)):
            if S[i] == "(": pwr += 1
            elif S[i-1] == "(":
                ans += 1 << pwr
                pwr -= 1
            else: pwr -= 1
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 37.0MB** (beats 100% / 60%).
```java
class Solution {
    public int scoreOfParentheses(String S) {
        int len = S.length(), pwr = 0, ans = 0;
        for (int i = 1; i < len; i++)
            if (S.charAt(i) == '(') pwr++;
            else if (S.charAt(i-1) == '(') ans += 1 << pwr--;
            else pwr--;
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 5.9MB** (beats 100% / 99%).
```c++
class Solution {
public:
    int scoreOfParentheses(string S) {
        int len = S.length(), pwr = 0, ans = 0;
        for (int i = 1; i < len; i++)
            if (S[i] == '(') pwr++;
            else if (S[i-1] == '(') ans += 1 << pwr--;
            else pwr--;
        return ans;
    }
};
```