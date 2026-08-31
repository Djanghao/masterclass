# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/5444087/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/5444087/)

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
class Solution {
    List<int> ans = [];
    List<int> numsSameConsecDiff(int n, int k) {   
        for (int i = 1; i <= 9; i++) {
            backtrack(n, k, "$i");
        } 
        return ans;
    }

    void backtrack(int n, int k, String cand) {
        if (cand.length == n) {
            ans.add(int.parse(cand));
            return;
        }
        
        for (int i = 0; i <= 9; i++) {
            final lastChar = int.parse(cand[cand.length - 1]);
            final currentChar = i;
            if ((lastChar - currentChar).abs() == k) {
                backtrack(n, k, cand + '$i');
            }
        }
    }
}
```