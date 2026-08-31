# [Python3, Java, C++] All Operations O(1) | Flipped String/Flip Flag

**Author:** tojuna
**Votes:** 95
**Link:** [https://leetcode.com/problems/design-bitset/solutions/1748431/](https://leetcode.com/problems/design-bitset/solutions/1748431/)

---


* Flipping can be done using a flipped string that contains the flipped version of the current bitset. C++ and Java solutions have been done using this method. All operations are O(1) in C++ at the cost of an extra string of length `size`
* Python solution has been done using a flip flag. Flip flag stores whether the current bitset has to be flipped. `toString` is O(n)
* Keep a count variable `ones` that counts the number of ones in the bitset. This has to be updated in `fix`, `unfix`, and `flip` functions.
<iframe src="https://leetcode.com/playground/kUJV4c3B/shared" frameBorder="0" width="900" height="590"></iframe>