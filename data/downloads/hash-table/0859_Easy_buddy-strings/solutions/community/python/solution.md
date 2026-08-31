# [C++/Java/Python] One pass - Clean & Concise - O(N)

**Author:** hiepit
**Votes:** 143
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/891469/](https://leetcode.com/problems/buddy-strings/solutions/891469/)

---

**Idea**
- Using 2 indices `diff1`, `diff2` to store up to 2 different places between string `A` and string `B`.
- If there are more than 2 different places -> Invalid.
- If there are 2 different places -> Compare A[diff1] vs B[diff2] and A[diff2] vs B[diff1].
- If there is only 1 different places -> Invalid.
- If no difference between A and B then check if `A` contains at least 1 duplicate letters so that we can swap them.
	- Example 1: `A = "ab"`, `B = "ab"`
	- Example 2: `A = "aab"`, `B = "aab"`, 

<iframe src="https://leetcode.com/playground/QSYJiwkN/shared" frameBorder="0" width="100%" height="460"></iframe>

**Complexity:**
- Time: `O(N)`
- Space: `O(26)`, `A_letters` stores up to 26 characters

If you like this solution, I'm happy if you give this post a **vote**.
Happy coding!