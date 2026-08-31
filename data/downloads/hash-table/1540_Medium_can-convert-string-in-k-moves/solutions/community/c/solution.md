# O(n) c++ simple solution with explanation

**Author:** CodingMission
**Votes:** 38
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/779932/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/779932/)

---

Basic idea is to convert str1 to str2 using less or equal to k iterations where in ith iteration you can choose **atmost** one character to shift **exactly** i places.

Intuition :
1. if string size is not equal, return false;
2. use a hashmap to check how many times the diff is same and keep using the iteration with the formula (26 *(num of occurreces of same diff) + diff;

For eg. "abc" -> "bcd", diff for a -> b is 1 and we can check hashmap for occurences of diff as following:


```hashMap = {....... {1 = 0}....}```
We can use iteration 1 in this case and we update the hashmap to the following to denote that 1 iteration has already been used.
```hashMap = {....... {1 = 1}....}```

Now to shift b -> c also we need 1 Iteration,which is already being used.
```hashMap = {....... {1 = 1}....}```

Since 1 iteration is already being used, we can use 26 + 1, and update hash map :
```hashMap = {....... {1 = 2}....}```
and we also keep track of the maximum iteration found so far.
...
...
and so on.

Finally if max iteration <= k return true.

Note: Please upvote if you find this useful, this motivates me to write more descriptive solutions

```
class Solution {
public:
    bool canConvertString(string s, string t, int k) {
        int m = s.length(), n = t.length(), count = 0;
        if (m != n) return false;
        unordered_map<int, int> mp;
        for (int i = 0; i < m; i++) {
            if (t[i] == s[i]) continue;
            int diff = t[i] - s[i] < 0 ? 26 + t[i] - s[i] : t[i] - s[i];
            if (mp.find(diff) == mp.end()) {
                count = max(count, diff);
            } else {
                count = max(count, (mp[diff] * 26) + diff);
            }
            mp[diff]++;
            if (count > k) return false;
        }
        return count <= k;
    }
    
}; 
```

More Concise solution

```
class Solution {
public:
    bool canConvertString(string s, string t, int k) {
        int m = s.length(), n = t.length(), count = 0;
        if (m != n) return false;
        unordered_map<int, int> mp;
        for (int i = 0; i < m; i++) {
            if (t[i] == s[i]) continue;
            int diff = t[i] - s[i] < 0 ? 26 + t[i] - s[i] : t[i] - s[i];
            count = max(count, (mp[diff] * 26) + diff);
            mp[diff]++;
            if (count > k) return false;
        }
        return count <= k;
    }
    
};