# 🏆🔥✅Simplest Ever Solution🏆🔥✅

**Author:** Manohar_001
**Votes:** 2
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/4195146/](https://leetcode.com/problems/destroying-asteroids/solutions/4195146/)

---

# \uD83D\uDE09Don't just watch & move away, also give an Upvote.\uD83D\uDE09

# Complexity
- Time complexity: $$O(n.log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool asteroidsDestroyed(int mass, vector<int>& astr) {
        sort(begin(astr), end(astr));

        long long m = mass;//to avoid integer overflow

        for(auto i:astr)
        {
            if(i<=m)
            {
                m+=i;
            }
            else
                return false;
        }

<!-- \u2705Well before returning answer don't forget to UPVOTE.\u2705 -->
        return true;
    }
};
```
![Leetcode Upvote.gif](./images/0.gif)
