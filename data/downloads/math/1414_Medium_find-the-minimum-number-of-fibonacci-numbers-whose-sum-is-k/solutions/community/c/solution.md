# C++ solution | Faster than 100%

**Author:** sa01042001
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/1285415/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/1285415/)

---

We will follow a greedy approach here. We will find out the the largest fibonacci number that is less than k, then subtract it from k, and then find the answer for new k. This will run in less than O(n) time.

```
class Solution {
public:


    
    int findMinFibonacciNumbers(int n) {
        
        vector<int> fibo;
    

        if(n==0||n==1)
        {
            return n;
        }

        if(n==2)
        {
            return 1;
        }

        fibo.push_back(1);
        fibo.push_back(1);

        int next=fibo[0]+fibo[1];

        while(next<=n)
        {
            fibo.push_back(next);
            next=fibo[fibo.size()-1]+fibo[fibo.size()-2];
        }
        
        
        int ctr=0;
        int ind=fibo.size()-1;
        
        while(n>0)
        {
            while(ind>=0 && fibo[ind]>n)
            {
                ind--;
            }
            
            n=n-fibo[ind];
            ctr++;
            
        }
     
        return ctr;

        
        
    }
};
```