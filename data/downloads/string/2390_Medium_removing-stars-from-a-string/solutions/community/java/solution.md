# ✅[Python3//C++//Java]✅ Easy and understand (Stack Simulation)

**Author:** abdullayev_akbar
**Votes:** 359
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402366/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402366/)

---

This code defines a function removeStars that takes a string s as input and returns a modified version of the input string with all asterisks (*) removed along with the preceding character.

Here is a step-by-step explanation of the code:
1. Initialize an empty list ans that will be used to build the modified string.
2. Loop through each character i in the input string s.
3. If the current character i is an asterisk, remove the last element from the ans list.
4. If the current character i is not an asterisk, add it to the end of the ans list.
5. Join the elements in the ans list into a string and return the result.

For example, if the input string is ``abc*d*ef*g*``, the function would first create an empty list ``ans = []``. Then, it would loop through each character in the string as follows:
- i = 'a': append 'a' to ans (ans = ['a'])
- i = 'b': append 'b' to ans (ans = ['a', 'b'])
- i = 'c': append 'c' to ans (ans = ['a', 'b', 'c'])
- i = '*': remove the last element from ans (ans = ['a', 'b'])
- i = 'd': append 'd' to ans (ans = ['a', 'b', 'd'])
- i = '*': remove the last element from ans (ans = ['a','b'])
- i = 'e': append 'e' to ans (ans = ['a','b', 'e'])
- i = 'f': append 'f' to ans (ans = ['a','b', 'e', 'f'])
- i = '*': remove the last element from ans (ans = ['a','b', 'e'])
- i = 'g': append 'g' to ans (ans = ['a','b', 'e', 'g'])
- i== '*': remove the last element from ans (ans = ['a','b', 'e'])

Finally, the function would join the elements in ans into a string ('abe') and return the result.
# Please Upvote \uD83D\uDE07
# Code
<iframe src="https://leetcode.com/playground/jEUgwsYM/shared" frameBorder="0" width="800" height="310"></iframe>


![image.png](./images/0.png)