# Official Solution

**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solution/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solution/)

---

[TOC]

## Solution

---

### Approach 1: Hashmap

**Intuition**

The naive approach would be to construct as many `"zero"`s as it's possible from letters available in the input string, then as many `"one"`s as it's possible, etc. The problem is that the letters `"o"`, `"n"`, `"e"` could be present as well in the other numbers which mean that the straightforward approach could be misleading.

![compute](../Figures/423/misleading.png)

Hence the idea is to look for something unique. One could notice all even numbers contain a unique letter :

* The letter "z" is present only in "zero".
* The letter "w" is present only in "two".
* The letter "u" is present only in "four".
* The letter "x" is present only in "six".
* The letter "g" is present only in "eight".

> Hence there is a good way to count even numbers.

That is actually the key to how to count `3`s, `5`s, and `7`s since some letters are present only in one odd and one even number (and all even numbers have already been counted) :

* The letter "h" is present only in "three" and "eight".
* The letter "f" is present only in "five" and "four".
* The letter "s" is present only in "seven" and "six".

Now one needs to count `9`s and `1`s only, and the logic is basically the same :

* Letter "i" is present in "nine", "five", "six", and "eight".
* Letter "n" is present in "one", "seven", and "nine".

**Implementation**

!?!../Documents/423_LIS.json:1000,626!?!

<iframe src="https://leetcode.com/playground/DAibWhUq/shared" frameBorder="0" width="100%" height="500" name="DAibWhUq"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ where `N` is the number of characters in the input string. $$\mathcal{O}(N)$$ time is needed to compute hashmap `count`
"letter -> its frequency in the input string". Then we deal with a data structure `out` which contains `10` elements only and all operations are done in a constant time.
 
* Space complexity: $$\mathcal{O}(1)$$. `count` contains a constant number of elements since the input string contains only lowercase English letters, and `out` contains not more than `10` elements.