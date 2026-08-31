# C++ | 2 one liner Solution | find "ba" | Check if Sorted

**Author:** coderaky
**Votes:** 71
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1666486/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1666486/)

---

# C++ 

**Method 1:**

**Logic:** if at any point ``b`` comes before ``a`` then "ba" will come in string. So just check that string doesn't contain any "ba".

**Code**
```
bool checkString(string s) {
        return s.find("ba")==string::npos;
    }
```

**Method 2:**

**Logic:** Check if string is sorted or not.

**Code:**
```
bool checkString(string s) {
        return is_sorted(s.begin(),s.end());
    }
```

Please Upvote! if find helpful ,suggestion are welcomed :)
Find me on: https://coderaky.com