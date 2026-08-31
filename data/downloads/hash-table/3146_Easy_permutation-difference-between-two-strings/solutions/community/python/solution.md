# ✅THE BEST EXPLANATION||Beats 100% Users

**Author:** harshal2024
**Votes:** 9
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5145738/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5145738/)

---

---
# PLEASE UPVOTE IF YOU LIKE IT \u2705
---
![Screenshot (3250).png](./images/0.png)

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Mapping Indices: The initial step is to create mappings of characters to their indices in both strings. This allows us to efficiently find the position of each character in the other string later on.

Calculating Permutation Difference: By iterating through the characters of s and using the mappings created earlier, we find the position of each character in t. The difference between the original index in s and the corresponding index in t gives us the permutation difference for that character. Summing these differences gives us the total permutation difference between the two strings.

Efficiency: Utilizing unordered maps allows constant-time lookup for characters' indices, making the solution efficient even for large strings.

This approach ensures that we compute the permutation difference between strings s and t with a time complexity of O(n), where n is the length of the strings.

---
# Approach
<!-- Describe your approach to solving the problem. -->
Create Maps for Both Strings: Start by creating two unordered maps, s1 and t1, to store characters of string s and t respectively along with their indices.

Traverse Strings: Iterate through both strings simultaneously. For each character encountered, store its index in the respective maps.

Calculate Permutation Difference: After both maps are populated, iterate through the characters of string s. For each character:

Find the absolute difference between its index in s1 and its index in t1.
Add this absolute difference to the answer.
Return Answer: Return the final sum, which represents the permutation difference between strings s and t.

---

# Complexity
- Time complexity: O(N) 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 

- Space complexity: O(N) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---


![download.jpeg](./images/1.jpeg)

---

# Code
C++
```
// Define a class Solution
class Solution {
public:
    // Define a function findPermutationDifference that takes two strings s and t as input and returns an integer
    int findPermutationDifference(string s, string t) {
        // Create unordered maps to store characters and their indices in both strings
        unordered_map<char,int> s1, t1;
        // Get the length of string s
        int n = s.size();
        // Iterate through each character in string s
        for(int i = 0; i < n; i++){
            // Store the index of each character in string s in the map s1
            s1[s[i]] = i;
            // Store the index of each character in string t in the map t1
            t1[t[i]] = i;
        }
        // Initialize a variable to store the permutation difference
        int ans = 0;
        // Iterate through the characters and their indices in string s
        for(auto x : s1){
            // Calculate the absolute difference between the index of the character in string s and its index in string t
            // Add this absolute difference to the answer
            ans += abs(x.second - t1[x.first]);
        }
        // Return the final permutation difference
        return ans;
    }
};


```

---
Python3
```
class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        # Create dictionaries to store characters and their indices in both strings
        s1, t1 = {}, {}
        # Get the length of string s
        n = len(s)
        # Iterate through each character in string s
        for i in range(n):
            # Store the index of each character in string s in the dictionary s1
            s1[s[i]] = i
            # Store the index of each character in string t in the dictionary t1
            t1[t[i]] = i
        # Initialize a variable to store the permutation difference
        ans = 0
        # Iterate through the characters and their indices in string s
        for char, index in s1.items():
            # Calculate the absolute difference between the index of the character in string s and its index in string t
            # Add this absolute difference to the answer
            ans += abs(index - t1[char])
        # Return the final permutation difference
        return ans


```

---
Java
```
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int findPermutationDifference(String s, String t) {
        // Create HashMaps to store characters and their indices in both strings
        Map<Character, Integer> s1 = new HashMap<>();
        Map<Character, Integer> t1 = new HashMap<>();
        // Get the length of string s
        int n = s.length();
        // Iterate through each character in string s
        for (int i = 0; i < n; i++) {
            // Store the index of each character in string s in the map s1
            s1.put(s.charAt(i), i);
            // Store the index of each character in string t in the map t1
            t1.put(t.charAt(i), i);
        }
        // Initialize a variable to store the permutation difference
        int ans = 0;
        // Iterate through the characters and their indices in string s
        for (Map.Entry<Character, Integer> entry : s1.entrySet()) {
            char c = entry.getKey();
            int index = entry.getValue();
            // Calculate the absolute difference between the index of the character in string s and its index in string t
            // Add this absolute difference to the answer
            ans += Math.abs(index - t1.get(c));
        }
        // Return the final permutation difference
        return ans;
    }
}


```
