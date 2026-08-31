# ✅ Simple Solution using Hashmap w/ explanation | Linear Complexity

**Author:** archit91
**Votes:** 22
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1130604/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1130604/)

---

There isn't much to this problem. We just need to realize that we can simple map each key from `knowledge` with its corresponding value to make the task of finding the *key-value pair* into amortized **`O(1)`** time complexity. 

After this, we just need to iterate over the string `s`, find the bracket pairs and map the word inside it to either its corresponding value (if it exists) or `?`.


```
string evaluate(string s, vector<vector<string>>& knowledge) {
	unordered_map<string, string> mp;   // stores key-val pair from knowledge
	for(auto& pair : knowledge) mp[pair[0]] = pair[1];
	int n = size(s); string ans = "";
	for(int i = 0; i < n; i++)
		if(s[i] == '('){                
			string key = "";			
			while(++i < n && s[i] != ')') key += s[i];   // finding the word inside bracket pair
			ans += (mp.count(key) ? mp[key] : "?");      // if key is found, append corresponding value else append ?
		}
		else ans += s[i];  // for rest of the string, keep it as it is
	
	return ans;
}
```

***Time Complexity :*** `O(N + M)`, where `N` is the length of string and `M` is the number of pairs in `knowledge`
***Space Complexity :*** `O(N + M)`