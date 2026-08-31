# Buddy Strings| java | c++ | kotlin | O(N)

**Author:** cygnus
**Votes:** 7
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/890967/](https://leetcode.com/problems/buddy-strings/solutions/890967/)

---

1. If the lengths are not equal, return false
2. If the two strings are not the same, there must be only two positions that the char are different and they can be swapped.
3. If the two strings are the same, we need to find a duplicate character. 

Note: 
1. For 3, if the string length is greater than **26**, it must be **true** and no need to check. 
2. I don't use set or list to reduce the unnecessary overhead
3. Adding a Kotlin solution.  I am kind of new to Kotlin and welcome to all suggestions. 

If you like it, please upvote it. Thanks.

**java**
```
class Solution {
    public boolean buddyStrings(String A, String B) {
        if (A.length() != B.length() || A.isEmpty()) return false;
        
        if (!A.equals(B))
        {
            int count = 0;
			// The value doesn't matter. If no initial value, the compiler will complain
            char first = 'a', second = 'a';
            for (int i = 0; i < A.length(); i++)
            {
                if (A.charAt(i) == B.charAt(i)) continue;
                if (count >= 2) return false;
                if (count == 0)
                {
                    first = A.charAt(i);
                    second = B.charAt(i);
                    count++;
                    continue;
                }
                if (A.charAt(i) != second || B.charAt(i) != first) return false;
                count++;
            }
            return count == 2;
        }

        // there must be at least one duplicated char if the length is greater than 26
        if (A.length() > 26) return true;
        int [] fre = new int[26];
        for (char c : A.toCharArray())
        {
            if (fre[c-'a'] == 1) return true;
            fre[c-'a']++;
        }
        return false;
    }
}
```

**c++**
```
class Solution {
public:
    bool buddyStrings(string A, string B) {
        if (A.size() != B.size() || A.empty()) return false;
        
        if (A != B)
        {
            int count = 0;
            char first = 'a', second = 'a';
            for (int i = 0; i < A.size(); i++)
            {
                if (A[i] == B[i]) continue;
                if (count >= 2) return false;
                if (count == 0)
                {
                    first = A[i];
                    second = B[i];
                    count++;
                    continue;
                }
                if (A[i] != second || B[i] != first) return false;
                count++;
            }
            return count == 2;
        }
        
        // there must be at least one duplicated char if the length is greater than 26
        if (A.size() > 26) return true;
        int freq[26] = {};
        for (auto c: A)
        {
            if (freq[c - 'a'] == 1) return true;
            freq[c - 'a'] = 1;
        }
        return false;
    }
};
```

**kotlin**
```
class Solution {
    fun buddyStrings(A: String, B: String): Boolean {
        if (A.length != B.length || A.isEmpty()) return false
        if (A != B)
        {
            var count = 0;
            var first = 'a'
            var second = 'a'
            for (i in A.indices)
            {
                if (A[i] == B[i]) continue;
                if (count >= 2) return false;
                if (count == 0)
                {
                    first = A[i];
                    second = B[i];
                    count++;
                    continue;
                }
                if (A[i] != second || B[i] != first) return false;
                count++;
            }
            return count == 2;
        }
        if (A.length > 26) return true;
        var fre = Array(26){0};
        for (i in A.indices)
        {
            if (fre[A[i]-'a'] == 1) return true;
            fre[A[i] - 'a']++;
        }
        return false;
    }
}
```