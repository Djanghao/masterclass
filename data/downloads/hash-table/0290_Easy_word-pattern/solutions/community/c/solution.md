# [C++] Simple Intuitive Solution | 0ms

**Author:** Mythri_Kaulwar
**Votes:** 89
**Link:** [https://leetcode.com/problems/word-pattern/solutions/1695870/](https://leetcode.com/problems/word-pattern/solutions/1695870/)

---

**APPROACH :**

* Use two maps, one maps the letters of ```pattern``` to ```index+1``` & the other maps the words in ```s``` to ```index+1```.
* Use ```istringstream``` to extract words from ```s``` & ```i``` to traverse ```pattern```.
* Return true if the values of both the keys ( m1[pattern[i]] & m2[word] ) are equal && i reaches ```pattern.size()``` & stops. (ie; No. of words in ```s``` = ```pattern.size()``` ), otherwise false.

**Time Complexity :** O(m) - m = No. of words in ```s```.

**Space Complexity :** O(m)

**Code :**
```
class Solution {
public:
    bool wordPattern(string pattern, string s) {
        unordered_map<char, int> p2i;
        unordered_map<string, int> w2i;
        
        istringstream in(s); string word;
        int i = 0, n = pattern.size();

        
        for(word; in>>word; i++){
            if(i==n || p2i[pattern[i]] != w2i[word]) return false; //If it reaches end before all the words in string 's' are traversed || if values of keys : pattern[i] & word don't match return false
            
            p2i[pattern[i]] = w2i[word] = i+1; //Otherwise map to both to a value i+1
        }
        return i==n; //both the lengths should be equal
    }
};
```

**Do upvote if you like my solution & explanation :)**

