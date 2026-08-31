# 8 Lines Simplest Solution | STL Set | Explained with Intution | C++

**Author:** AmanIITP
**Votes:** 111
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5583242/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5583242/)

---

class Solution {
public:
    
    /*
    Erase elements between ith Query Edge
    Because the elements in between the ith Query Edge will not be ever used in shortest path
    */
    void sol(set<int>& s, int l, int r) {
        auto it_start = s.lower_bound(l);
        auto it_end = s.upper_bound(r);
        s.erase(it_start, it_end);
    }
    
    /*
    OBSERVATION:-
    i)   The shortest distance is the total number of nodes - 1 always.
    ii)  After each query, the nodes which lies between ith Query Edge will disappear after ith Query
         0-1-2-3-4   ===> Now, Suppose Add edge (1,4)  ===> Then Shortest path will be 0-1-4 (or nodes 2 and 3 disappear)
    iii) To implement this, use a set and insert all elements between 0 to n-1 initially. At each query edge (l-r), remove elements from l+1 to r-1 in set
    
    TIME COMPLEXITY:- O(Qlogn + nlogn)
    SPACE COMPLEXITY:- O(n)
    */
    
    
    vector<int> shortestDistanceAfterQueries(int n, vector<vector<int>>& Q) {
        set<int>s;    
        for(int i=0;i<n;i++) s.insert(i);
        vector<int>ans;
        for(auto &i:Q){
            int x=i[0],y=i[1];
            sol(s,x+1,y-1);  //Nodes to be erased will l+1 to r-1 (Not l to r)
            ans.push_back(s.size()-1);
        }
        return ans;
        
            
    }
};