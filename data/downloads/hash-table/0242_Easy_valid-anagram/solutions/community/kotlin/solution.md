# Kotlin | C++ |  Python

**Author:** khud_gye_guru
**Votes:** 8
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/2343849/](https://leetcode.com/problems/valid-anagram/solutions/2343849/)

---

# Kotlin
```
class Solution {
    fun String.Sort() = String(toCharArray().apply{ sort() })
    fun isAnagram(s: String, t: String): Boolean {
        return t.Sort()==s.Sort()
    }
}
```
# C++
***Using Sort***
```
class Solution {
public:
    bool isAnagram(string s, string t) {
        sort(begin(s),end(s));
        sort(begin(t),end(t));
        return s==t;
    }
};
```
***Using Frequency array***
```
class Solution {
public:
    bool isAnagram(string s, string t) {
        vector<int> v1(26,0);
        int n = t.size(), m = s.size();
        if(n != m)      return false;
        for(int i = 0; i < n; i++){
            v1[s[i]-'a']++;
            v1[t[i]-'a']--;
        }
        return count(begin(v1),end(v1),0)==26;
    }
};
```
# Python
```
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s1 = ''.join(sorted(s))
        t1 = ''.join(sorted(t))
        return s1==t1
```