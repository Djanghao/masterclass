# Simple java soln using indexOf

**Author:** guptayash3
**Votes:** 52
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/1191468/](https://leetcode.com/problems/jewels-and-stones/solutions/1191468/)

---

```
class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int num = 0;
		for (int i = 0 ; i < stones.length(); i ++) {
			if(jewels.indexOf(stones.charAt(i)) != -1) {
				num++;
			}
		}
		return num;
    }
}
```