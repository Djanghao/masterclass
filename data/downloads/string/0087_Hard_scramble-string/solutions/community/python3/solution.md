# ✔💯 DAY 364 | 100% | [JAVA/C++/PYTHON] | EXPLAINED | INTUTION | DRY RUN | PROOF 💫

**Author:** ManojKumarPatnaik
**Votes:** 126
**Link:** [https://leetcode.com/problems/scramble-string/solutions/3357574/](https://leetcode.com/problems/scramble-string/solutions/3357574/)

---



# Happy Sri Ram Navami to all !! \uD83D\uDEA9\uD83D\uDEA9\uD83D\uDEA9
![image.png](./images/0.png)
# NOTE:- if you found anyone's post helpful please upvote that post because some persons are downvoting unneccesarily, and you are the one guys that save our post from getting unvisible, upvote for remains visible for others so and other people can also get benefitted.

##### \u2022	There are several ways to solve the Scramble String problem
##### \u2022	Recursion with memoization: This is the approach used in the solution we discussed earlier. The idea is to recursively check all possible splits of the two strings, and memoize the results to avoid recomputing the same substrings multiple times.
##### \u2022	Dynamic programming: This approach involves building a 3D table to store the results of all possible substrings of the two strings. The table is filled in a bottom-up manner, starting with the smallest substrings and building up to the largest substrings. The table can then be used to check if the two strings are scrambled versions of each other.
##### \u2022	Top-down dynamic programming: This approach is similar to recursion with memoization, but uses a 3D table to store the results of all possible substrings of the two strings. The table is filled in a top-down manner, starting with the largest substrings and building down to the smallest substrings. The table can then be used to check if the two strings are scrambled versions of each other.
##### \u2022	BFS: This approach involves using a queue to generate all possible scrambled versions of one of the strings, and checking if any of them match the other string. The idea is to generate all possible substrings of the first string, and then generate all possible permutations of each substring. The resulting strings can then be checked to see if they match the second string.
##### \u2022	All of these approaches have the same time and space complexity of O(n^4), but they differ in their implementation details and performance characteristics.

# Intuition &  Approach

<!-- Describe your approach to solving the problem. -->
##### \u2022	The problem is to determine if two strings s1 and s2 are scrambled versions of each other. The algorithm works by recursively splitting the strings into two non-empty substrings and swapping them randomly. The algorithm stops when the length of the string is 1.
##### \u2022	The approach used to solve the problem use a recursive function that checks if the two strings are scrambled versions of each other. The function checks if the two strings are equal, and if not, it checks if the two strings have the same characters and if the substrings of the two strings are scrambled versions of each other.
##### \u2022	The algorithm uses an unordered map to store the results of previously computed substrings to avoid recomputing them. It also uses three vectors to keep track of the frequency of characters in the two strings and the current substring being checked.
##### \u2022	The intuition behind the algorithm is that if two strings are scrambled versions of each other, then they can be split into two non-empty substrings that are also scrambled versions of each other. The algorithm checks all possible splits of the two strings and recursively checks if the substrings are scrambled versions of each other.
##### \u2022	The algorithm starts by checking if the two strings are equal. If they are, it returns true. If not, it initializes three vectors to keep track of the frequency of characters in the two strings and the current substring being checked. It then checks if the current substring of s1 and s2 have the same characters. If they do, it recursively checks if the substrings of s1 and s2 are scrambled versions of each other. If they are, it returns true.
##### \u2022	If the current substrings of s1 and s2 do not have the same characters, the algorithm checks all possible splits of the two strings. For each split, it checks if the substrings of s1 and s2 are scrambled versions of each other. If they are, it returns true.
##### \u2022	The algorithm uses an unordered map to store the results of previously computed substrings to avoid recomputing them. If the current substring of s1 and s2 has already been computed, the algorithm returns the stored result.
##### \u2022	Overall, the algorithm uses a recursive approach to check if two strings are scrambled versions of each other. It uses an unordered map and three vectors to store previously computed substrings and keep track of the frequency of characters in the two strings and the current substring being checked.


# here's the complete recursion tree for the isScramble method with  s1 = "great" and  s2 = "rgeat"

```
isScramble("great", "rgeat")
           /           |           |           |           \\
isScramble("g", "r")  isScramble("g", "at")  isScramble("gr", "ra")  isScramble("gr", "eat")  isScramble("gre", "rge")
           |           /           |           |           |           \\           |           /           |
isScramble("", "")  isScramble("g", "a")  isScramble("g", "r")  isScramble("g", "e")  isScramble("g", "r")  isScramble("g", "r")  isScramble("gr", "e")  isScramble("gr", "g")  isScramble("gr", "er")  isScramble("gr", "gea")  isScramble("gre", "rg")  isScramble("gre", "er")
      /      \\           /      \\           /      \\           /      \\           /      \\           /      \\           /      \\           /      \\           /      \\           /      \\           /      \\
false  false  false  false  false  false  false  false  false  false  false  false  false  false  false  false  false  false  false  false  false  false  false  true
```


# Code
```java []
class Solution {
    // to store previously computed substrings
    Map<String, Boolean> map = new HashMap<>();

    public boolean isScramble(String s1, String s2) {
        int n = s1.length();
        // check if the two strings are equal
        if (s1.equals(s2)) {
            return true;
        }
        // initialize frequency arrays for s1, s2, and current substring
        int[] a = new int[26], b = new int[26], c = new int[26];
        // check if the current substring has already been computed
        if (map.containsKey(s1 + s2)) {
            return map.get(s1 + s2);
        }
        // check all possible splits of the two strings
        for (int i = 1; i <= n - 1; i++) {
            int j = n - i;
            // update frequency arrays for s1, s2, and current substring
            a[s1.charAt(i - 1) - 'a']++;
            b[s2.charAt(i - 1) - 'a']++;
            c[s2.charAt(j) - 'a']++;
            // check if the current substring has the same characters
            if (Arrays.equals(a, b) && isScramble(s1.substring(0, i), s2.substring(0, i)) && isScramble(s1.substring(i), s2.substring(i))) {
                // if the substrings are scrambled versions of each other, return true
                map.put(s1 + s2, true);
                return true;
            }
            // check if the current substring and its complement have the same characters
            if (Arrays.equals(a, c) && isScramble(s1.substring(0, i), s2.substring(j)) && isScramble(s1.substring(i), s2.substring(0, j))) {
                // if the substrings are scrambled versions of each other, return true
                map.put(s1 + s2, true);
                return true;
            }
        }
        // if none of the splits result in scrambled versions, return false
        map.put(s1 + s2, false);
        return false;
    }
}
```
```c++ []
class Solution
{
	// unordered map to store previously computed substrings
	unordered_map<string,bool> mp;

public:
	bool isScramble(string s1, string s2)
	{
		int n = s1.size();
		// check if the two strings are equal
		if (s1 == s2)
		{
			return true;
		}
		// initialize frequency vectors for s1, s2, and current substring
		vector a(26, 0), b(26, 0), c(26, 0);
		// check if the current substring has already been computed
		if (mp.count(s1 + s2))
		{
			return mp[s1 + s2];
		}
		// check all possible splits of the two strings
		for (int i = 1; i <= n - 1; i++)
		{
			int j = n - i;
			// update frequency vectors for s1, s2, and current substring
			a[s1[i - 1] - 'a']++;
			b[s2[i - 1] - 'a']++;
			c[s2[j] - 'a']++;
			// check if the current substring has the same characters
			if (a == b && isScramble(s1.substr(0, i), s2.substr(0, i)) && isScramble(s1.substr(i), s2.substr(i)))
			{
				// if the substrings are scrambled versions of each other, return true
				mp[s1 + s2] = true;
				return true;
			}
			// check if the current substring and its complement have the same characters
			if (a == c && isScramble(s1.substr(0, i), s2.substr(j)) && isScramble(s1.substr(i), s2.substr(0, j)))
			{
				// if the substrings are scrambled versions of each other, return true
				mp[s1 + s2] = true;
				return true;
			}
		}
		// if none of the splits result in scrambled versions, return false
		mp[s1 + s2] = false;
		return false;
	}
};
```
```python []
class Solution:
    # dictionary to store previously computed substrings
    map = {}

    def isScramble(self, s1: str, s2: str) -> bool:
        n = len(s1)
        # check if the two strings are equal
        if s1 == s2:
            return True
        # initialize frequency lists for s1, s2, and current substring
        a, b, c = [0] * 26, [0] * 26, [0] * 26
        # check if the current substring has already been computed
        if (s1 + s2) in self.map:
            return self.map[s1 + s2]
        # check all possible splits of the two strings
        for i in range(1, n):
            j = n - i
            # update frequency lists for s1, s2, and current substring
            a[ord(s1[i - 1]) - ord('a')] += 1
            b[ord(s2[i - 1]) - ord('a')] += 1
            c[ord(s2[j]) - ord('a')] += 1
            # check if the current substring has the same characters
            if a == b and self.isScramble(s1[:i], s2[:i]) and self.isScramble(s1[i:], s2[i:]):
                # if the substrings are scrambled versions of each other, return True
                self.map[s1 + s2] = True
                return True
            # check if the current substring and its complement have the same characters
            if a == c and self.isScramble(s1[:i], s2[j:]) and self.isScramble(s1[i:], s2[:j]):
                # if the substrings are scrambled versions of each other, return True
                self.map[s1 + s2] = True
                return True
        # if none of the splits result in scrambled versions, return False
        self.map[s1 + s2] = False
        return False
```



# Complexity

##### \u2022	The time complexity of the algorithm is O(n^4), n is the length of the strings. This is because the algorithm checks all possible splits of the two strings, which takes O(n^2) time, and for each split, it recursively checks if the substrings are scrambled versions of each other, which takes O(n^2) time in the worst case. Therefore, the overall time complexity is O(n^2 * n^2) = O(n^4).
##### \u2022	The space complexity of the algorithm is also O(n^4), due to the use of the unordered map to store previously computed substrings. In the worst case, the map can store all possible substrings of the two strings, which takes O(n^4) space. Additionally, the algorithm uses three arrays to keep track of the frequency of characters in the two strings and the current substring being checked, which also takes O(n^3) space in the worst case. Therefore, the overall space complexity is O(n^4).
##### \u2022	However, the use of the unordered map to store previously computed substrings allows the algorithm to avoid recomputing the same substrings multiple times, which can significantly improve the performance of the algorithm for large inputs.




# DP  Intuition
##### \u2022	The problem involves checking if two strings are scrambled versions of each other.
##### \u2022	We have a recursive definition of scrambling a string s, which involves dividing s into x and y, and scrambling x and y independently.
##### \u2022	To check if a given string t is a scrambled string of s, we choose an index and cut s into x and y, and see if we can cut t into scrambled versions of x and y.
##### \u2022	We can solve the problem using dynamic programming by defining a 3D table with variables for length, i, and j to represent the subproblems.
##### \u2022	Each state focuses on two substrings: a substring of s1 starting at index i with length equal to length, and a substring of s2 starting at index j with length equal to length.
##### \u2022	We use a base case for substrings of length 1 and fill the table for substrings of length 2 to n.
##### \u2022	At each state, we perform a split on s1 and consider all possible splits, and write down the transitions for each case.
##### \u2022	The answer to the problem is dp[n][0][0], where n is the length of the input strings.
#	Algorithm:
##### \u2022	Iterate i from 0 to n-1.
##### \u2022	Iterate j from 0 to n-1.
##### \u2022	Set dp[1][i][j] to the boolean value of s1[i] == s2[j] (the base case of the DP).
##### \u2022	Iterate length from 2 to n.
##### \u2022	Iterate i from 0 to n + 1 - length.
##### \u2022	Iterate j from 0 to n + 1 - length.
##### \u2022	Iterate newLength from 1 to length - 1.
##### \u2022	If dp[newLength][i][j] && dp[length-newLength][i+newLength][j+newLength]) || (dp[newLength][i][j+l-newLength] && dp[l-newLength][i+newLength][j] is true, set dp[length][i][j] to true.
##### \u2022	Return dp[n][0][0].



```PYTHON []
class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        n = len(s1)
        # Initialize a 3D table to store the results of all possible substrings of the two strings
        dp = [[[False for _ in range(n)] for _ in range(n)] for _ in range(n+1)]

        # Initialize the table for substrings of length 1
        for i in range(n):
            for j in range(n):
                dp[1][i][j] = s1[i] == s2[j]

        # Fill the table for substrings of length 2 to n
        for length in range(2, n+1):
            for i in range(n+1-length):
                for j in range(n+1-length):
                    # Iterate over all possible lengths of the first substring
                    for newLength in range(1, length):
                        # Check if the two possible splits of the substrings are scrambled versions of each other
                        dp1 = dp[newLength][i]
                        dp2 = dp[length-newLength][i+newLength]
                        dp[length][i][j] |= dp1[j] and dp2[j+newLength]
                        dp[length][i][j] |= dp1[j+length-newLength] and dp2[j]

        # Return whether the entire strings s1 and s2 are scrambled versions of each other
        return dp[n][0][0]
```
```JAVA []
class Solution {
    public boolean isScramble(String s1, String s2) {
        int n = s1.length();
        // Initialize a 3D table to store the results of all possible substrings of the two strings
        boolean[][][] dp = new boolean[n+1][n][n];

        // Initialize the table for substrings of length 1
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dp[1][i][j] = s1.charAt(i) == s2.charAt(j);
            }
        }

        // Fill the table for substrings of length 2 to n
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i <= n-length; i++) {
                for (int j = 0; j <= n-length; j++) {
                    // Iterate over all possible lengths of the first substring
                    for (int newLength = 1; newLength < length; newLength++) {
                        // Check if the two possible splits of the substrings are scrambled versions of each other
                        boolean[] dp1 = dp[newLength][i];
                        boolean[] dp2 = dp[length-newLength][i+newLength];
                        dp[length][i][j] |= dp1[j] && dp2[j+newLength];
                        dp[length][i][j] |= dp1[j+length-newLength] && dp2[j];
                    }
                }
            }
        }

        // Return whether the entire strings s1 and s2 are scrambled versions of each other
        return dp[n][0][0];
    }
}
```

```C++ []
class Solution {
public:
    bool isScramble(string s1, string s2) {
        int n = s1.length();
        // Initialize a 3D table to store the results of all possible substrings of the two strings
        vector<vector<vector<bool>>> dp(n+1, vector<vector<bool>>(n, vector<bool>(n)));

        // Initialize the table for substrings of length 1
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dp[1][i][j] = s1[i] == s2[j];
            }
        }

        // Fill the table for substrings of length 2 to n
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i <= n-length; i++) {
                for (int j = 0; j <= n-length; j++) {
                    // Iterate over all possible lengths of the first substring
                    for (int newLength = 1; newLength < length; newLength++) {
                        // Check if the two possible splits of the substrings are scrambled versions of each other
                        vector<bool>& dp1 = dp[newLength][i];
                        vector<bool>& dp2 = dp[length-newLength][i+newLength];
                        dp[length][i][j] |= dp1[j] && dp2[j+newLength];
                        dp[length][i][j] |= dp1[j+length-newLength] && dp2[j];
                    }
                }
            }
        }

        // Return whether the entire strings s1 and s2 are scrambled versions of each other
        return dp[n][0][0];
    }
};
```

# TC & SC

##### \u2022	The time complexity of this algorithm is O(n^4), and the space complexity is also O(n^4), due to the use of the 3D table. 
##### \u2022	However, this approach can be faster than the recursive approach with memoization for some inputs, since it avoids the overhead of function calls and memoization lookups.


# 3RD WAY RECURSIVE 


```C++ []
class Solution {
    bool isScrambleHelper(unordered_map<string, bool> &memo, string s1, string s2) {
        int i, len = s1.size();
        bool result = false;

        // Base cases
        if (len == 0) {
            return true;
        } else if (len == 1) {
            return s1 == s2;
        } else {
            // Check if we have already computed the result for this pair of strings
            if (memo.count(s1 + s2)) {
                return memo[s1 + s2];
            }

            // Check if the two strings are equal
            if (s1 == s2) {
                result = true;
            } else {
                // Check all possible split positions
                for (i = 1; i < len && !result; ++i) {
                    // Check if s1[0..i-1] and s2[0..i-1] are valid scrambles of each other
                    // and if s1[i..len-1] and s2[i..len-1] are valid scrambles of each other
                    result = result || (isScrambleHelper(memo, s1.substr(0, i), s2.substr(0, i)) && isScrambleHelper(memo, s1.substr(i, len - i), s2.substr(i, len - i)));

                    // Check if s1[0..i-1] and s2[len-i..len-1] are valid scrambles of each other
                    // and if s1[i..len-1] and s2[0..len-i-1] are valid scrambles of each other
                    result = result || (isScrambleHelper(memo, s1.substr(0, i), s2.substr(len - i, i)) && isScrambleHelper(memo, s1.substr(i, len - i), s2.substr(0, len - i)));
                }
            }

            // Save the intermediate result in the memoization table
            return memo[s1 + s2] = result;
        }
    }
public:
    bool isScramble(string s1, string s2) {
        unordered_map<string, bool> memo;
        return isScrambleHelper(memo, s1, s2);
    }
};
```
```PYTHON []
class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        n = len(s1)
        if n != len(s2):
            return False
        if n == 0:
            return True
        elif n == 1:
            return s1 == s2
        else:
            memo = {}
            return self.isScrambleHelper(memo, s1, s2)

    def isScrambleHelper(self, memo: dict, s1: str, s2: str) -> bool:
        n = len(s1)
        result = False

        if n == 0:
            return True
        elif n == 1:
            return s1 == s2
        else:
            if (s1, s2) in memo:
                return memo[(s1, s2)]

            if s1 == s2:
                result = True
            else:
                for i in range(1, n):
                    result = (self.isScrambleHelper(memo, s1[:i], s2[:i]) and self.isScrambleHelper(memo, s1[i:], s2[i:])) or \\
                             (self.isScrambleHelper(memo, s1[:i], s2[n - i:]) and self.isScrambleHelper(memo, s1[i:], s2[:n - i]))
                    if result:
                        break

            memo[(s1, s2)] = result
            return result
```
```JAVA []
class Solution {
    public boolean isScramble(String s1, String s2) {
        int len = s1.length();
        if (len != s2.length()) {
            return false;
        }
        if (len == 0) {
            return true;
        } else if (len == 1) {
            return s1.equals(s2);
        } else {
            Map<String, Boolean> memo = new HashMap<>();
            return isScrambleHelper(memo, s1, s2);
        }
    }

    private boolean isScrambleHelper(Map<String, Boolean> memo, String s1, String s2) {
        int len = s1.length();
        boolean result = false;

        if (len == 0) {
            return true;
        } else if (len == 1) {
            return s1.equals(s2);
        } else {
            if (memo.containsKey(s1 + s2)) {
                return memo.get(s1 + s2);
            }

            if (s1.equals(s2)) {
                result = true;
            } else {
                for (int i = 1; i < len && !result; i++) {
                    result = (isScrambleHelper(memo, s1.substring(0, i), s2.substring(0, i)) && isScrambleHelper(memo, s1.substring(i), s2.substring(i))) ||
                             (isScrambleHelper(memo, s1.substring(0, i), s2.substring(len - i)) && isScrambleHelper(memo, s1.substring(i), s2.substring(0, len - i)));
                }
            }

            memo.put(s1 + s2, result);
            return result;
        }
    }
}
```

# TC & SC

##### \u2022	The time complexity of the given solution is O(n^4), where n is the length of the input strings. This is because we are checking all possible split positions for each substring, which takes O(n^2) time, and we are doing this for all possible substrings, which takes another O(n^2) time. The recursive calls also add to the time complexity.
##### \u2022	The space complexity of the given solution is O(n^3), which is the size of the memoization table. This is because we are storing the results of all possible substring pairs in the memoization table.

# 4th way  cache is implemented
```c++ []
class Solution {
private:
   bool DP_helper(string &s1, string &s2, int idx1, int idx2, int len, char isS[]) {
        int sSize = s1.size(), i, j, k, hist[26], zero_count = 0;

        // Check if we have already computed the result for this substring pair
        if (isS[(len * sSize + idx1) * sSize + idx2]) {
            return isS[(len * sSize + idx1) * sSize + idx2] == 1;
        }

        bool res = false;

        // Count the frequency of each character in the two substrings
        fill_n(hist, 26, 0);
        for (k = 0; k < len; ++k) {
            zero_count += (0 == hist[s1[idx1 + k] - 'a']) - (0 == ++hist[s1[idx1 + k] - 'a']);
            zero_count += (0 == hist[s2[idx2 + k] - 'a']) - (0 == --hist[s2[idx2 + k] - 'a']);
        }

        // If the two substrings have different characters, return false
        if (zero_count) {
            isS[(len * sSize + idx1) * sSize + idx2] = 2;
            return false;
        }

        // If the length of the substrings is 1, return true
        if (len == 1) {
            isS[(len * sSize + idx1) * sSize + idx2] = 1;
            return true;
        }

        // Recursively check all possible split positions
        for (k = 1; k < len && !res; ++k) {
            res = res || (DP_helper(s1, s2, idx1, idx2, k, isS) && DP_helper(s1, s2, idx1 + k, idx2 + k, len - k, isS));
            res = res || (DP_helper(s1, s2, idx1 + len - k, idx2, k, isS) && DP_helper(s1, s2, idx1, idx2 + k, len - k, isS));
        }

        // Save the intermediate result in the cache
        isS[(len * sSize + idx1) * sSize + idx2] = res ? 1 : 2;
        return res;
    }

public:
    bool isScramble(string s1, string s2) {
        const int sSize = s1.size();

        // Base case: empty strings are always valid scrambles of each other
        if (0 == sSize) {
            return true;
        }

        // Initialize the cache
        char isS[(sSize + 1) * sSize * sSize];
        fill_n(isS, (sSize + 1) * sSize * sSize, 0);

        // Recursively check if s1 and s2 are valid scrambles of each other
        return DP_helper(s1, s2, 0, 0, sSize, isS);
    }
};
```
# explaination 

##### \u2022	It does this by recursively checking all possible split positions of the two strings, and caching the intermediate results to avoid redundant computations. 
##### \u2022	The cache is implemented as a one-dimensional array isS , where isS[idx1 * sSize + idx2 + len * sSize * sSize] stores the result of checking whether the substring of s1 starting at index idx1 and the substring of s2 starting at index idx2 , both of length len , are valid scrambles of each other. The value of isS[idx1 * sSize + idx2 + len * sSize * sSize] can be either 0 (not computed yet), 1 (valid scramble), or 2 (invalid scramble). 
##### \u2022	The recursion is implemented in the DP_helper function, which takes as input the two strings s1 and s2 , the starting indices idx1 and idx2 , the length len , and the cache isS . 
##### \u2022	The function first checks if the result for this substring pair has already been computed and cached, and returns the cached result if it exists. 
##### \u2022	Otherwise, it counts the frequency of each character in the two substrings, and returns false if the two substrings have different characters. If the length of the substrings is 1, the function returns true.
##### \u2022	If the two substrings have the same character set, the function recursively checks all possible split positions and returns true if any of them are valid scrambles of each other. 
##### \u2022	Finally, the function saves the intermediate result in the cache and returns the result. 
##### \u2022	To optimize the recursion, the function uses early pruning by checking if the two substrings have the same character set before recursively checking all possible split positions. 
##### \u2022	If the two substrings have different character sets, the function immediately returns false without doing any further computation. 
##### \u2022	This helps to reduce the number of recursive calls and improve the overall performance of the algorithm.


# DRY RUN 1

##### \u2022	Let's dry run the algorithm with the input "great" andrgeat".
##### \u2022	First, the algorithm checks if the two strings are equal. Since they are not, it initializes the frequency vectors for s1, s2, and the current substring, and checks if the current substring has already been computed in the unordered map. Since it has not, the algorithm proceeds to check all possible splits of the two strings.
##### \u2022	For the first split, i = 1 and j = 4. The algorithm updates the frequency vectors for s1, s2, and the current substring, and checks if the current substring has the same characters. Since "g" and "r" are different, the algorithm moves on to the next split.
##### \u2022	For the second split, i = 2 and j = 3. The algorithm updates the frequency vectors for s1, s2, and the current substring, and checks if the current substring has the same characters. Since "gr" and "rg" have the same characters, the algorithm recursively checks if the substrings of s1 and s2 are scrambled versions of each other. It does this by calling the isScramble function with the substrings "g" and "r" for both s1 and s2. Since "g" and "r" are not scrambled versions of each other, the algorithm backtracks and checks the other possible split.
##### \u2022	For the third split, i = 3 and j = 2. The algorithm updates the frequency vectors for s1, s2, and the current substring, and checks if the current substring has the same characters. Since "gre" and "rge" have the same characters, the algorithm recursively checks if the substrings of s1 and s2 are scrambled versions of each other. It does this by calling the isScramble function with the substrings "g" and "r" for s1 and s2, and the substrings "re" and "eat" for s1 and s2. Since "g" and "r" are not scrambled versions of each other, the algorithm backtracks and checks the other possible split.
##### \u2022	For the fourth split, i = 4 and j = 1. The algorithm updates the frequency vectors for s1, s2, and the current substring, and checks if the current substring has the same characters. Since "reat" and "rgea" have the same characters, the algorithm recursively checks if the substrings of s1 and s2 are scrambled versions of each other. It does this by calling the  isScramble function with the substrings "r" and "r" for s1 and s2, and the substrings "eat" and "gea" for s1 and s2. Since "r" and "r" are scrambled versions of each other, the algorithm proceeds to check if "eat" and "gea" are scrambled versions of each other. It does this by calling the  isScramble function with the substrings "e" and "e" for s1 and s2, and the substrings "at" and "ga" for s1 and s2. Since "e" and "e" are scrambled versions of each other, the algorithm proceeds to check if "at" and "ga" are scrambled versions of each other. It does this by calling the  isScramble function with the substrings "a" and "a" for s1 and s2, and the substrings "t" and "g" for s1 and s2. Since "a" and "a" are scrambled versions of each other, and "t" and "g" are scrambled versions of each other, the algorithm returns true.
##### \u2022	Therefore, the output of the algorithm for the input "great" and "rgeat" is true, indicating that the two strings are scrambled versions of each other.

# DRY RUN 2
##### \u2022	Let's dry run the algorithm with the input "abcde" and "caebd".
##### \u2022	First, the algorithm checks if the two strings are equal. Since they are not, it initializes the frequency vectors for s1, s2, and the current substring, and checks if the current substring has already been computed in the unordered map. Since it has not, the algorithm proceeds to check all possible splits of the two strings.
##### \u2022	For the first split, i = 1 and j = 4. The algorithm updates the frequency vectors for s1, s2, and the current substring, and checks if the current substring has the same characters. Since "a" and "c" are different, the algorithm moves on to the next split.
##### \u2022	For the second split, i = 2 and j = 3. The algorithm updates the frequency vectors for s1, s2, and the current substring, and checks if the current substring has the same characters. Since "ab" and "ca" have different characters, the algorithm moves on to the next split.
##### \u2022	For the third split, i = 3 and j = 2. The algorithm updates the frequency vectors for s1, s2, and the current substring, and checks if the current substring has the same characters. Since "abc" and "cae" have different characters, the algorithm moves on to the next split.
##### \u2022	For the fourth split, i = 4 and j = 1. The algorithm updates the frequency vectors for s1, s2, and the current substring, and checks if the current substring has the same characters. Since "abcd" and "caeb" have different characters, the algorithm moves on to the next split.
##### \u2022	Since none of the splits result in scrambled versions of each other, the algorithm returns false.
##### \u2022	Therefore, the output of the algorithm for the input "abcde" and "caebd" is false, indicating that the two strings are not scrambled versions of each other.


![BREUSELEE.webp](./images/1.webp)

![meme2.png](./images/2.png)



# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
 \u2B06  \u2B06  \u2B06  \u2B06  \u2B06  \u2B06  \u2B06  \u2B06  \u2B06
