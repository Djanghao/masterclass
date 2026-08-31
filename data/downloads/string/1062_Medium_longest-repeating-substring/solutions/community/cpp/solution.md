# Detailed Explanation C++ | TC: O(n^2) | Dynamic Programming && Z Algorithm

**Author:** as468579
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/4080686/](https://leetcode.com/problems/longest-repeating-substring/solutions/4080686/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The first idea that strike into my mind is to iterate through all the substrings and record the starting index of each substring in an `unordered_map`. 

By checking the map, we easily know if the substring is repeated. Then, we simply keep track of the maximum length of repeated substring and return it at the end of function.

The problem here is that as we insert a substring into an unordered_map, the time it takes for the hash function might increase when the length of string grows (i.e. $O(n)$).

So the overall time complexity is $O(n^3)$ rather than $O(n^2).$

Next I came up with 2 ideas that solve this probem in $O(n^2)$ time complexity, by using **Dynamic Programming** or **Z algorithm**.

# Approach
<!-- Describe your approach to solving the problem. -->
### Dynamic Programming
Leveraing the simliar ideal as **Longest Common Substring (LCS)**, we can figure out the longest common suffix between $s[0...i]$ and $s[0...j], \\ where \\ i \\ < \\ j$. Note that the limitation $i \\ < \\ j$ is important, it ensures we avoid selecting the same substring within the given string $s$.

The dynamic programming formula is:

$LCS[i][j] = 0, \\ when \\ i \\ >= j \\ or \\ s[i] \\ \
eq \\ s[j] $
$LCS[i][j] = LCS[i-1][j-1] + 1, otherwise$


### Z Algorithm
We can use z algorithm to get the **Longest Common Prefix (LCP)** of two given strings in linear time. 

Here I would like to find the LCPs in the folloing pairs $(s[0...n-2], s)$, $(s[1...n-2], s)$, ..., $(s[n-3...n-2], s)$. 

Note that the LCP of $(s[1...n-2], s)$ is a subset of $(s[1...n-1], s)$.

Hence, the longest common prefix in the previous pairs is the answer we are looking for.

# Complexity
- Time complexity: $O(n^2)$ in both cases
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n^2)$ in both cases
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int solution1(const string &s1){
        const int n = s.length(); 
        vector<vector<int>> dp(n+1, vector<int>(n+1, 0));

        int max_length = 0;
        for(int i=1; i<=n; ++i){
            for(int j=i+1; j<=n; ++j){
                if(s[i-1] == s[j-1]){
                    dp[i][j] = dp[i-1][j-1] + 1;
                    max_length = max(max_length, dp[i][j]);
                }
            }
        }
        return max_length;    
    }

    // Below are functions for solution2
    vector<int> z_maker(const string& s){
        const int n = s.length();
        vector<int> z(n, 0);
        z[0] = -1;

        int left = 0, right = 0;
        for(int i=0; i<n; ++i){
            if((i > right) || (z[i - left] >= (right - i + 1))){
                int x = (i > right) ? i : right + 1;
                while(s[x] == s[x - i]){ ++x; }
                z[i] = x - i;
                if(x > i){
                    left  = i;
                    right = x - 1; 
                }
            }else{
                z[i] = z[i - left];
            }
        }
        return z;
    }

    int solution2(const string &s){
        const int n = s.length();
        int max_result = 0;
        for(int i=0; i<n; ++i){
            string ss = s.substr(i, n-1-i);
            vector<int> z = z_maker(ss + "$" + s);
            for(int j=ss.length() + 1 + i + 1; j<z.size(); ++j){
                max_result = max(max_result, z[j]);
            }
        }
        return max_result;
    }

    int longestRepeatingSubstring(string s) {
        return solution1(s);
        // return solution2(s);
    }
};
```