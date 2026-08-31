# Python 3 | Two Pointers, Clean One Pass, O(m+n) | Explanation

**Author:** idontknoooo
**Votes:** 43
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1398600/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1398600/)

---

### Explanation
- A very straightforward solution is to 
	- Expand result for encoded1 (`O(10^5) * O(10^4) = O(10^9)`)
	- Expand result for encoded2
	- Calculate product of two results
	- Use two pointer to get the final result
- Well, the issue of above solution, it will get a TLE (Time Limit Exceeded) error. `O(10^9)` is a time complexity even `O(N)` solution will get TLE. Thus, we need to do better.
- A better solution, instead of expanding the `encoded` arrays, we can 
	- Take 2 points on each array
	- Each iteration, take the shorter frequency, calculate product and add to `ans`
	- Don't forget to deduct current frequency by the smaller frequency (since it's used), and increment pointers `i` or `j` when current frequency is empty
	- Also, handle the situation where current product is same as the previous product
- The time complexity of the above solution is `O(10^5)`, the significance of the length of the `encoded` array
- In the following implementation:
	- `i`: Pointer of `encoded1`
	- `j`: Pointer of `encoded2`
	- `v1`: Current value from `encoded1[i]`
	- `v2`: Current value from `encoded2[j]`
	- `f1`: Current frequency of `v1`
	- `f2`: Current frequency of `v2`
### Implementation
```
class Solution:
    def findRLEArray(self, encoded1: List[List[int]], encoded2: List[List[int]]) -> List[List[int]]:
        i = j = f1 = f2 = v1 = v2 = 0                # Declare variables
        m, n, ans = len(encoded1), len(encoded2), []
        while i < m or j < n:                        # Starting two pointers while loop
            if not f1 and i < m:                     # If `f1 == 0`, assign new value and frequency
                v1, f1 = encoded1[i]
            if not f2 and j < n:                     # If `f2 == 0`, assign new value and frequency
                v2, f2 = encoded2[j]
            cur_min, product = min(f1, f2), v1 * v2  # Calculate smaller frequency and product
            if ans and ans[-1][0] == product:        # If current product is the same as previous one, update previous frequency
                ans[-1][1] += cur_min
            else:                                    # Other situation, append new pairs
                ans.append([product, cur_min])
            f1 -= cur_min                            # Deduct frequency by smaller frequency (used in current round)
            f2 -= cur_min
            i += not f1                              # When frequency is zero, increment pointer by 1
            j += not f2
        return ans
```