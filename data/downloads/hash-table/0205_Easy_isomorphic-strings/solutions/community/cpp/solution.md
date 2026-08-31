# Beats 100% || Easiest Code with comments explained || Beginner Friendly

**Author:** ashimkhan
**Votes:** 327
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/4960160/](https://leetcode.com/problems/isomorphic-strings/solutions/4960160/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Imagine two secret codes, same message but different letters. This code checks if the codes are the same, like matching letters in the same order but ignoring the actual letters themselves.
![Screenshot 2024-04-02 143447.png](./images/0.png)


# Approach
<!-- Describe your approach to solving the problem. -->
Imagine two secret messages that use different letters for the same words:

Message 1: "apple"
Message 2: "bbnbm"

These messages are like isomorphic strings\u2014they have the same structure, just different codes.

Here's how the code checks if two strings are isomorphic:

Prepare two counting tables:

One for string s (like a tally for "apple")
One for string t (like a tally for "bbnbm")
Measure the length:

If the messages are different lengths, they can't be the same secret message.
Compare each letter, one by one:

If a letter appears for the first time in both strings at the same position (like "a" and "b" both appearing first at position 0), make a tally mark for both strings in their respective tables.
If a letter appears again, check if its previous position matches in both tally tables. If not, the messages have different codes and aren't the same secret message.
Keep going until the end:

If you finish comparing all letters and every letter matched up in both tally tables, the messages use the same code and are isomorphic!
It's like playing a matching game with letters and their positions to see if the two messages have the same secret code!

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Java 
```
class Solution {
    public boolean isIsomorphic(String s, String t) {
        // Create arrays to store the index of characters in both strings
        int[] indexS = new int[200]; // Stores index of characters in string s
        int[] indexT = new int[200]; // Stores index of characters in string t
        
        // Get the length of both strings
        int len = s.length();
        
        // If the lengths of the two strings are different, they can't be isomorphic
        if(len != t.length()) {
            return false;
        }
        
        // Iterate through each character of the strings
        for(int i = 0; i < len; i++) {
            // Check if the index of the current character in string s
            // is different from the index of the corresponding character in string t
            if(indexS[s.charAt(i)] != indexT[t.charAt(i)]) {
                return false; // If different, strings are not isomorphic
            }
            
            // Update the indices of characters in both strings
            indexS[s.charAt(i)] = i + 1; // updating index of current character
            indexT[t.charAt(i)] = i + 1; // updating index of current character
        }
        
        // If the loop completes without returning false, strings are isomorphic
        return true;
    }
}


```
**C++**
```
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        vector<int> indexS(200, 0); // Stores index of characters in string s
        vector<int> indexT(200, 0); // Stores index of characters in string t
        
        int len = s.length(); // Get the length of both strings
        
        if(len != t.length()) { // If the lengths of the two strings are different, they can't be isomorphic
            return false;
        }
        
        for(int i = 0; i < len; i++) { // Iterate through each character of the strings
            if(indexS[s[i]] != indexT[t[i]]) { // Check if the index of the current character in string s is different from the index of the corresponding character in string t
                return false; // If different, strings are not isomorphic
            }
            
            indexS[s[i]] = i + 1; // updating position of current character
            indexT[t[i]] = i + 1;
        }
        
        return true; // If the loop completes without returning false, strings are isomorphic
    }
};

```

# Python
```
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        indexS = [0] * 200 # Stores index of characters in string s
        indexT = [0] * 200 # Stores index of characters in string t
        
        length = len(s) # Get the length of both strings
        
        if length != len(t): # If the lengths of the two strings are different, they can't be isomorphic
            return False
        
        for i in range(length): # Iterate through each character of the strings
            if indexS[ord(s[i])] != indexT[ord(t[i])]: # Check if the index of the current character in string s is different from the index of the corresponding character in string t
                return False # If different, strings are not isomorphic
            
            indexS[ord(s[i])] = i + 1 # updating position of current character
            indexT[ord(t[i])] = i + 1
        
        return True # If the loop completes without returning false, strings are isomorphic


```

**We can apply same approach using HashMap but for 200 characters this approach suits fine **

![main-qimg-dd19ad82f9afcc414cdfc8ded048648e-lq.jpeg](./images/1.jpeg)

