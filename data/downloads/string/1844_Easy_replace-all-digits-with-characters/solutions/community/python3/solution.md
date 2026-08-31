# Python 2 simple solution | one line

**Author:** TovAm
**Votes:** 7
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1563506/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1563506/)

---

**Python :**

```
def replaceDigits(self, s: str) -> str:
	for i in range(1, len(s), 2):            
		s = s[:i] + chr(ord(s[i-1]) + int(s[i])) + s[i + 1:]

	return s
```

**and an one line solution**

```
def replaceDigits(self, s: str) -> str:
	return ''.join([chr(ord(s[i-1]) + int(s[i])) if s[i].isdigit() else s[i] for i in range(len(s))])
```

**Like it ? please upvote !**