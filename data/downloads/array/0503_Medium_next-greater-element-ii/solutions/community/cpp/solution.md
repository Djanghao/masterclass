# Optimized solution 🔥 Easy C++ 🔥 Stack implementation 🔥 st

**Author:** ribhav_32
**Votes:** 176
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/3390699/](https://leetcode.com/problems/next-greater-element-ii/solutions/3390699/)

---

# **PLEASE UPVOTE \uD83D\uDC4D**
# Approach 
### Simple implementation of stacks and because of circular array we take 2*n elements instead of n elements
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& a) {
        int n = a.size();
        vector<int>v(n,-1);

        stack<int>st;
        for(int i = 2*n - 1; i >= 0; i--)
        {
            // we pop out all elements smaller than current element
            while(!st.empty() && (a[i%n] >= st.top()))
            {
                st.pop();
            }

            // if stack is empty means no greater element is there
            // if not empty we make answer at that index equal to top element
            if(!st.empty() && (i < n))
            {
                v[i] = st.top();
            }

            st.push(a[i%n]);
        }

        return v;
    }
};
```

![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)
