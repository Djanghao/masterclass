# ✅ Number of Matching Subsequences | Easy Solution w/ Explanation | Binary-Search

**Author:** archit91
**Votes:** 78
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/1289527/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/1289527/)

---

The naive way of checking if a word is subsequence of *`s`* would be iterating through *`s`* and the word till each character of word is matched or we reach end of `s`. For the given constraints, this approach would result in TLE.

---

\u2714\uFE0F ***Solution - I (Map characters with indices and binary search)***



We can see that checking if a word is subsequence of *`s`* is nothing but ensuring each character of the word occurs in *`s`* one after other (i.e, same order). We already have the ordering and  indices of all characters in *`s`* from start itself. 

So, instead of iterating over `s` each time, we could just iterate over it once and store indices of each character in increasing order. Thereafter, while checking if a word is subsequence, we will just  **search if there exists an index in `s`, for each character of given word, that's greater than the index found for previous charcter**. 

Since we have stored the indices for each character in sorted order, we would just apply **binary search over a character's index array** instead of linear search. If all characters of given word are found to have corresponding indices in *`s`* in an increasing order, we say that word is subsequence of `s`.

<iframe src="https://leetcode.com/playground/QDbKcD8U/shared" frameBorder="0" width="100%" height="410"></iframe>

***Time Complexity :*** **`O(L + nmlogL)`**, where `n` is the number of elements in *`words`*, `m` is the average word length and `L` is the length of *`s`*. `O(L)` for constructing the mappings and `O(mlogL)` for checking if a word is subsequence of `s` and it's repeated for `n` times giving overall total complexity of `O(L + nmlogL)`.
***Space Complexity :*** **`O(L)`**


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---