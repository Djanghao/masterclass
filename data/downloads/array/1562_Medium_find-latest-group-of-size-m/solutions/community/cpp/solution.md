# Prefix Sum || C++

**Author:** Hemant_1451
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/3126651/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/3126651/)

---

# Intuition
The intuition behind this solution is to keep track of the lengths of the sequences of active cells at the left and right of each cell when it becomes active. We can use a prefix sum array to keep track of the lengths of the sequences of active cells at each index. Additionally, we can keep track of the number of sequences of each length using a hashmap.

# Approach
We can use a prefix sum array to keep track of the lengths of the sequences of active cells at each index. Additionally, we can keep track of the number of sequences of each length using a hashmap. We iterate through the array and for each active cell, we calculate the length of the sequence of active cells to the left and right of the cell. We use this information to update the prefix sum array and the hashmap. If at any point the number of sequences of length m is greater than 0, we return the index of the active cell.

# Complexity
 Time complexity: O(N)
Space complexity: O(N)
# Code
```
class Solution {
public:
    int findLatestStep(vector<int>& arr, int m) {
        int n = arr.size();
        if(n==m)
        return n;
        vector<int>length(n+2,0);
        vector<int>count(n+1,0);
        int ans = -1;
        for(int i=0; i<n; i++)
        {
            int a = arr[i], low = length[a-1], high = length[a+1];
            int sum = low + high + 1;
            length[a-low] = length[a+high] = sum;
            count[low]--;
            count[high]--;
            count[sum]++;
            if(count[m]>0)
            ans= i+1;
        }
        return ans;
    }
};
```