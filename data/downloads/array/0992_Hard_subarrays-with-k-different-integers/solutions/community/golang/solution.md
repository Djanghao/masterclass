# [C++ / Go] Sliding Window + Hash Table - O(n) time + O(m) space solution

**Author:** mikazuki4712
**Votes:** 5
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4944416/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4944416/)

---

# Intuition
Number of subarrays with **exactly** `k` different integers = Number of subarrays with **at most** `k` different integers - Number of subarrays with **at most** `k - 1` different integers 

# Approach
- Count number of subarrays with at most `k` different integers using the sliding window technique. 
    - Maintain a hash table to track the occurences of each different integers.
    - Maintain a counter for counting number of different integers in the current window.
- When sliding to position `r`:
    - Increment the occurence count of `nums[r]`.
        - If the occurrence count of `nums[r]` is `1`, then `nums[r]` is a new different integer in the current window, increment the counter.
    - While the number of distinct integers is greater than `k`, slide the left side `l` to remove the begining numbers.
        - If after removing, the  occurrence count of that number is `0`, then a different integer is removed, decrement the counter.
    - Add to result with `r - l + 1` subarrays with at most `k` different integers and ending at `r`.
        - Explain : `differentIntegers[l .. r] <= goal` => `differentIntegers[l + 1 .. r] <= goal` => .... => `differentIntegers[r .. r] <= goal`

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(m)$, `m` is the number of different integers in `nums`

# Code
```C++ []
class Solution {
public:
    int subarraysWithAtMostKDistinct(const vector<int>& nums, int k) {
        if (k == 0)
            return 0;

        unordered_map<int, int> countOccurence;
        int differentIntegers = 0;
        int left = 0;
        int result = 0;
        for (int right = 0; right < nums.size(); right++) {
            countOccurence[nums[right]]++;
            if (countOccurence[nums[right]] == 1)
                differentIntegers++;

            while (differentIntegers > k) {
                countOccurence[nums[left]]--;
                if (countOccurence[nums[left]] == 0)
                    differentIntegers--;
                left++;
            }
            
            result += right - left + 1;
        }
        return result;
    }

    int subarraysWithKDistinct(vector<int>& nums, int k) {
        return subarraysWithAtMostKDistinct(nums, k) - subarraysWithAtMostKDistinct(nums, k - 1);
    }
};
```
```Go []
func subarraysWithAtMostKDistinct(nums []int, k int) int {
    if k == 0 {
        return 0
    }

    countOccurrence := make(map[int]int)
    differentIntegers := 0
    left := 0
    result := 0

    for right := 0; right < len(nums); right++ {
        countOccurrence[nums[right]]++
        if countOccurrence[nums[right]] == 1 {
            differentIntegers++
        }

        for differentIntegers > k {
            countOccurrence[nums[left]]--
            if countOccurrence[nums[left]] == 0 {
                differentIntegers--
            }
            left++
        }

        result += right - left + 1
    }
    return result
}

func subarraysWithKDistinct(nums []int, k int) int {
    return subarraysWithAtMostKDistinct(nums, k) - subarraysWithAtMostKDistinct(nums, k-1)
}
```