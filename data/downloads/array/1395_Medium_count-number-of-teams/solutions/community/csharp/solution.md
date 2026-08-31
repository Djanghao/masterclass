# C# Solution for Count Number of Teams Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/5551179/](https://leetcode.com/problems/count-number-of-teams/solutions/5551179/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the optimized solution is to avoid a brute-force check of all triplets, which would be computationally expensive (O(n^3)). Instead, we focus on breaking down the problem by leveraging the relationships between the soldiers\u2019 ratings. By counting how many soldiers before and after a given soldier have ratings lower or higher, we can efficiently determine the number of valid teams.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Counting Smaller and Larger Ratings:
	\u2022	For each soldier considered as the middle one (j), count how many soldiers to the left have a smaller rating (leftLess) and how many have a larger rating (leftGreater).
	\u2022	Similarly, count how many soldiers to the right have a smaller rating (rightLess) and how many have a larger rating (rightGreater).
2.	Forming Teams:
	\u2022	For each soldier j, calculate the number of increasing teams as leftLess * rightGreater.
	\u2022	Calculate the number of decreasing teams as leftGreater * rightLess.
3.	Summing the Results:
	\u2022	Sum the valid increasing and decreasing teams for all soldiers to get the total number of valid teams.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	O(n^2):
	\u2022	The outer loop runs n times.
	\u2022	For each iteration of the outer loop, the two inner loops each run up to n-1 times, resulting in a total of O(n^2) operations.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	O(1):
	\u2022	The algorithm uses a fixed number of integer variables for counting and does not depend on the size of the input array. Thus, the space complexity is constant.

# Code
```
public class Solution {
    public int NumTeams(int[] rating) {
        int n = rating.Length;
        int count = 0;
        
        for (int j = 0; j < n; j++) {
            int leftLess = 0, leftGreater = 0;
            int rightLess = 0, rightGreater = 0;
            
            // Count soldiers with lower and higher ratings before soldier j
            for (int i = 0; i < j; i++) {
                if (rating[i] < rating[j]) {
                    leftLess++;
                } else if (rating[i] > rating[j]) {
                    leftGreater++;
                }
            }
            
            // Count soldiers with lower and higher ratings after soldier j
            for (int k = j + 1; k < n; k++) {
                if (rating[k] < rating[j]) {
                    rightLess++;
                } else if (rating[k] > rating[j]) {
                    rightGreater++;
                }
            }
            
            // Calculate valid increasing teams with j as the middle soldier
            count += leftLess * rightGreater;
            // Calculate valid decreasing teams with j as the middle soldier
            count += leftGreater * rightLess;
        }
        
        return count;
    }
}
```