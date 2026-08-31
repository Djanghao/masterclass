# EASY||Simplified||Implementation||O(N)

**Author:** nishantranjan
**Votes:** 3
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/4566974/](https://leetcode.com/problems/masking-personal-information/solutions/4566974/)

---

# Intuition
The goal of this code is to mask personal information in a string, differentiating between phone numbers and email addresses. The approach involves character normalization, counting digits, and applying specific masking rules based on the type of information. By distinguishing between phone numbers and email addresses, the code constructs appropriately masked strings to preserve privacy while still providing meaningful information.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
**Character Normalization:**
Convert all characters to lowercase to ensure uniformity and simplify subsequent processing.

**Initialization of Variables:**
Initialize variables (maskedString, lastDigits, digitCount) to manage masked information and count digits.

**Distinguish Phone Numbers and Email Addresses:**
Check for the presence of "@" to determine whether the input is a phone number or an email address.
- Masking Phone Numbers:
If it's a phone number:
Count the number of digits to determine the masking pattern.
Construct a masked string based on the digit count.
Extract and reverse the last 4 digits to maintain the correct order.

- Masking Email Addresses:
If it's an email address:
Locate the position of "@" and construct a masked email address by replacing characters with asterisks.

**Return Result:**
Return the final result by combining the masked string (either phone number or email address) with the last 4 digits (if applicable).

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    string maskPII(string s) {
        // Convert all characters to lowercase
        for (int i = 0; i < s.size(); i++) {
            s[i] = tolower(s[i]);
        }

        // Initialize variables for storing masked information
        string maskedString = "";
        string lastDigits = "";
        int digitCount = 0;

        // Case: Masking Phone Numbers
        if (s.find("@") == string::npos) {
            // Count the number of digits in the string
            for (int i = 0; i < s.size(); i++) {
                if (isdigit(s[i]))
                    digitCount++;
            }

            // Construct the masked string based on the number of digits
            if (digitCount - 10 == 0) {
                maskedString += "***-***-";
            } else if (digitCount - 10 == 1) {
                maskedString += "+*-***-***-";
            } else if (digitCount - 10 == 2) {
                maskedString += "+**-***-***-";
            } else if (digitCount - 10 == 3) {
                maskedString += "+***-***-***-";
            }

            // Extract the last 4 digits
            digitCount = 0;
            for (int i = s.size() - 1; i >= 0; i--) {
                if (isdigit(s[i])) {
                    lastDigits += s[i];
                    digitCount++;
                }
                if (digitCount == 4)
                    break;
            }
            // Reverse the order of the last 4 digits
            reverse(lastDigits.begin(), lastDigits.end());
        }
        // Case: Masking Email Addresses
        else {
            // Find the position of "@" in the string
            auto it = s.find("@");
            // Construct the masked email address
            maskedString = maskedString + s[0] + "*****" + s.substr(it - 1);
        }

        // Return the final masked string
        return maskedString + lastDigits;
    }
};

```