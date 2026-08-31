# [C++, Java, Python3] Palindromic Substrings + Non-overlapping Intervals

**Author:** tojuna
**Votes:** 109
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2808805/](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2808805/)

---


**Explanation**
This question is a combination of Palindromic Substring and Non-overlapping intervals
https://leetcode.com/problems/palindromic-substrings/
https://leetcode.com/problems/non-overlapping-intervals/
* First find all palindromic substrings with length >= k in O(n*k) and store their start and end in an `intervals` list

* Then find minumum number of intervals you need to remove to make the `intervals` array non overlapping in O(n) (`intervals` is already added in sorted order.)

**Solution1:**
<iframe src="https://leetcode.com/playground/FZexChvv/shared" frameBorder="0" width="1000" height="510"></iframe>

*Time complexity = O(nk)*

**Solution2:**
No need to find non overlapping intervals just record the end of the last found palindromic substring. 

<iframe src="https://leetcode.com/playground/V2R8VVPx/shared" frameBorder="0" width="1000" height="345"></iframe>

*Time complexity = O(nk)*