# Python 3 | Greedy | Explanation

**Author:** idontknoooo
**Votes:** 31
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2027810/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2027810/)

---

### Explanation
- Idea: Always make the letters with higher frequency to be easier accessible.
	- Say there are 3 letters on one button (left - mid - right). Left is the easiest to access, mid is the second, right is the hardest.
- Steps:
	- Sort letter with frequency reversely, then assign each with following orders
		- `1-left, 2-left, 3-left, ... 9-left` | 9 in total (easiest to access)
		- `1-mid, 2-mid, 3-mid, ... 9-mid` | 9 in total
		- `1-right, 2-right, 3-right, ... 8-right` | 8 in total, since at most 26 letters (hardest to access)
### Intuitive
```
class Solution:
    def minimumKeypresses(self, s: str) -> int:
        c = collections.Counter(s)
        ans = cnt = 0
        for i, freq in enumerate(sorted(c.values(), reverse=True)):  # sort reversely
            if i % 9 == 0:
                cnt += 1
            ans += cnt * freq                                        # add `num_of_time_to_press_the_key * frequency` to result
        return ans
```