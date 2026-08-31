# ✔️ [Python3] =͟͟͞͞( ✌°∀° )☛ ITERATIVE, Explained

**Author:** artod
**Votes:** 59
**Link:** [https://leetcode.com/problems/add-digits/solutions/1754064/](https://leetcode.com/problems/add-digits/solutions/1754064/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

The simplest way to solve this problem is using bruteforce solution. We convert `num` into digits, sum them together and then repeate the process until the `num` becomes less than 10.

Time: **O(ceil(log10(n))^2)** - for iteration over digits recursively
Soace: **O(1)** - nothing is stored

Runtime: 28 ms, faster than **94.22%** of Python3 online submissions for Add Digits.
Memory Usage: 13.9 MB, less than **81.53%** of Python3 online submissions for Add Digits.

```
def addDigits(self, num: int) -> int:
	while num > 9:
		sum = 0
		while num:
			sum += num%10
			num = num//10
			
		num = sum

	return num
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**