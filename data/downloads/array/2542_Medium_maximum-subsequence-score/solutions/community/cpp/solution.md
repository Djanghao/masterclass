# C++ || Easiest Solution Using Priority Queue || With Explanation

**Author:** Khwaja_Abdul_Samad
**Votes:** 82
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/3082737/](https://leetcode.com/problems/maximum-subsequence-score/solutions/3082737/)

---

# Intuition
The idea is to consider for each element of array of nums2[i] as minimum once and check for maximum possible values available in nums1 keeping in mind nums2[i] as minimum .

# Approach
- First we sort the nums2 array in decreasing order and as we need to know the mapping of nums2[i] to nums1[i]  so for that we make their pairs and then we sort.

- Now we we will iterate through p array one by one and let p[i].first as the minimum for an instance then all the elements to left of p array can be considered for sum part.

- But we can make priority queue for knowing top k elements to left of p array 

- And we will only keep k maximum elements at a time in priority queue and keep the tab of their sum .

- Now please read the code and you will understand it . Upvotes are appreciated  

# Complexity
- Time complexity: O( N * Log(N) + (N-k) * Log(k) )

- Space complexity: O(N) + O(k) = O(N+K)

# Code
```
class Solution {
    public:
    long long maxScore(vector<int>& nums1, vector<int>& nums2, int k) {
        
       vector<pair<int, int>> p ;
        
        for(int i = 0 ; i<nums1.size() ; i++)
        {
            p.push_back({nums2[i] , nums1[i]});
        }
        
        sort(p.rbegin() , p.rend());
        
        long long ans  = 0;
        long long sum  = 0;
        priority_queue<int> pq;
        for(int i = 0 ; i<k-1 ; i++)
        {
            sum += p[i].second;
            pq.push(-p[i].second);
        }

        for(int i = k-1 ; i<nums1.size() ; i++)
        {

            sum += p[i].second;
            pq.push(-p[i].second);
            
            ans = max(ans, sum * p[i].first );

            sum += pq.top();
            pq.pop();
        }
        
        return ans;
        
        
    }
};
```