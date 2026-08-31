# Greedy + Easy Implementation, C++ ✅✅

**Author:** Deepak_5910
**Votes:** 8
**Link:** [https://leetcode.com/problems/avoid-flood-in-the-city/solutions/3743367/](https://leetcode.com/problems/avoid-flood-in-the-city/solutions/3743367/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The approach is simple, **we'll assign dry days to the lake that rained most recently (2 times)**.
**For Example-1:- Rains[] = [1,2,0,3,2,1]** Here dry day (2nd day) will be assigned to Lake-2 as it is the first lake where it rained second time.

**For eg-1:- rain[] = [1,2,0,3,1,4]** Here the dry day (2nd day) will be assigned to lake-1 as it is the first lake where it rained second time.

**Note:-**
try to implement this approach yourself... (**use list or deque to store dry day position**) if you fail to implement this **please read the code and if it helps you Upvote me please....**


# Complexity
- Time complexity:O(N*M) 
- here M = Number of Dry Day.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> avoidFlood(vector<int>& r) {
        list<int> zero_pos;
        int n =  r.size();
        vector<int> ans(n,-1);
        unordered_map<int,int> freq;

        for(int i = 0;i<n;i++)
        {
            if(r[i]==0)
            zero_pos.push_back(i);
            else
            {
                if(freq.find(r[i])==freq.end())
                freq[r[i]]  = i;
                else
                {
                    vector<int> tmp;
                    while(zero_pos.size()>0 && zero_pos.front()<freq[r[i]])
                    {
                        tmp.push_back(zero_pos.front());
                        zero_pos.pop_front();
                    }
                    if(zero_pos.size()==0) return {};
                    else
                    {
                        ans[zero_pos.front()] = r[i];
                        zero_pos.pop_front();
                        freq[r[i]] = i;
                        for(int j = tmp.size()-1;j>=0;j--) zero_pos.push_front(tmp[j]);
                    }
                }
            }
        }
        while(!zero_pos.empty())
        {
            ans[zero_pos.front()] = 1;
            zero_pos.pop_front();
        }
        return ans;
        
    }
};
```
![upvote.jpg](./images/0.jpeg)
