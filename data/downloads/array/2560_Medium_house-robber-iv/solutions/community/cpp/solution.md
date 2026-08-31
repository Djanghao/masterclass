# Binary Search (C++) with Similar Problems

**Author:** Priyanshu_Chaudhary_
**Votes:** 91
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/3143741/](https://leetcode.com/problems/house-robber-iv/solutions/3143741/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**These question screams Binary Search**

This problem asks for **maximum-minimum** problem (thief has capability **maximum** of all houses robbed and we want to identify that way to make it as **minimum** as possible)

# Reason:
1) We want to find the minimum possible value and capability should be maximum of all selected.
2) if we try to think greedy way then we are done unless we define a limit **Mid** such that no element choosen be greater than Limit. (**Binary Search**)
3) In general when you will go through the list of bindary search questions, you will observe that questions in which minima-maxima or maxima-minima is asked they are solved by Binary search problems.
    
# Approach

* **Mid** will define the limit, our element should be smaller than this limit.

* Iterate over the array and pic any k non-adjacent elements that are smaller than our limit( **Mid** in our case).
   
* Some of you might be thinking that me wondering why here i have used one loop only well lets observe:

* If I have **$$nums[i]<=limit$$** and $$nums[i+1]<=limit$$, if I choose ith element I will have $$n-i-1$$ more choices from $$i+2<=x<n$$. Here, x represents the candidates i can choose. If I choose $$i+1 th$$ element I will have $$n-i-2$$ element to choose from $$i+3<=x<n$$ so first one is better which boils down to choosing the first element every time i get an element within allowable limit.
**(Hence there is a greedy way of selecting houses)**
# Complexity
- Time complexity:**O(nlogn)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:**O(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool calc(vector<int>& nums, int k,int mid)
    {
        int i=0,n=nums.size();
        while(i<n)
        {
            if(nums[i]<=mid)k--, i+=2;
            
            else i++;
            
            if(k == 0) return true;
        }
        return k == 0;
    }
    int minCapability(vector<int>& nums, int k) 
    {
        int n = nums.size();
        int lo = 0,hi = 1e9+1;
        while(lo<hi)
        {
            int mid = (lo+hi)/2;
            if(calc(nums, k, mid)) hi=mid;
            else lo=mid+1;
        }
        return lo;
    }
};
```
# Similar Problems:
1) [1760. Minimum Limit of Balls in a Bag](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)
2) [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/).
3) [1954. Minimum Garden Perimeter to Collect Enough Apples](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/).
4) [2226. Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/).
5) [1283. Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/).
6) [1482. Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
7) [2009. Minimum Number of Operations to Make Array Continuous](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/)
8) [2528. Maximize the Minimum Powered City](https://leetcode.com/problems/maximize-the-minimum-powered-city/description/) suggested by @20ryanc
9) [1552. Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)suggested by @hereToRock