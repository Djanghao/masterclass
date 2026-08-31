# [C++] O(n) Two Pointers + Calculus for Local Extremum

**Author:** alexunxus
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/3230338/](https://leetcode.com/problems/sort-transformed-array/solutions/3230338/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Discuss the case separately
1. `a == 0`: the parabola regresses to a line. Discuss `b >= 0`(increasing trend) and `b < 0` separately.
2. `a > 0`: convex, the closer `nums[i]` to $\\frac{-b}{2a}$, it's transformed value is smaller 
3. `a < 0`: concave, the closer `nums[i]` to $\\frac{-b}{2a}$, it's transformed value is greater

# Approach
<!-- Describe your approach to solving the problem. -->
Can use two pointers starting from the element `r` that's $\\geq$ than $\\frac{-b}{2a}$ and the element `l` that's less than $\\frac{-b}{2a}$ and move `r` forward if `nums[r]` is closer to $\\frac{-b}{2a}$ other wise move `l` backward.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$

# Code
```
class Solution {
public:
    vector<int> sortTransformedArray(vector<int>& nums, int a, int b, int c) {
        auto f = [&a, &b, &c](int x){return a*x*x + b*x + c;};
        if (a == 0) {
            // if a == 0, then ax^2 + bx + c is a line
            // if b >= 0 the trend of f(x) is non-decreasing
            // otherwise we have to reverse the result for b < 0
            transform(begin(nums), end(nums), begin(nums), f);
            if (b >= 0) return move(nums);
            reverse(begin(nums), end(nums));
            return move(nums);    
        }
        vector<int> res;

        // the local extremum for f(x) happens at mid = -b/2a
        double mid = -0.5*b/a;
        
        // we will find the first index i that nums[i] >= mid 
        // and use two pointers to sort abs(nums[i] - mid) in non-decreasing order.
        // The farther nums[i] to mid, |f(nums[i])| is greater.
        int i = 0, n = nums.size();
        for (; i < n; ++i) {
            if (nums[i] >= mid) {break;}
        }
        int l = i-1, r = i;
        while (l >= 0 || r < n) {
            if (l < 0) {
                while (r < n) {res.push_back(nums[r++]);}
            } else if (r >= n) {
                while (l >= 0) {res.push_back(nums[l--]);}
            } else {
                if (abs(nums[l]-mid) > abs(nums[r]-mid)) {res.push_back(nums[r++]);}
                else {res.push_back(nums[l--]);}
            }
        }

        // transform the sorted array with f
        transform(begin(res), end(res), begin(res), f);
        
        // if a < 0(concave), then we have to reverse the transformed result
        if (a < 0) {
            std::reverse(begin(res), end(res));
        }

        return move(res);;
    }
};
```