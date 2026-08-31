# ✔️ [Python3] FLOWING CONSTRAINT ♪♪ ヽ(ˇ∀ˇ )ゞ, Explained

**Author:** artod
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/1735431/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/1735431/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

The idea is to calculate constraints for every element of the hidden sequence starting from the beginning. The last constraint will be equal to the range that the last element of the sequence can take. Considering that the value of elements in the sequence depends on each other, the number of values that the last element can take is equal to the number of possible sequences, i.e. this is our answer. 

Example:  `differences = [1,-3,4], lower = 1, upper = 6`. Let the hidden sequence be `[a, b, c, d]`. Thus:
```
b - a = 1
c - b = -3
d - c = 4
```
Let's isolate every element:
```
a = b - 1
b = c + 3
c = d - 4
```
Calculate constraints for every element:
```
lower <= a <= upper

lower <= b - 1 <= upper
lower + 1 <= b <= upper + 1

lower + 1 <= c + 3 <= upper + 1
lower + 1 - 3 <= c <= upper + 1 - 3

lower + 1 - 3 <= d - 4 <= upper + 1 - 3
lower + 1 - 3 + 4 <= d <= upper + 1 - 3 + 4
```
On every step, we clip the resulting boundaries to the range `lower .. upper`, and also check if we got out of the range and return 0.

Time: **O(n)** - linear
Space: **O(1)** - nothing stored 

Runtime: 1288 ms, faster than **89.22%** of Python3 online submissions for Count the Hidden Sequences.
Memory Usage: 28.5 MB, less than **95.81%** of Python3 online submissions for Count the Hidden Sequences.

```
def numberOfArrays(self, differences: List[int], lower: int, upper: int) -> int:
	lo, up = lower, upper
	for diff in differences:
		lo, up = max(lower, lo + diff), min(upper, up + diff)
		if lo > upper or up < lower: return 0

	return up - lo + 1
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**