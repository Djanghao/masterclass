# beat 100% Easy JAVA SOLN. USING CONCEPT OF DP  :)

**Author:** abir_themaity
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5631962/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5631962/)

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
  int countHousePlacements(int n) {
    if(n==1)
    return 4;
    int end_with_home=1;
    int end_with_space=1;
    for(int i=2;i<=n;i++){
        int a=end_with_home;
        int b=end_with_home+end_with_space;
        end_with_home=b%1000000007;
        end_with_space=a%1000000007;
    }
    return ((end_with_home+end_with_space)*(end_with_home+end_with_space))%1000000007;
  }
}
```