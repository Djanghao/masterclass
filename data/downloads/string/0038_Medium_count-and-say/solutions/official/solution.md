# Official Solution

**Link:** [https://leetcode.com/problems/count-and-say/solution/](https://leetcode.com/problems/count-and-say/solution/)

---

[TOC]

## Solution

---

### Overview

The main task in this problem is to find the result of "saying" a
digit string.

---
### Approach 1: Straightforward

#### Intuition

Start with the initial string $s="1"$. $n-1$ times do $s=f(s)$, where
$f(s)$ denotes the result of saying a digit string $s$. After this
process, $s$ will be the answer to the problem.

To find $f(s)$, one needs to split $s$ into substrings of
equal digits.

#### Algorithm

The algorithm of "saying" $s$ is the following.

1. Start at position $j=0$ (all indices are 0-based).
2. Let $k$ be the leftmost position to the right of $j$ that
$s_k \ne s_j$ if it exists, and $|s|$ otherwise ($|s|$ denotes the length of $s$).
3. All digits of $s$ between $j$ inclusively and $k$ exclusively are
equal. The number of these digits is $k-j$. Add to the result the
string representation of $k-j$ and the element $s_j$.
4. Assign $j \leftarrow k$.
5. If $j < |s|$ go to 2.
6. Stop.

#### Implementation

<iframe src="https://leetcode.com/playground/NGSQjgpa/shared" frameBorder="0" width="100%" height="395" name="NGSQjgpa"></iframe>


#### Complexity Analysis

* Time Complexity: $O(4^{n/3})$.
    
    One can notice that the inequality
    $|f(s+t)| \le |f(s)+f(t)|$ holds for all strings $s$, $t$.
    
    If the last digit of $s$ differs from the first digit of $t$, then
    $f(s+t)=f(s)+f(t)$.
    Otherwise, let denote $s=s^{pref}+s^{suf}$, $t=t^{pref}+t^{suf}$,
    where $s^{suf}$ is the maximal substring of equal digits at the end of $s$,
    $t^{pref}$ is the maximal substring of equal digits at the beginning of $t$.
    Then $f(s+t)=f(s^{pref})+f(s^{suf}+t^{pref})+f(t^{suf})$.
    Let $s^{suf}$ consist of $x$ digits $d$ and $t^{pref}$ of $y$ digits $d$.
    $f(s^{suf})=str(x)+d$, $f(t^{pref})=str(y)+d$,
    $f(s^{suf}+t^{pref})=str(x+y)+d$, where $str(x)$ denotes the decimal
    representation of an integer $x$. 
    
    Since $|str(x+y)| \le |str(x)|+|str(y)|$, we have
 
    $|f(s^{suf}+t^{pref})|=|str(x+y)|+1 \le (|str(x)|+1)+(|str(y)|+1)=|f(s^{suf})|+|f(t^{pref})|$.
 
    Finally, $|f(s+t)| \le |f(s^{pref})|+|f(s^{suf})|+|f(t^{pref})|+|f(t^{suf})|=|f(s)|+|f(t)|$.
    
    Let us see, what happens to a string of one digit after 3 iterations of "saying".
    $1 \to 11 \to 21 \to 1211$, $d \to 1d \to 111d \to 311d$, where $d$ is a digit other than $1$.
    We see that the length became equal to 4.
    Considering the above inequality we obtain that after 3 iterations the length of
    an arbitrary string cannot increase more than fourfold.
    This leads us to the following bound: $|countAndSay(i)|=O(4^{i/3})$.
    
    However, this estimate is not tight.
    The length of $countAndSay(30)$ is just $4462$ which
    is far from $4^{10}$.
    
    The total time complexity is the sum of the lengths of the strings which
    is $\sum_{i=1}^n O(4^{i/3}) = O(4^{n/3})$.
   
    
* Space Complexity: $O(4^{n/3})$.

    The sum of the lengths of $countAndSay(i)$ for all $1 \le i \le n$
    is $O(4^{n/3})$. So this is the space complexity.

---
### Approach 2: Regular Expression

Note. This approach is for those familiar with [regular expressions](https://en.wikipedia.org/wiki/Regular_expression).
If you are not, it might be hard to understand.

#### Intuition

This problem could be a good exercise to apply pattern matching,
where we need to find the substrings of equal digits.

#### Algorithm

We want to use a pattern that matches the strings of equal characters
such as `"4"`, `"7777"`, `"2222222"`.

If you have an experience with regular
expressions, you may find that the pattern `(.)\\1*` works.
We could break down this regex into three parts:

- `(.)`: it defines a group containing a single character that could be of anything.

- `\\1`: it is a backreference to whatever matches in group 1 (the pattern matched in the parenthesis). Group 1 is the only group `(.)`.

- `*`:  this qualifier, followed by the group reference `\\1`, indicates that we would like to see the group repeats itself zero or more times.

So the pattern matches strings which consist of some character
and then zero or more repetitions of this character after its first occurrence. It is what we need.

We find all the matches to the regex and then concatenate the results.

#### Implementation

<iframe src="https://leetcode.com/playground/VQqm2txV/shared" frameBorder="0" width="100%" height="446" name="VQqm2txV"></iframe>

#### Complexity Analysis

* Time Complexity: $O(4^{n/3})$.
	
	As we already showed in Approach 1, the total length of the strings is $O(4^{n/3})$.
	The time complexity of regex matching is linear in the input string length.
	The total time complexity is $O(4^{n/3})$.

* Space Complexity: $O(4^{n/3})$.

	The space complexity is the same as in the previous approach.