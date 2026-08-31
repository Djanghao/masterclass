# Sliding Window - Time O(n) - Space O(1)

**Author:** dibekpoudyal
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/4789021/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/4789021/)

---

**Explanation:**
- The function `maxTurbulenceSize` aims to find the maximum length of a turbulent subarray in the array `arr`.
- It uses a sliding window approach with two pointers (`l` and `r`) to iterate through the array.
- The variable `res` keeps track of the maximum turbulence subarray length, and `prev` stores the direction of the previous turbulence ("<", ">", or "" for no turbulence).
- The algorithm starts with `l` and `r` pointing to the first two elements of the array.
- It compares the current pair of elements to determine the direction of turbulence.
- If the turbulence direction changes or if the current pair is equal, it updates the pointers accordingly.
- The algorithm calculates the length of the turbulent subarray at each step and updates `res` with the maximum length.
- The process continues until the right pointer reaches the end of the array.

**Time Complexity:**
- The time complexity is O(n), where `n` is the length of the input array `arr`. The algorithm iterates through each element once.

**Space Complexity:**
- The space complexity is O(1), indicating a constant amount of extra space used, regardless of the input size.


# Code
```
func maxTurbulenceSize(arr []int) int {
    l, r := 0, 1 // left and right pointers for sliding algo
    res, prev := 1, ""// store max turbulence and previous sign 

    for r < len(arr) {
        if arr[r-1] > arr[r] && prev != ">" {
            res = max(res, r-l+1)
            prev, r = ">", r + 1
        } else if arr[r-1]<arr[r] && prev!= "<" {
            res = max(res, r-l+1)
            prev, r = "<", r+1
        } else {
            if arr[r] == arr[r-1] {
                r = r + 1
            }
            l = r - 1
            prev = ""
        }
    }

    return res
}
```