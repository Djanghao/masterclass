# Official Solution

**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solution/](https://leetcode.com/problems/valid-palindrome-ii/solution/)

---

[TOC]

## Solution

---

### Approach: Two Pointers

**Intuition**

Let's start by thinking about how we can solve this problem without the optional deletion included. How can we check if a given string `s` is a palindrome?

> A string is a palindrome if it reads the same forward as backwards.

For a string to be a palindrome, the first and last character must be the same, the second and the second last character must be the same, and so on. An efficient way to check if a string is a palindrome is to use two pointers.

- Initialize one pointer at the start of the string and one at the end. 
- Compare the characters at these pointers - if they're different, the string can't be a palindrome. If they're the same, then move the pointers towards each other. 
- Continue until there is a mismatch (signifying the string is not a palindrome) or until the pointers meet each other (which would mean the string is a palindrome).

!?!../Documents/680_Valid_Palindrome_II.json:960,540!?!

We can write a handy helper function `checkPalindrome(s, i, j)` that implements this logic, where `s` is the string we are checking, and `i` and `j` are the left and right bounds we want to consider. For example, to check if the entire string `s` is a palindrome, `i` will start at `0` and `j` will start at `s.length() - 1`.

<iframe src="https://leetcode.com/playground/mjMWQNvv/shared" frameBorder="0" width="100%" height="242" name="mjMWQNvv"></iframe>

An important thing to notice is that once we verify two characters match at positions `i` and `j`, we only care about the indices **between** `i` and `j`. For example, with `s = 'racecar'`, after verifying that `s[0]` and `s[6]` are the same character, we only care about indices `1` through `5`, which represent the substring `'aceca'`. If `'aceca'` is a palindrome, then `'racecar'` is a palindrome as well. 

> For our purposes, we can basically pretend that matched characters no longer exist. For example, after verifying that the first and last characters of 'racecar' match, we can reframe the problem as checking if 'aceca' can be a palindrome with at most one deletion.

Let's assume we have some string `s = 'abbxa'`. On its own, `s` is not a palindrome. However, if we delete the `'x'`, then `s` becomes `'abba'`, which is a palindrome. If we use the same algorithm in `checkPalindrome`, we will see that the first and last characters match as `'a'`. The pointers move inwards, and the "new" string we're focused on is `'bbx'`.

The next check will be a mismatch - `'b' != 'x'`. This means that our original string is not a palindrome. However, we can delete one character. If `s` can be a palindrome after one deletion, the deletion **must** be of one of these mismatched characters. Deleting the character `'b'` gives us `'bx'`, and deleting the character `'x'` gives us `'bb'`. Because `'bb'` is a palindrome (which we can verify using `checkPalindrome`), the original string `'abbxa'` can become a palindrome with at most one character deletion.

Here's an animation that demonstrates the process using a slightly longer example:

!?!../Documents/680_Valid_Palindrome_II_2.json:960,540!?!

This leaves us two scenarios:

1. `s` is a palindrome - great, we can just return `true`.

2. Somewhere in `s`, there will be a pair of mismatched characters. We **must** use our allowed deletion on one of these characters. Try both options - if neither results in a palindrome, then return `false`. Otherwise, return `true`. We can "delete" the character at `j` by moving our bounds to `(i, j - 1)`. Likewise, we can "delete" the character at `i` by moving our bounds to `(i + 1, j)`. 

**Algorithm**

1. Create a helper function `checkPalindrome` that takes a string `s`, and two pointers `i` and `j`. This function returns a boolean indicating if `s.substring(i, j)` is a palindrome. Implementation details for this function can be found in the first section of this article.

2. Initialize two pointers, `i = 0` and `j = s.length() - 1`.

3. While `i < j`, check if the characters at indices `i` and `j` match. If they don't, that means we must spend our deletion on one of these characters. Try both options using `checkPalindrome`. In other words, return true if either `checkPalindrome(s, i, j -1)` or `checkPalindrome(s, i + 1, j)` is true.

4. If we exit the while loop, that means the original string is a palindrome. Since we didn't **need** to use the deletion, we should return `true`.

**Implementation**

<iframe src="https://leetcode.com/playground/RZtCiat3/shared" frameBorder="0" width="100%" height="500" name="RZtCiat3"></iframe>


**Complexity Analysis**

Given $$N$$ as the length of `s`,

* Time complexity: $$O(N)$$.

    The main while loop we use can iterate up to `N / 2` times, since each iteration represents a pair of characters. On any given iteration, we may find a mismatch and call `checkPalindrome` twice. `checkPalindrome` can also iterate up to `N / 2` times, in the worst case where the first and last character of `s` do not match.

    Because we are only allowed up to one deletion, the algorithm only considers one mismatch. This means that `checkPalindrome` will never be called more than twice.

    As such, we have a time complexity of $$O(N)$$.

* Space complexity: $$O(1)$$.

    The only extra space used is by the two pointers `i` and `j`, which can be considered constant relative to the input size.
    
<br/>