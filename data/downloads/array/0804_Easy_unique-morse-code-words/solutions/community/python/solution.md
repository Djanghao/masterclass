# 🔥 Python || Easily Understood ✅ || Faster than 99.7% || 2 Lines

**Author:** wingskh
**Votes:** 27
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/2437990/](https://leetcode.com/problems/unique-morse-code-words/solutions/2437990/)

---

In this question, the easiest way is to create a dict like this:
```
	morse_code_dict = {'a': '.-',
		'b': '-...',
		'c': '-.-.',
		and so on...
	}
```
but this is time consuming.
Thus, we can use the idea of **ASCII** in which
```
a = 97
b = 98
and so on...
```

Code:
```
def uniqueMorseRepresentations(self, words: List[str]) -> int:
	morse_code_array = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

	result = set()
	for word in words:
		word = word.lower()
		transformations = ""
		for chr in word:
			transformations += morse_code_array[ord(chr) - 97]
		result.add(transformations)
	return len(result)
```

Also, we can reduce the runtime by **set and list comprehension**:
```
def uniqueMorseRepresentations(self, words: List[str]) -> int:
	morse_code_array = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
	return len({''.join([morse_code_array[ord(chr) - 97] for chr in word]) for word in words})
```

**Time Complexity**: `O(n*m)`
**Space Complexity**: `O(n*m)`
<br/>