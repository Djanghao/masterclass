# ✅ JS || With explanation || Easy to Understand || Fast

**Author:** pmistry_
**Votes:** 5
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/2556870/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/2556870/)

---

I just found this Blog and Github repository with solutions to Leetcode problems.
https://leet-codes.blogspot.com/2022/09/1047-remove-all-adjacent-duplicates-in.html
It is very useful, and I just wanted to share it with you.
Note: You can bookmark it as a resource, and for another approaches
<br>

```
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
   const stack = [];
	for (let i = 0; i < s.length; i++) {
		const cv = s[i];
		const top = stack[stack.length - 1];

		// if last element is same as current pop off from stack
		if (cv === top) stack.pop();
		else stack.push(cv); // if not equal, add to stack
	}

	return stack.join('');
};
```
