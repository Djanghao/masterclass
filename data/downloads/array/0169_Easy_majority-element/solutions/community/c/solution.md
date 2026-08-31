# C++ MULTIPLE APPROACHES : Hashmaps, Sorting , VotingAlgo

**Author:** Krypto2_0
**Votes:** 441
**Link:** [https://leetcode.com/problems/majority-element/solutions/1787619/](https://leetcode.com/problems/majority-element/solutions/1787619/)

---

**Somebody is intentionally downvoting the posts. Please if you can't support then atleast don't do this.**
Hi , everybody. Today's question is rather simple. There are multiple approaches discussed in the LEETCODE SOLUTION section , but I will explain the most obvious and the important ones. But do check out the rest of the approaches. 

**EXPLANATION : The question says that a vector has been provided and it consists of an element that appears more than half of the size of the array. We have to find and return this majority element.**

There are multiple approaches to this question. Here are a few of them.

**APPROACH 1: BRUTE-FORCE**
For every element , check its frequency in the array. Store the maximum_frequency_till_now in a variable and update it once you find out the frequency of each element.
This approach involves nested loops : 
1. Run a loop on the array.
2. In , the above loop run another loop on the array and count the frequency of the current element of the above array.
3. After calculating the frequency of current_element , update the maximum_frequency variable.

**TC : O(N^2)**
**SC : O(1)**

This approach is not a good one as we are calculating the frequency of same element multiple times. 

Instead of doing that , can't we simply store the frequency of each element in a container and return the element with maximum frequency ??

Next approach is based on the same concept. 

#### APPROACH 2: USING HASHMAPS (UNORDERED_MAPS)
Whenever , there is a question involving the calculation of frequency , hashmaps and frequency arrays come handy. 
In this approach as well , we will :
* Evaluate the frequency of each element by storing it in a hashmap.
* Then we will traverse the hashmap and return the element with maximum frequency. 

**CODE :**
```
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        unordered_map<int,int> a;
        for(int i:nums)
            a[i]++;
        int maxval=nums[0];
        for(auto x:a)
        {
            if(x.second>a[maxval])
                maxval=x.first;
        }
        return maxval;
    }
};
```
**TC : O(N)**
**SC : O(N)**

So , far we have created solutions to find the majority element in the array. 
**We haven't made use of the fact , that the majority element will have a frequency >N/2.**

Now , how do we use that to our advantage ?? 
Well here is a small observation. 
If the array was rearranged such that **all the occurences of the majority element were put together**,  it will more than half of the array size. 
This means that if we sort the array ( which will bring all the occurences of majority element together) , the **(N/2 +1)th element will always be the majority element**. 

So , implementing this in the 3rd approach , 

#### APPROACH 3 : USING SORTING 
* Sort the array .
* Return the element at (N/2 + 1)th position (or (N/2)th index). 

**CODE :**
```
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int n=nums.size();
        return nums[n/2];
    }
};
```
**TC : O(NlogN)**
**SC : O(1)**

The above approach is using the fact that the frequency of majority element is >N/2 . 
But , can we improve it so that our time complexity becomes linear ?? 

Can we implement the fact that the majority element has a frequency >N/2 ??

#### APPROACH 4 : MOORE'S VOTING ALGORITHM 

Think of this array as a collection of votes from the voters for different political parties. 
Now as we know the party which has >50% votes can form the government. 

So , our above question is analogous to this situation. 
Now , if we are certain that one party has > 50% votes . Then , if : 
* We **increment a count variable every time we see the vote from the majority party** and **decrement it whenever a vote from some other party is occured** , we can guarantee that , 
  **count>0.** 

  Using the above logic , 
  1. Create a count=0 and a majority variable that stores the current majority element. 
  2. Traverse the array , and if count =0 , then store the current element as the majority element and increment the count.
  3. Else , if the current element is equal to the current majority element , increment count , else decrement it. 
  4. At the end return the majority element. 
 
 This approach works because , 
 1. We simply know that the majority element has a frequency greater than half of the total elements. 
 2. So , the value of count > 0. 
 3. But whenever it becomes 0 , it means that till now the majority element has either not occured , or if it has then the its frequency is equal to the sum of frequency of rest of the others. So , the next element will be the majority element till now . But eventually by the end , the final answer will always be the majority element of the array , as when the "count" becomes 0 for the final time , the next element will be the majority element. 

**CODE :**
```
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int majority,count=0;
        for(int i=0;i<nums.size();i++)
        {
            if(count)
            {
                count+=(nums[i]==majority ? 1 : -1);
            }
            else
            {
                majority=nums[i];
                count=1;
            }
        }
        return majority;
    }
};
```

**TC : O(N)**
**SC : O(1)**

IF YOU FOUND THIS POST HELPFUL , DO UPVOTE AND COMMENT BELOW.