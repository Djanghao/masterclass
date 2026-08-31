# Official Solution

**Link:** [https://leetcode.com/problems/student-attendance-record-i/solution/](https://leetcode.com/problems/student-attendance-record-i/solution/)

---

[TOC]

## Solution

---
### Approach #1 Simple Solution [Accepted]

One simple way of solving this problem is to count number of $$A's$$ in the string and check whether the string $$LLL$$ is a substring of a given string. If number of $$A's$$ is less than $$2$$ and $$LLL$$ is not a subtring of a given string then return $$true$$, otherwise return $$false$$.

$$indexOf$$ method can be used to check substring in a string. It return the index within this string of the first occurrence of the specified character or -1, if the character does not occur.


<iframe src="https://leetcode.com/playground/KwRnWGmW/shared" frameBorder="0" name="KwRnWGmW" width="100%" height="241"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. Single loop and indexOf method takes $$O(n)$$ time.
* Space complexity : $$O(1)$$. Constant space is used.

---
### Approach #2 Better Solution [Accepted]

**Algorithm**

One optimization of above method is to break the loop when count of $$A's$$ becomes $$2$$.

<iframe src="https://leetcode.com/playground/Eh3SunKt/shared" frameBorder="0" name="Eh3SunKt" width="100%" height="224"></iframe>

**Complexity Analysis**


* Time complexity : $$O(n)$$. Single loop and indexOf method takes $$O(n)$$ time.
* Space complexity : $$O(1)$$. Constant space is used.

---
### Approach #3 Single pass Solution (Without indexOf method) [Accepted]

**Algorithm**

We can solve this problem in a single pass without using indexOf method. In a single loop we can count number of $$A's$$ and also check the substring $$LLL$$ in a given string.

<iframe src="https://leetcode.com/playground/sZFGNHqX/shared" frameBorder="0" name="sZFGNHqX" width="100%" height="275"></iframe>
**Complexity Analysis**


* Time complexity : $$O(n)$$. Single loop upto string length is used.
* Space complexity : $$O(1)$$. Constant space is used.

---
### Approach #4 Using Regex [Accepted]

**Algorithm**

One interesting solution is to use regex to match the string. Java provides the java.util.regex package for pattern matching with regular expressions. A regular expression is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern.

Following are the regex's used in this solution:
```
. : Matches any single character except newline.

* : Matches 0 or more occurrences of the preceding expression.

.* : Matches any string

a|b : Matches either a or b
```
$$matches$$ method is used to check whether or not the string matches the given regular expression.

Regular Expression of the string containing two or more than two $$A's$$ will be $$.*A.*A.*$$ and the regular expression of the string containing substring $$LLL$$ will be $$.*LLL.*$$. We can merge this two regex using $$|$$ and form a regex of string containing either more than one $$A$$ or containing substring $$LLL$$. Then regex will look like:  $$.*(A.*A|LLL).*$$. We will return true only when the string doesn't matches this regex.


<iframe src="https://leetcode.com/playground/5J2tfTuD/shared" frameBorder="0" name="5J2tfTuD" width="100%" height="156"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. $$matches$$ method takes $$O(n)$$ time.

* Space complexity : $$O(1)$$. No Extra Space is used.