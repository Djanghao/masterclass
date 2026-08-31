# ✅ [Swift] Easy to understand

**Author:** lmvtsv
**Votes:** 1
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/2932961/](https://leetcode.com/problems/consecutive-characters/solutions/2932961/)

---

```
class Solution {
    func maxPower(_ s: String) -> Int {
        var char = s.first
	    var ma = 0
	    var tempMa = 0
	    for i in s {
		    if i == char {
			    tempMa += 1
		    } else {
			    ma = max(ma, tempMa)
			    char = i
			    tempMa = 1
		    }
	    }
	    return max(ma, tempMa)
    }
}
```