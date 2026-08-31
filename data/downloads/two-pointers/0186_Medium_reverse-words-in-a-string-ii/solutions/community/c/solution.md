# 10 LINES SIMPLE EASY TO UNDERSTAND

**Author:** nathanguo
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/1324474/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/1324474/)

---

```
void reverseWords(vector<char>& s) {
	reverse(s.begin(), s.end());
	int i = 0;
	for(int j = 0; j < s.size(); ++j) {
		if (s[j] == ' ') {
			reverse(s.begin()+i, s.begin()+j);
			i = j+1;
		}
	}
	reverse(s.begin()+i, s.end());
}
```

Thumbs up if you like my solution