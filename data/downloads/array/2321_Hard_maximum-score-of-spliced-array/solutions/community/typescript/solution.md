# max(sum1+max_dif21, sum2+max_dif12)

**Author:** torocholazzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2198723/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2198723/)

---

The answer is between:
1. Sum of nums1 Array + maximum difference of subarray between nums2 and nums1    or
2. Sum of nums2 Array + maximum difference of subarray between nums1 and nums2 

**Python3**
```
class Solution:
    def maximumsSplicedArray(self, nums1: List[int], nums2: List[int]) -> int:
        dif21, maxDif21, dif12, maxDif12 = 0, 0, 0, 0
        
        for i in range(len(nums1)):
            delta = nums2[i] - nums1[i]
            dif21 = max(delta, dif21 + delta)
            dif12 = max(-delta, dif12 - delta)
            maxDif21 = max(dif21, maxDif21)
            maxDif12 = max(dif12, maxDif12)
                        
        return max(sum(nums1)+maxDif21, sum(nums2)+maxDif12)
```

**C++**
```
class Solution {
public:
    int maximumsSplicedArray(vector<int>& nums1, vector<int>& nums2) {
        int sum1 = 0, 
            sum2 = 0, 
            dif21 = 0, 
            maxDif21 = 0, 
            dif12 = 0, 
            maxDif12 = 0;
        
        for(int i=0; i<nums1.size(); i++){
            sum1 += nums1[i];
            sum2 += nums2[i];
            int delta = nums2[i] - nums1[i];
            dif21 = max(delta, dif21 + delta);
            dif12 = max(-delta, dif12 - delta);
            maxDif21 = max(dif21, maxDif21);
            maxDif12 = max(dif12, maxDif12);
        }
        
        return max(sum1+maxDif21, sum2+maxDif12);
    }
};
```

**Go**
```
func maximumsSplicedArray(nums1 []int, nums2 []int) int {
    sum1, sum2, dif21, maxDif21, dif12, maxDif12 := 0, 0, 0, 0, 0, 0
    
    for i:=0; i<len(nums1); i++ {
        sum1 += nums1[i]
        sum2 += nums2[i]
        delta := nums2[i] - nums1[i]
        dif21 = max(delta, dif21 + delta)
        dif12 = max(-delta, dif12 - delta)
        maxDif21 = max(dif21, maxDif21)
        maxDif12 = max(dif12, maxDif12)
    }
        
    return max(sum1+maxDif21, sum2+maxDif12)
}

func max(a, b int) int {
    if a>b{
        return a
    }
    return b
}
```

**Js | Ts**
```
function maximumsSplicedArray(nums1: number[], nums2: number[]): number {
    let sum1 = 0, 
        sum2 = 0, 
        dif21 = 0, 
        maxDif21 = 0, 
        dif12 = 0, 
        maxDif12 = 0;
    
     for(let i=0; i<nums1.length; i++){
        sum1 += nums1[i];
        sum2 += nums2[i];
        const delta = nums2[i] - nums1[i];
        dif21 = Math.max(delta, dif21 + delta);
        dif12 = Math.max(-delta, dif12 - delta);
        maxDif21 = Math.max(dif21, maxDif21);
        maxDif12 = Math.max(dif12, maxDif12);
     }

    return Math.max(sum1+maxDif21, sum2+maxDif12);
};
```

**C++ Brute Force (prefix + sliding window) -> TLE**
```
class Solution {
public:
    int maximumsSplicedArray(vector<int>& nums1, vector<int>& nums2) {
        int sz = nums1.size();
        vector<int> pre1{0, nums1[0]};
        vector<int> pre2{0, nums2[0]};
        for(int i=1; i<nums1.size(); i++){
            pre1.push_back(pre1[i] + nums1[i]);
            pre2.push_back(pre2[i] + nums2[i]);
        }
        int res = max(pre1[sz], pre2[sz]);
        
        for(int r=0; r<=sz; r++){
            for(int l=0; l<r; l++){
                if(r-l == sz) continue;
                int w1 = (pre1[r]-pre1[l]);
                int w2 = (pre2[r]-pre2[l]);
                if((w1 - w2) > 0){
                    res = max(w1 + pre2[sz] - w2, res);
                }else{
                    res = max(w2 + pre1[sz] - w1, res);
                }
            }
        }
        return res;
    }
};
```