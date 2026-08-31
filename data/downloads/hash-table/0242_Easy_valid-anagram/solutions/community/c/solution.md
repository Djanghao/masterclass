# Very Easy || 100% || Fully Explained || C++, Java, Python, JavaScript, Python3

**Author:** PratikSen07
**Votes:** 157
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/2500985/](https://leetcode.com/problems/valid-anagram/solutions/2500985/)

---

# **Java Solution:**
```
// If two strings are anagrams then the frequency of every char in both of the strings are same.
class Solution {
    public boolean isAnagram(String s, String t) {
        // Base case: if the two strings are empty...
        if(s == null || t == null) return false;
        // In case of different length of those two string...
        if(s.length() != t.length()) return false;
        // To count freq we make an array of size 26...
        int[] counter = new int[26];
        // Traverse all elements through a loop...
        for(int idx = 0; idx < s.length(); idx++){
            counter[s.charAt(idx)-'a']++;
            counter[t.charAt(idx)-'a']--;
        }
        // Above iteration provides us with count array having all values to zero then we can say we found an anagram.
        // Every element of count has to be equal to 0.
        // If it is greater than 0 it means s has a character whose occurrence is greater than its occurrence in t.
        // And if its less than 0 then, s has a character whose occurrence is smaller than its occurrence in t.
        for(int idx: counter){
            if(idx != 0)
                return false;
        }
        return true;
    }
}
```

# **C++ Solution:**
```
// If two strings are anagrams then the frequency of every char in both of the strings are same.
class Solution {
public:
    bool isAnagram(string s, string t) {
        // In case of different length of thpse two strings...
        if(s.length() != t.length()) return false;
        // Count the freq of every character in s & t...
        vector<int> counter1(26,0), counter2(26,0);
        // Traverse through the loop...
        for(int idx = 0; idx < s.length(); idx++) {
            counter1[s[idx]-'a']++;
            counter2[t[idx]-'a']++;
        }
        // Compare freq1[i] and freq2[i] for every index i from 0 to 26...
        for(int idx = 0; idx < 26; idx++) {
            // If they are different, return false...
            if(counter1[idx] != counter2[idx]) return false;
        }
        return true;        // Otherwise, return true...

    }
};
```

# **Python/Python3 Solution:**
```
class Solution(object):
    def isAnagram(self, s, t):
        # In case of different length of thpse two strings...
        if len(s) != len(t):
            return False
        for idx in set(s):
            # Compare s.count(l) and t.count(l) for every index i from 0 to 26...
            # If they are different, return false...
            if s.count(idx) != t.count(idx):
                return False
        return True     # Otherwise, return true...
```
                    
# **JavaScript Solution:**
```
var isAnagram = function(s, t) {
    // To count freq we make an array of size 26...
        const counter = new Array(26).fill(0);
        // Traverse all elements through a loop...
        for(let idx = 0; idx < s.length; idx++){
            counter[s.charCodeAt(idx)-97]++;
        }
        for(let idx = 0; idx < t.length; idx++){
            counter[t.charCodeAt(idx)-97]--;
        }
        // Above iteration provides us with count array having all values to zero then we can say we found an anagram.
        // Every element of count has to be equal to 0.
        // If it is greater than 0 it means s has a character whose occurrence is greater than its occurrence in t.
        // And if its less than 0 then, s has a character whose occurrence is smaller than its occurrence in t.
        for (let idx = 0; idx < 26; idx++) {
            if(counter[idx] != 0)
                return false;
        }
        return true;
};
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**