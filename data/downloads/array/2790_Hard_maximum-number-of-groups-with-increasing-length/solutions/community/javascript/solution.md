# 🚀 [VIDEO] O(nlogn) Cracking the 'Maximum Number of Groups' Incremental Summing

**Author:** vanAmsen
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3816521/](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3816521/)

---

# Intuition
Upon reading the problem, it becomes clear that the maximum number of groups we can form is directly related to the sum of usage limits. Also, the groups need to be of increasing size, suggesting the need to sort the usage limits and accumulate them in a certain way. 

https://youtu.be/9q_SRki_nII

# Approach
The approach to solving this problem involves sorting the usage limits in ascending order and incrementally summing the elements. For each limit, the sum is checked if it is large enough to form a group of size (count+1). If the sum is large enough, the count (which keeps track of the number of groups) is incremented. The function returns the count as the maximum number of groups that can be formed.

# Complexity
- Time complexity:
The time complexity is \\(O(n \\log n)\\), primarily due to the sorting operation.

- Space complexity:
The space complexity is \\(O(1)\\) as the solution only uses a few integer variables and doesn't use any additional data structures proportional to the input size.

# Code
``` Python []
class Solution:
    def maxIncreasingGroups(self, usageLimits: List[int]) -> int:
        usageLimits.sort()  # Sort the usageLimits array in ascending order.
        count = 0  # Initialize the counter for the number of groups.
        sum_limit = 0  # Initialize the sum of usage limits.
        
        for limit in usageLimits:
            sum_limit += limit  # Incrementally sum the elements of usageLimits.
            
            # Check if the sum is large enough to form a group of size (count+1).
            if sum_limit >= (count+1)*(count+2)//2:
                count += 1  # If the sum is large enough, increment the count.

        return count  # Return the count as the maximum number of groups.
```
``` C++ []
class Solution {
public:
    int maxIncreasingGroups(vector<int>& usageLimits) {
        sort(usageLimits.begin(), usageLimits.end());
        int count = 0;
        long long sum_limit = 0;
        
        for (int limit : usageLimits) {
            sum_limit += limit;
            
            if (sum_limit >= static_cast<long long>(count+1)*(count+2)/2) {
                count++;
            }
        }

        return count;
    }
};
```
``` C# []
public class Solution {
    public int MaxIncreasingGroups(IList<int> usageLimits) {
        List<int> usageLimitsList = usageLimits.ToList();
        usageLimitsList.Sort();
        int count = 0;
        long sum_limit = 0;

        foreach (int limit in usageLimitsList) {
            sum_limit += limit;

            if (sum_limit >= (long)(count+1)*(count+2)/2) {
                count++;
            }
        }

        return count;        
    }
}
```
``` Java []
class Solution {
    public int maxIncreasingGroups(List<Integer> usageLimits) {
        usageLimits.sort(Integer::compareTo);
        int count = 0;
        long sum_limit = 0;

        for (int limit : usageLimits) {
            sum_limit += limit;
            
            if (sum_limit >= (long)(count+1)*(count+2)/2) {
                count++;
            }
        }

        return count;    
    }
}
```
``` JavaScript []
/**
 * @param {number[]} usageLimits
 * @return {number}
 */
var maxIncreasingGroups = function(usageLimits) {
    usageLimits.sort((a, b) => a - b);
    let count = 0;
    let sum_limit = 0;
    
    for (let limit of usageLimits) {
        sum_limit += limit;
        
        if (sum_limit >= (count+1)*(count+2)/2) {
            count++;
        }
    }

    return count;    
};
```