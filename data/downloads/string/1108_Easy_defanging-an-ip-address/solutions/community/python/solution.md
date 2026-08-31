# Python 3 Solutions

**Author:** brenno
**Votes:** 52
**Link:** [https://leetcode.com/problems/defanging-an-ip-address/solutions/570466/](https://leetcode.com/problems/defanging-an-ip-address/solutions/570466/)

---

**First Solution**

Time: O(N)
Space: O(1)

Uses Python's built-in string replace method

``` 
class Solution:
	def defangIPaddr(self, address: str) -> str:
		return address.replace('.', '[.]')
```

**Second Solution**

Time: O(N)
Space: O(1)

Convert the ip address into a list of the numbers using the split method. Add the "[.]" chars between the numbers using the join method.

```
class Solution:
	def defangIPaddr(self, address: str) -> str:
		return "[.]".join(address.split("."))
```

**Third Solution**

Time: O(N)
Space: O(N)

Create an empty list. Iterate through the characters in the address, numbers get appended to the list while periods signal that "[.]" chars must be appended. This method had the best speed results out of all others.

```
class Solution:
	def defangIPaddr(self, address: str) -> str:
		ans = []
		for ch in address:
			if ch.isdigit():
				ans.append(ch)
			else:
				ans.append("[.]")

		return "".join(ans)
```
			