# ✅ [C++/Python/Java] 4 Lines || O(N) || Modulo and Count || Detailed Explanation

**Author:** linfq
**Votes:** 83
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/1661677/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/1661677/)

---

**PLEASE UPVOTE if you like** \uD83D\uDE01 **If you have any question, feel free to ask.** 
* First, we mod the duration of each song by 60 and count the number of different remainders
	* `for t in time: cnt[t % 60] += 1`
* If sum of 2 numbers divisible by 60, there are 3 possible situations
	* both are divisible by 60, so after mod 60 the remainders are both 0
		* `cnt[0] * (cnt[0] - 1) // 2`
			* `cnt[0] - 1` because one cannot pair with itself
			* `// 2` because `(a, b)` and `(b, a)` are the same pair and we can only add once
	* both are left 30 after mod 60
		* `cnt[30] * (cnt[30] - 1) // 2`
			* the same as `cnt[0]` above
	* their remainders are not the same, but the sum of remainders is equal to 60
		* `for i in range(1, 30): ans += cnt[i] * cnt[60 - i]`
		* we only loop from 1 to 29, because `60 - i` is in the range of `(31, 59)`. In this way, we enumerate all pairs and will not repeat like `(a, b)` and `(b, a)`.

```
Time  Complexity: O(N) if we consider N is greater than 30
Space Complexity: O(1)
```

**Python**
```
class Solution(object):
    def numPairsDivisibleBy60(self, time):
        ans, cnt = 0, [0] * 60
        for t in time: cnt[t % 60] += 1
        for i in range(1, 30): ans += cnt[i] * cnt[60 - i]
        return ans + cnt[0] * (cnt[0] - 1) // 2 + cnt[30] * (cnt[30] - 1) // 2
```

**Java**
```
class Solution {
    public int numPairsDivisibleBy60(int[] time) {
        int ans = 0, cnt[] = new int[60];
        for (int i = 0; i < time.length; i ++) cnt[time[i] % 60] += 1;
        for (int i = 1; i< 30; i ++) ans += cnt[i] * cnt[60 - i];
        return ans + cnt[0] * (cnt[0] - 1) / 2 + cnt[30] * (cnt[30] - 1) / 2;
    }
}
```

**C++**
```
class Solution {
public:
    int numPairsDivisibleBy60(vector<int>& time) {
        int ans = 0, cnt[60] = {0};
        for (int i = 0; i < time.size(); i ++) cnt[time[i] % 60] += 1;
        for (int i = 1; i< 30; i ++) ans += cnt[i] * cnt[60 - i];
        return ans + cnt[0] * (cnt[0] - 1) / 2 + cnt[30] * (cnt[30] - 1) / 2;
    }
};
```

**PLEASE UPVOTE if you like** \uD83D\uDE01 **If you have any question, feel free to ask.** 
