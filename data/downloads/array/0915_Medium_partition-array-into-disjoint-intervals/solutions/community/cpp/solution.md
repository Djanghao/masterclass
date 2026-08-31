# C++ Solution O(n)->time, O(1)->Space, Single Traversal

**Author:** burhan72
**Votes:** 19
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1150150/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1150150/)

---


```
class Solution {
public:
    int partitionDisjoint(vector<int>& a) {
        int minNum=a[0],maxNum=a[0];
        int index=0;
        for(int i=1;i<a.size();i++){
            if(a[i]<minNum){
                index=i;
                minNum=maxNum;
            }
            maxNum=max(a[i],maxNum);
        }
        return index+1;
    }
};
```