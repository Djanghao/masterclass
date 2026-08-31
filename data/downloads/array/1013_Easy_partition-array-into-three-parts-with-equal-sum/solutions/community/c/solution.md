# Easy c++ solution

**Author:** jaffarjawed
**Votes:** 23
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/1075081/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/1075081/)

---

```

class Solution {
public:
    bool canThreePartsEqualSum(vector<int>& arr) {
        int summ = accumulate(arr.begin(), arr.end(), 0);
        int part = 0;
        int count = 0;
        if(summ % 3 == 0){
            
            for(int x : arr){
                
                part += x;
                
                if(part == (summ / 3)){
                    
                    count++;
                    part = 0;
                }
            }
        }
        return count >= 3;
    }
};
```