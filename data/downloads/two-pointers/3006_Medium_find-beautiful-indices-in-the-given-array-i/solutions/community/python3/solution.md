# ✅🔥THE BEST EXPLANATION🔥✅

**Author:** harshal2024
**Votes:** 42
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/4562037/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/4562037/)

---

---
# PLEASE UPVOTE IF YOU LIKE IT \u2705

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks to find beautiful indices in a given string s. An index i is beautiful if, when considering a substring of s starting at index i and having the length of string a, there exists another substring starting at some index j (with the length of string b), such that the substrings match and the absolute difference between i and j is less than or equal to k.

---


# Approach
<!-- Describe your approach to solving the problem. -->
Initialize three vectors: ans to store the beautiful indices, indices_a to store the starting indices of occurrences of string a in s, and indices_b to store the starting indices of occurrences of string b in s.

Iterate through the string s to find the starting indices of occurrences of string a and store them in the vector indices_a.

Similarly, iterate through the string s to find the starting indices of occurrences of string b and store them in the vector indices_b.

Iterate through the indices in indices_a and indices_b. For each pair of indices, check if the absolute difference between them is less than or equal to k. If true, add the index from indices_a to the ans vector.

Sort the ans vector in ascending order.

Return the ans vector as the final result.

This approach ensures that beautiful indices are found by checking the conditions specified in the problem, and the final result is sorted for the required output format.

---

![download.jpeg](./images/0.jpeg)

---
# Code

---


## **C++**
```
class Solution {
public:
    vector<int> beautifulIndices(string s, string a, string b, int k) {
        // Vector to store the beautiful indices
        vector<int> ans, indices_a, indices_b;
        
        // Lengths of strings
        int x = s.size(), y = a.size(), z = b.size();
        
        // Step 2: Find indices of occurrences of string 'a'
        for (int i = 0; i <= x - y; i++) {
            if (s.substr(i, y) == a) {
                indices_a.push_back(i);
            }
        }
        
        // Step 3: Find indices of occurrences of string 'b'
        for (int j = 0; j <= x - z; j++) {
            if (s.substr(j, z) == b) {
                indices_b.push_back(j);
            }
        }
        
        // Step 4: Check conditions and add beautiful indices to 'ans'
        for (int i = 0; i < indices_a.size(); i++) {
            for (int j = 0; j < indices_b.size(); j++) {
                // Check if substrings match and absolute difference <= k
                if (abs(indices_a[i] - indices_b[j]) <= k) {
                    ans.push_back(indices_a[i]);
                    break;
                }
            }
        }
        
        // Step 5: Sort the beautiful indices in ascending order
        sort(ans.begin(), ans.end());
        
        // Step 6: Return the final result
        return ans;
    }
};

```

---


### **Python3**
```
class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
        # List to store the beautiful indices
        ans = []
        # Lists to store starting indices of occurrences of strings 'a' and 'b'
        indices_a, indices_b = [], []
        
        # Step 2: Find indices of occurrences of string 'a'
        for i in range(len(s) - len(a) + 1):
            if s[i:i+len(a)] == a:
                indices_a.append(i)
        
        # Step 3: Find indices of occurrences of string 'b'
        for j in range(len(s) - len(b) + 1):
            if s[j:j+len(b)] == b:
                indices_b.append(j)
        
        # Step 4: Check conditions and add beautiful indices to 'ans'
        for i in indices_a:
            for j in indices_b:
                # Check if substrings match and absolute difference <= k
                if abs(i - j) <= k:
                    ans.append(i)
                    break
        
        # Step 5: Sort the beautiful indices in ascending order
        ans.sort()
        
        # Step 6: Return the final result
        return ans


```

---


### **Java**
```
public class Solution {
    public List<Integer> beautifulIndices(String s, String a, String b, int k) {
        // List to store the beautiful indices
        List<Integer> ans = new ArrayList<>();
        // Lists to store starting indices of occurrences of strings 'a' and 'b'
        List<Integer> indices_a = new ArrayList<>();
        List<Integer> indices_b = new ArrayList<>();

        // Step 2: Find indices of occurrences of string 'a'
        for (int i = 0; i <= s.length() - a.length(); i++) {
            if (s.substring(i, i + a.length()).equals(a)) {
                indices_a.add(i);
            }
        }

        // Step 3: Find indices of occurrences of string 'b'
        for (int j = 0; j <= s.length() - b.length(); j++) {
            if (s.substring(j, j + b.length()).equals(b)) {
                indices_b.add(j);
            }
        }

        // Step 4: Check conditions and add beautiful indices to 'ans'
        for (int i : indices_a) {
            for (int j : indices_b) {
                // Check if substrings match and absolute difference <= k
                if (Math.abs(i - j) <= k) {
                    ans.add(i);
                    break;
                }
            }
        }

        // Step 5: Sort the beautiful indices in ascending order
        ans.sort(null);

        // Step 6: Return the final result
        return ans;
    }
}

```
---

