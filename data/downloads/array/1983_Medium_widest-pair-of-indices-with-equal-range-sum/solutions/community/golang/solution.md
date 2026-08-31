# Golang simple to understand with helpful intuition for other questions

**Author:** sudeepgaddam
**Votes:** 0
**Link:** [https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/5749747/](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/5749747/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If there exists i,j such that i<j and p1[j]-p1[i] == p2[j]-p2[i]
then p1[j]-p2[j] == p1[i]-p2[i]
compute p1[j] - p2[j] for each index j
once difference is calculated for every index, we need to compute max j-i using hashmap for which array value at index i and j is equal
# Approach
<!-- Describe your approach to solving the problem. -->
Self explanatory in code

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```golang []
func widestPairOfIndices(nums1 []int, nums2 []int) int {
    pref1 := make([]int, len(nums1)+1)
    pref2 := make([]int, len(nums2)+1)
    for i :=1;i<=len(nums1);i++ {
        pref1[i] += pref1[i-1] + nums1[i-1]
    }
    for i :=1;i<=len(nums2);i++ {
        pref2[i] += pref2[i-1] + nums2[i-1]
    }
    for i := 0;i<=len(nums1);i++{
        pref1[i] = pref1[i]-pref2[i]
    }
    mp := make(map[int]int, 0)
    res := 0
    for i:=0;i<=len(nums1);i++{
        if _, exists := mp[pref1[i]];exists{
            res = max(res, i-mp[pref1[i]])
        } else {
            mp[pref1[i]] = i
        }
    }
    return res
}
```