# ✅ Short & Easy Solution w/ Explanation | C++ using Bitset and Bit-masking | Beats 100%

**Author:** archit91
**Votes:** 182
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/1233648/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/1233648/)

---

\u2714\uFE0F ***Solution (Using Hashmap / Bitset)***

We need to find **all the pair of words such that no common letter exists between them**. The final answer will be *`max(word[i].size() * word[j].size())`* chosen from all pairs *`(word[i], word[j])`* such that they don't have any letter in common.

One way to efficiently check if two words have a letter in common is to just **create an hashmap of size 26** and **map each 26 letter of both the words as `true/false` depending upon whether it occurs in the word** or not. Finally, we can iterate over this map and check if there's any letter that occurs in both the words and if it does, we know that the word have atleast 1 letter in common.

Here, I have used `bitset<26>` instead of hashmap or boolean array for space efficiency.

**C++**
```
int maxProduct(vector<string>& words) {
	int n = size(words), ans = 0;
	vector<bitset<26> > chars(n);
	for(int i = 0; i < n; i++) {
		for(auto& ch : words[i])  // map the letters to 1 if it occurs in the word
			chars[i][ch - 'a'] = 1;
		// now check with all other words and if there's no common letter, then update ans	
		for(int j = 0; j < i; j++)
			if(!checkCommon(chars[i], chars[j])) 
				ans = max(ans, int(size(words[i]) * size(words[j])));
	}   
	return ans;
}
// Returns true if there's a common letter between bitset of two words
bool checkCommon(bitset<26>& a, bitset<26>& b) {
	for(int i = 0; i < 26; i++) if (a[i] && b[i]) return true;
	return false;
}
```

---

**Python**
```
def maxProduct(self, words: List[str]) -> int:
	def common(chars1, chars2):
		for c1, c2 in zip(chars1, chars2):
			if c1 and c2: return True
		return False
	chars, ans = [[False]*26 for i in range(len(words))], 0
	for i, word in enumerate(words):
		for ch in word:
			chars[i][ord(ch) - ord('a')] = True
		for j in range(i):
			if not common(chars[i], chars[j]):
				ans = max(ans, len(words[i]) * len(words[j]))
	return ans
```

***Time Complexity :*** **`O(n*(N+n))`**, where *`n`* is the length of *`words`* and `N` is the average length of words
***Space Complexity :*** **`O(n)`**

---

\u2714\uFE0F ***Solution - II (Using Bitmasks)***

For checking if two words have a letter in common, we can directly hash the words into an integer (rather than hashmap or bitset as in *`Solution - I`*) and then compare each bit of integer obtained after hashing. If there's no common set bit in the hash of both words, then we can be sure that there exists no common letter between those words.

An 32-bit integer can be used for this purpose. The 26 bits in the hashed integer (from the right) would denote occurence of each letter  `a,b,...,z`, 1 denoting that a letter occurs and 0 denoting that a letter doesn't occur. We just need to ensure that same bit in hash of both words are not set

```
For eg. 
Consider word1 = "abex", word2 = "acdx"
hash1 = (11001000000000000000000100) in binary
hash2 = (10110000000000000000000100) in binary
       ------------------------------------
	   & 10000000000000000000000100    ==>   common letters are present
	   
Consider word1 = "abex", word2 = "dfgmn"
hash1 = (11001000000000000000000100) in binary
hash2 = (00010110000011000000000000) in binary
       ------------------------------------
	   & 00000000000000000000000000   ==>    no common letter present
	   
So, we can just do (hash1 & hash2) and if its 0, that denotes that hash1 and hash2 didn't have any common set bit
```

So, we just find hash for each word and if AND (&) of hash of two words is equal to 0, then they contain no common letter, so we update *`ans`*.

**C++**
```
int maxProduct(vector<string>& words) {
	int n = size(words), ans = 0;
	vector<int> mask(n);
	for(int i = 0; i < n; i++) {
		for(auto& ch : words[i])           
			mask[i] |= 1 << (ch - 'a');     // hash the word
		for(int j = 0; j < i; j++)
			if((mask[i] & mask[j]) == 0)    // no common set bit in the hash of words[i] and words[j]
				ans = max(ans, int(size(words[i]) * size(words[j])));
	}   
	return ans;
}
```

---

**Python**
```
def maxProduct(self, words: List[str]) -> int:
	mask, ans = [0]*len(words), 0
	for i, word in enumerate(words):
		for ch in word:
			mask[i] |= 1 << (ord(ch) - ord('a'))
		for j in range(i):
			if not mask[i] & mask[j]:
				ans = max(ans, len(words[i]) * len(words[j]))
	return ans
```

***Time Complexity :*** **`O(n*(N+n))`**, though the time complexity remains the same, we save the time needed in `solution - I` to iterate over hashmap although its only a constant factor (`O(26)`).
***Space Complexity :*** **`O(n)`**

---

*Best Runtime*

Use C array instead of vector to get faster runtime\uD83D\uDC47 

<table><tr><td><img src=https://assets.leetcode.com/users/images/1e0498c7-50a0-46e8-ad92-ff7a6244c8ad_1622105584.183618.png /></td></tr></table>


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---