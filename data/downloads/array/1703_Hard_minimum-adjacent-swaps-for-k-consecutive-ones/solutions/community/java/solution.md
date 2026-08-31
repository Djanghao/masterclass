# [JAVA] O(n) sliding window Solution.

**Author:** Kingash_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/988551/](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/988551/)

---

Explaination with pictures: https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/discuss/987607/O(n)-explanation-with-picture

```
class Solution {
    public int minMoves(int[] a, int k) {
		int n = a.length;
		ArrayList<Integer> oneInd = new ArrayList<>();
		for (int i = 0; i < n; i++)
			if (a[i] == 1)
				oneInd.add(i);
		int prfsm[] = new int[oneInd.size()];
		for (int i = 0; i < oneInd.size(); i++)
			prfsm[i] += oneInd.get(i) + (i == 0 ? 0 : prfsm[i - 1]);
		int ans = Integer.MAX_VALUE;
		int left = 0, right = k - 1;
		while (right < oneInd.size()) {
			if (k % 2 == 1) {
				int medianInd = left + (k + 1) / 2 - 1;
				int rad = medianInd - left;
				int res = (prfsm[right] - prfsm[medianInd])
						- ((medianInd == 0 ? 0 : prfsm[medianInd - 1]) - (left == 0 ? 0 : prfsm[left - 1])) - rad * (rad + 1);
				ans = Math.min(ans, res);
			} else {
				int medianInd = left + (k + 1) / 2 - 1;
				int rad = medianInd - left;
				int res = (prfsm[right] - prfsm[medianInd])
						- ((medianInd == 0 ? 0 : prfsm[medianInd - 1]) - (left == 0 ? 0 : prfsm[left - 1]))
						- oneInd.get(medianInd) - rad * (rad + 1) - (rad + 1);
				ans = Math.min(ans, res);
			}
			left++;
			right++;
		}
		return ans;
	}
}
```