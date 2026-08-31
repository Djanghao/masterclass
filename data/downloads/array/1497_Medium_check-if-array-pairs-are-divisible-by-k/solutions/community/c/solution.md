# Simple C++ solution with brief explanation

**Author:** utkarshshekhar
**Votes:** 29
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/763724/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/763724/)

---

Every element has 2 ways to make it divisible by `k`.
	1. Some number should be added to it.
	2. Some number should be removed from it.

**Example:** If `k` is 3 and the number being checked is 5, we can either add 1 to it to make it 6 or remove 2 from it to make it 3.

We find the remainder of the element and then the complements will be:
 `-remainder` to make it zero, and  `k - remainder` if positive remainder else `-k - remainder` if negative remainder to make it a direct multiple.
 
 **Example:** 
 `k = 3` and `element = 5`, `remainder = 2`
then
`complements = {-2, 1}`
-2 makes it 0 and 1 makes it a direct multiple(3)
**Example 2:**
 `k = 3` and `element = -5`, `remainder = -2`
then
`complements = {2, -1}`
2 makes it 0 and -1 makes it a direct multiple(-3)


```
class Solution {
public:
    bool canArrange(vector<int>& arr, int k) {
        unordered_map<int, int> map;
        for (int e : arr) {
            int rem = e % k;
            int complementOne = -rem;
            int complementTwo = rem < 0 ? - k - rem : k - rem;

            if (map[complementOne]) {
                map[complementOne] -= 1;
            } else if (map[complementTwo]) {
                map[complementTwo] -= 1;
            } else {
                map[rem] += 1;
            }
        }

        for (auto e : map) {
            if (e.second) return false;
        }

        return true;
    }
};
```