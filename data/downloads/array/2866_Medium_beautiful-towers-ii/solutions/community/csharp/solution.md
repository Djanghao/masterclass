# Using Stack

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-ii/solutions/4722633/](https://leetcode.com/problems/beautiful-towers-ii/solutions/4722633/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long MaximumSumOfHeights(IList<int> maxHeights) {
        int n = maxHeights.Count;
        long[] left = new long[n];
        long[] right = new long[n];

        left[0]= 0;
        right[n-1] = 0;
        var st = new Stack<int>();
        st.Push(0);
        var rt = new Stack<int>();
        rt.Push(n-1);
        for(int i=1; i<n;i++)
        {
            if (maxHeights[i-1] <= maxHeights[i])
            {
                left[i] = left[i-1]+maxHeights[i-1];
                st.Push(i);
            } else {
                while(st.Count > 0 && maxHeights[st.Peek()] > maxHeights[i])
                {
                    st.Pop();
                }
                if (st.Count > 0)
                {
                    int j = st.Peek();
                    left[i] = left[j] + (long)(i-j-1)*maxHeights[i] + (long)maxHeights[j];
                } else {
                    left[i] = (long)(i)*maxHeights[i];
                }
                st.Push(i);
            }
        }

        for(int i=n-2; i>=0;i--)
        {
            if (maxHeights[i+1] <= maxHeights[i])
            {
                right[i] = right[i+1]+maxHeights[i+1];
                rt.Push(i);
            } else {
                while(rt.Count > 0 && maxHeights[rt.Peek()] > maxHeights[i])
                {
                    rt.Pop();
                }
                if (rt.Count > 0)
                {
                    int j = rt.Peek();
                    right[i] = right[j] + (long)(j-i-1)*maxHeights[i] + (long)maxHeights[j];
                } else {
                    right[i] = (long)(n-1-i)*maxHeights[i];
                }
                rt.Push(i);
            }
        }
        long maxSum =0;
        for(int i=0; i<n;i++)
        {
            long sum = left[i] + (long)maxHeights[i] + right[i];
            maxSum = Math.Max(sum, maxSum);
        }
        return maxSum;
    }
}
```