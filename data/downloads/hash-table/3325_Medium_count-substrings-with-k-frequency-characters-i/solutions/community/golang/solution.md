# Easy solution using hashtable || GOLANG || CPP

**Author:** sonuola
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5967602/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5967602/)

---

# Intuition
The problem requires counting the number of substrings where each character appears at least k times. We iterate over each starting index of the substring, expanding from that point and using an array to keep track of character counts. Once a substring meets the condition, all following substrings starting from this position will also meet it, allowing us to increment the count.

# Approach
1. Loop through each starting index: For each starting point i, use another loop to expand the substring from i to n.
2. Track Character Counts: Use an array arr to store the frequency of each character as the substring grows.
3. Check Condition: For each substring, check if any character reaches k occurrences:
* If so, mark found to 1, indicating that all further substrings starting at i will meet the requirement.
* Increment ans to count valid substrings.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(1)

# Code
```golang []
func numberOfSubstrings(s string, k int) int {

    n := len(s);
    ans := 0;
    for i := 0 ; i < n ; i++ {
        var arr[26] int;
        found := 0;
        for j := i ; j < n ; j++ {
            if found == 1 {
                ans++;
            } else {
                if arr[s[j] - 'a'] == k-1 {
                    ans++;
                    found = 1;
                }
                arr[s[j] - 'a']++;
            }
        }
    }
    return ans;
}
```
```cpp []
class Solution {
public:
    int numberOfSubstrings(string s, int k) {
        int n = s.size();
        int ans = 0;
        for(int i = 0 ; i < n ; i++) {
            vector<int>v(26,0);
            int found = 0;
            for(int j = i ; j < n ; j++) {
                if(found) {
                    ans++;
                } else {
                    if(v[s[j] - 'a'] == k-1) {
                        found = 1; 
                        ans++;
                    }
                    v[s[j] - 'a']++;
                }
            }
        }
        return ans;
    }
};
```

