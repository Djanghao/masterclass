# C++ || JAVA || GO || Super Easy Solution

**Author:** tamim447
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/2655594/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/2655594/)

---

**C++ Solution:**
```
class Solution {
public:
    int minNumberOperations(vector<int>& target) {
        int cnt =0, prev = 0;
        
        for(int i=0; i<target.size(); i++) {
            if(target[i] > prev) {
                cnt+=(target[i]-prev);
            }
            prev = target[i];
        }
        return cnt;
    }
};
```

**Java Solution:**
```
class Solution {
    public int minNumberOperations(int[] target) {
        int cnt =0, prev = 0;
        
        for(int i=0; i<target.length; i++) {
            if(target[i] > prev) {
                cnt+=(target[i]-prev);
            }
            prev = target[i];
        }
        return cnt;
    }
}
```

**GO Solution:**
```
func minNumberOperations(target []int) int {
    cnt := 0
    prev := 0
    
    for i := 0; i<len(target); i++ {
        if target[i] > prev {
            cnt+=(target[i]-prev)
        }
        prev = target[i]
    }
    return cnt;
    
}
```