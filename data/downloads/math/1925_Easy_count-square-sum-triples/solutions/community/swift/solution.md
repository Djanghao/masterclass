# ✅ [Swift] Two for loops, 100% speed, easy to understand

**Author:** lmvtsv
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/2863632/](https://leetcode.com/problems/count-square-sum-triples/solutions/2863632/)

---

![image.png](./images/0.png)
```
class Solution {
    func countTriples(_ n: Int) -> Int {
        guard n > 1 else { return 0 }
        var result = 0
	    for i in 1...n - 1 {
			for j in i + 1...n {
				let k = Double(i * i + j * j)
				if sqrt(k) == Double(Int(sqrt(k))) && Int(sqrt(k)) <= n {
					result += 1
				}
			}
		}
	    return result * 2
    }
}
```