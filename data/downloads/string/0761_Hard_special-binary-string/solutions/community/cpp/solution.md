# 12-liner readable clean C++ (with explanation and comments)

**Author:** zzg_zzm
**Votes:** 28
**Link:** [https://leetcode.com/problems/special-binary-string/solutions/113213/](https://leetcode.com/problems/special-binary-string/solutions/113213/)

---

This solution is inspired by @lee215. Here is my key points on why it works (they can all be derived from the definition of *special string*):
1. Remove a special string prefix from a special string (*if possible*), the rest must a special string.
   *(This implies that a special string can be split into one or more special substrings)*
1. A *non-splitable* special string must start with `'1'` and end with `'0'`.
1. Remove the leading `'1'` and ending `'0'` from a *non-splitable* special string, the rest must be a special string.
   *(this implies that we can recursively arrange on non-splitable special string to get largest string)*

*These properties shouldn't be hard to prove. But please let me know if you see any of them is non-trivial.*

So the algorithm will be straightforward:
1. Split given special string `s` into special substrings `specials`.
1. Convert each special substring `special` recursively to largest lexicographical string.
1. Sort all maximized special substrings `specials` in greater lexicographical order.
1. Join all special substrings `specials` to form the final result `res`.

```cpp
    string makeLargestSpecial(string s) {
        // 1. split s into special substrings
        vector<string> specials; 
        int cnt = 0;
        for (char c : s) {
            if (cnt==0) specials.push_back("");
            c=='1'? ++cnt : --cnt;
            specials.back() += c;            
        }

        // 2. recursively convert each "special" to largest special string
        for (auto& special : specials)
            special = '1' + makeLargestSpecial(special.substr(1, special.size()-2)) + '0';
        
        // 3. sort special substrings in greater lexicographic order
        sort(specials.begin(), specials.end(), greater<string>());

        // 4. join to get largest lexicographic special string
        string res;
        for (auto& special : specials) res += special;
        return res;
    }
```