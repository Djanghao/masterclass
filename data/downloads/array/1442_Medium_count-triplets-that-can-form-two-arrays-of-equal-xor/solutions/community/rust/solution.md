# Simple solution, sliding window O(n^2). 0ms in most languages (53ms in Python, 1ms in Rust)

**Author:** glugglug
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5228515/](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5228515/)

---

# Intuition
If `a==b` then 
`arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]` == `arr[j] ^ arr[j + 1] ^ ... ^ arr[k]`.
And if 2 numbers x and y are equal, `x ^ y == 0`.  So
`arr[i] ^ arr[i + 1] ^ arr[i+2] ^ ... ^ arr[k]` == 0.

We can therefore find the set of `i`, `k` such that the xor span from arr[i] to arr[k] == 0, without worrying about j, and it's easy to calculate the number of possibliities for `j` within the `(i;k]` range.

# Approach
Nested loop calculating the xor of each range from arr[i] to arr[k], using the value from the previous k, rather than re-xoring the whole range.  Then adding `k -i` whenever a 0 xor is found for the different possible values of j.

# Complexity
- Time complexity:
O($n^2$)

- Space complexity:
O(1)

# Code
``` C++ []
class Solution {
public:
    int ans = 0;
    int countTriplets(vector<int>& arr) {
        int n = arr.size();
        for (int i = 0; i < n; ++i) {
            int val = arr[i];
            for (int k = i+1; k < n; ++k) {
                val ^= arr[k];
                if (val == 0) {
                    ans += k-i;
                }
            }
        }
        return ans;
    }
};
```
``` Go []
func countTriplets(arr []int) int {
    ans := 0
    n := len(arr)
    for i,val := range arr {
        for k:=i+1;k<n;k++ {
            val ^= arr[k]
            if val==0 {
                ans += k - i
            }
        }
    }
    return ans
}
```
``` Java []
class Solution {
    public int countTriplets(int[] arr) {
        int ans = 0;
        int n = arr.length;
        for (int i = 0; i < n; ++i) {
            int val = arr[i];
            for (int k = i + 1; k < n; ++k) {
                if ((val ^= arr[k]) == 0) {
                    ans += k - i;
                }
            } 
        }
        return ans;
    }
}
```
``` Python3 []
class Solution:
    def countTriplets(self, arr: List[int]) -> int:
        ans = 0
        n = len(arr)
        for i in range(n):
            val = arr[i]
            for k in range(i + 1, n):
                val = xor(val, arr[k])
                if val == 0:
                    ans += k - i
        return ans
```
``` Rust []
impl Solution {
    pub fn count_triplets(arr: Vec<i32>) -> i32 {
        let mut ans = 0 as i32;
        let mut n = arr.len();
        for i in 0..n {
            let mut val = arr[i];
            for k in i+1..n {
                val ^= arr[k];
                if val == 0 {
                    ans += (k - i) as i32;
                }
            }
        }
        ans
    }
}
```
```
```