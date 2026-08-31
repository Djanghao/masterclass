# Explained two solutions - with & without sorting || Very Simple & Easy to Understand

**Author:** kreakEmp
**Votes:** 74
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3201904/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3201904/)

---

Up Vote if you like the solution 

# Approach

First of all we can simply replace two numbers with the same value, that results in the lowest difference to zero in all cases.
So now the problem statement becomes, high (max difference) should be lowest. 
So to achieve this, we need to decrease the difference between the smallest and largest value. This further can be achieved by doing one out of these three cases :
1. remove the smallest two numbers
2. remove the largest two numbers
3. remove the smallest and largest

so considering above three cases we have to take the minimum value possible.

Note: I have written remove the smallest/largest number, this means => changing the smallest/largest number to any other number in the array.

To find smallest two and largest two number we can simply sort the array and we will have the value. Another way can be just keep track of two smallest and two largest values in the array which can be done easily using priority queue or just by tracking smallest three and largest three variables.
 

# Solution 1 : with Sorting
```
    int minimizeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int case1 = nums.back() - nums[2];
        int case2 = nums[nums.size() - 3] - nums[0];
        int case3 = nums[nums.size() - 2] - nums[1];
        return min({case1, case2, case3});
    }
```

# Solution 2: with out sorting
```
/*
After sorting the order of the variables are as follows :
s1, s2, s3 ......... l3, l2, l1
s1 is smallest & l1 is largest.
*/

    int minimizeSum(vector<int>& nums) {
        int s1 = INT_MAX, s2 = INT_MAX, s3 = INT_MAX, l1 = 0, l2 = 0, l3 = 0;
        for(auto n: nums){
            if(s1 > n) { s3 = s2; s2 = s1; s1 = n; }
            else if(s2 > n) { s3 = s2; s2 = n; }
            else if(s3 > n) { s3 = n; }

            if(l1 < n) { l3 = l2; l2  = l1; l1 = n; }
            else if(l2 < n ) { l3 = l2; l2 = n; }
            else if(l3 < n ) { l3 = n; }
        }
        return min({l1 - s3, l3 - s1, l2 - s2});
    }
```

Here is an article of my recent interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted