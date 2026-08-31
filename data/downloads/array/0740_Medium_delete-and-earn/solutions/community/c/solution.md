# [C++]| Detailed explanation w/ RECURSION TO MEMOZIATION | Understand concept

**Author:** aryanttripathi
**Votes:** 291
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/1820279/](https://leetcode.com/problems/delete-and-earn/solutions/1820279/)

---

***Brief note about Question-***
* We have to pick the the maximum number of points we can earn by applying some operation on any number of times.
```
Let's take an example not given in question -
Suppose our array given to us is like, arr[]: [2,1,1,1,3,2,2,2,7,7,8]

So, if we rearranage our array (in increasing order)
it looks like arr[]: [1,1,1,2,2,2,2,3,7,7,8]

So, we have many choices to pick, but the most optimal one to pick is

- Take all 2 and 7 i.e (2 + 2 + 2 + 2 + 7 + 7) = (22)
Therefore our program should return 22 as our final answer.
```
_________
***Some explanations -***
* We will **sort the array**, it will help us in getting rid of not taking any element like `arr[i] - 1`.
* Because after sorting, for a particular element we may only check its next elements whether to include them in our answer or not. As array is already sorted then we know that if `arr[i] - 1 `is present in the array then it is just less index than current element of the array .
* Now suppose we decide to pick a element and include the sum of this element in our array, then upto which point we are able to pick this. We will say the number of points it is repeating in the array till then we are able to pick the element.
* Now, if we pick any element, then we have don't have choices left to pick `arr[i] - 1 and arrr[i] + 1`elements. Since by doing sorting we already get rid of `arr[i] - 1` and now again we skip the all elements which is equal to `arr[i] + 1`.
* And at last for a particular element when we calculate it's sum, then we have two choices, whether to include it in our answer or to explore more possibility whithout picking it, so we will take the maximum of these two.
* See  code for more clarification.
_______
***Solution - I (Recusion, TLE)-***    `passed [ 23 / 48 ] inbuilt test cases`
```
class Solution {
public:
    int solve(vector<int> &arr, int i)
    {
        if(i >= arr.size()) // if i is greater than size of array
        {
            return 0; // then simply returnn zero
        }
        
        // current 'i' on which we are standing
        int currValue = arr[i];  // current value
        int currSum = arr[i]; // intial make sum as same as value
        int index = i + 1; // index to take elemets, so  i + 1
        
        // while it is the same as the current value, include in our sum
        while(index < arr.size() && arr[index] == currValue)
        {
            currSum += arr[i];
            index++;
        }
        
        // Now, we have to skip all the elements, whose value is equal to
        // currValue + 1
        while(index < arr.size() && arr[index] == currValue + 1)
        {
            index++;
        }
        
        //And lastly, we have two choices-
        //whether to include the sum of this current element in our answer
        // or not include the sum of current element in our answer
        // so we explore all possibility and take maximum of them
        
        return max(currSum + solve(arr, index), solve(arr, i + 1));
        
        // If we decide to take the curr element in our answer, then upto the elemet we skip the next value, we paas that index
        // but if decided no to make this vurrent element then simply paas
        // i + 1
    }
    int deleteAndEarn(vector<int>& arr) {
        int n = arr.size(); // take the size of the array
        
        // sort the array to get rid of all arr[i] - 1 elements
        sort(arr.begin(), arr.end());
        
        // solve function which give us our final answer
        return solve(arr, 0);
        //                \u2191
        //                we start from zero index
    }
};
```
_________
***Solution - II (USING DP, Accepted)-***

* For the memoziation part, we use a 1 d array to store some already computed results.
* That's all about dp, nothing much.
* We have to add just one line (see below).
```
class Solution {
public:
    int t[20001]; // declaring 1 d array, to store some already computed results
    int solve(vector<int> &arr, int i)
    {
        if(i >= arr.size()) // if i is greater than size of array
        {
            return 0; // then simply returnn zero
        }
        
         // if result is already computed, then return from here
        // this one line which we say to add
        if(t[i] != -1)
        {
            return t[i];
        }
        
        // current 'i' on which we are standing
        int currValue = arr[i];  // current value
        int currSum = arr[i]; // intial make sum as same as value
        int index = i + 1; // index to take elemets, so  i + 1
        
        // while it is the same as the current value, include in our sum
        while(index < arr.size() && arr[index] == currValue)
        {
            currSum += arr[i];
            index++;
        }
        
        // Now, we have to skip all the elements, whose value is equal to
        // currValue + 1
        while(index < arr.size() && arr[index] == currValue + 1)
        {
            index++;
        }
        
        //And lastly, we have two choices-
        //whether to include the sum of this current element in our answer
        // or not include the sum of current element in our answer
        // so we explore all possibility and take maximum of them
        
        return t[i] = max(currSum + solve(arr, index), solve(arr, i + 1));
        
        // If we decide to take the curr element in our answer, then upto the elemet we skip the next value, we paas that index
        // but if decided no to make this vurrent element then simply paas
        // i + 1
    }
    int deleteAndEarn(vector<int>& arr) {
        int n = arr.size(); // take the size of the array
        
        memset(t, -1, sizeof(t));
        
        // sort the array to get rid of all arr[i] - 1 elements
        sort(arr.begin(), arr.end());
        
        // solve function which give us our final answer
        return solve(arr, 0);
        //                \u2191
        //                we start from zero index
    }
};
```
***`If u find this useful , please consider to give a upvote!!`***