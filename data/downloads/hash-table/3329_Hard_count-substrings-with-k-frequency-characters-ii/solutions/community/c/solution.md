# Python3, C++, Java || Sliding window sized to char count == k

**Author:** dudeandcat
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/5961513/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/5961513/)

---

The sliding window starts at the end of the string, and slides back to the beginning of the string.  The width of the sliding window expands to the left, until the count for the leftmost window character is exactly k.  Then the width of the window shrinks on the right, until the count of the leftmost window character does not equal k.

**--- Python3 code ---**
Runtime range is 367ms to 499ms.
```
class Solution:
    def numberOfSubstrings(self, s: str, k: int) -> int:
        charCounts = [0]*128
        substrCount = 0
        left = len(s) - 1
        right = len(s) - 1
        
        while left >= 0:
            ch = ord(s[left])
            left -= 1
            charCounts[ch] += 1
            while charCounts[ch] >= k:
                substrCount += left + 2
                charCounts[ord(s[right])] -= 1
                right -= 1
        return substrCount
```
**--- C++ code ---**
Runtime range is 65ms to 77ms, usually about 71ms.
```
class Solution {
public:
    long long numberOfSubstrings(string s, int k) {
        vector<int> charCounts(128, 0);
        long long substrCount = 0;
        int left = s.size() - 1;
        int right = s.size() - 1;
        
        while (left >= 0) {
            if (++charCounts[s[left--]] < k)  continue;
            do {  
                substrCount += left + 2;
                charCounts[s[right--]]--;
            } while (charCounts[s[left + 1]] >= k);
        }
        return substrCount;
    }
};
```
**--- Java code ---**
Runtime range is 11ms to 12ms, usually 11ms.
```
class Solution {
    public long numberOfSubstrings(String s, int k) {
        int[] charCounts = new int[128];
        long substrCount = 0;
        byte[] sc = s.getBytes();
        int left = s.length() - 1;
        int right = s.length() - 1;
        
        while (left >= 0) {
            if (++charCounts[sc[left--]] < k)  continue;
            do {  
                substrCount += left + 2;
                charCounts[sc[right--]]--;
            } while (charCounts[sc[left + 1]] >= k);
        }
        return substrCount;
    }
}
```
