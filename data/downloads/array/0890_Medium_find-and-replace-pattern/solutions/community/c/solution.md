# ✅ Easy Solutions w/ Explanation | Two Maps, Single Map & Word Normalization

**Author:** archit91
**Votes:** 124
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/1221096/](https://leetcode.com/problems/find-and-replace-pattern/solutions/1221096/)

---

\u2714\uFE0F ***Solution - I (Two Maps)***

A *`word`* will match *`pattern`* only when -
* Every letter *`word[i]`* can be mapped to a unique letter *`pattern[i]`*

For this, we can use a hashmap to map every letter from *`word`* to *`pattern`*. To ensure that the **every character mapping is unique**, i.e, multiple *`word[i]`* are not mapped to same *`pattern[i]`*, we will also maintain a reverse mapping from pattern to word.

```
vector<string> findAndReplacePattern(vector<string>& words, string p) {        
	vector<string> ans;
	for(auto& w : words) 
		if(match(w, p)) ans.push_back(w);
	return ans;
}
bool match(string& w1, string& w2) {
	unordered_map<char, char> w1_to_w2, w2_to_w1;
	for(int i = 0; i < size(w1); i++) 
		if( (w1_to_w2.count(w1[i]) && w1_to_w2[w1[i]] != w2[i]) || 
			(w2_to_w1.count(w2[i]) && w2_to_w1[w2[i]] != w1[i]) ) 
			return false; 
		else
			w1_to_w2[w1[i]] = w2[i],
			w2_to_w1[w2[i]] = w1[i];
	return true;
}
```

***Time Complexity :*** **`O(N*L)`**, where *`N`* is the number of words and *`L`* is the length of each word.
***Space Complexity :*** **`O(N*L)`**

---

\u2714\uFE0F ***Solution - II (Single Map)***

We can also solve it using a single map. We will map letters from *`word`* to *`pattern`* as done in the above solution. Once all letters are mapped, we will re-iterate over the mappings and ensure that each ***`word[i]`* is only mapped to a unique character in *`pattern[i]`*.**

```
vector<string> findAndReplacePattern(vector<string>& words, string p) {        
	vector<string> ans;
	for(auto& w : words) 
		if(match(w, p)) ans.push_back(w);
	return ans;
}
bool match(string& w1, string& w2) {
	unordered_map<char, char> w1_to_w2;
	for(int i = 0; i < size(w1); i++) 
		if(w1_to_w2.count(w1[i]) && w1_to_w2[w1[i]] != w2[i])  return false; 
		else w1_to_w2[w1[i]] = w2[i];
	bitset<26> visited;
	for(auto& pair : w1_to_w2) 
		if(visited[pair.second - 'a']) return false;
		else visited[pair.second - 'a'] = true;
	return true;
}
```

***Time Complexity :*** **`O(N*L)`**
***Space Complexity :*** **`O(N*L)`**

---

\u2714\uFE0F ***Solution - III (Normalise & Compare)***

This solution is referred from @lee215's post. In this solution, we can convert each string to a base / standard pattern and then compare them. Here, we are converting all occurences of first found character to *`a`*, second all occurences of second found character to *`b`*, then *`c`* and so on...

For eg.  Consider the words `"mmnpoq"` and `"ppqqqz"`. We can convert these into - `"aabcde"` and `"aabbbc"`. Since they are not equal, we can say both these words don't match.
Similarly, the words `"mnpqrr"` and `"xyzabb"` can be converted into `"abcdee"` and `"abcdee"` respectively. Since they are equal, we say that these two words match.

```
vector<string> findAndReplacePattern(vector<string>& words, string& pattern) {        
	vector<string> ans;
	string p = normalise(pattern);
	for(auto& w : words) 
		if(p == normalise(w)) ans.push_back(w);
	return ans;
}
string normalise(string w) {
	unordered_map<char, char> mp;
	char c = 'a';
	for(auto ch : w) 
		if(!mp.count(ch)) mp[ch] = c++;
	for(auto& ch : w) ch = mp[ch];
	return w;
}
```

***Time Complexity :*** **`O(N*L)`**
***Space Complexity :*** **`O(N*L)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---