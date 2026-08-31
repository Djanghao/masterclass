# 2 Easy Solutions | | C++

**Author:** khud_gye_guru
**Votes:** 6
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/2322253/](https://leetcode.com/problems/best-poker-hand/solutions/2322253/)

---

***For Flush we need to check is all elements in suit array is same or not***
***For Three of a kind check freq greater then 2 and not flush***
***if freq = 2 pair and if freq = 1 High card***
# MAP
```
class Solution {
public:
    string bestHand(vector<int>& ranks, vector<char>& suits) {
        map<int, int> m1;
        int mn = INT_MIN;
        int all_same = count(begin(suits), end(suits), suits[0]);
        int n = ranks.size();
        for (int i = 0; i < n; i++) {
            m1[ranks[i]]++;
            mn = max(mn, m1[ranks[i]]);
        }
        if (all_same == n)     return "Flush";
        if (mn >= 3)      return "Three of a Kind";
        if (mn == 2)      return "Pair";
        return "High Card";
    }
};
```

# ARRAY
```
class Solution {
public:
    string bestHand(vector<int>& ranks, vector<char>& suits) {
        int n = ranks.size();
        int all_same = count(begin(suits), end(suits), suits[0]);       
        vector<int> v1(14, 0);
        for(int i = 0; i < n; i++)    v1[ranks[i]]++;
        int maxi = *max_element(begin(v1), end(v1));
        if (all_same == n)     return "Flush";
        if (maxi >= 3)      return "Three of a Kind";
        if (maxi == 2)      return "Pair";
        return "High Card";
    }
};
```
