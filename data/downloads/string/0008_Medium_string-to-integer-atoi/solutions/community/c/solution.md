# ✅ [JAVA / C++] : Simple | Pictorial Explanation | 32 bit int | Easy

**Author:** akshayaamar05
**Votes:** 426
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/1402936/](https://leetcode.com/problems/string-to-integer-atoi/solutions/1402936/)

---

<img src = "https://assets.leetcode.com/users/images/de56766c-2376-41e3-bd34-8f6e762249ff_1642241065.7559516.jpeg" width = 100%>

<img src = "https://assets.leetcode.com/users/images/e632f7e8-9a2e-4416-a58d-85dbf2428473_1642242240.3520854.jpeg" width = 100%>

<u>**BASIC IDEA:**</u>

1. **Start traversing the provided string**(`str`)
2. **Skip all the leading white spaces**.  eg:   `"  -123456"  --> "-123456"`
3. **Check for sign cases**(+-). eg: `"-123456"`. If `+`, then set the variable(boolean) `isNegative` to `true` and if it's `-`, set `isNegative` to `false`
4. **Iterate over the next remaining characters and keep adding them in `result` by converting the digits**(in character form) **to integer form.** eg: `"-123456" --> -123456`, until the **non-digit character** is found.

<u>**NOTE:**</u> Logic is implemented in such a way that after performing above 3 steps, if it finds characters(English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.') before the digit character, it will give output as 0(zero) eg: `"abc-123456" --> 0` and if it finds characters(English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.')  after the digit characters, it will return the number eg: `"-123456abc" --> -123456`
<br>

**C++ / JAVA CODE:**
<iframe src="https://leetcode.com/playground/SkWRoqDm/shared" frameBorder="0" width="100%" height="1000"></iframe>


* **Let's understand what** 
`if(result > (Integer.MAX_VALUE / 10) || (result == (Integer.MAX_VALUE / 10) && digit > 7)){`
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`return isNegative ? Integer.MIN_VALUE : Integer.MAX_VALUE;`
`}`
**means in <u>JAVA</u>? You will be able to figure out this statement easily for <u>C++</u> code too.**

	* `result > (Integer.MAX_VALUE / 10)` means:
	Suppose, 
	`result = 214748365`(9 digits)
	`Integer.MAX_VALUE = 2147483647`(10 digits) and `Integer.MAX_VALUE / 10 = 214748364`(9 digits)
	Here, it is clearly evident that `result > Integer.MAX_VALUE / 10`( i.e. 214748365 > 214748364) and if we try to add even 0(zero) in result `214748365`(9 digits), the number will become `2147483650`(10 digits) which is obviously greater than `2147483647(Integer.MAX_VALUE which is of 10 digits)`. So even before adding `0(zero) or any other digit`, we return the `Integer.MAX_VALUE` or `Integer.MIN_VALUE`, according to the sign case, in order <u>to avoid integer overflow.</u>


	* And, `result == (Integer.MAX_VALUE / 10) && digit > 7` means:
	Suppose, 
	`result = 214748364`(9 digits), and
	`Integer.MAX_VALUE / 10 = 214748364`(9 digits)
	Now, if the result is equal to the Integer.MAX_VALUE / 10 (214748364 == 214748364) and the digit is greater than 7 i.e. `digit > 7` and if we try to add 8(assume the digit greater than 7 to be 8) to the result, then the number will become `2147483648`(10 digits), which will result in integer overflow. So, even before adding the digit which is greater than 7, we return the `Integer.MAX_VALUE` or `Integer.MIN_VALUE`, according to the sign case,  <u>to avoid integer overflow.</u>

<hr>

**More optimized by using char and int variable in order to avoid calling charAt(index) and Integer.MAX_VALUE / 10 repeatedly**

**<u>Optimized C++ / JAVA CODE</u>**

<iframe src="https://leetcode.com/playground/mNLPE63o/shared" frameBorder="0" width="100%" height="800"></iframe>

**SUGGESTION:**
**In JAVA**, you can replace the following condition 
```
if(result > (Integer.MAX_VALUE / 10) || (result == (Integer.MAX_VALUE / 10) && digit > 7))
                return isNegative ? Integer.MIN_VALUE : Integer.MAX_VALUE;
```
with
```
if(result > (Integer.MAX_VALUE - digit) / 10)
                return isNegative ? Integer.MIN_VALUE : Integer.MAX_VALUE;
```

And, **In C++**, you can replace the following condition 
```
if(result > (INT_MAX / 10) || (result == (INT_MAX / 10) && digit > 7))
                return isNegative ? INT_MIN : INT_MAX;
```
with
```
if(result > (INT_MAX - digit) / 10)
                return isNegative ? INT_MIN : INT_MAX;
```
<hr>

**COMPLEXITY:**
* **Time: O(n)**, where n is the length of String
* **Space: O(1)**, in-place

<u>**Refer to the following github repsitory for more leetcode solutions**</u>
https://github.com/Akshaya-Amar/LeetCodeSolutions


# **Please UPVOTE if you find the solution helpful :)**