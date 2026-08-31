# [C++/Go] Sort & Trie - simple solution - O(n log n)

**Author:** virtyaluk
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/997038/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/997038/)

---

The idea is to sort `nums` ans `queries` and build a trie as you go over the sorted queries and populate the trie with `nums[j] <= mi` and then calculate max possible value of `xi` and the numbers in the trie. 

<iframe src="https://leetcode.com/playground/LUwSjKdK/shared" frameBorder="0" width="700" height="600"></iframe>