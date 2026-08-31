# Solution

**Author:** penrosecat
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/5302775/](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/5302775/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Maintain a decreasing (non increasing) stack, the only people an element can see is the ones that go adjacent to it or kick it off the stack, because there are the situations in which all the elements in between are lesser than either element.

While kicking off elements, we cannot kick off equal elements because the elements that can see the previous instance of the element cannot see the next instance either.

We also have to be careful to only bump seen count if the last element popped off is not equal to the element being popped off. Because we cannot kick off equal elements, there can be equal elements on the stack and the counts of the copies further in the stack will not go up from the larger element popping it off because it will not be visible due to the equal elements in front of it.

We have to do this for both the right and the down directions.

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
    vector<vector<int>> seePeople(vector<vector<int>>& heights) {
        int n = heights.size();
        int m = heights[0].size();

        int last_popped = -1;

        vector<vector<int>> ans(n, vector<int>(m, 0));

        stack<int> s;

        for(int i = 0; i<n; i++)
        {
            s = stack<int>();
            for(int j = 0; j<m; j++)
            {
                last_popped = -1;
                while(!s.empty() && heights[i][j] > heights[i][s.top()])
                {
                    int u = s.top();
                    s.pop();

                    if(last_popped == -1 || heights[i][u] != heights[i][last_popped])
                    {
                        ans[i][u]++;
                    }
                    last_popped = u;
                }

                if(!s.empty())
                {
                    ans[i][s.top()]++;
                }
                s.push(j);
            }
        }

        for(int j = 0; j<m; j++)
        {
            s = stack<int>();
            for(int i = 0; i<n; i++)
            {
                last_popped = -1;
                while(!s.empty() && heights[i][j] > heights[s.top()][j])
                {
                    int u = s.top();
                    s.pop();

                    if(last_popped == -1 || heights[u][j] != heights[last_popped][j])
                    {
                        ans[u][j]++;
                    }
                    last_popped = u;
                }

                if(!s.empty())
                {
                    ans[s.top()][j]++;
                }
                s.push(i);
            }
        }

        return ans;
    }
};
```