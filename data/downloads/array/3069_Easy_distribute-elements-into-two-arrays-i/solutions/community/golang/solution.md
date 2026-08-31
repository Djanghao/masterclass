# [C++ / Go] Using two / one arrays - O(n) solution

**Author:** mikazuki4712
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4819498/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4819498/)

---

# Using two new arrays
```C++ []
class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        vector<int> arr1, arr2;

        arr1.push_back(nums[0]);
        arr2.push_back(nums[1]);

        for (int i = 2; i < nums.size(); i++) {
            if (arr1.back() > arr2.back())
                arr1.push_back(nums[i]);
            else
                arr2.push_back(nums[i]);
        }

        arr1.insert(arr1.end(), arr2.begin(), arr2.end());
        return arr1;
    }
};
```
```Go []
func resultArray(nums []int) []int {
    var arr1, arr2 []int

    arr1 = append(arr1, nums[0])
    arr2 = append(arr2, nums[1])

    for i := 2; i < len(nums); i++ {
        if arr1[len(arr1)-1] > arr2[len(arr2)-1] {
            arr1 = append(arr1, nums[i])
        } else {
            arr2 = append(arr2, nums[i])
        }
    }

    return append(arr1, arr2...)
}
```

# Using only one new array
```C++ []
class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        vector<int> arr;
        arr.push_back(nums[1]);

        int cur = 0;

        for (int i = 2; i < nums.size(); i++) {
            if (nums[cur] > arr.back())
                nums[++cur] = nums[i];
            else
                arr.push_back(nums[i]);
        }

        for (int i = 0; i < arr.size(); i++)
            nums[cur + 1 + i] = arr[i];
        return nums;
    }
};
```
```Go []
func resultArray(nums []int) []int {
    arr := []int{nums[1]}
    cur := 0

    for i := 2; i < len(nums); i++ {
        if nums[cur] > arr[len(arr) - 1] {
            cur++
            nums[cur] = nums[i]
        } else {
            arr = append(arr, nums[i])
        }
    }

    return append(nums[:cur + 1], arr...)
}
```

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$