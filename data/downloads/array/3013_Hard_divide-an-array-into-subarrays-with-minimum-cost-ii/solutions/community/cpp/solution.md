# Sliding Window, Two Sets | C++

**Author:** dartvolley
**Votes:** 31
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4598400/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4598400/)

---

# Intuition
The problem can be simplified into finding the minimum of the sum of the smallest $(k - 1)^{th}$ elements in a continuous subarray of length $dist + 1$.

# Approach
We can use two sets, one storing first $(k-1)^{th}$ smallest element, while the second set storing the rest. When itterating through the array, we can remove an element and insert an element into one of these sets in O(log n) time. Then we can use another variable to store the sum of the first set, updating it each time an element is inserted or erased.

# Complexity
- Time complexity:
O(n log n)
# Code
```
class Solution {
    multiset<long long> l, r;
public:
    long long minimumCost(vector<int>& nums, int k, int dist) {
        int n = nums.size();
        k--;
        long long cur = nums[0];
        for (int i = 1; i <= dist + 1; i++) cur += nums[i], l.insert(nums[i]);
        while (l.size() > k) {
            cur -= *l.rbegin();
            r.insert(*l.rbegin());
            l.erase(l.find(*l.rbegin()));
        }
        long long ans = cur;

        for (int i = dist + 2; i < n; i++) {
            // Erasing an element from the set
            if (l.find(nums[i - dist - 1]) != l.end()) {
                cur -= nums[i - dist - 1];
                l.erase(l.find(nums[i - dist - 1]));
            } else {
                r.erase(r.find(nums[i - dist - 1]));
            }
            // Adding an element to the set
            if (nums[i] < *l.rbegin()) {
                cur += nums[i];
                l.insert(nums[i]);
            } else {
                r.insert(nums[i]);
            }
            // Balancing the set such that the first set has (k - 1) elements 
            while (l.size() < k) {
                cur += *r.begin();
                l.insert(*r.begin());
                r.erase(r.find(*r.begin()));
            }
            while (l.size() > k) {
                cur -= *l.rbegin();
                r.insert(*l.rbegin());
                l.erase(l.find(*l.rbegin()));
            }
            // Finally, update the minimum
            ans = min(ans, cur);
        }
        return ans;
    }
};
```