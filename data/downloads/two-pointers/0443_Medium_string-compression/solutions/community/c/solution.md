# [C++] Concise Two Pointer Solution

**Author:** KasraGhodsi
**Votes:** 96
**Link:** [https://leetcode.com/problems/string-compression/solutions/323715/](https://leetcode.com/problems/string-compression/solutions/323715/)

---

- We write to the element at `i` and read from the element at `j`.

```
int compress(vector<char>& chars) {
	int i = 0;
	for(int j = 1, count = 1; j <= chars.size(); j++, count++) {
		if(j == chars.size() || chars[j] != chars[j - 1]) {
			chars[i++] = chars[j - 1];  
			if(count >= 2) 
				for(char digit : to_string(count)) 
					chars[i++] = digit;
			count = 0;
		}
	}
	return i;
}
```