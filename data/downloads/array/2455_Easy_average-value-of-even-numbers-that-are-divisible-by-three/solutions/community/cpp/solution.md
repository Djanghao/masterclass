# Basic maths || CPP

**Author:** Ganesh_ag10
**Votes:** 3
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/5113206/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/5113206/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int averageValue(vector<int>& nums) {
        int sum=0;
        int count=0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]%6==0){
                count++;
                sum+=nums[i];
            }
        }
       if(count==0) return 0;
       return sum/count;

    }
};
```