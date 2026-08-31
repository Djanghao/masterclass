# C# Solution for Fair Distribution of Cookies Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3702630/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3702630/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to distribute the cookies among the children in a way that minimizes the maximum total cookies obtained by a single child. To achieve this, we can use a backtracking approach to explore all possible distributions and track the minimum unfairness.

# Approach
<!-- Describe your approach to solving the problem. -->
- We start with an initial distribution array, distribute, where each element represents the total number of cookies given to a child.
- We recursively explore all possible distributions by distributing the next cookie to each child and updating the unfairness accordingly.
- To distribute a cookie, we increment the corresponding child's count and recursively distribute the next cookie.
- After distributing all cookies, we calculate the unfairness of the current distribution by finding the maximum count among all children.
- We track the minimum unfairness found so far and return it as the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The backtracking approach explores all possible distributions. In the worst case, there can be up to k^N distributions, where k is the number of children and N is the number of cookies. Therefore, the time complexity is O(k^N).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(k) for the distribute array, which represents the count of cookies for each child. The recursion depth is at most N, so the overall space complexity is O(k + N).

# Code
```
public class Solution {
    public int DistributeCookies(int[] cookies, int k) {
        int[] distribute = new int[k];
        
        return DFS(0, distribute, cookies, k, k);
    }

    private int DFS(int i, int[] distribute, int[] cookies, int k, int zeroCount) {
        // If there are not enough cookies remaining, return Int32.MaxValue
        // as it leads to an invalid distribution.
        if (cookies.Length - i < zeroCount) {
            return Int32.MaxValue;   
        }

        // After distributing all cookies, return the unfairness of this
        // distribution.
        if (i == cookies.Length) {
            int unfairness = Int32.MinValue;
            foreach (int value in distribute) {
                unfairness = Math.Max(unfairness, value);
            }
            return unfairness;
        }
        
        // Try to distribute the i-th cookie to each child, and update answer
        // as the minimum unfairness in these distributions.
        int answer = Int32.MaxValue;
        for (int j = 0; j < k; ++j) {
            zeroCount -= distribute[j] == 0 ? 1 : 0;
            distribute[j] += cookies[i];
            
            // Recursively distribute the next cookie.
            answer = Math.Min(answer, DFS(i + 1, distribute, cookies, k, zeroCount));
            
            distribute[j] -= cookies[i];
            zeroCount += distribute[j] == 0 ? 1 : 0;
        }
        
        return answer;
    }
}
```