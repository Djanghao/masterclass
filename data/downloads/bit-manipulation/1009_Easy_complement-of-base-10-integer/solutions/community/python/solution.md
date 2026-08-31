# ✅ [C++/Python/Java] 1 Line || O(1) || Log and Bit OP || Detailed Explanation

**Author:** linfq
**Votes:** 29
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/1665646/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/1665646/)

---

**PLEASE UPVOTE if you like** \uD83D\uDE01 **If you have any question, feel free to ask.** 
* step 1: get the `mask` of all 1s with the number of binary digits equal to the number of binary digits of n
	* for example
		* `n = 5 = 0b101` so the number of binary digits is `3` and we get `mask = 0b111 = 7`
		* `n = 8 = 0b1000` so the number of binary digits is `4` and we get `mask = 0b1111 = 15`
		* `n = 0 = 0b0` so the number of binary digits is `1` and we get `mask = 0b1 = 1`
	* `mask = (2 << int(log2(n))) - 1`
		* for example: `n = 5` => `int(log2(n)) = 2` => `mask = (2 << 2) - 1 = (0b10 << 2) - 1 = 0b1000 - 1 = 0b111 = 7`
		* **Note `n = 0` is an exception, we just add `max(n, 1)` to deal with it.**
* step 2: `return mask - n` or `return mask ^ n` or `return mask & (~n)`
	* since mask is all-one like `0b11...1` and with same number of binary digits of `n`, `mask - n` is the complement of n
	* for example
		* `n = 5 = 0b101`  => `mask = 0b111 = 7` => `mask - n = 0b111 - 0b101 = 0b010 = 2`
		* `n = 8 = 0b1000` => `mask = 0b1111 = 15` => `mask - n = 0b1111 - 0b1000 = 0b111 = 7`

@pgthebigshot reminded me that `mask - n` also works, really smart!


**C++**
```
class Solution {
public:
    int bitwiseComplement(int n) {
        return ((2 << int(log2(max(n, 1)))) - 1) - n;
		// return ((2 << int(log2(max(n, 1)))) - 1) ^ n; // also work
        // return ((2 << int(log2(max(n, 1)))) - 1) & (~n); // also work
    }
};
```
**Java**
```
class Solution {
    public int bitwiseComplement(int n) {
		return ((2 << (int)(Math.log(Math.max(n, 1)) / Math.log(2))) - 1) - n;
        // return ((2 << (int)(Math.log(Math.max(n, 1)) / Math.log(2))) - 1) ^ n; // also work
        // return ((2 << (int)(Math.log(Math.max(n, 1)) / Math.log(2))) - 1) & (~n); // also work
    }
}
```
**Python**
```
class Solution(object):
    def bitwiseComplement(self, n):
		return ((2 << int(math.log(max(n, 1), 2))) - 1) - n
        # return ((2 << int(math.log(max(n, 1), 2))) - 1) ^ n  # also work
        # return ((2 << int(math.log(max(n, 1), 2))) - 1) & (~n)  # also work
```

**PLEASE UPVOTE if you like** \uD83D\uDE01 **If you have any question, feel free to ask.**