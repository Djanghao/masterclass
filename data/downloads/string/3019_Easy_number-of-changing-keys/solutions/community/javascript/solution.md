# ✅Beats 100%🔥Detecting Key Changes in Strings || Java | Python | C++| JavaScript

**Author:** Mohit-P
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/4636934/](https://leetcode.com/problems/number-of-changing-keys/solutions/4636934/)

---

# Intuition
The goal is to count the number of key changes in a given string s. A key change occurs when the ASCII difference between consecutive characters is not equal to 32, -32, or 0.

# Approach
- The code uses a simple loop to iterate through the characters of the string starting from the second character. 
- For each pair of consecutive characters, it calculates the ASCII difference (x) and checks whether it is not equal to 32, -32, or 0. 

- If the condition is met, it increments the count. The final count represents the number of key changes in the string.

# Complexity
- Time complexity:
The code iterates through each character in the string once, making it linear with respect to the length of the input string. Therefore, the time complexity is O(n), where n is the length of the input string.

- Space complexity:
The algorithm uses a constant amount of space for variables (count, x, and i). Therefore, the space complexity is O(1)


# Code
```Java []
    public int countKeyChanges(String s) {
        // Initialize a counter to keep track of key changes
        int count = 0;

        // Iterate through the characters of the string starting from the second character
        for (int i = 1; i < s.length(); i++) {
            // Calculate the ASCII difference between consecutive characters
            int x = s.charAt(i) - s.charAt(i - 1);

            // Check if the ASCII difference is not equal to 32, -32, or 0
            // These values correspond to no change, a space character, and the opposite case, respectively
            if (x != 32 && x != -32 && x != 0) {
                // Increment the count if a key change is detected
                count++;
            }
        }

        // Return the final count representing the number of key changes in the string
        return count;
    }
```
```python []
def count_key_changes(s):
    # Initialize a counter to keep track of key changes
    count = 0

    # Iterate through the characters of the string starting from the second character
    for i in range(1, len(s)):
        # Calculate the ASCII difference between consecutive characters
        x = ord(s[i]) - ord(s[i - 1])

        # Check if the ASCII difference is not equal to 32, -32, or 0
        # These values correspond to no change, a space character, and the opposite case, respectively
        if x != 32 and x != -32 and x != 0:
            # Increment the count if a key change is detected
            count += 1

    # Return the final count representing the number of key changes in the string
    return count

```
```C++ []
int countKeyChanges(string s) {
    // Initialize a counter to keep track of key changes
    int count = 0;

    // Iterate through the characters of the string starting from the second character
    for (int i = 1; i < s.length(); i++) {
        // Calculate the ASCII difference between consecutive characters
        int x = s[i] - s[i - 1];

        // Check if the ASCII difference is not equal to 32, -32, or 0
        // These values correspond to no change, a space character, and the opposite case, respectively
        if (x != 32 && x != -32 && x != 0) {
            // Increment the count if a key change is detected
            count++;
        }
    }

    // Return the final count representing the number of key changes in the string
    return count;
}

```
```JavaScript []
function countKeyChanges(s) {
    // Initialize a counter to keep track of key changes
    let count = 0;

    // Iterate through the characters of the string starting from the second character
    for (let i = 1; i < s.length; i++) {
        // Calculate the ASCII difference between consecutive characters
        let x = s.charCodeAt(i) - s.charCodeAt(i - 1);

        // Check if the ASCII difference is not equal to 32, -32, or 0
        // These values correspond to no change, a space character, and the opposite case, respectively
        if (x !== 32 && x !== -32 && x !== 0) {
            // Increment the count if a key change is detected
            count++;
        }
    }

    // Return the final count representing the number of key changes in the string
    return count;
}


```

If you found this content helpful, consider giving it an **upvote** and share your thoughts in the comments.

