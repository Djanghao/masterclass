# C++ | Maths | Beginner Friendly | Easy Explanation with Intution | Map

**Author:** SubratYeeshu
**Votes:** 7
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/3029525/](https://leetcode.com/problems/perfect-rectangle/solutions/3029525/)

---

```cpp
class Solution {
public:
    /*
        The intution to solve this question is that storing the points in a map, the bottom left point and top right is incremented and bottom right 
		and top left is decremented which as whole cancels the inner points. If the absolute sum of all the points comes out to be 4 the return true
            
        P[0][3]       P[2][3]
            ---------
            |       |
            |       |   
            |       |
            ---------
        P[0][1]       P[2][1]
    */
    bool isRectangleCover(vector<vector<int>>& Pts) {
        map<pair<int, int>, int> mp;
        int count = 0;
        for(auto P : Pts){
            mp[{P[0], P[1]}]++;
            mp[{P[2], P[3]}]++;
            mp[{P[0], P[3]}]--;
            mp[{P[2], P[1]}]--;
        }
        for(auto itr : mp)count += abs(itr.second);
        return count == 4;
    }
};
```