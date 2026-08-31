# Easy and detailed sliding window approach | At most method detailed explanation | C++ | O(n)

**Author:** sbjaj2018
**Votes:** 291
**Link:** [https://leetcode.com/problems/binary-subarrays-with-sum/solutions/2866679/](https://leetcode.com/problems/binary-subarrays-with-sum/solutions/2866679/)

---

Hello All,

Hope you're doing well. 

This problem can be solved by 3 methods generally.

1. **Brute-Force** -> Using nested loop           -> T.C = O(n^2) ; S.C = O(1)
2. **Optimised**   -> Using hash map               -> T.C = O(n)     ; S.C = O(n)
3. **Optimal**       -> Using sliding window      -> T.C = O(n)     ; S.C =O(n)

First two are well explained and known to you, There are so many good articles regarding them in discussion section by others too. But personally I think third method is where all are facing doubts. So I will try my best to explain it properly.

So, let me write the code and then explain you the intution and how logic is working.

Note : I have maintained comments in code, what exactly that part is doing. Please refer that too.

```
class Solution {
public:
    //This function will give us the number of subarrays
    //which is having the sum<=goal, means atmost the sum 
    //can be goal, but additionally it will also count the
    //subarrays having sum<goal.
    int atmostSubarray(vector<int>&nums, int goal)
    {
        //checking if the goal is negative
        //then return 0 as sum can't be negative
        //0's and 1's are there in the array.
        if(goal<0)
            return 0;
        int sum=0; // For calculating the current sum
        int i=0;
        int j=0;
        int res=0; // storing the res
        while(j<nums.size())
        {
            //we're iterating over the nums array and 
            //then adding the current element into the sum
            sum+=nums[j]; 
            
            //if our current sum is greater than our goal
            //that means we don't need the extra element
            //so we will shrink our window by subtracting 
            //the ith elements from sum till sum > goal
            while(sum>goal)
            {
                sum-=nums[i];
                i++;
            }
            //We're adding the length of each subarray 
            //to our result
            res+=(j-i+1);
            
            j++;
        }
        
        return res;
    }
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        return atmostSubarray(nums,goal)-atmostSubarray(nums,goal-1);
    }
};
```

So, some questions are there, let us go through them.

1. What's the logic of **atmostSubarray** function?

This function actually calculates the number of subarrays which is having ***sum*** less than and equal to ***goal*** , now the catch is this function will return the number of subarrays having ***sum*** less than ***goal*** too. 

How it's calculating ?

*For example :* ***Array*** = [ 1 , 0 , 1 , 0 , 1 ] and ***Goal*** = 2.

We'll iterate over it like below and calculate the current sum and check whether it's less than or equal to ***Goal*** and count the number of subarrays in *count* variable.

Initially : sum = 0 , i = 0 , count = 0.

Step 1 : **1** 0 1 0 1  ; i = 0 , sum = 1 , count = 1
Step 2 :  **1 0** 1 0 1 ; i = 1 , sum = 1 , count = 1 + 2 = 3 , not 2

Now here's the catch , we aren't simply incrementing the count by 1 , we are adding 2, why?

See, till 1st index how many subarrays are there with sum <= 2 ( our goal ).

(a)  1
(b)  1 0
(c)   0

Total = 3 , not 2 , So from this we can observe that to cover all possible subarrays whose sum <= goal we will add length of our current window means ***( j - i + 1 )*** to count variable.

and after Step 2 , for each step you'll do this only and get count as follow :

1 + 2 + 3 + 4 + 4 ; at last 4 not 5 , as **1 0 1 0 1** , this window sum > goal , so we will shrink it like this 1 **0 1 0 1** , now the size is 4.

so total count = 14.

and similarly we will count the number of subarrays having **Sum <= Goal - 1.**

I won't go into calculations of that , that you can do, but result will be *10*.

That's the logic of this function.

2. Why calculating atmost goal or count of subarrays having *sum <= goal* , not directly equal to *goal*.

Let me explain you with an example :

Initially , i = 0 , j = 0 , sum = 0 , count = 0 , goal = 2 

*Note : Here count will count the subarray having sum = goal.*

Array = [ 1 , 0 , 1 , 0 , 1 ]

**1** , 0 , 1 , 0 , 1 ; i = 0 , j = 0 , sum = 1 , count = 0 

**1** , **0** , 1 , 0 , 1 ; i = 0 , j = 1 , sum = 1 , count = 0 

**1** , **0** , **1** , 0 , 1 ; i = 0 , j = 2 , sum = 2 , count = 1

**1** , **0** , **1** , **0** , 1 ; i = 0 , j = 3 , sum = 2 , count = 1

**1** , **0** , **1** , **0** , **1** ; i = 0 , j = 4 , sum = 3 , count = 1 

Now as sum > goal , we will shrink our window by incrementing our **i** pointer and subtracting ith element from sum till sum > goal and we will get.

1 , **0** , **1** , **0** , **1**  ; i = 1 , j = 4 , sum = 2 , count = 2

And now observe, now loop ends as our j == n - 1. but we missed one subarray if you will see , **1 0 1** at last.

Why is this happening ?

As array is containing zeroes so it won't create any impact on current sum , as by adding or subtracting 0 from your sum , sum value won't change , so here we can say with having number of zeros in our array additional possiblity of having subarray of sum = goal is there.

So that's why we are counting atmost or sum <= goal , so we can include all subarray cases.

At last , main question you guys want to know now would be .

\uD83D\uDE80 Why ***atmostSubarray(nums,goal) - atmostSubarray(nums,goal-1);***

**a)** atmostSubarray(nums,goal) will give you number of subarrays with sum <= goal 
*i.e. goal, goal-1 , goal-2 , goal-3 ... 0*

**b)** atmostSubarray(nums,goal) will give you number of subarrays with sum <= goal -1
*i.e.  goal-1 , goal-2 , goal-3 ... 0*

So we only need number of subarrays which having sum as goal ,

atmostSubarray(nums,goal) having that , but additionally having other count too of subarrays having sum < goal.

and we know atmostSubarray(nums,goal -1) having count of all subarrays having sum <= goal - 1 or we can say ***sum < goal*** too. So that means this contain that additional count which we want to remove from atmostSubarray(nums,goal) result.

So we subtract both.

Sorry if it's a quite lengthy , I tried to answer every question or doubt I think , Hope you guys will understand it better now.

***Note : There is a 4th solution of 3 pointers with binary implementation in which we track number of zeros in order to find the subarrays too. But this is quite simple one for optimal .*** \uD83D\uDE42

Please feel free to add some suggestions or having any doubts ask in comments. 
Thanks \uD83D\uDE0A







