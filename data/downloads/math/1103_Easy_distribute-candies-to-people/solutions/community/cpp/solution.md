# C++. 0 ms, faster than 100.00% 4-Lines, easy solution.

**Author:** m-d-f
**Votes:** 8
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/1088057/](https://leetcode.com/problems/distribute-candies-to-people/solutions/1088057/)

---

```
class Solution {
public:
    vector<int> distributeCandies(int candies, int num_people) {
        vector<int> res(num_people);
        for ( int index = 0; candies > 0; ++index, candies -= index )
            res[index % num_people] += min(index + 1, candies);
        return res;
    }
};