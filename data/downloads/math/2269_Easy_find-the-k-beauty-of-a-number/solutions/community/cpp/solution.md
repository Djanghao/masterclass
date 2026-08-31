# ✅✅ || Beats 100 % || Easiest-Explanation || Sliding Window || C++ || ✅✅

**Author:** prikarshglory
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/4088078/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/4088078/)

---

# Approach
- To make it easier problem, as simple as sliding window in array
- We convert it into the string.
- Now extracting the substrings from the string s, again convert it into number.
- case 1 : Is it equal to zero ? (Y/N) Y-> reject,
- if case 1 is false, check whether this number is divisible by k, Y-> count++;
- At last return count.
-----
# Complexity
- Time complexity: O(log10(num))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
----
# Code
```
class Solution {
public:
    int divisorSubstrings(int num, int k) {
        const string s = to_string(num);
        int answer = 0;

        for(int i = 0;i + k <= s.length();i ++) {
            int x = stoi(s.substr(i, k));
            if(x != 0 && num % x == 0)
                answer ++;
        }
        return answer;
    }
};
```