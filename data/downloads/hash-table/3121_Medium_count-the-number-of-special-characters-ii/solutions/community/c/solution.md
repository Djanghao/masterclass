# Two Flags

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5052474/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5052474/)

---

This code is best understood when comparing both problems.

We use two sets of flags to track uppercase and lowercase letters.

In the second solution we set the lowercase flag to False if an uppercase flag is set:
- So, the lowercase flag is True only if all lowercase letters are before upercase ones. 

We add `1` to the result for each letter that both flags set to True.

#### Count the Number of Special Characters I
C++ `bitset` idea by [ttsugrii](https://leetcode.com/ttsugrii/).
<iframe src="https://leetcode.com/playground/ZGGXGsB6/shared" frameBorder="0" width="700" height="250"></iframe>

#### Count the Number of Special Characters II
<iframe src="https://leetcode.com/playground/eW85z78M/shared" frameBorder="0" width="700" height="250"></iframe>