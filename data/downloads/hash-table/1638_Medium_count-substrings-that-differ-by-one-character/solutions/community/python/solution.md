# 97% TC and 95% SC easy python solution with explanation

**Author:** nitanshritulon
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/2490710/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/2490710/)

---

Believe me, this ques is like must to have in the mind, as this gonna help you solve many such questions.
1. We have to calculate all substrings which differ by just a character.
2. So, maintain 2 states, first one will be for the count of substrings which is present in "t" string as well(all characters equal). The second one will keep the count with 1 different character.
3. Traverse the 2 strings using 2 pointers using 2 loops. If the char which are being pointed are same, which means we will have our ans from already differed strings, which already have a character different. So just use that.
4. If they are different, then go for all the strings which have all the characters same, because the current is gonna be a different one.
5. Now just keep maintaining these 2 states for all the indices.
6. Didn't get it, read it for 3-4 times atleast. And you're free to comment down :)
```
def countSubstrings(self, s: str, t: str) -> int:
	ls, lt = len(s), len(t)
	equal_prev, unequal_prev = [0] * (lt+1), [0] * (lt+1)
	ans = 0
	for i in range(ls):
		equal_curr, unequal_curr = [0] * (lt+1), [0] * (lt+1)
		for j in range(lt):
			if(s[i] == t[j]):
				equal_curr[j+1] = 1+equal_prev[j]
			unequal_curr[j+1] = 1+equal_prev[j] if(s[i] != t[j]) else unequal_prev[j]
			ans += unequal_curr[j+1]
		equal_prev, unequal_prev = equal_curr, unequal_curr
	return ans
```