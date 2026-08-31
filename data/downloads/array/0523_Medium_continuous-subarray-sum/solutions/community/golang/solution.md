# How to approach this question (Thought Process) 🤗🤗🤗🤗

**Author:** utkarshpriyadarshi5026
**Votes:** 35
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/5278354/](https://leetcode.com/problems/continuous-subarray-sum/solutions/5278354/)

---

# Welcome, I hope you like this solution \uD83E\uDD17\uD83E\uDD17\uD83E\uDD17\uD83E\uDD17

# Step-by-Step Thought Process
1. **Cumulative Sum \uD83C\uDFC3\u200D\u2642\uFE0F**

    As you traverse through the array, keep a running total of the sum of the elements you have encountered so far. This is known as the cumulative sum \uD83D\uDE0A.

2. **Remainders \u2797**
    For each cumulative sum, calculate the remainder when it is divided by k. The remainder can help us determine if the sum of any subarray (up to the current index) is a multiple of k.
    
3. **Why Remainders Help (IMPORTANT!!) \uD83D\uDFE2\uD83D\uDFE2\uD83D\uDFE2**

    - If at two different points in the array, the cumulative sums give the same remainder when divided by `k`, it means the sum of the elements between \u2194\uFE0F these two points is a multiple of `k`.
    - For example \uD83E\uDD13 lets take if we divide `7` by `5` we get remainder as `2`, and if we divide `12` by `5` we also get remainder as `2`, since their remainders are same (`2`), thus their difference which is `(12 - 7 = 5)` must be divisible by `5`.
    - If at index `i` and index `j` (where `j > i`), the cumulative sums give the same remainder `r` when divided by `k`, then the sum of the subarray from `i+1` to `j` is a multiple of `k`.
4. **Using a Map for Remainders \uD83E\uDD28**

    - Use a map (dictionary) to store the first occurrence of each remainder.
    - The key in the map will be the remainder, and the value will be the first index at which this remainder occurs.
    
5. **Checking Subarray Length \uD83D\uDEE3\uFE0F**

    Ensure that the subarray length is at least two. This means that the difference between the current index and the stored index for a remainder should be at least 2.


# Complexity
- **Time complexity $$O(n)$$**:

    1. The for loop runs from `0` to `nums.length - 1`, so it iterates `n` times, where `n` is the length of the input array nums. Therefore, the loop itself has a time complexity of $$O(n)$$.
    2. Inside the loop, the operations performed (adding to `currSum`, calculating remainder, checking if remainder is in `remaindersFound`, and potentially adding a new entry to remaindersFound) are all constant time operations, $$O(1)$$.

**Given that the loop runs n times and each iteration involves constant time operations, the overall time complexity is $$O(n)$$**

---


- **Space complexity $$O(n)$$:**
The `remaindersFound` HashMap stores remainder values as keys and their corresponding indices as values. In the worst case, we might store `n` entries in the HashMap (if all remainders are unique).

**Hence, the space complexity for the HashMap can go up to $$O(n)$$ in the worst case.**
# Code

```java []
class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        // Map to store the remainders and their corresponding index
        Map<Integer, Integer> remaindersFound = new HashMap<>();
        int currSum = 0;
        remaindersFound.put(0, -1); // To handle the case when subarray starts from index 0

        for (int i = 0; i < nums.length; i++) {
            currSum += nums[i];
            int remainder = currSum % k;

            if (remaindersFound.containsKey(remainder)) {
                // Check if the length of the subarray is at least 2
                if (i - remaindersFound.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remaindersFound.put(remainder, i);
            }
        }

        return false;
    }
}

```
```go []
func checkSubarraySum(nums []int, k int) bool {
    // Map to store the remainders and their corresponding index
    remaindersFound := make(map[int]int)
    currSum := 0
    remaindersFound[0] = -1 // To handle the case when subarray starts from index 0

    for i := 0; i < len(nums); i++ {
        currSum += nums[i]
        remainder := currSum % k

        if val, exists := remaindersFound[remainder]; exists {
            // Check if the length of the subarray is at least 2
            if i - val >= 2 {
                return true
            }
        } else {
            // Store the remainder and the current index
            remaindersFound[remainder] = i
        }
    }

    return false
}
```
```cpp []
bool checkSubarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> remaindersFound;
    int currSum = 0;
    remaindersFound[0] = -1; // To handle the case when subarray starts from index 0

    for (int i = 0; i < nums.size(); i++) {
        currSum += nums[i];
        int remainder = currSum % k;

        if (remaindersFound.find(remainder) != remaindersFound.end()) {
            // Check if the length of the subarray is at least 2
            if (i - remaindersFound[remainder] >= 2) {
                return true;
            }
        } else {
            remaindersFound[remainder] = i;
        }
    }

    return false;
}
```
```python []
def check_subarray_sum(nums, k):
    remainders_found = {0: -1} # To handle the case when subarray starts from index 0
    curr_sum = 0

    for i in range(len(nums)):
        curr_sum += nums[i]
        remainder = curr_sum % k

        if remainder in remainders_found:
            # Check if the length of the subarray is at least 2
            if i - remainders_found[remainder] >= 2:
                return True
        else:
            # Store the remainder and the current index
            remainders_found[remainder] = i

    return False
```
