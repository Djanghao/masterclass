# C++ || 2 Approaches || Easy to understand

**Author:** Anonymous_Kumar
**Votes:** 20
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/767338/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/767338/)

---

# TIME LIMIT EXCEEDED
```
class Solution {
public:
    int numEquivDominoPairs(vector<vector<int>>& d) {
        int result = 0;
        for(int i = 0; i<d.size();i++){
            for(int j = i+1;j<d.size();j++){
                if((d[i][0] == d[j][0] && d[i][1] == d[j][1]) || (d[i][0] == d[j][1] && d[i][1] == d[j][0])){
                    result++;
                }
            }
        }
        return result;
    }
};
```

***Runtime: 104 ms, faster than 80.73% of C++ online submissions for Number of Equivalent Domino Pairs.
Memory Usage: 22 MB, less than 96.88% of C++ online submissions for Number of Equivalent Domino Pairs.***
```
class Solution {
public:
    int numEquivDominoPairs(vector<vector<int>>& dominoes) {
        map<pair<int,int>,int> seen;
        int result = 0;
        for(auto& v:dominoes){
            if(v[0] > v[1]){
                swap(v[0], v[1]);
            }
            seen[make_pair(v[0],v[1])]++;
        }
        for(auto& [key, value] : seen){
            result += value*(value-1)/2;
        }
        return result;
    }
};
```

***Runtime: 100 ms, faster than 88.74% of C++ online submissions for Number of Equivalent Domino Pairs.
Memory Usage: 22.1 MB, less than 90.63% of C++ online submissions for Number of Equivalent Domino Pairs.***
```
class Solution {
public:
    int numEquivDominoPairs(vector<vector<int>>& dominoes) {
        map<pair<int,int>,int> seen;
        int result = 0;
        for(auto& v:dominoes){
            if(v[0] > v[1]){
                swap(v[0], v[1]);
            }
            result += seen[make_pair(v[0],v[1])]++;
        }
        return result;
    }
};
```