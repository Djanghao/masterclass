# c++ solution

**Author:** dilipsuthar60
**Votes:** 32
**Link:** [https://leetcode.com/problems/detect-squares/solutions/1480590/](https://leetcode.com/problems/detect-squares/solutions/1480590/)

---

```
class DetectSquares {
public:
    map<pair<int,int>,int>mp;
    DetectSquares() 
    {
        
    }
    void add(vector<int> point) 
    {
        mp[{point[0],point[1]}]++;
    }
    int count(vector<int> point) 
    {
        int count=0;
        int x=point[0];
        int y=point[1];
        for(auto t:mp)
        {
            pair<int,int>it=t.first;
            if(it.first!=x&&it.second!=y&&(abs(it.first-x)==abs(it.second-y)))
            {
                int f1=mp[{it.first,it.second}];
                int f2=mp[{it.first,y}];
                int f3=mp[{x,it.second}];
                count+=f1*f2*f3;
            }
        }
        return count;
    }
};

```