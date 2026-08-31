# ✅Step by step 🔥Beginner Friendly✅||full explanation🔥|| DP||Efficient Easy to understand.

**Author:** singhhh_sidhantttt
**Votes:** 229
**Link:** [https://leetcode.com/problems/extra-characters-in-a-string/solutions/3990686/](https://leetcode.com/problems/extra-characters-in-a-string/solutions/3990686/)

---


# **Problem Statement:**
We are given a **string s and a dictionary of words**. The goal is to **break s** into one or more **non-overlapping substrings** such that each substring is present in the dictionary and **minimize the number of extra characters left over**.


<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
**Dynamic Programming Approach:** We can solve this problem using dynamic programming. There are two **common approaches: bottom-up (iterative) and top-down (recursive with memoization)**. Both approaches aim to find the minimum extra characters from the end of the string to the beginning.

# Steps-

1. **Initialization:** Initialize a **dynamic programming array (dp)** to store the minimum number of extra characters at each position in the string. **Initialize all elements in dp to a maximum value (e.g., -1 or a large number) to indicate that they haven't been calculated yet.**
2. **Bottom-Up (Iterative) Approach:**

    - **Start iterating** through the string s from **the end (right to left).**
    - For **each position i**, initialize dp[i] with a **value of 1 + dp[i + 1]**. This represents breaking the string after the current character and adding one extra character to the minimum extra characters found in the next position.
    - **Check for each word in the dictionary** if **it matches** the substring starting from the current position i. **If a match is found**, **update** **dp[i]** **to the minimum between its current value and** **dp[i + w.size()],** where w.size() is the length of the matched word.
    - **Continue this process** for all positions in the string s, and the final value of dp[0] will represent the minimum number of extra characters left over.

3. **Top-Down (Recursive with Memoization) Approach:**

    -** Define a recursive** function that starts from the beginning of the string s and calculates the minimum extra characters.
    - **Use an array (dp) to memoize intermediate results** to avoid redundant calculations. Initialize all elements in dp to a special value (e.g., -1) to indicate that they haven't been calculated yet.
    - In the recursive function, **if dp[i] is not yet calculated **(equals -1), **calculate it as follows:**
        - **a->** Initialize dp[i] **with a value of 1 + minExtraChar(s, dict, i + 1)**, representing breaking the string after the current character and adding one extra character to the minimum extra characters found in the next position.
        - **b->** **Check for each word in the dictionary** if it matches the substring starting from the current position i. **If a match is found**, **update dp[i] to the minimum between its current value and 1 + minExtraChar(s, dict, i + w.size())**, where w.size() is the length of the matched word.
    - **Return dp[0]**, which represents the minimum extra characters starting from position 0.

4. **Result:** **The result of either approach is the minimum number of extra characters left over** when optimally breaking up the string into substrings from the dictionary.
<!-- Describe your approach to solving the problem. -->

# Complexity
**Bottom-Up (Iterative) Approach:**

- **Time Complexity (TC): O(NML)**, where N is the length of the input string s, M is the number of words in the dictionary, and L is the average length of words in the dictionary.
- **Space Complexity (SC): O(N)**, where N is the length of the input string s. We use an array dp of size N to store the minimum extra characters at each position.

**Top-Down (Recursive with Memoization) Approach:**

- **Time Complexity (TC): O(NML),** where N is the length of the input string s, M is the number of words in the dictionary, and L is the average length of words in the dictionary. This is because each position in the string is visited once for each word in the dictionary.
- **Space Complexity (SC): O(N)**, where N is the length of the input string s. We use an array dp of size N for memoization, and the recursive call stack can go up to a depth of N.

# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

---



# Code  top-down dynamic programming.
```C++ []
class Solution {
public:
    int minExtraChar(const string &s, vector<string>& dict) {
        memset(dp, -1, sizeof(dp)); // Initialize dp array with -1
        
        return minExtraCharHelper(s, dict, 0);
    }
    
private:
    int dp[51]; // Initialize dp array to store memoization values

    int minExtraCharHelper(const string &s, vector<string>& dict, int i) {
        if (i == s.size())
            return 0;

        if (dp[i] == -1) {
            dp[i] = 1 + minExtraCharHelper(s, dict, i + 1); // Initialize with one extra character.

            for (const auto &w : dict) {
                if (s.compare(i, w.size(), w) == 0) {
                    dp[i] = min(dp[i], minExtraCharHelper(s, dict, i + w.size())); // Update if a word in the dictionary is found.
                }
            }
        }

        return dp[i]; // Return the minimum extra characters starting from position i.
    }
};
```
```Java []
import java.util.Arrays;

class Solution {
    private int[] dp = new int[51]; // Initialize dp array with 0 values

    public int minExtraChar(String s, String[] dictionary) {
        Arrays.fill(dp, -1); // Initialize dp array with -1 values
        return minExtraCharHelper(s, dictionary, 0);
    }

    private int minExtraCharHelper(String s, String[] dictionary, int i) {
        if (i == s.length()) {
            return 0;
        }

        if (dp[i] == -1) {
            dp[i] = 1 + minExtraCharHelper(s, dictionary, i + 1); // Initialize with one extra character

            for (String w : dictionary) {
                if (i + w.length() <= s.length() && s.substring(i, i + w.length()).equals(w)) {
                    dp[i] = Math.min(dp[i], minExtraCharHelper(s, dictionary, i + w.length())); // Update if a word in the dictionary is found
                }
            }
        }

        return dp[i]; // Return the minimum extra characters starting from position i
    }
}

```
```Python3 []
class Solution:
    def __init__(self):
        self.dp = [-1] * 51  # Initialize dp array with -1 values
        
    def minExtraChar(self, s, dictionary):
        return self.minExtraCharHelper(s, dictionary, 0)
    
    def minExtraCharHelper(self, s, dictionary, i):
        if i == len(s):
            return 0

        if self.dp[i] == -1:
            self.dp[i] = 1 + self.minExtraCharHelper(s, dictionary, i + 1)  # Initialize with one extra character.

            for w in dictionary:
                if s[i:i+len(w)] == w:
                    self.dp[i] = min(self.dp[i], self.minExtraCharHelper(s, dictionary, i + len(w)))  # Update if a word in the dictionary is found.

        return self.dp[i]  # Return the minimum extra characters starting from position i

```
```Javascript   []
function minExtraChar(s, dictionary) {
    const dp = new Array(s.length + 1).fill(-1);

    function minExtraCharHelper(i) {
        if (i === 0) {
            return 0;
        }

        if (dp[i] !== -1) {
            return dp[i];
        }

        dp[i] = 1 + minExtraCharHelper(i - 1);

        for (const w of dictionary) {
            if (i >= w.length && s.slice(i - w.length, i) === w) {
                dp[i] = Math.min(dp[i], minExtraCharHelper(i - w.length));
            }
        }

        return dp[i];
    }

    return minExtraCharHelper(s.length);
}

```
---
# Code  Bottom-up dynamic programming
```C++ []
class Solution {
public:
    int minExtraChar( string &s, vector<string>& dictionary) {
        int dp[51] = {}; // Initialize an array to store the minimum extra characters.
        int n = s.size();
        
        for (int i = n - 1; i >= 0; --i) {
            dp[i] = 1 + dp[i + 1]; // Initialize with one extra character.
            
            for (const auto &w : dictionary) {
                if (i + w.size() <= n && s.compare(i, w.size(), w) == 0) {
                    dp[i] = min(dp[i], dp[i + w.size()]); // Update if a word in the dictionaryionary is found.
                }
            }
        }
        
        return dp[0]; // Return the minimum extra characters for the entire string.
    }

};

```
```Java []
class Solution {
    public int minExtraChar(String s, String[] dictionary) {
        int[] dp = new int[51]; // Initialize an array to store the minimum extra characters.
        int n = s.length();

        for (int i = n - 1; i >= 0; --i) {
            dp[i] = 1 + dp[i + 1]; // Initialize with one extra character.

            for (String w : dictionary) {
                if (i + w.length() <= n && s.substring(i, i + w.length()).equals(w)) {
                    dp[i] = Math.min(dp[i], dp[i + w.length()]); // Update if a word in the dictionary is found.
                }
            }
        }

        return dp[0]; // Return the minimum extra characters for the entire string.
    }
}

```
```Python3 []
class Solution:
    def minExtraChar(self, s, dictionary):
        dp = [0] * 51  # Initialize an array to store the minimum extra characters.
        n = len(s)

        for i in range(n - 1, -1, -1):
            dp[i] = 1 + dp[i + 1]  # Initialize with one extra character.

            for w in dictionary:
                if i + len(w) <= n and s[i:i + len(w)] == w:
                    dp[i] = min(dp[i], dp[i + len(w)])  # Update if a word in the dictionary is found.

        return dp[0]  # Return the minimum extra characters for the entire string.

```
```Javascript []
function minExtraChar(s, dictionary) {
    const dp = new Array(s.length + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i <= s.length; i++) {
        for (const w of dictionary) {
            if (i + w.length <= s.length && s.slice(i, i + w.length) === w) {
                dp[i + w.length] = Math.min(dp[i + w.length], dp[i]);
            }
        }
        dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
    }

    return dp[s.length];
}



```

---
# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A
![UPVOTE.png](./images/0.png)
