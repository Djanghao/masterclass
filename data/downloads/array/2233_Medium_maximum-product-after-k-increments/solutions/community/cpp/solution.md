# C++ Using Min Heap | Easy to Understand

**Author:** nidhiii_
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1931051/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1931051/)

---

**Approach:** The approach is to increase the total product by increasing the smallest element in the array by one (do this k times to the smallest element). 
Why the smallest element? For example: [1,5,2] and k=1. If we increase 5 by 1, our product will be 12. But, if we increase 1 by 1, our prodcut will be 5* 2* 2=20. 

**Data Structure:** Min-heap would be the best as we need to keep track of the smallest element after each updation. 

```
class Solution {
public:
    int maximumProduct(vector<int>& nums, int k) {
        priority_queue <int, vector<int>, greater<int> > pq;
        for(int n:nums){
            pq.push(n);
        }
        long int mod=1000000007,i=0,ans=1;
        while(i<k){
            int m=pq.top();
            pq.pop();
            pq.push(m+1);
            i++;
        }
        while(pq.size()){
            ans=(ans*pq.top())%mod;
            pq.pop();
        }
        return ans%mod;
    }
};
```