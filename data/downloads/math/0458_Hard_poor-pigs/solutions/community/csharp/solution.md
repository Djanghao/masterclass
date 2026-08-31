# C# - #codegolf - 1 line - 42 characters - uses no extra variables

**Author:** hafthor
**Votes:** 0
**Link:** [https://leetcode.com/problems/poor-pigs/solutions/5971975/](https://leetcode.com/problems/poor-pigs/solutions/5971975/)

---

# Intuition / Approach
Each pig can test x+1 buckets in x turns, so we keep adding pigs until we have enough for the buckets given. This can be determined by taking the ceiling of log base (turns+1) of buckets, but what fun is that? Instead of multiplying up to reach *buckets*, we could divide down until we reach 1. We do this to save us from having to declare a new variable. :)

# Complexity
- Time complexity: $$O(p)$$ takes one step per pig required which is on the order of $$O(log b)$$ where b is buckets
- Space complexity: $$O(0)$$ since no additional variables are used!

# Code
```csharp []
public class Solution {
    public int PoorPigs(int b, int d, int t) { // 42 characters
        for(t/=d,d=0;b>1;b+=t,b/=t+1)d++;return d;
    }
}
```