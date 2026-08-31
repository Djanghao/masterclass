# c++,python,javascript solution using binary search

**Author:** dilipsuthar60
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2360060/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2360060/)

---

c++
```
class Solution {
public:
    int maximumGroups(vector<int>& grades) {
        int len=grades.size();
        int l=0;
        int r=1e9;
        int ans=-1;
        while(l<=r)
        {
            int mid=(l+r)>>1;
            if(1ll*mid*(mid+1)/2<=len)
            {
                ans=mid;
                l=mid+1;
            }
            else
            {
                r=mid-1;
            }
        }
        return ans;
    }
};
```

python
```
class Solution:
    def maximumGroups(self, grades: List[int]) -> int:
        l,r=0,10**9;
        ans=-1
        while l<=r:
            mid=(l+r)//2
            if mid*(mid+1)/2<=len(grades):
                ans=mid
                l=mid+1
            else:
                r=mid-1
        return ans  
```

javascript
```
var maximumGroups = function(grades) {
    let len=grades.length;
    let l=0;
    let r=1e9;
    let ans=-1;
    while(l<=r){
        let mid=(l+r)>>1;
        if(mid*(mid+1)/2<=len){
            ans=mid;
            l=mid+1;
        }
        else{
            r=mid-1;
        }
    }
    return ans;
};
```