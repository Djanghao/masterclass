# faster than 97.83% [C++]

**Author:** rajat_gupta_
**Votes:** 101
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/780188/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/780188/)

---

```
class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        unordered_set<int> set;
        for(int i=0;i<arr.size();i++){
            if(set.count(2*arr[i])>0 || ((arr[i]%2==0) && set.count(arr[i]/2)>0))
                return true;
            set.insert(arr[i]);
        }
        return false;
    }
};
```
		
**Feel free to ask any question in the comment section.
If you like this solution, do UPVOTE.
Happy Coding :)**
		