# 📌📌 Detailed Explanation || Well-Coded || 92% faster 🐍

**Author:** abhi9Rai
**Votes:** 3
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/1657022/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/1657022/)

---

## IDEA :
* First we need to calculate the difference of the conversion. for example conversion from `a to b` will have difference of 1.
* Then we hold a dictiomary (hash map) diff to see how many times we want to convert each difference.

* For example to go from `"aa" to "bb"` we want to go difference 1 for 2 times.
* This is possible only if we will have k of 27 or above, because to go from a to b we need 1, and each loop starts at 26 (alphabet count).

****
**Implementation :**
'''

	class Solution:
		def canConvertString(self, s: str, t: str, k: int) -> bool:

			if len(s)!=len(t):
				return False

			dic = defaultdict(int)
			for a,b in zip(s,t):
				if a!=b:
					if ord(b)>ord(a):
						diff = ord(b)-ord(a)
					else:
						diff = (26-ord(a)+ord(b))

					n = dic[diff]*26 + diff
					if n>k:
						return False
					dic[diff]+=1

			return True

### Explanation :

**Dict Storing Difference as key and value as frequency of that shift require to convert all char with same difference to respective char in 't'.**
Example 
'''

	s=abc t=bcd , we require 1 shift three times.So key=1 val=3.


**Now for a particular key, we require maximum `26*(val)+diff` number if we want to convert all char with same difference(key) to valid char in 't'.**
Example :
'''

	s = abc t =bcd we require number 1,27,53 to convert s to t.


			
**Thanks and Upvote if you got any help or like the Idea !!** \uD83E\uDD1E