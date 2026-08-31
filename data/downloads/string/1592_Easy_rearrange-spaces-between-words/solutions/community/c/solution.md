# [C++] 100% Clean Code

**Author:** zxspring21
**Votes:** 11
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/857344/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/857344/)

---

**C++:**

```
string reorderSpaces(string text) {
	string s, ans;
	vector<string> words;
	istringstream iss(text);
	while(iss>>s) words.push_back(s);
	int space = count(text.begin(), text.end(), ' ');
	int n = words.size();
	int quot = n==1?0:space/(n-1), 
		rem = n==1?space:space%(n-1);
	for(auto &w:words){
	  if(!ans.empty())  ans+=string(quot,' ');
	  ans+=w;
	}
	ans+=string(rem,' ');
	return ans;
}
```