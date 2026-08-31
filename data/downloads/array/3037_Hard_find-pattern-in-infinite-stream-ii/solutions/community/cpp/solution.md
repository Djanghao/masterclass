# Same as 3023

**Author:** cpcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/4727816/](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/4727816/)

---

# Intuition
Just use KMP.

# Approach
Since the bits are given via a stream API, we shouldn't save them into a vector. We can save a flag to tell whether we already read the "source[i]" before or not.

# Complexity
- Time complexity:
O(n + m) where m is the pattern length and n is the first occurence of pattern in the source.

- Space complexity:
O(m) where m is the pattern length.

# Code
```
/**
 * Definition for an infinite stream.
 * class InfiniteStream {
 * public:
 *     InfiniteStream(vector<int> bits);
 *     int next();
 * };
 */
class Solution {
public:
    int findPattern(InfiniteStream* stream, vector<int>& pattern) {
       const int m = pattern.size();
       vector<int> next(m);
       for (int i = 1, len = 0; i < m;) {
           if (pattern[i] == pattern[len]) {
               next[i++] = ++len;
           } else if (len == 0) {
               ++i;
           } else {
               len = next[len - 1];
           }
       }
       bool read = false;
       for (int i = 0, j = 0, c = 0;; ) {
           if (!read) {
               c = stream->next();
               read = true;
           }
           if (c == pattern[j]) {
               ++j;
               ++i;
               read = false;
               if (j == m) {
                   return i - m;
               }
           } else if (j) {
               j = next[j - 1];
           } else {
               ++i;
               read = false;
           }
       }
       return -1; 
    }
};
```