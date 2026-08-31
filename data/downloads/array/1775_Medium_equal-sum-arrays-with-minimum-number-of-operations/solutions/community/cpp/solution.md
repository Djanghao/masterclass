# C++✅✅ | Priority - Queue | Greedy | Easy Understanding | Clean Code |

**Author:** mr_kamran
**Votes:** 12
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/2702229/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/2702229/)

---


# Code
```

class Solution {
public:

    int minOperations(vector<int>& nums1, vector<int>& nums2) {

        int n1 = nums1.size();
        int n2 = nums2.size(); 
        
        int sum1 = accumulate(nums1.begin(),nums1.end(),0);
        int sum2 = accumulate(nums2.begin(),nums2.end(),0); 

        priority_queue<int>pq;

        int req = abs(sum1-sum2);
        int cnt = 0;

        if(sum1>sum2)
        {
           for(int i = 0;i<n1;++i) pq.push(nums1[i]-1);
        
           for(int i = 0;i<n2;++i) pq.push(6-nums2[i]);
    
        }

        else
        {
           for(int i = 0;i<n2;++i) pq.push(nums2[i]-1);
           
           for(int i = 0;i<n1;++i) pq.push(6-nums1[i]);
           
        }

        while(pq.top() > 0)
        {
            if(req <= 0) break;

            int top = pq.top();
            pq.pop();
            req -= top;
            cnt++;  
        }

        if(req > 0) return -1;

        return cnt;
    }
};


```