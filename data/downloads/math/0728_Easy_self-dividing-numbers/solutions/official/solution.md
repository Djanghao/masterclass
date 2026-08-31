# Official Solution

**Link:** [https://leetcode.com/problems/self-dividing-numbers/solution/](https://leetcode.com/problems/self-dividing-numbers/solution/)

---

[TOC]

### Approach : Brute Force [Accepted]

**Intuition and Algorithm**

For each number in the given range, we will directly test if that number is self-dividing.

By definition, we want to test each whether each digit is non-zero and divide the number. For example, with `128`, we want to test `d != 0 && 128 % d == 0` for `d = 1, 2, 8`.  To do that, we need to iterate over each digit of the number.

A straightforward approach to that problem would be to convert the number into a character array (string in Python), and then convert it back to an integer to perform the modulo operation when checking `n % d == 0`.

We could also continually divide the number by 10 and peek at the last digit.  That is shown as a variation in a comment.

<iframe src="https://leetcode.com/playground/hg6C7WWp/shared" frameBorder="0" width="100%" height="500" name="hg6C7WWp"></iframe>

**Complexity Analysis**

* Time Complexity: We iterate through each digit in the given number; therefore, the time complexity is $O(D)$, where $D$ represents the number of digits in the number.

* Space Complexity: $$O(1)$$, since we do not include the output size in space complexity calculations and only consider the intermediate variables or references used during the computation.