# Swift Recursion Solution

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/5575371/](https://leetcode.com/problems/integer-replacement/solutions/5575371/)

---

```
class Solution {
  func integerReplacement(_ n: Int) -> Int {
		if n == 1 { return 0 }
		if n % 2 == 0 {
			return 1 + integerReplacement(n / 2)
		} else {
			return 1 + min(integerReplacement(n - 1), 
						   integerReplacement(n + 1))
		}
	}
}
```