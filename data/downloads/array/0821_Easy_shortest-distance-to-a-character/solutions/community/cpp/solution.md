# ✅C++ solution || Simple || Easy-understanding

**Author:** ayushsenapati123
**Votes:** 21
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/2173687/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/2173687/)

---

**Explanation:**
* create two vectors :- `position` and `answer`.
* Traverse the string and collect all the position of given char using the `position` vector.
* Now traverse the string and find the shortest distance from the given char to all given positions.
* Keep pushing the distance to the `answer` vector and at last return it.
```
class Solution {
public:
    vector<int> shortestToChar(string s, char c) {
        vector<int> position;
        vector<int> answer;
        
        for(int i=0; i<s.size(); i++)
        {
            if(s[i]==c)
                position.push_back(i);
        }
        
        for(int i=0; i<s.size(); i++)
        {
            int shortest_dist = INT_MAX;
            for(int j=0; j<position.size(); j++)
            {
                shortest_dist = min(shortest_dist, abs(i-position[j]));
            }
            answer.push_back(shortest_dist);
        }
        
        return answer;
    }
};
```
**Please upvote if you find the solution useful, means a lot.**