# simple two pointer approach in O(n) time and O(26) space

**Author:** Reddaiah12345
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/solutions/5818750/](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/solutions/5818750/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The primary task is to count how many substrings in word1 contain all characters of word2
- We use two arrays (represented as mpp), where:
   - mpp[x][0] keeps track of the frequency of each character in the current sliding window of word1.
   - mpp[x][1] holds the required frequency of characters based on word2.
- The sliding window is dynamically adjusted
    - It expands when the window is too small to contain all characters from word2.
    - It contracts when all characters are present, counting valid substrings as it does so.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Setup the frequency table for word2:**
    - For each character in word2, increment its frequency count in the mpp array at mpp[character][1].
    - This helps us keep track of how many occurrences of each character we need in the sliding window from word1.
1. **Sliding Window:**
    - Initialize two pointers: l (left) and r (right) to represent the bounds of the sliding window.
    - Traverse through word1 using the r pointer. For each character at position r, check if it is part of word2:
        - If the character count in the sliding window (tracked by mpp[x][0]) is less than the count in word2, increment the size (indicating that more of the necessary characters have been found).
        - If all characters from word2 are found (size == m), begin contracting the window from the left (l) and count all valid substrings.
1. **Count Valid Substrings:**
    For each valid window (where the window contains all characters of word2), the count of valid substrings starting at the current l and ending at any position after r is (n - r + 1) (because all substrings starting at l and ending from r to the end of the string are valid).
1. **Final Cleanup:**
    After processing the string with the r pointer, handle any remaining valid substrings by continuing to contract the window with the l pointer until it no longer contains all characters of word2.


# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(26)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
import java.util.*;

class Solution {
    public long validSubstringCount(String word1, String word2) {
        long res = 0;
        int[][] mpp = new int[26][2]; // To store frequencies of both words
        int l = 0, r = 0;
        int n = word1.length();
        int m = word2.length();
        int size = 0;
        
        // Count frequency of characters in word2
        for (char ch : word2.toCharArray()) {
            mpp[ch - 'a'][1]++;
        }
        
        while (r < n) {
            // Slide the window while it contains all characters of word2
            while (size == m && l <= r) {
                res += (n - r + 1);
                mpp[word1.charAt(l) - 'a'][0]--;
                if (mpp[word1.charAt(l) - 'a'][1] > 0 && mpp[word1.charAt(l) - 'a'][0] < mpp[word1.charAt(l) - 'a'][1]) {
                    size--;
                }
                l++;
            }
            // Expand the window
            if (mpp[word1.charAt(r) - 'a'][1] > 0 && mpp[word1.charAt(r) - 'a'][0] < mpp[word1.charAt(r) - 'a'][1]) {
                size++;
            }
            mpp[word1.charAt(r) - 'a'][0]++;
            r++;
        }
        
        // Handle remaining valid substrings
        while (size == m && l <= r) {
            res += (n - r + 1);
            mpp[word1.charAt(l) - 'a'][0]--;
            if (mpp[word1.charAt(l) - 'a'][1] > 0 && mpp[word1.charAt(l) - 'a'][0] < mpp[word1.charAt(l) - 'a'][1]) {
                size--;
            }
            l++;
        }
        
        return res;
    }
}

```
```python []
class Solution:
    def validSubstringCount(self, word1: str, word2: str) -> int:
        res = 0
        mpp = [[0, 0] for _ in range(26)]  # To store frequencies of both words
        l, r = 0, 0
        n = len(word1)
        m = len(word2)
        size = 0
        
        # Count frequency of characters in word2
        for ch in word2:
            mpp[ord(ch) - ord('a')][1] += 1
        
        while r < n:
            # Slide the window while it contains all characters of word2
            while size == m and l <= r:
                res += (n - r + 1)
                mpp[ord(word1[l]) - ord('a')][0] -= 1
                if mpp[ord(word1[l]) - ord('a')][1] > 0 and mpp[ord(word1[l]) - ord('a')][0] < mpp[ord(word1[l]) - ord('a')][1]:
                    size -= 1
                l += 1
            
            # Expand the window
            if mpp[ord(word1[r]) - ord('a')][1] > 0 and mpp[ord(word1[r]) - ord('a')][0] < mpp[ord(word1[r]) - ord('a')][1]:
                size += 1
            mpp[ord(word1[r]) - ord('a')][0] += 1
            r += 1
        
        # Handle remaining valid substrings
        while size == m and l <= r:
            res += (n - r + 1)
            mpp[ord(word1[l]) - ord('a')][0] -= 1
            if mpp[ord(word1[l]) - ord('a')][1] > 0 and mpp[ord(word1[l]) - ord('a')][0] < mpp[ord(word1[l]) - ord('a')][1]:
                size -= 1
            l += 1
        
        return res

```
```cpp []
class Solution {
public:
    long long validSubstringCount(string word1, string word2) {
        // this problem can be solved using then concept of sliding window and two pointers
        long long res=0;
        vector<pair<int,int>>mpp(26,{0,0});
        int l,r;
        l=0;
        r=0;
        int n=word1.size();
        int m=word2.size();
        int size=0;
        for(auto ch:word2){
            mpp[ch-'a'].second++;
        }
        while(r<n){
            while(size==m&&l<=r){
                res+=(n-r+1);
                mpp[word1[l]-'a'].first--;
                if(mpp[word1[l]-'a'].second>0&&mpp[word1[l]-'a'].first<mpp[word1[l]-'a'].second){
                    size--;
                }
                l+=1;
            }
            if(mpp[word1[r]-'a'].second>0&&mpp[word1[r]-'a'].first<mpp[word1[r]-'a'].second){
                size+=1;
            }
            mpp[word1[r]-'a'].first++;
            r+=1;
        }
        while(size==m&&l<=r){
                res+=(n-r+1);
                mpp[word1[l]-'a'].first--;
                if(mpp[word1[l]-'a'].second>0&&mpp[word1[l]-'a'].first<mpp[word1[l]-'a'].second){
                    size--;
                }
                l+=1;
        }
        return res;
    }
};
```
![ljyaCIu_RMGymk1NhSvUeA.jpg](./images/0.jpeg)
