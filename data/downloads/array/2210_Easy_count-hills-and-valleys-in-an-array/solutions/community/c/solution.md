# Two Pointers

**Author:** votrubac
**Votes:** 100
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1879182/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1879182/)

---

Duplicates could be tricky to handle. For that, we use a second pointer (`j`), which we update only when we detect a hill or a valley.

**C++**
```cpp
int countHillValley(vector<int>& nums) {
    int res = 0;
    for (int i = 1, j = 0; i < nums.size() - 1; ++i)
        if ((nums[j] < nums[i] && nums[i] > nums [i + 1]) || 
            (nums[j] > nums[i] && nums[i] < nums [i + 1])) {
            ++res;
            j = i;
        }            
    return res;
}
```