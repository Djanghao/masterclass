# Easy Solution using HashMap

**Author:** deepankyadav
**Votes:** 352
**Link:** [https://leetcode.com/problems/ransom-note/solutions/3744949/](https://leetcode.com/problems/ransom-note/solutions/3744949/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
The goal is to determine whether it is possible to construct the ransom note using characters from the magazine. To achieve this, we need to count the occurrences of each character in the magazine and check if there are enough occurrences to form the ransom note.

# Approach
1. Create a HashMap called dictionary to store the character counts in the magazine.
1. Iterate through each character in the magazine string.
1. If the character is not present in the dictionary, add it with a count of 1.
1. If the character is already present, increment its count by 1.
1. Iterate through each character in the ransom note string.
1. Check if the character is present in the dictionary and its count is greater than 0.
1. If both conditions are satisfied, decrement the count of the character in the dictionary.
1. If a character is not present in the dictionary or its count is 0, return false.
1. If all characters in the ransom note have been checked successfully, return true.

# Complexity
- Time complexity:
The time complexity of the solution is $$O(m + n)$$, where m is the length of the magazine string and n is the length of the ransom note string. This is because we iterate through each character in both strings once.

- Space complexity:
The space complexity is $$O(m)$$, where m is the number of unique characters in the magazine string. This is because we store the character counts in the dictionary HashMap.
# Code
```java []
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        
        // Create a HashMap to store character counts
        HashMap<Character, Integer> dictionary = new HashMap<>();

        // Iterate through the characters in the magazine
        for (int i = 0; i < magazine.length(); i++) {
            char c = magazine.charAt(i);
            
            // If the character is not present in the HashMap, add it with count 1
            if (!dictionary.containsKey(c)) {
                dictionary.put(c, 1);
            } else {
                // If the character is already present, increment its count by 1
                dictionary.put(c, dictionary.get(c) + 1);
            }
        }
        
        // Iterate through the characters in the ransom note
        for (int i = 0; i < ransomNote.length(); i++) {
            char c = ransomNote.charAt(i);
            
            // If the character is present in the HashMap and its count is greater than 0,
            // decrement its count by 1
            if (dictionary.containsKey(c) && dictionary.get(c) > 0) {
                dictionary.put(c, dictionary.get(c) - 1);
            } else {
                // If the character is not present or its count is 0, return false
                return false;
            }
        }
        
        // All characters in the ransom note have been processed successfully,
        // so the ransom note can be formed from the magazine
        return true;
    }
}

```
```python []
class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        # Create a dictionary to store character counts
        dictionary = {}

        # Iterate through the magazine and count characters
        for char in magazine:
            if char not in dictionary:
                dictionary[char] = 1
            else:
                dictionary[char] += 1

        # Iterate through the ransom note and check character counts
        for char in ransomNote:
            if char in dictionary and dictionary[char] > 0:
                dictionary[char] -= 1
            else:
                return False
        
        return True
```
```C++ []
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char, int> dictionary;

        // Iterate through the magazine and count characters
        for (char c : magazine) {
            if (dictionary.find(c) == dictionary.end()) {
                dictionary[c] = 1;
            } else {
                dictionary[c]++;
            }
        }

        // Iterate through the ransom note and check character counts
        for (char c : ransomNote) {
            if (dictionary.find(c) != dictionary.end() && dictionary[c] > 0) {
                dictionary[c]--;
            } else {
                return false;
            }
        }

        return true;
    }
};
```
## ***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)
