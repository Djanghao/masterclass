# Very Easy 100% || Add Digits➕ || 🔥Beats 100%🔥|| with Explaination

**Author:** adoutsh
**Votes:** 9
**Link:** [https://leetcode.com/problems/add-digits/solutions/4488513/](https://leetcode.com/problems/add-digits/solutions/4488513/)

---

# Intuition \uD83D\uDCA1
The problem requires repeatedly adding the digits of a given integer until the result is a single-digit number. To achieve this, we can observe a pattern and formulate a concise solution.\uD83C\uDFAF

# Approach \uD83D\uDE80
The goal is to find the digital root of a given number. The solution uses the formula (num % 9) == 0 ? 9 : num % 9, exploiting the observation that the digital root is the remainder when the number is divided by 9. If the number is divisible by 9, the digital root is 9. \uD83C\uDF89

Example:
For num = 38, (38 % 9) = 2, and the output is 2. This works because repeatedly summing the digits of 38 eventually leads to a single-digit result, which is 2. \uD83D\uDD04

Why it works:
The solution efficiently calculates the digital root by leveraging modular arithmetic, avoiding explicit iteration. The formula ensures correct identification of the digital root, especially when the number is divisible by 9. \uD83E\uDDE0

In essence, the solution combines mathematical understanding with a concise formula for an efficient and effective computation of the digital root. \uD83C\uDF1F

# Complexity
- Time complexity: o (1)


# Code
```
int addDigits(int num) {
    if(num==0)return num;
    return (num % 9) == 0 ? 9 : num % 9;
}
```
PLEASE UPVOTE IF IT HELPED

![upvote.jpg](./images/0.jpeg)

