# C++ | Easy to Understand | Sliding Window

**Author:** vishal9950
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-window-subsequence/solutions/1730034/](https://leetcode.com/problems/minimum-window-subsequence/solutions/1730034/)

---

```
class Solution {
public:
	string minWindow(string s1, string s2) {
        int m = s1.size();
        int n = s2.size();
        int start = 0, len = INT_MAX, count = 0;
        for (int i = 0; i < m; i++)
        {
            if (s1[i] == s2[count]) count++;

            // all characters in s2 are matched. now reduce the window to the right most part which has all the characters in s2
            if (count == n)
            {
                int j = i;
                while (count > 0)
                {
                    if (s2[count - 1] == s1[j--])
                    {
                        count--;
                    }
                }
                j++; // index in s1 which is the first character in s2

                if (len > i - j + 1)
                {
                    len = i - j + 1;
                    start = j;
                }
                // move back i so it starts next search from j+1 in next iteration
                i = j;
            }
        }
        if (len == INT_MAX) return "";
        return s1.substr(start, len);
	}
};
```