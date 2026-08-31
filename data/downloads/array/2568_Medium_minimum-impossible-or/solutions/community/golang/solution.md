# C++ | Golang | SC = O(n) and O(1)

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/3227623/](https://leetcode.com/problems/minimum-impossible-or/solutions/3227623/)

---

# Code
```
// C++
class Solution {
public:
    int minImpossibleOR(vector<int>& nums) {
        unordered_set<int> Set(nums.begin(), nums.end());
        for(int i = 0; i < 31; i++) {
            if(Set.find(1 << i) == Set.end()) return 1 << i;
        }
        return 1 << 31;
    }
};

OR

class Solution {
public:
    int minImpossibleOR(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for(int i = 0; i < 31; i++) {
            if(!binary_search(nums.begin(), nums.end(), 1 << i)) return 1 << i;
        }
        return 1 << 31;
    }
};

-------------------------------------------------------
// Golang
func minImpossibleOR(nums []int) int {
    Set := make(map[int]bool)
    for _, num := range nums {
        Set[num] = true
    }
    for i := 0; i < 31; i++ {
        if !Set[1 << i] {return 1 << i}
    }
    return 1 << 31
}
```