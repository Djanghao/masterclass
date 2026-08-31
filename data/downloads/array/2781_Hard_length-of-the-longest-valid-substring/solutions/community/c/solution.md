# Super Easy C++ Solution

**Author:** anuragdub3y
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/3778316/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/3778316/)

---

We add each character one by one to our string and check if it has a substring (of maximum length 10 since ```forbidden``` strings are at max 10 chars long) from the front and the back. 
If the prefix string has a ```forbidden``` substring, we pop out the first element (use substr function since pop_front() is not a string method in C++). 
If the suffix has a ```forbidden``` substring, we will update the string to the longest suffix substring there is.
Feel free to comment!

<iframe src="https://leetcode.com/playground/fEQm3FQZ/shared" frameBorder="0" width="600" height="500"></iframe>