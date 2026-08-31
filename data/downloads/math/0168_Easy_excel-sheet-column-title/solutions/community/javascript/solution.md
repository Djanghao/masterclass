# Easy || 0 ms || 100% || Fully Explained (Java, C++, Python, Python3)

**Author:** PratikSen07
**Votes:** 104
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/2448578/](https://leetcode.com/problems/excel-sheet-column-title/solutions/2448578/)

---

# **Java Solution:**
Runtime: 0 ms, faster than 100.00% of Java online submissions for Excel Sheet Column Title.
```
class Solution {
    public String convertToTitle(int columnNumber) {
        // Create an empty string for storing the characters...
        StringBuilder output = new StringBuilder();
        // Run a while loop while columnNumber is positive...
        while(columnNumber > 0){
            // Subtract 1 from columnNumber...
            columnNumber--;
            // Get current character by doing modulo of columnNumber by 26...
            char c = (char) (columnNumber % 26 + 'A');
            // Divide columnNumber by 26...
            columnNumber /= 26;
            // Append the character into output...
            output.append(c);
        }
        // Reverse the output string...
        // Bcause we have found characters from right to left...
        output.reverse();
        // Return the reversed string.
        return output.toString();
    }
}
```

# **C++ Solution:**
```
class Solution {
public:
    string convertToTitle(int columnNumber) {
        // Create an empty string for storing the characters...
        string output;
        // Run a while loop while columnNumber is positive...
        while(columnNumber > 0){
            // Subtract 1 from columnNumber...
            columnNumber--;
            // Get current character by doing modulo of columnNumber by 26...
            int m = columnNumber % 26;
            // Divide columnNumber by 26...
            columnNumber /= 26;
            output += 'A' + m;
        }
        // Reverse the output string...
        // Bcause we have found characters from right to left...
        reverse(output.begin(),output.end());
        // Return the reversed string.
        return output;
    }
};
```

# **Python / Python3 Solution:**
```
class Solution(object):
    def convertToTitle(self, columnNumber):
        # Create an empty string for storing the characters...
        output = ""
        # Run a while loop while columnNumber is positive...
        while columnNumber > 0:
            # Subtract 1 from columnNumber and get current character by doing modulo of columnNumber by 26...
            output = chr(ord('A') + (columnNumber - 1) % 26) + output
            # Divide columnNumber by 26...
            columnNumber = (columnNumber - 1) // 26
        # Return the output string.
        return output
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**