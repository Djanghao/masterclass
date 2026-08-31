# C++ || JAVA || Python >> Sort and Check

**Author:** khud_gye_guru
**Votes:** 15
**Link:** [https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/2874961/](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/2874961/)

---

# **C++**
```
class Solution {
public:
    long long dividePlayers(vector<int>& s) {
        sort(begin(s), end(s));
        long long ans = 0;
        long long set = s[0] + s[(int)s.size() - 1];
        int l = 0,  r = s.size() - 1;
        while(l<r){
            ll diff = s[l] + s[r];
            ans += s[l] * s[r];
            l++, r--;
            if(set != diff)     return -1;
        }
        return ans;
    }
};
```

# **JAVA**
```
class Solution {
    public long dividePlayers(int[] skill) {
        Arrays.sort(skill);
        int l = 0, r = skill.length - 1;
        long ans = 0;
        long set = skill[l] + skill[r];
        while ( l < r ){
            long diff = skill[l] + skill[r];
            ans += skill[l] * skill[r];
            l++; r--;
            if ( set != diff ) return -1;
        }
        return ans;
    }
}
```
# **Python**
```
class Solution:
    def dividePlayers(self, skill: List[int]) -> int:
        skill.sort()
        l, r = 0, len(skill)-1
        req, ans = skill[l] + skill[r], 0
        while l<r:
            diff = skill[l] + skill[r]
            ans = ans + skill[l] * skill[r]
            l, r = l + 1, r - 1
            if req != diff:
                return -1
        return ans
        
```