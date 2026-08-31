# [ Python ] ✔✔ Simple Python Solution Using Sliding Window and Rolling Hash ✌🔥

**Author:** ASHOK_KUMAR_MEGHVANSHI
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1735511/](https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1735511/)

---

# If It is Useful To Understand Please UpVote Me \uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F	
	class Solution:
		def subStrHash(self, s: str, power: int, modulo: int, k: int, hashValue: int) -> str:

			sc=0
			i=len(s)-1
			a=0
			m = (power**k)%modulo

			while i>-1:

				sc=(sc*power + ord(s[i])-97+1)%modulo

				if i+k<len(s):
					sc=(sc-((ord(s[i+k])-97+1)*m))%modulo

				if sc==hashValue:
					a=i
				i=i-1

			return s[a:a+k]


