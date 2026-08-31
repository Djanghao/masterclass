# C++ Easy Solution using only One For loop and One If Condition

**Author:** _sxrthakk
**Votes:** 5
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5387329/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5387329/)

---

# Intuition
The intuition is to iterate through each word in the words array, extract its prefix of the same length as pref, and count how many of these prefixes match pref.

# Approach
**Initialization :** Start with a counter c initialized to zero.

**Iterate through Words :** Loop through each word in the words array.

**Check Prefix :**
- For each word, extract the substring from the beginning with the same length as pref.
- Compare this substring with pref.
- If they match, increment the counter c. 
 
**Return Result :**
- After checking all words, c will contain the number of strings that have pref as a prefix.
- Return c as the final result.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
public:
    int prefixCount(vector<string>& words, string pref) {
        int c=0;
        int n=pref.size();
        for(int i=0;i<words.size();i++){
            string a=words[i].substr(0,n);
            if(a==pref) c++;
        }
        return c;
    }
};
```