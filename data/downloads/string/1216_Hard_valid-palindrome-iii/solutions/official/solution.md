# Official Solution

**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solution/](https://leetcode.com/problems/valid-palindrome-iii/solution/)

---

[TOC]

## Solution

---

### Approach 1: Top-Down DP (2D)

**Intuition**

Let's try to find the minimum number of character that can be removed to make the string a palindrome. If we see that the minimum number is less than or equal to `k` we can conclude that it is indeed a K-Palindrome, else it is not.

**Similar Problems:**

* [72. Edit Distance](https://leetcode.com/problems/edit-distance/)
* [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)


**Algorithm**

How do we find the minimum characters to be removed to make it a palindrome?
Let's imagine matching the characters of the string like a palindrome, from the beginning and the end with 2 pointers `i` and `j`.
We may encounter the following two scenarios:

1. The character at `i` matches character at `j`.
2. The characters don't match each other.

For case 1 we just increase the pointer `i` and decrease the pointer `j`, `i++` and `j--` respectively.

In the second case we have 2 options:

* Remove character at `j` and see if the previous character matches character at `i`.

Or

* Remove character at `i` and see if the next character matches character at `j`.

Since we are not actually removing the characters from the string but just calculating the number of characters to be removed,
in case 1 we decrement the pointer `j` by 1 and `i` stays as it is, as we still need a character to match character at `i`
and in case 2 we increment the pointer `i` by 1 and `j` stays as it is, as we still need a character to match character at `j`.
In both the cases we remove 1 character and thus it adds 1 to the cost.

We can then use these two different pairs of new `i` and `j` values (`i+1, j` and `i, j-1`) to again repeat the process and get the minimum result of them as our result for current pair `i, j`.

We can see that this is recursive and thus we can use recursion with caching to store the repeated values.

<iframe src="https://leetcode.com/playground/g53T7mhA/shared" frameBorder="0" width="100%" height="500" name="g53T7mhA"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n^2)$$. Where `n` is the length of string `s`. This is due to the fact that we try to find result for all combinations of `i` and `j` where `i` and `j` range from `0` to `n`, to compute a combination we perform an $$O(1)$$ operation thus the final complexity is $$O(n^2)$$.

* Space complexity : $$O(n^2)$$. Where `n` is the length of string `s`. This is due to caching all the results in `memo` table. The recursion stack depth can reach at max $$O(n)$$ depth. Thus the complexity is dominated by the space required for `memo`.


<br />

---

### Approach 2: Bottom-Up DP (2D)

**Algorithm**

Instead of filing up our `memo` table from top to bottom, let's try filling it from bottom to top. All we need to do is fill all the combinations of `i` and `j` in the correct order so that we have all the results required for the next state (combination of `i`, `j`) before we move to the next state (combination of `i`, `j`).

<iframe src="https://leetcode.com/playground/X7DsEDFm/shared" frameBorder="0" width="100%" height="500" name="X7DsEDFm"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n^2)$$. Where `n` is the length of string `s`. This is due to the fact that we try to find result for all combinations of `i` and `j` where `i` and `j` range from `0` to `n`, to compute a combination we perform an $$O(1)$$ operation thus the final complexity is $$O(n^2)$$.

* Space complexity : $$O(n^2)$$. Where `n` is the length of string `s`. This is due to the `memo` table which is completely filled in this case.

</br>

---

### Approach 3: Bottom-Up DP (1D)

**Algorithm**

On looking closely to both the approaches mentioned above you'll notice that for any combination of `i` and `j`, you essentially only need the `i+1`'th row and `j-1`'th column. Thus we know we can reduce the space complexity to only $$O(n)$$ from $$O(n^2)$$.

An efficient way of doing so is using the previous contained value in the `memo` which represents result for the previous state before storing the result for current state. This is better than the approach of managing two arrays (previous and current) and copying them after every calculation.

<iframe src="https://leetcode.com/playground/nDAfkUyt/shared" frameBorder="0" width="100%" height="500" name="nDAfkUyt"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n^2)$$. Where `n` is the length of string `s`. This is due to the fact that we try to find result for all combinations of `i` and `j` where `i` and `j` range from `0` to `n`, to compute a combination we perform an $$O(1)$$ operation thus the final complexity is $$O(n^2)$$.

* Space complexity : $$O(n)$$. Where `n` is the length of string `s`. This is due to the `memo` table which stores result for only one row/`i` and all it's combination columns/`j`.

</br>