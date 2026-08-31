# ScanLeft | Scala | Concise Solution with Explanation

**Author:** imran-sarwar
**Votes:** 14
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/791809/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/791809/)

---

We would use scanLeft starting with initial value empty string("")
Now we for Binary Operator op: (B, A) => B, we would provide substring function that would substring till it would find current character in previously calculated String, and we postfix the current character to current substring to start looking for further character.
```
def lengthOfLongestSubstring(s: String): Int = {
	s.scanLeft("")((currStr: String, currChar: Char) => 
	currStr.substring(1 + currStr.indexOf(currChar)) + currChar)
	// Up to this point we would get vector like this
	// Vector(, a, ab, abc, bca, cab, abc, cb, b)
	// now if we take max of length would get the answer
	.map(_.length)
	.reduce(Math.max)
}
```