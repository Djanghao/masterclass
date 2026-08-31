# Best Solution O(n) 🔥 with 0ms in Java / C++ / C / C# / Python(3) / JavaScript / TypeScript

**Author:** sidharthjain321
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4454192/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4454192/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
### "Simplified Strategy: Finding Strictly increasing / Strictly Ascending Subarrays at Both Ends"

Instead of counting the number of subarrays to remove to make the remaining array strictly increasing, you're now looking at the number of valid arrays that can be formed by selecting prefixes and suffixes from two strictly increasing partitions of the given array.
The valid subArrays will be made from only the strictly increasing parts.

# Approach
<!-- Describe your approach to solving the problem. -->
- `n = nums.size()`
- Firstly, find the `leftIdx` from start till the idx it is strictly increasing.
```
int leftIdx = 0;
for(int i = 1; i < n; i++) {
    if(nums[i-1] < nums[i]) leftIdx++;
    else break;
}
```
- if `leftIdx = n`, then it means the overall array is strictly increasing then we are returning the total number of subarrays, as if we remove anything from the strictly increasing array, it will always be strictly increasing.
```
if (leftIdx == n - 1) {
        long long int ans = n * (n + 1) / 2;
        return ans;
    }
```
- Secondly, find the `rightIdx` from end till the idx it is strictly increasing.
```
ll rightIdx = n-1;
for(int i = n-1; i > 0; i--) {
    if(nums[i-1] < nums[i]) rightIdx--;
    else break;
}
```
- Initialise a variable `totalIncremovableSubarrays` for storing the total count og incremovable subarrays.
```
long long int totalIncremovableSubarrays = 0;
```
- For example , Consider an array : [1,2,5,2,9,2,4,7,8,9] , here `leftIdx = 2` & `rightIdx = 5` , now if we don't take the left part of the array i.e, from idx `0` to `leftIdx` in our valid subarrays , then we have only strictly increasing elements as `[2,4,7,8,9]` and we want to make valid subarrays by taking nothing from left side and only taking elements from the right part then we can make :- `[2,4,7,8,9]`,`[4,7,8,9]`,`[7,8,9]`,`[8,9]`,`[9]`,`[]` as the removed incremovable subarrays was `[1,2,5,2,9]`,`[1,2,5,2,9,2]`,`[1,2,5,2,9,2,4]`,`[1,2,5,2,9,2,4,7]`,`[1,2,5,2,9,2,4,7,8]`,`[1,2,5,2,9,2,4,7,8,9]` respectively.

- Here you can see incremovable subarrays made from only right strictly increasing part was number of elements in the right part and plus one for removing the whole array as empty array is also considered as strictly increasing.

- So, the totalIncremovableSubarrays count will be increased by number of elements in the right part + 1. How many elements in the right part?? It is `n - rightIdx` and `1` for the empty array.
```
totalIncremovableSubarrays += (n - rightIdx) + 1;
```
- Now ,  we will take the left part elements one by one and check with right part elements and then count the number of subarrays formed.
- Now, How to check the left part element with right part element, as we know both the parts are strictly increasing , let's say left part is `[1,2,5]` and right part is `[2,4,7,8,9]`.

- Now , we will check if the left part element is smaller than the right part element, if yes , then we count the subarrays formed with the help of pointer pointing to the right part element , If No, then we increase the pointer in the right subArray by one and again repeat this process for all the left part elements.
```
int l = 0 , r = rightIdx;
while(l <= leftIdx) {
    while(r < n && nums[l] >= nums[r]) r++;
    totalIncremovableSubarrays += (n-r+1);
    l++;
    }
```
- Then , we return the `totalIncremovableSubarrays`.
```
return totalIncremovableSubarrays;

```
# Complexity
- **Time complexity**: $$O(n)$$
- As here we are using the two pointer approach for traversing the array elements only once


