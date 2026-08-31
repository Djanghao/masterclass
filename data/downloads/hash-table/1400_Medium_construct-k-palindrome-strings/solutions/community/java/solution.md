# Java, counting, simple, explained

**Author:** gthor10
**Votes:** 9
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/564236/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/564236/)

---

Idea is following: count of chars can be even or odd. Those that are even - they can be used in one of substrings to form the palindrome, so we don't care about those.
If character has odd frequency - it can be inserted only 1 or 3 or 5... etc. to form the palindrome. However number of such characters cannot be more than number of strings, in other words - only one such char is allowed per substring. 
This leads to solution - count all frequencies, count those that are odd. If number of such chars > then k - it's not possible to balance it to form all palindromes.

O(n) time - iterate over every char in string to count freq.
O(1) space - use fixed size array to count freq.

```
  public boolean canConstruct(String s, int k) {
    if (s == null || s.isEmpty() || s.length() < k)
      return false;
    
    int[] count = new int[26];
    //count freq of every character
    for (char ch : s.toCharArray()) ++count[ch - 'a'];
    //count chars that has odd freq
    int countOfOdd = 0;
    for (int i = 0; i < 26; i++) 
      if (count[i] % 2 == 1)
        ++countOfOdd;
    return countOfOdd <= k;
  }
```