# [C++] Concise Length-Prefix Solution

**Author:** KasraGhodsi
**Votes:** 14
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/468085/](https://leetcode.com/problems/encode-and-decode-strings/solutions/468085/)

---

Encode by prefixing each word with its length followed by a delimiter (I use `.`).

Decode by reading the length of the next word, then extracting that many characters from the encoded string.

```cpp
string encode(vector<string>& strs, string encoded = "") {
	for (string &s : strs) encoded += to_string(s.size()) + '.' + s;
	return encoded;
}

vector<string> decode(string s, vector<string> decoded = {}) {
	for (int i = 0, n = 0; i < s.size(); i += n, n = 0) {
		while (isdigit(s[i])) n = 10 * n + (s[i++] - '0');
		decoded.push_back(s.substr(++i, n));
	}
	return decoded;
}
```