<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity:** $$O(1)$$
- Here, we are using only integer variables of limited number which is obviously.. O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
``` C []
#define ll long long int
long long incremovableSubarrayCount(int* nums, int n) {
    int leftIdx = 0;
    for (int i = 1; i < n; i++) {
        if (nums[i - 1] < nums[i]) {
            leftIdx++;
        } else {
            break;
        }
    }
    if (leftIdx == n - 1) {
        ll ans = (ll)n * (n + 1) / 2;
        return ans;
    }
    ll rightIdx = n - 1;
    for (int i = n - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            rightIdx--;
        } else {
            break;
        }
    }
    ll totalIncremovableSubarrays = 0;
    totalIncremovableSubarrays += (n - rightIdx) + 1;
    int l = 0, r = (int)rightIdx;
    while (l <= leftIdx) {
        while (r < n && nums[l] >= nums[r]) {
            r++;
        }
        totalIncremovableSubarrays += (n - r + 1);
        l++;
    }
    return totalIncremovableSubarrays;
}
```
```C++ []
#define ll long long int
class Solution {
public:
    long long incremovableSubarrayCount(vector<int>& nums) {
        ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);
        int n = nums.size();
        int leftIdx = 0;
        for(int i = 1; i < n; i++) {
            if(nums[i-1] < nums[i]) leftIdx++;
            else break;
        }
        if(leftIdx == n-1) {
            ll ans = (n * (n+1)) / 2;
            return ans;
        }
        ll rightIdx = n-1;
        for(int i = n-1; i > 0; i--) {
            if(nums[i-1] < nums[i]) rightIdx--;
            else break;
        }
        ll totalIncremovableSubarrays = 0;
        totalIncremovableSubarrays += (n - rightIdx ) + 1;
        int l = 0 , r = rightIdx;
        while(l <= leftIdx) {
            while(r < n && nums[l] >= nums[r]) r++;
            totalIncremovableSubarrays += (n-r+1);
            l++;
        }
        return totalIncremovableSubarrays;
    }
};
```
```C# []
public class Solution {
    public long IncremovableSubarrayCount(int[] nums) {
        int n = nums.Length;
        int leftIdx = 0;

        for (int i = 1; i < n; i++) {
            if (nums[i - 1] < nums[i]) {
                leftIdx++;
            } else {
                break;
            }
        }

        if (leftIdx == n - 1) {
            long ans = (long)n * (n + 1) / 2;
            return ans;
        }

        long rightIdx = n - 1;

        for (int i = n - 1; i > 0; i--) {
            if (nums[i - 1] < nums[i]) {
                rightIdx--;
            } else {
                break;
            }
        }

        long totalIncremovableSubarrays = 0;
        totalIncremovableSubarrays += (n - (int)rightIdx) + 1;

        int l = 0, r = (int)rightIdx;

        while (l <= leftIdx) {
            while (r < n && nums[l] >= nums[r]) {
                r++;
            }
            totalIncremovableSubarrays += (n - r + 1);
            l++;
        }

        return totalIncremovableSubarrays;
    }
}
```
``` Java []
class Solution {
    public long incremovableSubarrayCount(int[] nums) {
        int n = nums.length;
        int leftIdx = 0;

        for (int i = 1; i < n; i++) {
            if (nums[i - 1] < nums[i]) {
                leftIdx++;
            } else {
                break;
            }
        }

        if (leftIdx == n - 1) {
            long ans = (long) n * (n + 1) / 2;
            return ans;
        }

        int rightIdx = n - 1;

        for (int i = n - 1; i > 0; i--) {
            if (nums[i - 1] < nums[i]) {
                rightIdx--;
            } else {
                break;
            }
        }

        long totalIncremovableSubarrays = 0;
        totalIncremovableSubarrays += (n - rightIdx) + 1;

        int l = 0, r = rightIdx;

        while (l <= leftIdx) {
            while (r < n && nums[l] >= nums[r]) {
                r++;
            }
            totalIncremovableSubarrays += (n - r + 1);
            l++;
        }

        return totalIncremovableSubarrays;
    }
}


```
```python []
class Solution(object):
    def incremovableSubarrayCount(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        leftIdx = 0

        for i in range(1, n):
            if nums[i - 1] < nums[i]:
                leftIdx += 1
            else:
                break

        if leftIdx == n - 1:
            ans = (n * (n + 1)) // 2
            return ans

        rightIdx = n - 1

        for i in range(n - 1, 0, -1):
            if nums[i - 1] < nums[i]:
                rightIdx -= 1
            else:
                break

        totalIncremovableSubarrays = 0
        totalIncremovableSubarrays += (n - rightIdx) + 1

        l, r = 0, rightIdx

        while l <= leftIdx:
            while r < n and nums[l] >= nums[r]:
                r += 1
            totalIncremovableSubarrays += (n - r + 1)
            l += 1

        return totalIncremovableSubarrays
        
```
``` Python3 []
class Solution:
    def incremovableSubarrayCount(self, nums: List[int]) -> int:
        n = len(nums)
        leftIdx = 0

        for i in range(1, n):
            if nums[i - 1] < nums[i]:
                leftIdx += 1
            else:
                break

        if leftIdx == n - 1:
            ans = (n * (n + 1)) // 2
            return ans

        rightIdx = n - 1

        for i in range(n - 1, 0, -1):
            if nums[i - 1] < nums[i]:
                rightIdx -= 1
            else:
                break

        totalIncremovableSubarrays = 0
        totalIncremovableSubarrays += (n - rightIdx) + 1

        l, r = 0, rightIdx

        while l <= leftIdx:
            while r < n and nums[l] >= nums[r]:
                r += 1
            totalIncremovableSubarrays += (n - r + 1)
            l += 1

        return totalIncremovableSubarrays
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
    let n = nums.length;
    let leftIdx = 0;

    for (let i = 1; i < n; i++) {
      if (nums[i - 1] < nums[i]) leftIdx++;
      else break;
    }

    if (leftIdx === n - 1) {
      let ans = (n * (n + 1)) / 2;
      return ans;
    }

    let rightIdx = n - 1;

    for (let i = n - 1; i > 0; i--) {
      if (nums[i - 1] < nums[i]) rightIdx--;
      else break;
    }

    let totalIncremovableSubarrays = 0;
    totalIncremovableSubarrays += n - rightIdx + 1;

    let l = 0,
      r = rightIdx;

    while (l <= leftIdx) {
      while (r < n && nums[l] >= nums[r]) r++;
      totalIncremovableSubarrays += n - r + 1;
      l++;
    }

    return totalIncremovableSubarrays;
  }
```
``` TypeScript []
function incremovableSubarrayCount(nums: number[]): number {
    const n = nums.length;
        let leftIdx = 0;

        for (let i = 1; i < n; i++) {
            if (nums[i - 1] < nums[i]) {
                leftIdx++;
            } else {
                break;
            }
        }

        if (leftIdx == n - 1) {
            const ans = (n * (n + 1)) / 2;
            return ans;
        }

        let rightIdx = n - 1;

        for (let i = n - 1; i > 0; i--) {
            if (nums[i - 1] < nums[i]) {
                rightIdx--;
            } else {
                break;
            }
        }

        let totalIncremovableSubarrays = 0;
        totalIncremovableSubarrays += (n - rightIdx) + 1;

        let l = 0, r = rightIdx;

        while (l <= leftIdx) {
            while (r < n && nums[l] >= nums[r]) {
                r++;
            }
            totalIncremovableSubarrays += (n - r + 1);
            l++;
        }

        return totalIncremovableSubarrays;
};
```

