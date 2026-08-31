# EASY SOLUTION || CLEAN CODE

**Author:** udittyagi07
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/5124153/](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/5124153/)

---


# Code
```
class Solution {
public:
    bool check(vector<int>& tasks, vector<int>& workers, int pills, int strength,int index)
    {
        multiset<int> st;
        for(auto it:workers)
        {
            st.insert(it);
        }
        for(int i=index-1;i>=0;i--)
        {
            auto it=st.lower_bound(tasks[i]);
            if(it!=st.end())
            {
                st.erase(it);
            }
            else
            {
                if(pills<=0)
                {
                    return false;
                }
                else
                {
                    it=st.lower_bound(tasks[i]-strength);
                    if(it!=st.end())
                    {
                        st.erase(it);
                        pills--;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    int maxTaskAssign(vector<int>& tasks, vector<int>& workers, int pills, int strength) {
        sort(tasks.begin(),tasks.end());
        sort(workers.begin(),workers.end());
        int low=0;
        int high=min(workers.size(),tasks.size());
        while(low<high)
        {
            int mid=(low+high+1)/2;
            if(check(tasks,workers,pills,strength,mid)==true)
            {
                low=mid;
            }
            else
            {
                high=mid-1;
            }
        }
        return high;
    }
};

```