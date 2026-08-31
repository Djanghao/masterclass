# Solution

**Author:** penrosecat
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/5328586/](https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/5328586/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

We have to pick books in an interval l to r. The books will be increasing throughout the interval, so the most books will come from books[r]. Now, since most books will come from books[r] anyway, we can always take all the books i.e. books[r] to maximize the number of books from the range.

Now, the best we can do is try to take books[r] - 1 books from books[r-1], books[r] - 2 books from books[r-2] and so on. However, the problem is if we encounter an index r-j such that books[r] - j > books[r-j]. Here, we cannot do our best, however we can recursively try to do the best for the new right value books[r-j].

To find the first such index j to the left of each index, we can use a monotonic stack and pop elements on the stack while books[i] - j <= books[i-j].

Since the stack will have indices, i-j = s.top() -> j = i - s.top()

After popping, from i to s.top() we are taking the books from s.top() (not inclusive) to i (inclusive), which is i - s.top() = l elements. The sum of the books from this part of the selection is b + b-1 + b-2 + ... + b-l-1 = bl + l*(l-1)/2 where b = books[i]

If b-l-1 < 0 then we shouldn't add the negative elements and we can straightaway take b*(b+1)/2, otherwise we have to take bl + l*(l-1)/2.

The rest of the selection comes from the solution of s.top(). If s.empty(), then this is 0, otherwise add dp[s.top()].

Take the max at each index to get the final answer.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long maximumBooks(vector<int>& books) {

        int n = books.size();
        long long maxbooks = 0;
        vector<long long> dp(n, 0);

        stack<long long> s;


        // find the first index to the left of i such that books[i] - j > books[i-j]

        // i - j = s.top() -> j = i - s.top()

        for(int i = 0; i<n; i++)
        {
            while(!s.empty() && books[i] - (i- s.top()) <= books[s.top()])
            {
                s.pop();
            }

            long long l = i - (s.empty() ? -1 : s.top());
            long long b = books[i];

            // sum will be books[i] + books[i] - 1 + .. books[i] - l-1
            // sum will be lb - l(l-1)/2

            if(b - l - 1 < 0)
            {
                dp[i] = b*(b+1)/2;
            }
            else
            { 
                dp[i] = l*b - (l*(l-1))/2;
            }
            
            dp[i] += (s.empty() ? 0 : dp[s.top()]);

            maxbooks = max(maxbooks, dp[i]);

            s.push(i);
        }

        return maxbooks;
    }
};
```