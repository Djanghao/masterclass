# ✅ Short & Easy w/ Explanation & Comments | Keeping Consecutive 0s and 1s Count | Beats 100%

**Author:** archit91
**Votes:** 204
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/1172569/](https://leetcode.com/problems/count-binary-substrings/solutions/1172569/)

---

The problem asks us to find all substrings that have equal number of consecutive count of 0s and 1s. With the given constraints, finding and checking for all substrings would obviously not work and we need to figure out a way to solve it in linear time.

---

\u2714\uFE0F ***Solution - I (Maintain Count of current & previous consecutive characters & Add minimum)***

The problem can be solved by observing the examples carefully -

```
1. 0011
In this string, consecutive count of binary characters are [2, 2]. We can form a total of 2 substrings.

2. 00011
In this string, consecutive count of binary characters are [3, 2]. Still, we can only form 2 substrings.

3. 000111
Here, consecutive count of binary characters are as - [3,3]. Now, we can form 3 substrings.

4. 00011100
Consecutive count of binary characters are - [3,3,2]. We can form 3 substrings with the first 2 groups of zeros and ones. 
Then we can form 2 substrings with the latter 2 groups. So, a total of 5 substrings.

5. 00011100111
Consecutive count - [3,3,2,3]. Substrings formed - 3 + 2 + 2 = 7
```

We can observe from the above examples that our final count will only depend on the consecutive counts of binary characters. **With each two groups of consecutive characters, the number of substrings that can be formed will be minimum of count among the two groups**.

Now, although we could maintain all the groupings and their counts and then count the number of substrings, we actually don't even need to maintain the consecutive counts in all of the string. We can **just store the current consecutive count and previous consecutive count** and count the substrings on the fly.

1. **`s[i] == s[i - 1]`** : When current character is equal to previous - just increment the current consecutive count.
2. **`s[i] != s[i - 1]`** :Whenever current character is not equal to previous - We know that we atleast have group of 2 different characters having `consecutiveCount >= 1`. The number of substrings that can be formed from these would be equal to minimum of *`currentConsecutiveCount`* & *`prevConsecutiveCount`*. 
  So just add that amount to `ans`. Now *`prevConsecutiveCount`* will become equal to *`currentConsecutiveCount`* and reset the *`currentConsecutiveCount`* to 1.
  
  **C++**
  ```
  //                             \u2B07\uFE0F - Just pass reference, no need for copy 
  int countBinarySubstrings(string& s) {
    // we start from first character - so curConsecutive = 1
	int curConsecutive = 1, prevConsecutive = 0, ans = 0;
	for(int i = 1; i < size(s); i++) {
		if(s[i] != s[i - 1]) // whenever current & previous don't match
			ans += min(prevConsecutive, curConsecutive), // number of substring formed is minimum of cur & prev count
			prevConsecutive = curConsecutive,            // previous consecutive streak will become current consecutive and,
			curConsecutive = 1;                          // current streak will be resetted
		else 
			curConsecutive++; 
	}
	// required to include count from last two groups of consecutive characters.
	ans += min(prevConsecutive, curConsecutive); 
	return ans;
}
```

---

**Python**
```
def countBinarySubstrings(self, s: str) -> int:
	ans, prev, cur = 0, 0, 1
	for i in range(1, len(s)):
		if s[i] != s[i - 1]:
			ans += min(prev, cur)
			prev = cur
			cur = 1
		else:
			cur += 1
	ans += min(prev, cur)
	return ans
```
  
***Time Complexity :*** **`O(N)`**, where *`N`* is the length of given string.
***Space  Complexity :*** **`O(1)`**, since only constant space is being used.
  
---

*Best Runtime -*

<table><tr><td><img src = https://assets.leetcode.com/users/images/b640c5c0-de18-428d-9bb8-f01c6b5ae0b6_1619166157.5235705.png /> </td></tr><table>


  
---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---