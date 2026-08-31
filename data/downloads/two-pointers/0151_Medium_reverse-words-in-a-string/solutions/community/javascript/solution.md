# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 56
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/4123195/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/4123195/)

---


# *PLEASE UPVOTE IF IT HELPED*

---


# Approach
***(Also explained in the code)***

1. The code starts by trimming the input string s to remove any leading and trailing spaces.

1. It then splits the trimmed string into words based on spaces using a `stringstream`. The words are stored in the `words` vector.

1. Next, it initializes an output string `out`.

1. The code iterates through the words in reverse order (from the last word to the second word) and appends each word followed by a space to the output string.

1. Finally, it appends the first word to the output string without a trailing space.

---


# Complexity
- **Time complexity:**
$$O(n)$$

- **Space complexity:**
$$O(m)$$ *( where M is the total number of words in the input string. The space is primarily used for storing the words in the words vector.)*

---


# Code
```C++ []
class Solution {
public:
    string reverseWords(string s) {
        // Trim the input string to remove leading and trailing spaces
        int i = 0, j = s.size() - 1;
        while (i <= j && s[i] == ' ') i++;   // Find the first non-space character
        while (j >= i && s[j] == ' ') j--;   // Find the last non-space character
        s = s.substr(i, j - i + 1);          // Extract the trimmed substring

        // Split the trimmed string into words based on spaces
        vector<string> words;                // Create a vector to store words
        stringstream ss(s);                  // Create a stringstream with the trimmed string
        string word;
        while (ss >> word) {                 // Tokenize the string into words
            words.push_back(word);           // Store each word in the vector
        }

        // Initialize the output string
        string out = "";

        // Iterate through the words in reverse order
        for (int i = words.size() - 1; i > 0; i--) {
            // Append the current word and a space to the output
            out += words[i] + " ";
        }

        // Append the first word to the output (without trailing space)
        return out + words[0];               // Concatenate the reversed words
    }
};


```

```java []
public class Solution {
    public String reverseWords(String s) {
        // Trim the input string to remove leading and trailing spaces
        int i = 0, j = s.length() - 1;
        while (i <= j && s.charAt(i) == ' ') i++;   // Find the first non-space character
        while (j >= i && s.charAt(j) == ' ') j--;   // Find the last non-space character
        s = s.substring(i, j + 1);                  // Extract the trimmed substring

        // Split the trimmed string into words based on spaces
        String[] words = s.split("\\\\s+");           // Tokenize the string into words

        // Initialize the output string
        StringBuilder out = new StringBuilder();

        // Iterate through the words in reverse order
        for (int k = words.length - 1; k > 0; k--) {
            // Append the current word and a space to the output
            out.append(words[k]).append(" ");
        }

        // Append the first word to the output (without trailing space)
        return out.append(words[0]).toString();       // Concatenate the reversed words
    }
}


```
```python []
class Solution:
    def reverseWords(self, s: str) -> str:
        # Trim the input string to remove leading and trailing spaces
        i, j = 0, len(s) - 1
        while i <= j and s[i] == ' ':
            i += 1  # Find the first non-space character
        while j >= i and s[j] == ' ':
            j -= 1  # Find the last non-space character
        s = s[i : j + 1]  # Extract the trimmed substring

        # Split the trimmed string into words based on spaces
        words = s.split()  # Tokenize the string into words

        # Initialize the output string
        out = []

        # Iterate through the words in reverse order
        for k in range(len(words) - 1, 0, -1):
            # Append the current word and a space to the output
            out.append(words[k])
        # Append the first word to the output (without trailing space)
        out.append(words[0])

        return ' '.join(out)  # Concatenate the reversed words

```

```JavaScript []
 var reverseWords = function(s) {
    // Trim the input string to remove leading and trailing spaces
    let i = 0, j = s.length - 1;
    while (i <= j && s[i] === ' ') i++;   // Find the first non-space character
    while (j >= i && s[j] === ' ') j--;   // Find the last non-space character
    s = s.substring(i, j + 1);            // Extract the trimmed substring

    // Split the trimmed string into words based on spaces
    let words = s.split(/\\s+/);            // Tokenize the string into words

    // Initialize the output string
    let out = '';

    // Iterate through the words in reverse order
    for (let k = words.length - 1; k > 0; k--) {
        // Append the current word and a space to the output
        out += words[k] + ' ';
    }

    // Append the first word to the output (without trailing space)
    out += words[0];

    return out;                            // Concatenate the reversed words
};


```

# *PLEASE UPVOTE IF IT HELPED*

---

---

