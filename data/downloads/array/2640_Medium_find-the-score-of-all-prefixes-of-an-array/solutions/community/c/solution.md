# easy solution

**Author:** Prathmesh2003
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3519543/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3519543/)

---

# Intuition 
<!-- Describe your first thoughts on how to solve this problem. -->
Simply traverse the array
# Approach
<!-- Describe your approach to solving the problem. -->
keep track of max and sum as you go ahead
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

If you find it helpful then please upvote (thanks)
# Code
```
class Solution {
public:
    vector<long long> findPrefixScore(vector<int>& nums) {
       int n = nums.size();
       vector<long long> score;
       long long max = INT_MIN;
       long long sum = 0;
       for(int i=0;i<n;i++){
           if(nums[i]>max)max = nums[i];
           sum += max+nums[i];
           score.push_back(sum);
       }
       return score; 
    }
};
```