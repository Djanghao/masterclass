# ✅ [C++, Python] Recursive Backtracking solution explained w/ Comments!

**Author:** archit91
**Votes:** 19
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/1186813/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/1186813/)

---

\u2714\uFE0F ***Solution***

We need to iterate over all possible substrings for each splits. 

If a split gives value equal to **`previous split - 1`**, then continue trying to split for remaining index. Otherwise, try increasing the length of split and check again.

If you reach the last index and there are more than 1 splits, return true. Otherwise return false.

**C++**

For C++, you need to handle overflows . For this purpose, I have use *`try...catch`* block in the below solution -

```
bool splitString(string s) {
	return solve(s, 0, 1, -1);
}
bool solve(string& s, int i, int len, long prev, int splits = 0) {
	// If we reach the end of string and have made splits >= 2, return true
	if(i == size(s) && splits >= 2) return true;
	while(i + len <= size(s)) {
		try{
			auto cur = stoll(s.substr(i, len++));         // convert s[i] to s[i + len] into number
			if(prev != -1 && cur != prev - 1) continue;   // and check if it is equal to prev - 1 (ignore for first call)
			// if the above condition satisfies, just  recurse for the remaining indices
			if(solve(s, i + len - 1, 1, cur, splits + 1)) return true;    
		} catch(...) { continue; } // handling overflows
	}
	return false;        
}
```

---

**Python**
```
def splitString(self, s: str) -> bool:
	def solve(s, i, length, prev, splits):
		# At last, if you reach the end and have made splits >= 2, we are sure that a split as per requirement is possible
		if i == len(s) and splits >= 2: 
			return True
		while i + length <= len(s):
			cur = int(s[i:i+length])   # convert s[i:i + length] to integer
			length += 1
			# if above converted integer is not equal to prev - 1, try increasing the length
			if prev != -1 and cur != prev - 1: continue 
			# if it is equal to prev - 1, recurse and make splits for remaining index
			if solve(s, i + length - 1, 1, cur, splits + 1):
				return True
		return False
	return solve(s, 0, 1, -1, 0)
```


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---