# Simple C++ Greedy Sort solution

**Author:** AnkurHaritosh
**Votes:** 11
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/894463/](https://leetcode.com/problems/campus-bikes/solutions/894463/)

---

```
class Solution {
public:
    struct node{
        int dist, worker, bike;   
    };
    
    static bool myfunc(node& a, node& b){
        if(a.dist != b.dist)
            return a.dist < b.dist;
        else{
            if(a.worker != b.worker)
                return a.worker < b.worker;
            else
                return a.bike < b.bike;
        }
    }
    
    vector<int> assignBikes(vector<vector<int>>& workers, vector<vector<int>>& bikes) {
        vector<node> nodes;
        int m=workers.size(), n=bikes.size();
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                int dist = abs(workers[i][1] - bikes[j][1]) + abs(workers[i][0] - bikes[j][0]);
                node cur = {dist, i, j};
                nodes.push_back(cur);
            }
        }
        
        sort(nodes.begin(), nodes.end(), myfunc);
        
        vector<int> result(m, -1);
        unordered_set<int> marked;
        
        for(int i=0; i<nodes.size(); i++){
            if(result[nodes[i].worker] == -1 && marked.find(nodes[i].bike) == marked.end()){
                result[nodes[i].worker] = nodes[i].bike;
                marked.insert(nodes[i].bike);
            }
        }
        
        return result;
    }
};

/*

Algorithm Outline:
1. node with dist, worker, bike
2. sort based on dist
3. store worker, bike in vector & bike in ht as marked
4. return vector

*/
I appreciate your upvote !!