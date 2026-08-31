# [Python3, Java, C++] Counting Mirror Words O(n)

**Author:** tojuna
**Votes:** 362
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/1675343/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/1675343/)

---


***Explanation:***

2 letter words can be of 2 types:
1. Where both letters are same
2. Where both letters are different

Based on the above information:
* If we are able to find the mirror of a word, `ans += 4`
* The variable `unpaired` is used to store the number of unpaired words with both letters same.
* Unpaired here means a word that has not found its mirror word.
* At the end if unpaired same letter words are > 0, we can use one of them as the center of the palindromic string. 

**Solution 1: With HashMap**
<iframe src="https://leetcode.com/playground/2BoNSYTg/shared" frameBorder="0" width="500" height="570"></iframe>

**Solution 2: Without HashMap**
<iframe src="https://leetcode.com/playground/LH7fNiWY/shared" frameBorder="0" width="500" height="400"></iframe>