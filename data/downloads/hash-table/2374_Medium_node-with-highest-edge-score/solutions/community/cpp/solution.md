# ✅ C++ | Easy | explanation in comments| Finding in-degree in graph

**Author:** avaneeshYadav
**Votes:** 15
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/2422406/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/2422406/)

---

In simple language. **Question is about finding a node having maximum in-degree in given graph.**
*In-Degree for a node is number of incoming edges towards a node.*


**The Logic behind approach  : )**
* We know that if we are at index 'i' in edges array and say it has a value 'val' at this index. Then this means there is a edge from node named 'i' to node named 'val'.
* This also means node 'i' contributes to in-degree of node 'val' by one.
* So if edges array is like say [val,val,val]. This means in-degree of node named val is 3. Bcoz there are 3 edges coming from nodes 0,1,2 to some node 'val'.

**The approach  : )**
1. So count in-degree of each node and store it in a seperate array (say inDegree) which is of size = n. (where n is total no. of nodes)
2. Say value at index 'i' of inDegree array is 'b'. That means node 'i' has in-degree value 'b'.
2. Traverse this inDegree array to get the max in-degree value of all the nodes.
3. While checking for the max value in inDegree array also keep track of index where we are getting this max value.
4. Finally our index where we got the max in-degree value is our required node with maximum in-degree.
5. Happily return that found index **: )**

```
class Solution {
public:
    int edgeScore(vector<int>& edges) {
        
        int n = edges.size();
        
        // This array will store in-degree for each node.
        vector<long long> inDegree(n,0);
        
        // This variable will store max in-degree number. It means max of all the values in 'inDegree' vector.
        long long maxVal = LONG_MIN;
        
        
        // This will store index of max value in 'inDegree' vector. This index will correspond to our required node with maximum in-degree.
        int minIndx = -1;
        
        
        // Traverse and fill the 'inDegree' vector.
        for(int i=0;i<edges.size();i++)
            inDegree[edges[i]] += i;
        
        
        
        // Traversed our 'inDegree' vector to get max value (max in-degree) in array and keep record of the index where we get that max in-degree value.
        for(int i=0;i<n;i++)
        {
            if(maxVal < inDegree[i])
            {
                maxVal = inDegree[i];
                minIndx = i;
            }
                
        }
        
        // Happily return the index of maximum in-degree. That is our node with maximum in-degree.
        return minIndx;
    }
};
```

**Happy coding : )**