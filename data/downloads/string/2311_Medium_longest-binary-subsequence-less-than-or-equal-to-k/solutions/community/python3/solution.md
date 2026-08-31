# Python||Greedy||Fast||Easy to undestand|| With explanations

**Author:** muctep_k
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2168527/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2168527/)

---

1. As the answer is a **subsequence** then we understand that we MUST get ALL zeroes from string to maximize the answer(it depends on length)
2. Another greedy thing to consider is position of 1 in a binary representation and the greedy thing -> we must decrease the k starting by least position of 1

```
class Solution:
    def longestSubsequence(self, s: str, k: int) -> int:
        n = len(s)
        ones = []
		# Notice how I reversed the string,
		# because the binary representation is written from greatest value of 2**n
        for i, val in enumerate(s[::-1]):
            if val == '1':
                ones.append(i)
		# Initialize ans, there are already number of zeroes (num_of_zeroes = len(nums) - len(ones)
        ans = n - len(ones)
        i = 0
		# imagine k == 5 and binary string 001011
		# ones = [0, 1, 3]
		# first loop: 5 - 2**0 -> 4, ans += 1
		# second loop: 4 - 2**1 -> 2, ans +=1
		# Third loop does not occur because 2 - 2**3 -> -6 which is less than zero
		# So the ans is 3 + 2 = 5
        while i < len(ones) and k - 2 ** ones[i] >= 0:
            ans += 1
            k -= 2 ** ones[i]
            i += 1
	
        return ans
```