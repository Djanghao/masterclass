# C++ TWO-LINES-ONLY! SUPER Simple Solution

**Author:** YehudisK
**Votes:** 8
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/1087771/](https://leetcode.com/problems/distribute-candies/solutions/1087771/)

---

```
class Solution {
public:
    int distributeCandies(vector<int>& candies) {
        int types_num = set<int>(candies.begin(), candies.end()).size();
        return types_num > candies.size()/2 ? candies.size()/2 : types_num;
    }
};
```
**LIKE IT? PLEASE UPVOTE...**