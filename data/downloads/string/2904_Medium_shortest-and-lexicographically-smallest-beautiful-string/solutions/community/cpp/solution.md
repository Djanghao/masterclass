# Sliding Window Detail Explanation.

**Author:** bhattparaj1
**Votes:** 24
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4169811/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4169811/)

---

# Intuition
The code finds beautiful substrings with exactly k ones in the given string.

# Approach
It uses two pointers to traverse the string, keeping track of onesCount and the shortest beautiful substring found.

In this algorithm, we utilize two pointers, 'l' and 'r,' to scan the input string 's' while keeping track of 'onesCount,' which counts the number of ones ('1's) in the current substring. We also maintain 'shortestLength' to record the length of the shortest beautiful substring discovered so far and 'startIndex' to store its starting index. As we advance the 'r' pointer through the string, we increment 'onesCount' each time a '1' is encountered.

When 'onesCount' reaches the desired 'k' value, indicating the presence of a beautiful substring, we initiate a while loop. If the length of the current beautiful substring ('r - l + 1') is shorter or equally short compared to the 'shortestLength' seen before, we update 'shortestLength' and create a fresh set of substrings by clearing 'ans.' We add the current beautiful substring to 'ans' and continue by moving the 'l' pointer to contract the substring. If the 'l' character is a '1,' we decrement 'onesCount.'

This process is repeated as the 'r' pointer is advanced, beautiful substrings are identified, and 'ans' and 'shortestLength' are updated. After completing the traversal of the input string, we ensure 'ans' is sorted in lexicographical order to guarantee the returned substring is the smallest. Finally, we iterate through 'ans' to select the beautiful substring with the same length as 'shortestLength' and return it as the result. If no valid beautiful substring is found, we return an empty string.

# Complexity
- Time complexity:-

Apologies for the previous response. The time complexity of your code is O(n * (n + m * log(m))), where 'n' is the length of the input string 's,' 'm' represents the number of beautiful substrings in 's,' and the sorting step introduces a logarithmic factor.



- Space complexity:

The space complexity of your code is O(m), where 'm' is the number of beautiful substrings found in the input string 's.' This space is mainly due to the 'ans' vector used to store these substrings, with other constant-space variables. The time complexity is O(n * (n + m * log(m))), where 'n' is the length of the input string 's,' 'm' is the number of beautiful substrings, and the sorting step introduces a logarithmic factor.

# Code
```
class Solution {
public:
    string shortestBeautifulSubstring(string s, int k) {
        int l = 0, r = 0;
        int onesCount = 0;
        int shortestLength = INT_MAX;
        int startIndex = -1;
        vector<string> ans;

        while (r < s.length()) {
            if (s[r] == '1') {
                onesCount++;
            }

            while (onesCount == k) {
                if (r - l + 1 <= shortestLength) {
                    if (r - l + 1 < shortestLength) {
                        ans.clear();  // Start a new set of substrings if shorter
                    }
                    shortestLength = r - l + 1;
                    startIndex = l;
                    ans.push_back(s.substr(startIndex, shortestLength));
                }

                if (s[l] == '1') {
                    onesCount--;
                }

                l++;
            }

            r++;
        }

        if (startIndex == -1) {
            return "";
        }

        sort(ans.begin(), ans.end());

        for (int i = 0; i < ans.size(); i++) {
            if (ans[i].length() == shortestLength) {
                return ans[i];
            }
        }

        return "";
    }
};

```