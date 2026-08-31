# Easy to understand | DP | LIS | O(n)

**Author:** codeanzh
**Votes:** 96
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/2390850/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/2390850/)

---

**Approach**

Similar to longest increasing subsequence with slight modification, consider a DP array of size 26 where each index coresponds to the size of maximum subsequence which ends with the character i (here characters are mapped from 0 - 25, i.e. a -> 0, b -> 1, .... z -> 25).

Now consider iterating from every character in the string from left to right name this iterator **ch**
Now for every ch there is some index (int)ch - 'a' in the DP array say it i
Now for every j from max(0, i - k) to min(25, i + k) DP[i] = max(DP[i], DP[j] + 1)
This is, every character that ends with character j that can be used to append this character i, with maximum 1 + DP[j] length.

Here the case where j = i should be taken separately because it might happen that it apear earlier and you might modify it several times.

**Time Complexity**
O(n) all the elements in string are iterated once and each iteration rquires maximum of 26 operations which is constant.

**Space Complexity**
O(1) constant size (26) array for DP

**Code**

**C++**
```
class Solution {
public:
    int longestIdealString(string s, int k) {
        int DP[26] = {0}, ans = 1;
        
        for (char &ch: s) {
            int i = ch - 'a';
            DP[i] = DP[i] + 1;
            
            for (int j = max(0, i - k); j <= min(25, i + k); j++)
                if (j != i)
                    DP[i] = max(DP[i], DP[j] + 1);
            
            ans = max(ans, DP[i]);
        }
        
        return ans;
    }
};
```

**Python**
```
class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        DP = [0 for _ in range(26)]
        ans = 1
        
        for ch in s:
            i = ord(ch) - ord('a')
            DP[i] = DP[i] + 1
            
            for j in range(max(0, i - k), min(25, i + k) + 1):
                if j != i:
                    DP[i] = max(DP[i], DP[j] + 1)
            
            ans = max(ans, DP[i])
        
        return ans
```

**Java**
```
class Solution {
    public int longestIdealString(String s, int k) {
        int DP[] = new int[26], ans = 1;
        
        for (int ch = 0, n = s.length(); ch < n; ch++) {
            int i = s.charAt(ch) - 'a';
            DP[i] = DP[i] + 1;
            
            for (int j = Math.max(0, i - k); j <= Math.min(25, i + k); j++)
                if (j != i)
                    DP[i] = Math.max(DP[i], DP[j] + 1);
            
            ans = Math.max(ans, DP[i]);
        }
        
        return ans;
    }
}
```