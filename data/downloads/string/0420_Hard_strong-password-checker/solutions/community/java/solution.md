# ✅ [JAVA/CPP/PYTHON] | EXPLAINED | 100% | 0 MS| MEME 🔥🔥🔥🔥🔥

**Author:** ManojKumarPatnaik
**Votes:** 21
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/2342184/](https://leetcode.com/problems/strong-password-checker/solutions/2342184/)

---

**UPVOTE PLEASE**
The code is a solution to the "Strong Password Checker" problem, which asks for the minimum number of changes needed to make a given password strong. A strong password is defined as one that satisfies the following criteria:

Has at least 6 characters and at most 20 characters.
Contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
Doesn't contain three repeating characters in a row.
The code starts by initializing a variable "missing_type" to 3, which represents the number of character types (lowercase, uppercase, digit) that are missing from the password. It then checks for the presence of each of these types in the password and subtracts from missing_type accordingly.

Next, the code checks for repeating characters in the password using a while loop that iterates through the password. If three characters in a row are found, the length of the repeating sequence is calculated and change is incremented by the number of changes needed to make the sequence valid (i.e. length / 3). If the length is a multiple of 3, one is incremented; if it's one more than a multiple of 3, two is incremented; otherwise, no counter is incremented. The purpose of these counters will become clear later.

After checking for repeating characters, the code checks the length of the password to determine the appropriate action to take. If the password is less than 6 characters long, the minimum number of changes needed is the maximum of missing_type and 6 - len(s). If the password is between 6 and 20 characters long, the minimum number of changes needed is the maximum of missing_type and change. If the password is longer than 20 characters, some characters must be deleted to make it valid. The code calculates the number of characters to delete (delete) and then subtracts from change the number of sequences of length 3 that can be turned into sequences of length 2 by deleting one character (one), the number of sequences of length 3 that can be turned into sequences of length 1 by deleting two characters (two), and the number of remaining characters that can be turned into sequences of length 1 by deleting three characters (max(delete - one - 2 * two, 0) / 3). Finally, the minimum number of changes needed is delete plus the maximum of missing_type and change.

In summary, the code checks for missing character types and repeating character sequences and then calculates the minimum number of changes needed to make the password strong.

<iframe src="https://leetcode.com/playground/gH4JSygM/shared" frameBorder="0" width="1080" height="1080"></iframe>

This code is also a solution to the "Strong Password Checker" problem. It uses a different approach than the previous solution.

The code first calculates the number of deletions needed to make the string valid (deleteTarget) and the number of characters that must be added to make the string valid (addTarget). It also initializes variables to keep track of the number of deletions, additions, and replacements needed, as well as whether the string needs an uppercase letter, a lowercase letter, and a digit.

In the first part of the code, the code handles the case where the length of the string is less than or equal to 20. It uses a sliding window approach to check for repeating substrings of length 3. If a repeating substring is found, the code either adds a character to break the repetition (if possible and if the number of characters to add is less than the number of characters needed to make the string valid), or replaces the substring with a different substring (to avoid three repeating characters). The function then returns the maximum of the number of characters to add and the number of replacements needed, plus the number of missing character types.

In the second part of the code, the code handles the case where the length of the string is greater than 20. It first creates a vector of unordered maps to record the lengths and frequencies of repeating substrings with lengths modulo 3 equal to 0, 1, and 2. It uses a loop to iterate through the string and record the frequencies of repeating substrings. It then attempts to delete characters to minimize the number of replacements needed. The code tries to delete characters from substrings with lengths modulo 3 equal to 0, then substrings with lengths modulo 3 equal to 1, and finally substrings with lengths modulo 3 equal to 2. Each deletion decreases the number of replacements needed by 1. The code then calculates the maximum number of deletions that can be made by deleting characters in groups of three. Finally, the function returns the sum of the number of deletions needed and the maximum of the number of replacements needed and the number of missing character types.

In summary, this code calculates the minimum number of changes needed to make the password strong by first checking for missing character types and repeating substrings and then using deletions, additions, and replacements to make the password valid.

![image](./images/0.png)
