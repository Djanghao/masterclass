# Recursion & Set || One liner || Very simple and easy to understand Solution

**Author:** kreakEmp
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/3111683/](https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/3111683/)

---

1. Clasical Approach :

```
class Solution {
public:
    unordered_set<int> s;
    int distinctIntegers(int n) {
        s.insert(n);
        for(int i = 2; i < n; ++i) {
            if(n%i == 1 && s.find(i) == s.end()) distinctIntegers(i);
        }
        return s.size();
    }
};
```

2. Advance Thinking Approach :

```
/* Ultimately all the numbers will be included except 1 when n != 1 */

int distinctIntegers(int n) {
    return n == 1? 1: n-1;
}
```

Here is an article of my recent interview experience at Amazon, you may like : 
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted