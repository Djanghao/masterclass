# Two line C/C++/Java/Python/JavaScript/Ruby/Kotlin solution for beginners!!

**Author:** aero_coder
**Votes:** 3
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5251819/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5251819/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```C []
int appendCharacters(char* s, char* t) {
    int ind1 = 0;
    int lenS = strlen(s);
    int lenT = strlen(t);
    
    for(int i = 0; i < lenS; i++) {
        if(ind1 < lenT && s[i] == t[ind1]) {
            ind1++;
        }
    }
    
    return lenT - ind1;
}
```
```C++ []
class Solution {
public:
    int appendCharacters(const string &s,const string &t) {
        int ind1 = 0;
        for(int i = 0; i < (int)s.size(); i++)
        {
            if(ind1<t.size() && s[i]==t[ind1])ind1++;
        }
        return (int)t.size() - ind1;
    }
};
```
```javascript []
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let ind1 = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (ind1 < t.length && s[i] === t[ind1]) {
            ind1++;
        }
    }
    
    return t.length - ind1;
};
```
```python []
class Solution(object):
    def appendCharacters(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: int
        """
        ind1 = 0
        
        for i in range(len(s)):
            if ind1 < len(t) and s[i] == t[ind1]:
                ind1 += 1
        
        return len(t) - ind1
```
```ruby []
# @param {String} s
# @param {String} t
# @return {Integer}
def append_characters(s, t)
  ind1 = 0

  s.each_char do |char|
    if ind1 < t.length && char == t[ind1]
      ind1 += 1
    end
  end

  t.length - ind1
end
```
``` java []
class Solution {
    public int appendCharacters(String s, String t) {
        int ind1 = 0;

        for (int i = 0; i < s.length(); i++) {
            if (ind1 < t.length() && s.charAt(i) == t.charAt(ind1)) {
                ind1++;
            }
        }

        return t.length() - ind1;
    }
}
```
``` kotlin []
class Solution {
    fun appendCharacters(s: String, t: String): Int {
        var ind1 = 0

        for (i in s.indices) {
            if (ind1 < t.length && s[i] == t[ind1]) {
                ind1++
            }
        }

        return t.length - ind1
    }
}
```