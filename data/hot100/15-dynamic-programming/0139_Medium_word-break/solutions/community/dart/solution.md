# Simple Dart Solution (Memo+DP)

**Author:** AndreLock
**Votes:** 3
**Link:** [https://leetcode.com/problems/word-break/solutions/3582805/](https://leetcode.com/problems/word-break/solutions/3582805/)

---



# Approach
Given an input lsit wordDict return true if you can create the String s using only strings from the wordDict list.

To solve this I first created a set with the word list because constant time search is better than linear, and repeats do not matter for this. I then iterated through the string from the start to end checking to see if the current substring is contained in the set. If it is then I removed the first part of the string and recursed. From here I added the length of the new string to the memo set so that I do not check the same path twice. If the string is of length 0 that means all substrings can be removed from the string and thus it can be made.

Time: 217ms Beats: 100%
Memory: 141.9MB Beats: 62.50%


# Code
```
class Solution {
  Set<String> dictionary = {};
  Set<int> memo = {};
  bool wordBreak(String s, List<String> wordDict) {
      if(memo.contains(s.length)){
          return false;
      }
      if(s.length == 0){
          return true;
      }
      if(dictionary.length == 0){
          for(String str in wordDict){
              dictionary.add(str);
          }
      }
      for(int i = 1 ; i < s.length + 1 ; ++i){
          String sub = s.substring(0,i);
          if(dictionary.contains(sub)){
              String check = s.substring(i);
              if(wordBreak(check, wordDict)){
                  return true;
              }
              memo.add(check.length);
          }
      }
      return false;
  }
}
```