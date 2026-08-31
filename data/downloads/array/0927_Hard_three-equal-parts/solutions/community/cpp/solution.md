# C++ | Detailed Explanation with Proofs |

**Author:** prathamn1
**Votes:** 3
**Link:** [https://leetcode.com/problems/three-equal-parts/solutions/3104349/](https://leetcode.com/problems/three-equal-parts/solutions/3104349/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Not much intuitive as it does not invole any famous algorithm but a bit of observation.

# Approach
<!-- Describe your approach to solving the problem. -->
- First and the only thing to notice is that if we have to divide the array into three parts with equal value then ***each part must have equal number of 1 in them.***
Take your time :) 
Proof->
As each number must have equal value which means in binary form (After removing leading zeros ) each of them must be equivalent in the position of their bits.
And for all of them to be equivalent , the sufficient condition will be for them to have the equal number of set bits '1' in them, we can't take zeros '0' as it can form leading zeros which will then become unsignificant.

- So calculate the total number of ones and check for it to be a multiple of three. There will be a special case for 0 number of ones ( See the code for it ).
If it's a multiple of three then, again traverse the array to get the starting point of all the individual parts as
**First part -> first '1' index
second part -> total_one/3+1 th '1' index
third part -> total_one/3 + total_one/3 + 1 th '1' index.**

- Now we have our starting indexes we just have to check if we could actually make them equivalent and for that we simply traverse in our third part till last and correspondingly check the indices in first part and second part.
If we reach the end of array ,which means we have the corresponding indices of each part equal, so we could actually divide them and the remaining values will serve as leading zeros for individual parts.

***See the code for more details or try to dry run on any test case for better understanding.***
 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ Traversing the array three times.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
class Solution {
public:
    vector<int> threeEqualParts(vector<int>& arr) {
        int n=arr.size(),ones=count(arr.begin(),arr.end(),1);
        if(ones==0) return {0,n-1}; // if full array is of zeros
        if(ones%3) return {-1,-1};

        ones=ones/3; // calculating the size of each block with equal ones.


        int curr_one=0,first=-1,second=-1,third=-1;
        for(int i=0;i<n;i++) {
            if(arr[i]==1) curr_one++;

            if(curr_one==1 and first==-1) first=i;
            else if(curr_one==ones+1 and second==-1) second=i;
            else if(curr_one==2*ones+1 and third==-1) third=i;
        }

        int i,j,k;
        for(i=first,j=second,k=third;k<n;i++,j++,k++) {
            if(not (arr[i]==arr[j] and arr[j]==arr[k])) return {-1,-1};
        }
        return {i-1,j};
    }
};
```