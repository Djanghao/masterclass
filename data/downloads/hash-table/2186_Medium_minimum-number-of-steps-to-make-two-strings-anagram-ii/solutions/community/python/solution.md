# Two Fast Solutions (Beat 99% and Beat 60%)

**Author:** yc3356
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/2020803/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/2020803/)

---

The main idea is to find the differences of value frequency in s and t and sum them up.

* Approach 1: find the difference using collections.Count
```
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        count_s, count_t = collections.Counter(s), collections.Counter(t)
        difference = (count_s - count_t) + (count_t - count_s)
        return sum(difference.values())
```
* Approach 2: remove the common
```
class Solution:
    def minSteps(self, s: str, t: str) -> int:
		total = len(s) + len(t)
		for i in set(s):
			total -= min(s.count(i),t.count(i)) * 2
		return total
```
Note that a common element shows twice in total. 

Approach 2 is faster and beats 99% in python. The first approach beats 60%.