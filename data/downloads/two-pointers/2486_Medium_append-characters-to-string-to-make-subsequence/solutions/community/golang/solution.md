# Two pointers Solution with explanation | clean code [c++/go/python]

**Author:** anupsingh556
**Votes:** 5
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5250112/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5250112/)

---

# Intuition
- We can use two pointers to solve this. Use pointers to find lenght in second string that is subsequence to original string. At the end we can substract extra length to get our result.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Create two pointers pS and pT.
- Increase pT only is s[pS]==t[pT] this ensures we are covering every common character between s&t. We will get common length after this operation.
- Once while loop is over pT will cover common subsequence. We can get result by nT-pT
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n) for traversing the string only once
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: Constant Space no extra space needed
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c++ []
class Solution {
public:
    int appendCharacters(string s, string t) {
        int nS = s.size(), nT = t.size(), pS=0, pT=0;
        while(pS<nS&&pT<nT) {
            if(s[pS]==t[pT])pT++;
            pS++;
        }
        return nT-pT;
    }
};
```
```go []
func appendCharacters(s string, t string) int {
	nS, nT, pT, pS := len(s), len(t), 0, 0
	for pS < nS && pT < nT {
		if s[pS] == t[pT] {
			pT++
		}
		pS++
	}
	return nT-pT
}
```
```python []
class Solution(object):
    def appendCharacters(self, s, t):
        nS = len(s)
        nT = len(t)
        pS = 0
        pT = 0

        while pS < nS and pT < nT:
            if s[pS] == t[pT]:
                pT += 1
            pS += 1
        return nT - pT
```