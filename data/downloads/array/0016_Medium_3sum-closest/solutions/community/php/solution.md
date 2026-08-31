# ✅ Detailed explanation of 3Sum Closest problem with many programming languages

**Author:** triettrinh
**Votes:** 1
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/6077762/](https://leetcode.com/problems/3sum-closest/solutions/6077762/)

---

# Solution: Sorting + Two Pointers

We sort the array first, then traverse the array. For each element $nums[i]$, we use pointers $j$ and $k$ to point to $i+1$ and $n-1$ respectively, calculate the sum of the three numbers. If the sum of the three numbers equals $target$, we directly return $target$. Otherwise, we update the answer based on the difference from $target$. If the sum of the three numbers is greater than $target$, we move $k$ one place to the left, otherwise, we move $j$ one place to the right.

The time complexity is $O(n^2)$, and the space complexity is $O(\log n)$. Here, $n$ is the length of the array.
    
# Code    


#### Python3

```python
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        n = len(nums)
        ans = inf
        for i, v in enumerate(nums):
            j, k = i + 1, n - 1
            while j < k:
                t = v + nums[j] + nums[k]
                if t == target:
                    return t
                if abs(t - target) < abs(ans - target):
                    ans = t
                if t > target:
                    k -= 1
                else:
                    j += 1
        return ans
```

#### Java

```java
class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int ans = 1 << 30;
        int n = nums.length;
        for (int i = 0; i < n; ++i) {
            int j = i + 1, k = n - 1;
            while (j < k) {
                int t = nums[i] + nums[j] + nums[k];
                if (t == target) {
                    return t;
                }
                if (Math.abs(t - target) < Math.abs(ans - target)) {
                    ans = t;
                }
                if (t > target) {
                    --k;
                } else {
                    ++j;
                }
            }
        }
        return ans;
    }
}
```

#### C++

```cpp
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        int ans = 1 << 30;
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
            int j = i + 1, k = n - 1;
            while (j < k) {
                int t = nums[i] + nums[j] + nums[k];
                if (t == target) return t;
                if (abs(t - target) < abs(ans - target)) ans = t;
                if (t > target)
                    --k;
                else
                    ++j;
            }
        }
        return ans;
    }
};
```

#### Go

```go
func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	ans := 1 << 30
	n := len(nums)
	for i, v := range nums {
		j, k := i+1, n-1
		for j < k {
			t := v + nums[j] + nums[k]
			if t == target {
				return t
			}
			if abs(t-target) < abs(ans-target) {
				ans = t
			}
			if t > target {
				k--
			} else {
				j++
			}
		}
	}
	return ans
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
```

#### TypeScript

```ts
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let ans: number = 1 << 30;
    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            const t: number = nums[i] + nums[j] + nums[k];
            if (t === target) {
                return t;
            }
            if (Math.abs(t - target) < Math.abs(ans - target)) {
                ans = t;
            }
            if (t > target) {
                --k;
            } else {
                ++j;
            }
        }
    }
    return ans;
}
```

#### JavaScript

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let ans = 1 << 30;
    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            const t = nums[i] + nums[j] + nums[k];
            if (t === target) {
                return t;
            }
            if (Math.abs(t - target) < Math.abs(ans - target)) {
                ans = t;
            }
            if (t > target) {
                --k;
            } else {
                ++j;
            }
        }
    }
    return ans;
};
```

#### PHP

```php
class Solution {
    /**
     * @param int[] $nums
     * @param int $target
     * @return int
     */

    function threeSumClosest($nums, $target) {
        $n = count($nums);
        $closestSum = $nums[0] + $nums[1] + $nums[2];
        $minDiff = abs($closestSum - $target);

        sort($nums);

        for ($i = 0; $i < $n - 2; $i++) {
            $left = $i + 1;
            $right = $n - 1;

            while ($left < $right) {
                $sum = $nums[$i] + $nums[$left] + $nums[$right];
                $diff = abs($sum - $target);

                if ($diff < $minDiff) {
                    $minDiff = $diff;
                    $closestSum = $sum;
                } elseif ($sum < $target) {
                    $left++;
                } elseif ($sum > $target) {
                    $right--;
                } else {
                    return $sum;
                }
            }
        }

        return $closestSum;
    }
}
```


    
# Contact information
If you have any questions or suggestions, please feel free to contact me at https://trinhminhtriet.com/
- Website: [trinhminhtriet.com](https://trinhminhtriet.com/)
- Github: [trinhminhtriet](https://github.com/trinhminhtriet)
- LinkedIn: [trinhminhtriet](https://www.linkedin.com/in/triet-trinh/)
- Facebook: [trinhminhtriet](https://www.facebook.com/trinhminhtriet)
- Twitter: [trinhminhtriet](https://twitter.com/trinhminhtriet)
- Email: [contact@trinhminhtriet.com](mailto:contact@trinhminhtriet.com)