# [c++] understand in just Two processes (Beats 99%)

**Author:** Ved_Prakash1102
**Votes:** 77
**Link:** [https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/1016180/](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/1016180/)

---

### STEPS :
Example : ` A = [1,3,4,8]` and  `queries = [[0,1],[1,2],[0,3],[3,3]]`
**STEP 1** 
inplace XOR values of array A
A[0] = 1 since starting from index 1 so `A[1]` remains same
`A[1] = 1^3`
`A[2] = 1^3^4`
`A[3] = 1^3^4^8`

**STEP 2**
Iterate through `queries` and compare 

**Case 1 :** If start value is `zero` then just return inplace value of `A[end]`
In given example : `[0,1]` and `[0,3]`

value for `[0,1]` is `A[1] i.e  1^3`

and for`[0,3]` is `[A[3] i.e 1^3^4^8`

**Case 2 :** If `start >= 1` then just return inplace values of `A[start-1]^A[end]`
In given example : `[1,2] and [3,3]`

so value for `[1,2]` is `A[0]^A[2]  i.e 1^(1^3^4)`  which equals `3^4`

value for `[3,3]` is `A[2]^A[3] i.e (1^3^4)^(1^3^4^8)` which equals `8`

**hence all values are : [1^3, 3^4, 1^3^4^8, 8]**
which equals 

`v = [2, 7, 14, 8]`


### T = O(n) & S = O(1)


```
 vector<int> ans; // create an answer vector to store output
        
        // STEP 1
        for(int i = 1; i < A.size(); i++) {  // in-place in array A
            A[i] = A[i]^A[i-1];   // store in-place XOR till current index 
        }
        // STEP 2
        for(int i = 0; i < queries.size(); i++) {
            int start = queries[i][0]; // first element of i th queries
            int end = queries[i][1];   // second element of i th queries
            
            if(start == 0) {   // if first element of i th queries is zero then just push in-place stored value at index end in array A
                ans.push_back(A[end]);
            }
            else {
                ans.push_back(A[start-1]^A[end]);  // if first element is not zero then push inplace value XOR first-1 th inplace value
            }
        }
        return ans;
```
**Please do upvote :)**
***It takes time to bring such explanation***