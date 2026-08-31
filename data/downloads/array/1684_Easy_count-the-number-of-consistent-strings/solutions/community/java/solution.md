# ✅ [Java] Simple, faster than 100% (5ms)

**Author:** spirit_obi
**Votes:** 42
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/1196882/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/1196882/)

---

```
public int countConsistentStrings(String allowed, String[] words) {
	int count = words.length;
	int[] store = new int[26];

	for (char c : allowed.toCharArray()){
		store[c-'a']++;
	}

	for (String word : words) {
		
		for (char c : word.toCharArray()) {
			if (store[c-'a'] <= 0){
				count--;
				break;
			}
		}
	}
	return count;
}
```