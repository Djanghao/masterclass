# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 14
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4304592/](https://leetcode.com/problems/make-three-strings-equal/solutions/4304592/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. **Initialization and Declarations:**

    - `len` is initialized to the length of the shortest string among `s1`, `s2`, and `s3`.
    - s`um stores the sum of the lengths of all three strings.
1. **Comparing First Characters:**

    - The code checks if the first characters of `s1`, `s2`, and `s3` are not the same. If they are not the same, it returns `-1` as it's impossible to match the first character.
1. **Finding Matching Characters:**

    - It iterates through the strings until a mismatch is found.
    - For each position where all three strings have the same character, it decrements `sum` by 3.
1. **Return:**

    - Returns the `sum` value, which represents the total length of all three strings minus the common characters found at the beginning of the strings.


# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    int findMinimumOperations(string s1, string s2, string s3) {
        int len = s1.length(); // Calculate the length of the shortest string among s1, s2, and s3
        len = min(len, (int)s2.length());
        len = min(len, (int)s3.length());

        int sum = s1.length() + s2.length() + s3.length(); // Sum of lengths of all three strings

        // Check if the first characters of s1, s2, and s3 are not the same
        if (s1[0] != s2[0] or s1[0] != s3[0] or s2[0] != s3[0]) {
            return -1; // If not the same, return -1 as it's impossible to match the first character
        }

        // Iterate through the strings until a mismatch is found
        for (int i = 0; i < len; i++) {
            if (s1[i] == s2[i] and s2[i] == s3[i]) {
                sum -= 3; // Decrement the sum by 3 for each matching character in the strings
            } else {
                break; // Break the loop when a mismatch is encountered
            }
        }

        return sum; // Return the sum of lengths of three strings minus the matched characters
    }
};



```
```C []



int findMinimumOperations(char* s1, char* s2, char* s3) {
    int len = strlen(s1); // Calculate the length of the shortest string among s1, s2, and s3
    len = len < strlen(s2) ? len : strlen(s2);
    len = len < strlen(s3) ? len : strlen(s3);

    int sum = strlen(s1) + strlen(s2) + strlen(s3); // Sum of lengths of all three strings

    // Check if the first characters of s1, s2, and s3 are not the same
    if (s1[0] != s2[0] || s1[0] != s3[0] || s2[0] != s3[0]) {
        return -1; // If not the same, return -1 as it's impossible to match the first character
    }

    // Iterate through the strings until a mismatch is found
    for (int i = 0; i < len; i++) {
        if (s1[i] == s2[i] && s2[i] == s3[i]) {
            sum -= 3; // Decrement the sum by 3 for each matching character in the strings
        } else {
            break; // Break the loop when a mismatch is encountered
        }
    }

    return sum; // Return the sum of lengths of three strings minus the matched characters
}



```
```Java []
public class Solution {
    public int findMinimumOperations(String s1, String s2, String s3) {
        int len = Math.min(s1.length(), Math.min(s2.length(), s3.length())); // Calculate the length of the shortest string among s1, s2, and s3
        int sum = s1.length() + s2.length() + s3.length(); // Sum of lengths of all three strings

        // Check if the first characters of s1, s2, and s3 are not the same
        if (s1.charAt(0) != s2.charAt(0) || s1.charAt(0) != s3.charAt(0) || s2.charAt(0) != s3.charAt(0)) {
            return -1; // If not the same, return -1 as it's impossible to match the first character
        }

        // Iterate through the strings until a mismatch is found
        for (int i = 0; i < len; i++) {
            if (s1.charAt(i) == s2.charAt(i) && s2.charAt(i) == s3.charAt(i)) {
                sum -= 3; // Decrement the sum by 3 for each matching character in the strings
            } else {
                break; // Break the loop when a mismatch is encountered
            }
        }

        return sum; // Return the sum of lengths of three strings minus the matched characters
    }
}



```
```python3 []
class Solution:
    def findMinimumOperations(self, s1: str, s2: str, s3: str) -> int:
        len_str = min(len(s1), len(s2), len(s3)) # Calculate the length of the shortest string among s1, s2, and s3
        sum_len = len(s1) + len(s2) + len(s3) # Sum of lengths of all three strings

        # Check if the first characters of s1, s2, and s3 are not the same
        if s1[0] != s2[0] or s1[0] != s3[0] or s2[0] != s3[0]:
            return -1 # If not the same, return -1 as it's impossible to match the first character

        # Iterate through the strings until a mismatch is found
        for i in range(len_str):
            if s1[i] == s2[i] == s3[i]:
                sum_len -= 3 # Decrement the sum by 3 for each matching character in the strings
            else:
                break # Break the loop when a mismatch is encountered

        return sum_len # Return the sum of lengths of three strings minus the matched characters



```
```javascript []

function findMinimumOperations(s1, s2, s3) {
    let len = Math.min(s1.length, s2.length, s3.length); // Calculate the length of the shortest string among s1, s2, and s3

    let sum = s1.length + s2.length + s3.length; // Sum of lengths of all three strings

    // Check if the first characters of s1, s2, and s3 are not the same
    if (s1[0] !== s2[0] || s1[0] !== s3[0] || s2[0] !== s3[0]) {
        return -1; // If not the same, return -1 as it's impossible to match the first character
    }

    // Iterate through the strings until a mismatch is found
    for (let i = 0; i < len; i++) {
        if (s1[i] === s2[i] && s2[i] === s3[i]) {
            sum -= 3; // Decrement the sum by 3 for each matching character in the strings
        } else {
            break; // Break the loop when a mismatch is encountered
        }
    }

    return sum; // Return the sum of lengths of three strings minus the matched characters
}

```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---