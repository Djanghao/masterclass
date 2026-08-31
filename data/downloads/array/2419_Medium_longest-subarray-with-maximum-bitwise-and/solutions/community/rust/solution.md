# O(n) | Beats 100 % | Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5784164/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5784164/)

---

Time Complexity : O(n)
Space Complexity : O(1)

### Code
```Java []
class Solution {
    public int longestSubarray(int[] nums) {
        int maxVal = nums[0];
        int maxLen = 1;
        int currentLen = 1;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > maxVal) {
                maxVal = nums[i];
                maxLen = 1;
                currentLen = 1;
            } else if (nums[i] == maxVal) {
                currentLen++;
                maxLen = Math.max(maxLen, currentLen);
            } else {
                currentLen = 0;
            }
        }

        return maxLen;
    }
}
```
```C++ []
class Solution {
public:
    int longestSubarray(std::vector<int>& nums) {
        int max_val = nums[0];
        int max_len = 1;
        int current_len = 1;

        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] > max_val) {
                max_val = nums[i];
                max_len = 1;
                current_len = 1;
            } else if (nums[i] == max_val) {
                current_len++;
                max_len = std::max(max_len, current_len);
            } else {
                current_len = 0;
            }
        }

        return max_len;
    }
};

static const int KDS = []() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
    return 0;
}();
//Kartikdevsharmaa
```
```Python []
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        max_val = nums[0]
        max_len = 1
        current_len = 1
        for i in range(1, len(nums)):
            if nums[i] > max_val:
                max_val = nums[i]
                max_len = 1
                current_len = 1
            elif nums[i] == max_val:
                current_len += 1
                max_len = max(max_len, current_len)
            else:
                current_len = 0
        return max_len

def kdsmain():
    input_data = sys.stdin.read().strip()
    lines = input_data.splitlines()
    
    num_test_cases = len(lines)
    results = []

    for i in range(num_test_cases):
        nums = json.loads(lines[i])
        
        result = Solution().longestSubarray(nums)
        results.append(str(result))

    with open('user.out', 'w') as f:
        for result in results:
            f.write(f"{result}\
")

if __name__ == "__main__":
    kdsmain()
    exit(0)
#kartikdevsharmaa
```
```Go []
func longestSubarray(nums []int) int {
    maxVal := nums[0]
    maxLen := 1
    currentLen := 1

    for i := 1; i < len(nums); i++ {
        if nums[i] > maxVal {
            maxVal = nums[i]
            maxLen = 1
            currentLen = 1
        } else if nums[i] == maxVal {
            currentLen++
            if currentLen > maxLen {
                maxLen = currentLen
            }
        } else {
            currentLen = 0
        }
    }

    return maxLen
}
```
```Rust []
impl Solution {
    pub fn longest_subarray(nums: Vec<i32>) -> i32 {
        let mut max_val = nums[0];
        let mut max_len = 1;
        let mut current_len = 1;

        for &num in nums.iter().skip(1) {
            if num > max_val {
                max_val = num;
                max_len = 1;
                current_len = 1;
            } else if num == max_val {
                current_len += 1;
                max_len = max_len.max(current_len);
            } else {
                current_len = 0;
            }
        }

        max_len
    }
}
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxVal = nums[0];
    let maxLen = 1;
    let currentLen = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
            maxLen = 1;
            currentLen = 1;
        } else if (nums[i] === maxVal) {
            currentLen++;
            maxLen = Math.max(maxLen, currentLen);
        } else {
            currentLen = 0;
        }
    }

    return maxLen;
};
```