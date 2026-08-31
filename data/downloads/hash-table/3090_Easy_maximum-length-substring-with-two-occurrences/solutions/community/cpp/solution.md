# 2 Approaches || All Substrings || Sliding Window

**Author:** AdityaRaj_cpp
**Votes:** 24
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4917055/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4917055/)

---

# Checking All Substrings

### Approach
1. Iterate through each character of the string `s` using two nested loops. The outer loop iterates over the starting index of the substring`i`, and the inner loop iterates over the ending index of the substring`j`.
2. Count the frequency for each character and break the loop when any character appears the third time since the condition of having each character appear at most twice in the substring is violated.

```
class Solution
{
public:
    int maximumLengthSubstring(string s)
    {
        int n = s.size();
        int ans = 0;
        for (int i = 0; i < n; i++)
        {
            unordered_map<char, int> mp;
            for (int j = i; j < n; j++)
            {
                mp[s[j]]++;
                if (mp[s[j]] > 2)
                    break;
                ans = max(ans, j - i + 1);
            }
        }
        return ans;
    }
};
```

# Two Pointers and Sliding Window

### Approach
1. Iterates through the characters of the string s using a sliding window approach. At each step, update the map `mp` with the count of the current character.
2. If the count of the current character in the map becomes 3, enter a loop until it becomes 2. Within this loop, adjust the beginning of the substring (begin) to shrink the window until the character appears.
4. During each iteration of the loop, decrement the count of the character at the beginning of the substring in the map `mp`. If the count becomes 2 after decrementing, it indicates that the character no longer appears more than twice in the substring.

```
class Solution
{
public:
    int maximumLengthSubstring(string s)
    {
        int n = s.size(), ans = 0, begin = 0, end = 0;
        map<char, int> mp;
        while (end < n)
        {
            mp[s[end]]++;
            while (mp[s[end]] == 3)
                mp[s[begin++]]--;
            ans = max(ans, end - begin + 1);
            end++;
        }
        return ans;
    }
};
```
