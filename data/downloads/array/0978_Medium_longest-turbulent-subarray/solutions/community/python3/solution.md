# python3 sliding window

**Author:** saurabht462
**Votes:** 11
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/1466193/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/1466193/)

---

```
def maxTurbulenceSize(self, arr):
        n = len(arr)
        l, r = 0, 0
        ans = 1
        if n == 1:
			return 1
        while r < n:
            while l < n - 1 and arr[l] == arr[l+1]: # to handle duplicates
                l += 1
            while r < n - 1 and (arr[r-1] > arr[r] < arr[r+1] or arr[r-1] < arr[r] > arr[r+1]):
                r += 1
            ans=max(ans, r - l + 1)
            l = r
            r += 1
        return ans
		
Time Complexity - O(N)
Space Complexity - O(1)