```ruby []
# @param {Integer[]} nums
# @return {Integer}
def incremovable_subarray_count(nums)
    n = nums.length
    left_idx = 0

    (1...n).each do |i|
      if nums[i - 1] < nums[i]
        left_idx += 1
      else
        break
      end
    end

    return (n * (n + 1)) / 2 if left_idx == n - 1

    right_idx = n - 1

    (n - 1).downto(1) do |i|
      if nums[i - 1] < nums[i]
        right_idx -= 1
      else
        break
      end
    end

    total_incremovable_subarrays = 0
    total_incremovable_subarrays += (n - right_idx) + 1

    l, r = 0, right_idx

    while l <= left_idx
      while r < n && nums[l] >= nums[r]
        r += 1
      end
      total_incremovable_subarrays += (n - r + 1)
      l += 1
    end

    total_incremovable_subarrays
  end
```
``` Go []
func incremovableSubarrayCount(nums []int) int64 {
    n := len(nums)
	leftIdx := 0

	for i := 1; i < n; i++ {
		if nums[i-1] < nums[i] {
			leftIdx++
		} else {
			break
		}
	}

	if leftIdx == n-1 {
		ans := int64(n * (n + 1) / 2)
		return ans
	}

	rightIdx := int64(n - 1)

	for i := n - 1; i > 0; i-- {
		if nums[i-1] < nums[i] {
			rightIdx--
		} else {
			break
		}
	}

	totalIncremovableSubarrays := int64(0)
	totalIncremovableSubarrays += int64(n - int(rightIdx) + 1)

	l, r := 0, int(rightIdx)

	for l <= leftIdx {
		for r < n && nums[l] >= nums[r] {
			r++
		}
		totalIncremovableSubarrays += int64(n - r + 1)
		l++
	}

	return totalIncremovableSubarrays
}
// package main

// import (
// 	"fmt"
// )

// func incremovableSubarrayCount(nums []int) int64 {
	
// }

// func main() {
// 	nums := []int{1, 2, 3, 4, 5}
// 	result := incremovableSubarrayCount(nums)
// 	fmt.Println(result)
// }
```
``` rust []
impl Solution {
    pub fn incremovable_subarray_count(nums: Vec<i32>) -> i64 {
        let n = nums.len();
        let mut left_idx = 0;

        for i in 1..n {
            if nums[i - 1] < nums[i] {
                left_idx += 1;
            } else {
                break;
            }
        }

        if left_idx == n - 1 {
            let ans = (n as i64 * (n as i64 + 1)) / 2;
            return ans;
        }

        let mut right_idx = n as i64 - 1;

        for i in (1..n).rev() {
            if nums[i - 1] < nums[i] {
                right_idx -= 1;
            } else {
                break;
            }
        }

        let mut total_incremovable_subarrays = 0;
        total_incremovable_subarrays += n as i64 - right_idx + 1;

        let mut l = 0;
        let mut r = right_idx as usize;

        while l <= left_idx {
            while r < n && nums[l] >= nums[r] {
                r += 1;
            }
            total_incremovable_subarrays += (n as i64 - r as i64 + 1);
            l += 1;
        }

        total_incremovable_subarrays
    }

```
[Instagram](https://www.instagram.com/iamsidharthaa__/)
[LinkedIn](https://www.linkedin.com/in/sidharth-jain-36b542133)
**If you find this solution helpful, consider giving it an upvote! Your support is appreciated. Keep coding, stay healthy, and may your programming endeavors be both rewarding and enjoyable!**