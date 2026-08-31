# C++ EASY TO SOLVE ||Beginner Friendly Detailed Explanation with a dry run

**Author:** Cosmic_Phantom
**Votes:** 37
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/1624365/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/1624365/)

---

# **Dynamic Programing with a bottum up approach || Doge building from bottom to up algo || Dynamic doge**

**Intuition:-**
First of all after reading this question everyone got the gist that we need to find the partition sums were both the partition will have equal sums. I would like to reframe this question a bit for better understanding . So the question can be spoken as, finding a subset with its sum equal to a half of the sum of the original array. So talking about intuition we all thought of traversing the whole array and finding two equal partitions.
To make this possible we all thought of recursion once in our mind. Sorry to disappoint you but this will give a big time `TLE error`. This is a secret tip, remember this `whenever recursion can't do something properly, DP comes in to the picture`   

**Dry run :-**

*For better understanding of algorithm let's take both the examples from the description of our problem and try to observe .*
1.
```
Input: nums = [1,5,11,5]
resultant_sum = 1+5+11+5 = 22 [EVEN NUMBER]
```
now half of resultant_sum is 11 . Thus we will find a subset with resultant_sum as 11 and then we are able to partition this array into two subsets with equal sum.
```
Output=true 
Reason=>[11] , [1,5,5]
```
2.
```
Input: nums = [1,2,3,5]
resultant_sum = 1+2+3+5 = 11 [ODD NUMBER]
```
now half of resultant_sum is 5.5 . Thus we will find a subset with resultant_sum as 5.5 .But if we think clearly this not possible 
`Output=false`

**Algorithm:**
1. Firstly, let's add the whole vector to find the `resultant_sums `
2. After adding let's check whether the resultant_sum is odd or even 
3. If its odd than return false .since it's not possible to find the same sum partition subset of it.
4. If it's even then we start our dp by iterating over the whole array until we find our partition .
5. During dp process we need to see that the number we are holding will give the partition or not i.e whether to include it or not in our partition sum. To check this condition we are using `or` operator in line  `dp[i] = dp[i] || dp[i-x] ;`

*Phewww* .Now let's jump to our code :)

**Code:**
```
//Upvote and Comment :)

class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int resultant_sums = 0 ;
        
        //Adding all the elements of our vector
        for (auto x : nums)
            resultant_sums +=x;
        
        //Now think that the sum is odd in this special case we can never find two equal partitions
        if(resultant_sums % 2) return false;
        //Finding the half off the resultant sum
        resultant_sums /= 2;
        
        //dp vector for storing the results of previous row i.e dp will keep for each number if it has a satisfying subset or not
        vector<bool> dp(resultant_sums+1,false);
        dp[0]=true;
        for(auto x:nums){
            for(int i=resultant_sums;i>=x;i--){
                dp[i] = dp[i] || dp[i-x] ;//The "or" operator is used because for each number, either we use it or we don't
            }
        }
        return dp[resultant_sums];
    }
};
```

