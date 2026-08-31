# [C++] | Greedy using multiset | Explained

**Author:** divyanshu1
**Votes:** 33
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/1125188/](https://leetcode.com/problems/advantage-shuffle/solutions/1125188/)

---

Store all elements of array A in multiset.
For each element *b* of array B, we find the first greater element than b in array A and push it in vector *v* and  if no such element is present then we push the smallest element of array A to vector *v* and remove it from A.



**Time Complexity: O(nlogn)**
*code:*

```
class Solution {
public:
    vector<int> advantageCount(vector<int>& a, vector<int>& b){
        multiset<int> s;
        vector<int> v;
        for(int i=0;i<a.size();i++){
            s.insert(a[i]);
        }
        for(int i=0;i<b.size();i++){
            auto it = s.upper_bound(b[i]);
            if(it!=s.end()){
                v.push_back(*(it));
                s.erase(it);
            }
            else{
                v.push_back(*(s.begin()));
                s.erase(s.begin());
            }
        }
        return v;
    }
};
```