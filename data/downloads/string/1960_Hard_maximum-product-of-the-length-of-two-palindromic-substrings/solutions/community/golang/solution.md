# [Go] Manachers + prefixMax

**Author:** sebnyberg
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/1601474/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/1601474/)

---

This problem is a mouthful.. I sure do hate palindromes.

As with many other solutions here, I use Manacher's algorithm to find the maximum palindrome for each position in the input string. For more info on Manacher's, please see
https://cp-algorithms.com/string/manacher.html

We only need to consider odd-length palindromes for this exercise.

Once a palindrome has been found by Manacher's, store the size of the paindrome just outside the right boundary of the palindrome to the right. This will be used to form a prefix-max.

To get the prefix-max for left-to-right, reverse the string and the result.

Finally, find the maximum product by combining the max palindrome to the left/right of each position in the input string.

<iframe src="https://leetcode.com/playground/HvuT3KuH/shared" frameBorder="0" width="700" height="1200"></iframe>