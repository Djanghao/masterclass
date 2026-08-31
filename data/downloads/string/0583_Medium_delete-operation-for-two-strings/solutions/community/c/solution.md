# ✅ [C++/Python/Java] Short & Easy Solutions w/ Explanation | Optimization from Brute-Force to DP

**Author:** archit91
**Votes:** 183
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1195726/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1195726/)

---

We are given `word1` and `word2` and we need to return the minimum number of character deletion steps in either strings to make them equal.

---

\u274C ***Solution - I (Brute-Force) [Rejected]***

We can see that for an index *`i`*, *`j`* of *`word1`* and *`word2`*, we have following cases - 

&emsp;&emsp;**1.** *`word1[i] == word2[j]`* : The **characters match** and there's no need of deletion. Move on to next character of both words

&emsp;&emsp;**2.** *`word1[i] != word2[j]`* : The **characters don't match**. We only have two choices if we want to equalize the words. Either -

&emsp;&emsp;&emsp;&emsp;**I.** delete *`word1[i]`*.
&emsp;&emsp;&emsp;&emsp;**II.** delete *`word2[j]`*.

&emsp;&emsp;**3.** *`i == word1.length and j == word2.length`* : We have **reached end of both words** and both strings have been equalized. No further steps needed.

&emsp;&emsp;**4.** *`i == word1.length OR j == word2.length`* : We have **reached end of one word** and only way to equalize is to delete rest of characters of the other word.

This can be easily implemented as a recursive function. Also, we don't need to explicitly delete any characters of the words. We will just denote deleting *`word1[i]`* (case `2.I`) by recursing for *`(i+1)th`* index and deleting *`word2[j]`* (case `2.II`) by recursing for `(j + 1)th` index.

**C++**
```
int minDistance(string& word1, string& word2) {
	return solve(word1, word2, 0, 0);
}
// recursive solver to find minimum deletions to equalize w1 & w2
int solve(string w1, string w2, int i, int j) {
	if(i == size(w1) && j == size(w2)) return 0;  // reached end of both strings -> both strings have been equalized and no further steps required
	if(i == size(w1)) return size(w2) - j;        // reached end of word1 -> need to delete remaining characters of word2 to equalize
    if(j == size(w2)) return size(w1) - i;        // reached end of word2 -> need to delete remaining characters of word1 to equalize
	if(w1[i] == w2[j]) return solve(w1, w2, i + 1, j + 1);  // no deletion required since the characters already match
	// 1 current character deletion + min(after deleting w1[i], after deleting w2[j])
	return 1 + min(solve(w1, w2, i + 1, j), solve(w1, w2, i, j + 1));
}
```

---

**Python**

```
def minDistance(self, word1: str, word2: str) -> int:
	def solve(w1, w2, i, j):
		if i == L1 and j == L2 : return 0
		if i == L1 or j == L2 : 
			return max(L1 - i, L2 - j)
		if w1[i] == w2[j] : 
			return solve(w1, w2, i + 1, j + 1)                
		return 1 + min(solve(w1, w2, i + 1, j), solve(w1, w2, i, j + 1))
	L1, L2 = len(word1), len(word2)
	return solve(word1, word2, 0, 0)   
```

---

