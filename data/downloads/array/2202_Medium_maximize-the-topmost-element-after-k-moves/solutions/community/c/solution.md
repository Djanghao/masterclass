# Simple understanding C++ code with explanation

**Author:** Tarun_PSV
**Votes:** 30
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1844303/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1844303/)

---

We can infer from the question that in the first operation we have to remove first element and for remaining k-1 choices we can convert the question into following 4 cases:

3 4 5 ,k=2     output will be 5
process:
k=1 - 3 will be reomved
k=2 - 4 will be reomved 
now 5 will be answer

3 5 4 2 1 k=3 output will be 5
process:
k=1 - 3 will be removes 
k=2 - 5 will be removed 
now we have 2 choices either to add 5 or remove 4( then 2 will be on top ) out of which best would be to add 5 so we add 5
5 4 2 1


We can split the question into 4 cases.

1st case :
If the size of the vector is 1
For 1st operation : We will remove the element from the vector.
For 2nd operation : We will add the element to the vector.
For 3rd operation : We will remove the element from the vector.
For 4th operation : We will add the element to the vector.
For 5th operation : We will remove the element from the vector.
For 6th operation : We will add the element to the vector.
..
..
We can generalize that if the number of operations is odd, the vector will be empty and so we will return -1.
If the number of operations is even then we will return the element.

2nd case :
If the number of operations is greater than the vector size, then we can remove all the elements from the vector and add the highest elements.
By generalizing this case, we can return the maximum element of the vector.

3rd case :
If the number of operations is equal to the vector size, then we will remove the first (k-1) elements from the vector and add the maximum element from the removed elements to vector.
So we will return the maximum element from the first (k-1) elements.

4th case :
If the number of operations is less than vector size, then we will remove the first (k-1) elements from the vector and we have a option of removing the kth element from the vector or adding the maximum of removed (k-1) elements.
By generalizing, the answer will be maximum element from the maximum element of  first (k-1) elements and the (k+1)th element.


```
class Solution {
public:
    int maximumTop(vector<int>& v, int k) {
        int n=v.size();
        if(n==1 && k%2==1){
            return -1;
        }
        int mx=INT_MIN;
        for(int i=0;i<n && i<k-1;i++){
            mx=max(mx,v[i]);
        }
        if(k<n){
            mx=max(mx,v[k]);
        }
        return mx;
    }
};
```