# Python O(N) Time O(1) Space Solution | Explained

**Author:** melvinabraham
**Votes:** 71
**Link:** [https://leetcode.com/problems/backspace-string-compare/solutions/585027/](https://leetcode.com/problems/backspace-string-compare/solutions/585027/)

---

This is a Python Version of the Java Solution utilizing O(1) space because it seemed really intuitive to me.(https://leetcode.com/problems/backspace-string-compare/solution/)

In this solution, a **valid character** refers to anything that is not a "#". I have worked out an example, if you already know the logic you can skip ahead to the code.

The idea is, we traverse both the strings from the end. We declare i and j to be equal to the length of the strings - 1.

Say we are given, "ab#c" and "ad#c"
Now, we traverse from the end. 
* i = 3 and j = 3:
	* We see that S[i] and T[j] are **valid characters**. Hence, we just compare them and then reduce the value of i and j respectively. Now we have to compare "ab#" and ad#"
* i = 2 and j = 2:
	* We see that S[i] is not a **valid character**. Therefore, we must skip the next **valid character** that we might encounter. In this case, we skip "b". Now comparision must be done with the next **valid character** that was not skipped, which is "a". Similarly in the case of T[j], the next **valid character** is "a". We compare both, and they match.

If that sounds confusing, I would recommend looking at the code, and working out the example that I gave using the code.



```
class Solution:
	def backspaceCompare(self, S, T):
		i = len(S) - 1			# Traverse from the end of the strings
		j = len(T) - 1

		skipS = 0              # The number of backspaces required till we arrive at a valid character
		skipT = 0

		while i >= 0 or j >= 0:
			while i >= 0:					# Ensure that we are comparing a valid character in S
				if S[i] == "#" :
					skipS += 1				# If not a valid character, keep times we must backspace.
					i = i - 1

				elif skipS > 0:
					skipS -= 1				# Backspace the number of times calculated in the previous step
					i = i - 1

				else:
					break

			while j >= 0:					# Ensure that we are comparing a valid character in T
					if T[j] == "#":
						skipT += 1			# If not a valid character, keep times we must backspace.
						j = j - 1

					elif skipT > 0:
						skipT -= 1			# Backspace the number of times calculated in the previous step
						j = j - 1

					else:
						break

			print("Comparing", S[i], T[j])		# Print out the characters for better understanding.

			if i>= 0 and j >= 0 and S[i] != T[j]:    # Compare both valid characters. If not the same, return False.
				return False

			if (i>=0) != (j>=0):		# Also ensure that both the character indices are valid. If it is not valid,
				return False			#  it means that we are comparing a "#" with a valid character.

			i = i - 1
			j = j - 1

		return True					# This means both the strings are equivalent.
```