**Java** (credit to [@scavienger](https://leetcode.com/scavienger) for all java solutions)
```java
public int minDistance(String word1, String word2) {
    return solve(word1, word2, 0, 0);
}
private int solve(String w1, String w2, int i, int j) {
    if (i == w1.length() && j == w2.length()) return 0;
    if (i == w1.length()) return w2.length() - j;
    if (j == w2.length()) return w1.length() - i;
    if (w1.charAt(i) == w2.charAt(j)) return solve(w1, w2, i + 1, j + 1);
    return 1 + Math.min(solve(w1, w2, i + 1, j) , solve(w1, w2, i, j + 1));
}
```

***Time Complexity :*** **`O(2^L1 + 2^L2)`**, where *`L1`* is the length of string *`word1`* and *`L2`* is the length of string *`word2`*. Since `L1 < L2` means `2^L1 < 2^L2` & vice-versa, the time complexity can be also written as **`O(2^max(L1,L2))`**.
***Space Complexity :*** **`O(max(L1, L2))`**


---


\u2714\uFE0F ***Solution - II (Dynamic Programming - Memoization) [Accepted]***

We can observe that the above solution makes a lot of repeated recursive calls. This is because we can reach  same *`(i, j)`* index pair in multiple ways. But the answer to equalize *`word1[i:]`* (characters from index `i` till end) and *`word2[j:]`* (characters from index `j` till end) will always remain the same.

Thus, we can avoid the recomputations by using Dynamic Programming. We will maintain a 2D DP array where *`dp[i][j]`* will denote the number of steps required to equalize `word1[i:]` and `word2[j:]`.

All the steps remain the same as the brute force solution. The only addition is of `dp` array, storing the results before returning and if results are already computed, directly returning them instead of recalculations.

**C++**
```
vector<vector<int> >dp;
int minDistance(string& word1, string& word2) {
	// dp[i][j] will denote minimum steps required to equalize word1[i:end] and word[2:j:end]
	dp.resize(size(word1) + 1, vector<int>(size(word2) + 1, 1000));
	return solve(word1, word2, 0, 0);
}
int solve(string &w1, string &w2, int i, int j) {
	if(i == size(w1) && j == size(w2)) return 0;
	if(i == size(w1) || j == size(w2)) return max(size(w1) - i, size(w2) - j);
	if(dp[i][j] != 1000) return dp[i][j];  // directly return stored answer if already computed before
	if(w1[i] == w2[j]) return solve(w1, w2, i + 1, j + 1);
	return dp[i][j] = 1 + min(solve(w1, w2, i + 1, j), solve(w1, w2, i, j + 1));
}
```

---

**Python**
```
def minDistance(self, word1: str, word2: str) -> int:
	def solve(w1, w2, i, j):
		if i == len(w1) and j == len(w2) : return 0
		if i == len(w1) or j == len(w2) : return max(len(w1) - i, len(w2) - j)
		if dp[i][j] != 1000 : return dp[i][j]
		if w1[i] == w2[j] : 
			return solve(w1, w2, i + 1, j + 1)
		dp[i][j] = 1 + min(solve(w1, w2, i + 1, j), solve(w1, w2, i, j + 1))
		return dp[i][j]
	L1, L2, dp = len(word1), len(word2), [[1000]*(len(word2)+1) for i in range(len(word1)+1)]
	return solve(word1, word2, 0, 0)
```

---

**Java**
```java
public int minDistance(String word1, String word2) {
    int[][] dp = new int[word1.length() + 1][word2.length() + 1];
    for (int[] d : dp) Arrays.fill(d, -1);
    return solve(word1, word2, 0, 0, dp);
}

private int solve(String w1, String w2, int i, int j, int[][] dp) {
    if (i == w1.length() && j == w2.length()) return 0;
    if (i == w1.length() || j == w2.length()) return Math.max(w1.length() - i, w2.length() - j);
    if (dp[i][j] != -1) return dp[i][j];
    if (w1.charAt(i) == w2.charAt(j)) return solve(w1, w2, i + 1, j + 1, dp);
    return dp[i][j] = 1 + Math.min(solve(w1, w2, i + 1, j, dp), solve(w1, w2, i, j + 1, dp));
}
```

***Time Complexity :*** **`O(L1*L2)`** 
***Space Complexity :*** **`O(L1*L2)`**

---

\u2714\uFE0F ***Solution - III (Dynamic Programming - Tabulation) [Accepted]***

We can also solve it using dynamic programming in iterative manner. Again, we will maintain a 2D DP array where *`dp[i][j]`* will denote the number of steps required to equalize *`word1[:i]`* (characters from index 0 till `i`) and *`word2[:j]`* (characters from index 0 till `j`).

1. In the start, if `i == 0` or `j == 0`, one string is of length 0 and we have no choice but to delete all characters from the other string to equalize them both.

2. If *`word1[i-1] == word2[j-1]`*, we don't need to delete any of these characters at current index. The answer would just be the number of optimal deletions required to equalize *`word1[:i-1]`* and *`word2[:j-1]`* which would be stored in *`dp[i - 1][j - 1]`*


3. If *`word1[i-1] != word2[j-1]`*, we can delete either of the two characters. Choose to delete the one which requires minimum deletion to equalize `word1[:i-2] and word2[:j-1]` or `word1[:i-1] and word2[:j-2]` which would be stored in *`dp[i - 1][j]`* and *`dp[i][j - 1]`* respectively.

Finally, we will return *`dp[L1][L2]`* which will denote the minimum number of deletions required to equalize whole *`word1`* and *`word2`*.

**C++**
```
int minDistance(string& word1, string& word2) {        
	vector<vector<int> >dp(size(word1) + 1, vector<int>(size(word2) + 1));
	for(int i = 0; i <= size(word1); i++) 
		for(int j = 0; j <= size(word2); j++) 
			if(!i || !j) dp[i][j] = i + j; // if one word == "", all other characters of other word need to be deleted
			//                if characters match        ?  dont delete     : 1 deletion + min to equalize after deletion of (word1[i], word2[j])
			else dp[i][j] = word1[i - 1] == word2[j - 1] ? dp[i - 1][j - 1] : 1 + min(dp[i - 1][j], dp[i][j - 1]);
	return dp[size(word1)][size(word2)];
}
```

---

**Python**
```
def minDistance(self, w1: str, w2: str) -> int:
	dp = [[1000]*(len(w2)+1) for i in range(len(w1)+1)]
	for i in range(len(w1) + 1):
		for j in range(len(w2) + 1):
			dp[i][j] = i + j if i == 0 or j == 0 else dp[i - 1][j - 1] if w1[i - 1] == w2[j - 1] else 1 + min(dp[i - 1][j], dp[i][j - 1])
	return dp[-1][-1]
```

---

**Java**
```java
public static int minDistance(String word1, String word2) {
    int[][] dp = new int[word1.length() + 1][word2.length() + 1];
    for (int i = 0; i <= word1.length(); i++) 
        for (int j = 0; j <= word2.length(); j++) 
            if (i == 0 || j == 0) 
                dp[i][j] = i + j;
            else if (word1.charAt(i - 1) == word2.charAt(j - 1)) 
                dp[i][j] = dp[i - 1][j - 1];
            else 
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);                            

    return dp[word1.length()][word2.length()];
}
```

***Time Complexity :*** **`O(L1*L2)`** 
***Space Complexity :*** **`O(L1*L2)`**

---

\u2714\uFE0F ***Solution - IV (Space-Optimized Dynamic Programming)***

In the above solution, we can see that we are **only ever accessing the current row and previous row of the *`dp`*** array. So, we don't really need to maintain the whole dp array and the solution can be optimized to suffice with the use of only 2 rows.

A common and very easy trick to optimze space in such DP solutions is to declare two rows of `dp` and alternate between these rows on each iteration. We can easily alternate between the rows by doing a parity check - use row 0 for odd indices and 1 for even indices.

So, the only change to optimze the space in solution solution is to declare a two row dp matrix and **AND** (`&`) row index of dp with 1 to alternate between rows.

**C++**
```
int minDistance(string& word1, string& word2) {        
	vector<vector<int> >dp(2, vector<int>(size(word2) + 1));
	for(int i = 0; i <= size(word1); i++) 
		for(int j = 0; j <= size(word2); j++) 
			if(!i || !j) dp[i & 1][j] = i + j;
			else dp[i & 1][j] = word1[i - 1] == word2[j - 1] ? dp[(i - 1) & 1][j - 1] : 1 + min(dp[(i - 1) & 1][j], dp[i & 1][j - 1]);
	return dp[size(word1) & 1][size(word2)];
}
```

---

**Python**
```
def minDistance(self, w1: str, w2: str) -> int:
	dp = [[1000]*(len(w2)+1) for i in range(2)]
	for i in range(len(w1) + 1):
		for j in range(len(w2) + 1):
			dp[i & 1][j] = i + j if i == 0 or j == 0 else dp[(i - 1) & 1][j - 1] if w1[i - 1] == w2[j - 1] else 1 + min(dp[(i - 1) & 1][j], dp[i & 1][j - 1])
	return dp[len(w1) & 1][-1]
```

---

**Java**
```java
public static int minDistance(String word1, String word2) {
    int[][] dp = new int[2][word2.length() + 1];
    for (int i = 0; i <= word1.length(); i++) 
        for (int j = 0; j <= word2.length(); j++) 
            if (i == 0 || j == 0) 
                dp[i & 1][j] = i + j;
            else if (word1.charAt(i - 1) == word2.charAt(j - 1)) 
                dp[i & 1][j] = dp[(i - 1) & 1][j - 1];
            else 
                dp[i & 1][j] = 1 + Math.min(dp[(i - 1) & 1][j], dp[i & 1][j - 1]);

    return dp[word1.length() & 1][word2.length()];
}
```

***Time Complexity :*** **`O(L1*L2)`** 
***Space Complexity :*** **`O(L2)`**

---

\u2714\uFE0F ***Solution - V (Slight optimization from Solution - IV)***

A final small bit of optimzation that can be added to above solution is swapping the strings if `len(word2)` > `len(word1)` which will ensure that space complexity will be fully minimized.


**C++**
```
int minDistance(string& word1, string& word2) {        
    if(size(word1) < size(word2)) swap(word1, word2);
	vector<vector<int> >dp(2, vector<int>(size(word2) + 1));
	for(int i = 0; i <= size(word1); i++) 
		for(int j = 0; j <= size(word2); j++) 
			if(!i || !j) dp[i & 1][j] = i + j;
			else dp[i & 1][j] = word1[i - 1] == word2[j - 1] ? dp[(i - 1) & 1][j - 1] : 1 + min(dp[(i - 1) & 1][j], dp[i & 1][j - 1]);
	return dp[size(word1) & 1][size(word2)];
}
```

---

**Python**
```
def minDistance(self, w1: str, w2: str) -> int:
	if len(w1) < len(w2) : w1, w2 = w2, w1
	dp = [[1000]*(len(w2)+1) for i in range(2)]
	for i in range(len(w1) + 1):
		for j in range(len(w2) + 1):
			dp[i & 1][j] = i + j if i == 0 or j == 0 else dp[(i - 1) & 1][j - 1] if w1[i - 1] == w2[j - 1] else 1 + min(dp[(i - 1) & 1][j], dp[i & 1][j - 1])
	return dp[len(w1) & 1][-1]
```

---

**Java**
```java
public static int minDistance(String word1, String word2) {
    if(word1.length() < word2.length()) {
        String tmp = word1;
        word1 = word2;
        word2 = tmp;
    }
    int[][] dp = new int[2][word2.length() + 1];
    for (int i = 0; i <= word1.length(); i++) 
        for (int j = 0; j <= word2.length(); j++) 
            if (i == 0 || j == 0) 
                dp[i & 1][j] = i + j;
            else if (word1.charAt(i - 1) == word2.charAt(j - 1)) 
                dp[i & 1][j] = dp[(i - 1) & 1][j - 1];
            else 
                dp[i & 1][j] = 1 + Math.min(dp[(i - 1) & 1][j], dp[i & 1][j - 1]);
    
    return dp[word1.length() & 1][word2.length()];
}
```

***Time Complexity :*** **`O(L1*L2)`** 
***Space Complexity :*** **`O(min(L1, L2))`**

---
---

\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, do comment below \uD83D\uDC47 

---
---
