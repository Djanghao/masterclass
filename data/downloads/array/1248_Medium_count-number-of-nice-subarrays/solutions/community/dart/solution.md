# ✅Beats 100% -Detailed Explanation[ TWO APPROACHES] -C++/Java/Python/JS/Ruby/Go/Dart - Sliding Window

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349589/](https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349589/)

---


# Intuition
To find the number of subarrays with exactly `k` odd numbers, we need to keep track of the count of odd numbers while traversing the array. We can solve this problem using two different approaches involving the sliding window technique.

# Approach
### Solution 1
1. Use two pointers to maintain a window.
2. Count the odd numbers within the window.
3. Adjust the window when the count of odd numbers exceeds `k`.
4. Track the valid subarrays that satisfy the condition.

### Solution 2
1. Use two pointers to maintain a window.
2. Count the odd numbers within the window.
3. Adjust the window when the count of odd numbers exceeds `k`.
4. Calculate the number of subarrays with at most `k` odd numbers and subtract the count of subarrays with at most `k-1` odd numbers to get the exact count of subarrays with `k` odd numbers.

# Complexity
- Time complexity: $$O(n)$$ where `n` is the length of the array.
- Space complexity: $$O(1)$$ as we are using a constant amount of extra space.

# Code
```C++ []
// Solution 1
class Solution {
public:
    int numberOfSubarrays_v1(std::vector<int>& nums, int k) {
        int count = 0, n = nums.size(), ans = 0, i = 0;
        for (int j = 0; j < n; ++j) {
            if (nums[j] % 2 == 1) count++;
            while (count > k) {
                if (nums[i] % 2 == 1) count--;
                i++;
            }
            int p = i;
            int count1 = count;
            while (count1 == k) {
                ans++;
                if (nums[p] % 2 == 1) count1--;
                p++;
            }
        }
        return ans;
    }
};

// Solution 2
class Solution {
public:
    int numberOfSubarrays(std::vector<int>& nums, int k) {
        return number(nums, k) - number(nums, k - 1);
    }

private:
    int number(const std::vector<int>& nums, int k) {
        int count = 0, ans = 0, i = 0, n = nums.size();
        for (int j = 0; j < n; ++j) {
            if (nums[j] % 2 == 1) count++;
            while (count > k) {
                if (nums[i] % 2 == 1) count--;
                i++;
            }
            ans += j - i + 1;
        }
        return ans;
    }
};
```
```python []
# Solution 1
class Solution:
    def numberOfSubarrays_v1(self, nums: List[int], k: int) -> int:
        count = 0
        n = len(nums)
        ans = 0
        i = 0
        for j in range(n):
            if nums[j] % 2 == 1:
                count += 1
            while count > k:
                if nums[i] % 2 == 1:
                    count -= 1
                i += 1
            p = i
            count1 = count
            while count1 == k:
                ans += 1
                if nums[p] % 2 == 1:
                    count1 -= 1
                p += 1
        return ans

# Solution 2
class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        return self.number(nums, k) - self.number(nums, k - 1)

    def number(self, nums: List[int], k: int) -> int:
        count = 0
        n = len(nums)
        ans = 0
        i = 0
        for j in range(n):
            if nums[j] % 2 == 1:
                count += 1
            while count > k:
                if nums[i] % 2 == 1:
                    count -= 1
                i += 1
            ans += j - i + 1
        return ans

```
```Java []
// Solution 1
class Solution {
    public int numberOfSubarrays_v1(int[] nums, int k) {
        int count = 0, n = nums.length, ans = 0, i = 0;
        for (int j = 0; j < n; j++) {
            if (nums[j] % 2 == 1) count++;
            while (count > k) {
                if (nums[i] % 2 == 1) count--;
                i++;
            }
            int p = i;
            int count1 = count;
            while (count1 == k) {
                ans++;
                if (nums[p] % 2 == 1) count1--;
                p++;
            }
        }
        return ans;
    }
}

// Solution 2
class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        return number(nums, k) - number(nums, k - 1);
    }

    private int number(int[] nums, int k) {
        int count = 0, ans = 0, i = 0;
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] % 2 == 1) count++;
            while (count > k) {
                if (nums[i] % 2 == 1) count--;
                i++;
            }
            ans += j - i + 1;
        }
        return ans;
    }
}

```
```javascript []
// Solution 1
class Solution {
    numberOfSubarrays_v1(nums, k) {
        let count = 0, n = nums.length, ans = 0, i = 0;
        for (let j = 0; j < n; j++) {
            if (nums[j] % 2 === 1) count++;
            while (count > k) {
                if (nums[i] % 2 === 1) count--;
                i++;
            }
            let p = i;
            let count1 = count;
            while (count1 === k) {
                ans++;
                if (nums[p] % 2 === 1) count1--;
                p++;
            }
        }
        return ans;
    }
}

// Solution 2
class Solution {
    numberOfSubarrays(nums, k) {
        return this.number(nums, k) - this.number(nums, k - 1);
    }

    number(nums, k) {
        let count = 0, ans = 0, i = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % 2 === 1) count++;
            while (count > k) {
                if (nums[i] % 2 === 1) count--;
                i++;
            }
            ans += j - i + 1;
        }Approaches
        return ans;
    }
}

```
```Go []
// Solution 1
func numberOfSubarrays_v1(nums []int, k int) int {
    count, n, ans, i := 0, len(nums), 0, 0
    for j := 0; j < n; j++ {
        if nums[j] % 2 == 1 {
            count++
        }
        for count > k {
            if nums[i] % 2 == 1 {
                count--
            }
            i++
        }
        p := i
        count1 := count
        for count1 == k {
            ans++
            if nums[p] % 2 == 1 {
                count1--
            }
            p++
        }
    }
    return ans
}

// Solution 2
func numberOfSubarrays(nums []int, k int) int {
    return number(nums, k) - number(nums, k-1)
}

func number(nums []int, k int) int {
    count, ans, i := 0, 0, 0
    for j := 0; j < len(nums); j++ {
        if nums[j] % 2 == 1 {
            count++
        }
        for count > k {
            if nums[i] % 2 == 1 {
                count--
            }
            i++
        }
        ans += j - i + 1
    }
    return ans
}

```
```ruby []
# Solution 1
class Solution
    def numberOfSubarrays_v1(nums, k)
        count = 0
        n = nums.length
        ans = 0
        i = 0
        for j in 0...n
            if nums[j] % 2 == 1
                count += 1
            end
            while count > k
                if nums[i] % 2 == 1
                    count -= 1
                end
                i += 1
            end
            p = i
            count1 = count
            while count1 == k
                ans += 1
                if nums[p] % 2 == 1
                    count1 -= 1
                end
                p += 1
            end
        end
        return ans
    end
end

# Solution 2
class Solution
    def numberOfSubarrays(nums, k)
        return number(nums, k) - number(nums, k-1)
    end

    def number(nums, k)
        count = 0
        ans = 0
        i = 0
        for j in 0...nums.length
            if nums[j] % 2 == 1
                count += 1
            end
            while count > k
                if nums[i] % 2 == 1
                    count -= 1
                end
                i += 1
            end
            ans += j - i + 1
        end
        return ans
    end
end

```
```Dart []
// Solution 1
class Solution {
    int numberOfSubarrays_v1(List<int> nums, int k) {
        int count = 0, n = nums.length, ans = 0, i = 0;
        for (int j = 0; j < n; j++) {
            if (nums[j] % 2 == 1) count++;
            while (count > k) {
                if (nums[i] % 2 == 1) count--;
                i++;
            }
            int p = i;
            int count1 = count;
            while (count1 == k) {
                ans++;
                if (nums[p] % 2 == 1) count1--;
                p++;
            }
        }
        return ans;
    }
}

// Solution 2
class Solution {
    int numberOfSubarrays(List<int> nums, int k) {
        return number(nums, k) - number(nums, k - 1);
    }

    int number(List<int> nums, int k) {
        int count = 0, ans = 0, i = 0;
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] % 2 == 1) count++;
            while (count > k) {
                if (nums[i] % 2 == 1) count--;
                i++;
            }
            ans += j - i + 1;
        }
        return ans;
    }
}

```