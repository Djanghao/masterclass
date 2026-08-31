# Easy Video Solution 🔥 || Brute Force->Optimal ✅|| Sliding Window

**Author:** ayushnemmaniwar12
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4916854/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4916854/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try with Brute Force approach then optmize it


# ***Easy Video Explanation***

https://youtu.be/sJ_vin3I04s

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)->O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
    

# Code


```C++ []
class Solution {
public:
    int maximumLengthSubstring(string s) {
        
        int n = s.length();
        int maxLen = 0;
        for(int i = 0; i < n; i++) {
            vector<int>arr(26, 0);
            for(int j = i; j < n; j++) {
                if(++arr[s[j] - 'a'] == 3) break;
                maxLen = max(maxLen, j - i + 1);
            }
        }
        
        return maxLen;
    }
};
```
```python []
class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        n = len(s)
        maxLen = 0
        for i in range(n):
            arr = [0] * 26
            for j in range(i, n):
                arr[ord(s[j]) - ord('a')] += 1
                if arr[ord(s[j]) - ord('a')] == 3:
                    break
                maxLen = max(maxLen, j - i + 1)
        return maxLen

```
```Java []
public class Solution {
    public int maximumLengthSubstring(String s) {
        int n = s.length();
        int maxLen = 0;
        for (int i = 0; i < n; i++) {
            int[] arr = new int[26];
            for (int j = i; j < n; j++) {
                if (++arr[s.charAt(j) - 'a'] == 3) break;
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
        return maxLen;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00