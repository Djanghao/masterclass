# [C++] Accepted Solution Easy to Understand using Map

**Author:** kpratyush12345
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/1458341/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/1458341/)

---

So basically we have to create a vector storing the ratio of the rectangles vector then we have to add those ratio to a map and then we have the frequency of it. Now we itirate over the map and for every frequency we calculate the combinations. eg. for 4 it will be 4*(4-1)/2 = 6 and for 1 it is 0. Finally we add the the combinations to our count.
```
class Solution {
public:
    long long interchangeableRectangles(vector<vector<int>>& rectangles) {
        int n = rectangles.size();
        unordered_map<double,int> mp;
        for(int i = 0;i<n;i++){
            double ratio = rectangles[i][0]/(double)rectangles[i][1];
            mp[ratio]++;
        }
        long long count = 0;
                
        for(auto i: mp){
            long long x = i.second;
            x = (x * (x-1))/2.0;
            count += x;
        }
        return count;
    }
};
```
**Upvote if you like it :)**