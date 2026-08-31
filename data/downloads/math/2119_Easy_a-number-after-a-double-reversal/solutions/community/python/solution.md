# ✅ [Python/Java/C++] 1 Liner || num == 0 or num % 10 || Explained

**Author:** linfq
**Votes:** 32
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/1647570/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/1647570/)

---

**PLEASE UPVOTE if you like** \uD83D\uDE01 **If you have any question, feel free to ask.** 

* All you have to do is check the Trailing zeros
	* input num as a valid number should not have leading zeros
	* the trailing zeros will become leading zeros after the **First Reversal**
		* So after **Double Reversal**, they will be removed.

**Python**
```
class Solution(object):
    def isSameAfterReversals(self, num):
		# All you have to do is check the Trailing zeros
        return num == 0 or num % 10  # num % 10 means num % 10 != 0
```
**C++**
```
class Solution {
public:
    bool isSameAfterReversals(int num) {
        return num == 0 || num % 10 > 0; // All you have to do is check the Trailing zeros
    }
};
```
**Java**
```
class Solution {
    public boolean isSameAfterReversals(int num) {
        return num == 0 || num % 10 > 0; // All you have to do is check the Trailing zeros
    }
}
```