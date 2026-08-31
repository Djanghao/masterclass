# C++ (0 ms) || Simple || O(32)

**Author:** AJAY_MAKVANA
**Votes:** 9
**Link:** [https://leetcode.com/problems/binary-gap/solutions/1382476/](https://leetcode.com/problems/binary-gap/solutions/1382476/)

---

```
class Solution {
public:
	int binaryGap(int n) {
		int lastone = 32;
		int ans = 0;
		for (int i = 0; i < 32; i++) {
			if (n & (1 << i)) {
				ans = max(ans, i - lastone);
				lastone = i;
			}
		}
		return ans;
	}
};
```