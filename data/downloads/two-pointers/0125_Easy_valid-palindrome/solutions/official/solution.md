# Official Solution

**Link:** [https://leetcode.com/problems/valid-palindrome/solution/](https://leetcode.com/problems/valid-palindrome/solution/)

---

[TOC]

## Solution

---

### Approach 1: Compare with Reverse

**Intuition**

A palindrome is a word, phrase, or sequence that reads the same backwards as forwards. e.g. `madam`

A palindrome, and its reverse, are identical to each other.

**Algorithm**

We'll reverse the given string and compare it with the original. If those are equivalent, it's a palindrome.

Since only alphanumeric characters are considered, we'll filter out all other types of characters before we apply our algorithm.

Additionally, because we're treating letters as case-insensitive, we'll convert the remaining letters to lower case. The digits will be left the same.

<iframe src="https://leetcode.com/playground/4XuTPaeK/shared" frameBorder="0" width="100%" height="500" name="4XuTPaeK"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$, in length $$n$$ of the string.

  We need to iterate thrice through the string:
    1. When we filter out non-alphanumeric characters, and convert the remaining characters to lower-case.
    2. When we reverse the string.
    3. When we compare the original and the reversed strings.

  Each iteration runs linear in time (since each character operation completes in constant time). Thus, the effective run-time complexity is linear.

* Space complexity : $$O(n)$$, in length $$n$$ of the string. We need $$O(n)$$ additional space to stored the filtered string and the reversed string.

<br />

---

### Approach 2: Two Pointers

**Intuition**

If you take any ordinary string, and concatenate its reverse to it, you'll get a palindrome. This leads to an interesting insight about the converse: every palindrome half is reverse of the other half.

Simply speaking, if one were to start in the middle of a palindrome, and traverse outwards, they'd encounter the same characters, in the exact same order, in both halves!

!?!../Documents/125_valid_palindrome.json:800,600!?!

**Algorithm**

Since the input string contains characters that we need to ignore in our palindromic check, it becomes tedious to figure out the real middle point of our palindromic input.

> Instead of going outwards from the middle, we could just go inwards towards the middle!

So, if we start traversing inwards, from both ends of the input string, we can expect to _see_ the same characters, in the same order.

The resulting algorithm is simple:
+ Set two pointers, one at each end of the input string
+ If the input is palindromic, both the pointers should point to equivalent characters, _at all times_. [^note-1]
  + If this condition is not met at any point of time, we break and return early.  [^note-2]
+ We can simply ignore non-alphanumeric characters by continuing to traverse further.
+ Continue traversing inwards until the pointers meet in the middle.

<iframe src="https://leetcode.com/playground/ZPrAkm9B/shared" frameBorder="0" width="100%" height="500" name="ZPrAkm9B"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$, in length $$n$$ of the string. We traverse over each character at-most once, until the two pointers meet in the middle, or when we break and return early.

* Space complexity : $$O(1)$$. No extra space required, at all.



[^note-1]: Such a property is formally known as a [loop invariant](https://en.wikipedia.org/wiki/Loop_invariant).

[^note-2]: Such a property is often called a _loop termination condition_. It is one of several used in this solution. Can you identify the others?