# C++ Solution - 2 Approaches - Recursion and Brute Force - Easy Understanding

**Author:** nipunrathore
**Votes:** 5
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/3161330/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/3161330/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

<!-- # Complexity -->
<!-- - Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int findFinalValue(vector<int>& nums, int original) {
        int ans = original ; 
        sort (nums.begin(), nums.end()) ;
        for (int i = 0 ; i < nums.size() ; i++)
        {
            if (ans == nums[i])
            {
                ans *= 2;
            }
        }
        return ans ; 
    }
};
```

# Code - 2 
```
class Solution {
public:
    int solve(vector<int> &nums, int ans)
    {
        sort (nums.begin(), nums.end()) ; 

        for (auto i : nums)
        {
            if (ans == i)
            {
                return solve (nums, ans*2);
            }
        }
        return ans ; 
    }

    int findFinalValue(vector<int>& nums, int original) {
        int ans = original ; 
        int result = solve (nums, ans) ; 

        return result ; 
    }
};
```

![815a317f-9cdf-46e2-a397-af8869dafa2e_1673498197.3721023.png](./images/0.png)
