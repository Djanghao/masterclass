# C++ Clean code Explained

**Author:** DarshanAgarwal95
**Votes:** 82
**Link:** [https://leetcode.com/problems/binary-trees-with-factors/solutions/2399992/](https://leetcode.com/problems/binary-trees-with-factors/solutions/2399992/)

---

sort the array and use HashMap to record each Integer, and the number of trees with that Integer as root
(1) each integer A[i] will always have one tree with only itself
(2) if A[i] has divisor (a) in the map, and if A[i]/a also in the map then a can be the root of its left subtree, and A[i]/a can be the root of its right subtree;
the number of such tree is map.get(a) * map.get(A[i]/a)
(3) sum over the map




```
class Solution {
public:
     int mod = pow(10,9) + 7;
    int numFactoredBinaryTrees(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        unordered_map <int, long> rootWithCount;
        rootWithCount[arr[0]] = 1;
        for(int i = 1; i < arr.size(); i++){
            long count = 1;
            for(auto j : rootWithCount){
                int rootEle = j.first;
                if(arr[i] % rootEle == 0 && rootWithCount.find(arr[i] / rootEle) != rootWithCount.end()){
                    count += rootWithCount[rootEle] * rootWithCount[arr[i] / rootEle];
                    
                }
            }
            rootWithCount[arr[i]] = count;
        }
        int noOfTrees = 0;
        for(auto i : rootWithCount){
            noOfTrees = (noOfTrees + i.second) % mod;
        }
        return noOfTrees;
    }
};
```

TC: O(N^2)
SC: O(N)

**IF YOU LIKE MY SOLUTION THEN JUST PLEASE PLEASE UPVOTE IT**