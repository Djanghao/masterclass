# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4382788/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4382788/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**


1. The code uses a `check` function to verify if characters at two positions are equal or almost equal.
1. `removeAlmostEqualCharacters` iterates through the string, counting instances where characters are equal or almost equal.

# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []
class Solution {
private:
    // Function to check if the characters are equal or almost equal
    bool check(char x, char y) {
        // If characters are equal or adjacent in the alphabet, return true
        if (x == y)
            return true;
        if (x + 1 == y || x == y + 1)
            return true;
        return false;
    }

public:
    int removeAlmostEqualCharacters(string word) {
        int n = word.length(); // Length of the given word
        
        int ans = 0; // Initialize the answer counter
        int k = 0; // Initialize pointer for iteration
        
        while (k < n - 1) {
            // Check if characters at position k and k+1 are equal or almost equal
            if (check(word[k], word[k + 1])) {
                ans++; // Increment the counter for almost equal characters
                k++; // Move to the next character after handling the pair
            }
            k++; // Move to the next character for comparison
        }
        
        return ans; // Return the total count of almost equal characters
    }
};



```
```C []
// Function to check if the characters are equal or almost equal
bool check(char x, char y) {
    // If characters are equal or adjacent in the alphabet, return true
    if (x == y)
        return true;
    if (x + 1 == y || x == y + 1)
        return true;
    return false;
}

int removeAlmostEqualCharacters(char word[]) {
    int n = strlen(word); // Length of the given word
    
    int ans = 0; // Initialize the answer counter
    int k = 0; // Initialize pointer for iteration
    
    while (k < n - 1) {
        // Check if characters at position k and k+1 are equal or almost equal
        if (check(word[k], word[k + 1])) {
            ans++; // Increment the counter for almost equal characters
            k++; // Move to the next character after handling the pair
        }
        k++; // Move to the next character for comparison
    }
    
    return ans; // Return the total count of almost equal characters
}



```
```Java []
class Solution {
    private boolean check(char x, char y) {
        if (x == y)
            return true;
        if (x + 1 == y || x == y + 1)
            return true;
        return false;
    }

    public int removeAlmostEqualCharacters(String word) {
        int n = word.length();
        int ans = 0;
        int k = 0;
        
        while (k < n - 1) {
            if (check(word.charAt(k), word.charAt(k + 1))) {
                ans++;
                k++;
            }
            k++;
        }
        
        return ans;
    }
}



```
```python3 []
class Solution:
    def check(self, x, y):
        if x == y:
            return True
        if x + 1 == ord(y) or x == ord(y) + 1:
            return True
        return False

    def removeAlmostEqualCharacters(self, word: str) -> int:
        n = len(word)
        ans = 0
        k = 0
        
        while k < n - 1:
            if self.check(ord(word[k]), ord(word[k + 1])):
                ans += 1
                k += 1
            k += 1
        
        return ans



```
```javascript []
function removeAlmostEqualCharacters(word) {
    const n = word.length; // Length of the given word
    
    let ans = 0; // Initialize the answer counter
    let k = 0; // Initialize pointer for iteration
    
    while (k < n - 1) {
        // Check if characters at position k and k+1 are equal or almost equal
        if (word[k] === word[k + 1] || Math.abs(word[k].charCodeAt(0) - word[k + 1].charCodeAt(0)) === 1) {
            ans++; // Increment the counter for almost equal characters
            k++; // Move to the next character after handling the pair
        }
        k++; // Move to the next character for comparison
    }
    
    return ans; // Return the total count of almost equal characters
}



```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---