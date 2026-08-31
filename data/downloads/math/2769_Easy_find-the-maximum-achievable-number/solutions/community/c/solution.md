# O(1) TC (Proper Logical Explaination)

**Author:** vansh10chawla
**Votes:** 41
**Link:** [https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/3739377/](https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/3739377/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In the given problem, we can simultaneously increase or decrease the given num and a achievable number such that after t steps, the num and a achievable number are equal.

In order to find the maximum achievable number, we just have to use increase operation for given num and decrease operation for maximum achievable number.

Hence after t operations, the given num will be incremented by t, maximum achievable number will be decremented by t and they both will be equal.

=> num + t = ans -t
=> ans = num + 2t

Hence we can infer that in all scenarios, the maximum achievable number is num+2t as it is impossible to obtain a higher number within t steps.

# Approach
<!-- Describe your approach to solving the problem. -->
1) We need to return num + 2*t 

# Code
C++ code
```
class Solution {
public:
    int theMaxia AchievableX(int num, int t) {
        return 2*t+num;
    }
};
```
C code
```
int theMaximumAchievableX(int num, int t){
    return 2*t+num;
}
```
Python code
```
class Solution(object):
    def theMaximumAchievableX(self, num, t):
        """
        :type num: int
        :type t: int
        :rtype: int
        """
        return num+2*t
```
Java code
```
class Solution {
    public int theMaximumAchievableX(int num, int t) {
        return num+2*t;
    }
}
```
JavaScript Code
```
/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    return num+2*t;
};
```
# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

