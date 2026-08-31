# C++ Easy to understand, no change in string

**Author:** badri7489
**Votes:** 93
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1500340/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1500340/)

---

### When we encounter a 'X' we will make a ***move***, irrespective of the fact that there might be 'O'. After the move we will move the pointer by 3 steps since we are gauranteed that there won't be any more 'X' till the position we have swapped.

```
int minimumMoves(string s) {
	int i = 0, n = s.length(), count = 0;
	while (i < n) {
		if (s[i] == 'O')  // If we find 'O' we simply move the pointer one step
			i++;
		else
			count++, i += 3;  // When we find 'X' we increment the count and move the pointer by 3 steps
	}
	return count;
}
```

**Time Complexity: O(N)**
**Space Complexity: O(1)**