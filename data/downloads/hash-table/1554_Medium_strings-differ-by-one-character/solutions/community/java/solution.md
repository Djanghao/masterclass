# Java Solution that actually works! Based on new test cases

**Author:** JustPractice2022
**Votes:** 7
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/2065288/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/2065288/)

---

Just would like to share a Java solution that actually works. Leetcode apparently updated the test cases for this problem and most of the solutions in the discussion posts do not work!
Solution is by @PolarBearOrz  https://leetcode.com/PolarBearOrz

```
class Solution {
		public boolean differByOne(String[] dict) {
			HashSet<Long> set = new HashSet<>();
			long mod = (long) Math.pow(10, 20) + 7;
        
			int len = dict[0].length();
			long[] word2hash = new long[dict.length];
			for (int i = 0; i < dict.length; i++) {
				for (int j = 0; j < len; j++) {
					word2hash[i] = (word2hash[i] * 26 + dict[i].charAt(j) - 'a') % mod;
				}
			}
        
			long base = 1;
			for (int j = len - 1; j >= 0; j--) {
				set.clear();
				for (int i = 0; i < dict.length; i++) {
					long newHash = (word2hash[i] - base * (dict[i].charAt(j) - 'a')) % mod;
					if (set.contains(newHash)) {
						return true;
					}
					set.add(newHash);
				}
				base = 26 * base % mod;
			}
        
			return false;
		}
} 
```
