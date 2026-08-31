# C++ | HashArray + prefix sum | O(N) | without sorting | EASY TO UNDERSTAND

**Author:** rohitzerofour
**Votes:** 1
**Link:** [https://leetcode.com/problems/happy-students/solutions/4054054/](https://leetcode.com/problems/happy-students/solutions/4054054/)

---

**Simple approach:**
1. counting the number of each element from 0 to n-1
2. then doing prefix sum of that
3. then just checking how many groups of elements we have where prefix[i] > i

```
class Solution {
public:
    int countWays(vector<int>& nums) {
        int n = nums.size();
        vector<int> hash(n, 0);
        for(auto it: nums) hash[it]++;
        for(int i = 1; i<n; i++) hash[i] += hash[i-1];
        int ans = 0;
        for(int i = 0; i<n; ){
            if(hash[i] > i){
                ans++;
                i++;
                while(i < n && hash[i] > i) i++;
            }else{
                i++;
            }
        }
        if(hash[0] == 0) ans++; //check if no 0 present then we can have one case where we select 0 students
        return ans;
    }
};
```