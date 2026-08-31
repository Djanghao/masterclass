# [O(n) + O(1) Greedy + Proof  + Line Sweep Tutorial] Minimum Number of K Consecutive Bit Flips

**Author:** never_get_piped
**Votes:** 30
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5359515/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5359515/)

---

**Topic** :  Greedy
Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution. In these algorithms, decisions are made based on the information available at the current moment without considering the consequences of these decisions in the future. The key idea is to select the best possible choice at each step, leading to a solution that may not always be the most optimal but is often good enough for many problems. (GFG Reference)

**A thorough proof is essential to demonstrate the correctness of a perfect Greedy solution**.
___

## Line Sweep
Please refer [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/) as the introductory problem.

We can use the line sweep algorithm to efficiently compute changes to a subarray's values and calculate the final array.

```
Suppose nums = [1, 2, 3, 4, 5].

We want to increase the subarray from index 1 to 3 by 2 and 
decrease the subarray from index 2 to 4 by 1.

To apply the first change, delta[1] += 2 and delta[3 + 1] -= 2
To apply the second change, delta[2] -= 1 and delta[4 + 1] += 1. (We will skip index 4 + 1 = 5 as it is not needed)

Our line sweep `delta` array starts as [0, 0, 0, 0, 0].
1st operation :  Resulting delta becomes [0, 2, 0, 0, -2].
2nd operation :  Resulting delta becomes [0, 2, -1, 0, 1].

Applying Changes (Line Sweep):

current_value starts at 0.
Sweep through delta:
At index 0: current_value = 0, nums[0] = 1.
At index 1: current_value += 2, nums[1] = 2 + 2 = 4.
At index 2: current_value += -1, nums[2] = 3 - 1 = 2.
At index 3: current_value += 0, nums[3] = 4 + 0 = 4.
At index 4: current_value += 1, nums[4] = 5 + 1 = 6.

nums after applying all changes: [1, 4, 2, 4, 6].
```

## Solution 
The **greedy intuition** suggests that when `nums[i]` is the first `0` after all preceding elements `nums[0 : i - 1]` are `1`, we should flip the subarray `nums[i, i + k - 1]` provided `i + k - 1 < n`.

If each subarray is flipped manually, the worst-case time complexity could potentially reach `O(nk)`. 
Note that if an element with value  `x`, where `0 <= x <= 1`, is flipped `n` times, its final value is `(x + n) % 2`.  

Let's assume the final value of the `i`-th element is equal to `nums[i] + x[i]`, where initially all `x[i]` values are `0`. If we flip a subarray starting at index `i`, each element in the range `x[i : i + k - 1]` is incremented by `1`. This can be achieved using an additional `x` array and applying the **line sweep** algorithm. 

However, since `k` is fixed, we can use a single variable `flips` to represent the cumulative change in our line sweep algorithm. If we flip the current element, we increase `flips` by `1`. We need to decrease `flips` by `1` if we flipped the element `k - i` positions before the current one. We can mark this element as flipped by using a negative integer.

## Proof
We need to proof :
```
The greedy intuition suggests that when `nums[i]` is the first `0` after all preceding elements `nums[0 : i - 1]` are `1`,
we should flip the subarray `nums[i, i + k - 1]` provided `i + k - 1 < n`.
```

First, it's important to note that flipping an index twice would cancel out its effects. We can prove this by **contradiction**: if we don't flip the first `0` but flip any element either before or after it.

If we flip elements after the first `0` element, they do not affect the first element directly. To influence the first `0` element, either the first element itself or some elements before it must be flipped.

If we flip elements before the first `0`, noting that they are all `1`, flipping them may turn `1` into a `0`, which would then require flipping it back. This newly flipped `0` becomes the first `0`, and then we have the choice to either flip it or flip any elements before it. If we choose not to flip it but flip any elements before it, eventually the first element will become `0`, leaving us with no alternative but to flip the first `0`.


<br/><br/>
```c++ []
class Solution {
public:
    int minKBitFlips(vector<int>& nums, int k) {
        int ans = 0, flips = 0;
        for(int i = 0; i < nums.size(); i++) {
            if((nums[i] + flips) % 2 == 0) {
                if(i > nums.size() - k) {
                    return -1;
                } else {
                    ans++;
                    flips++;
                    nums[i] = -1;
                }
            }
            if(i + 1 >= k) {
                flips -= (nums[i - k + 1] < 0);     
            }
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int minKBitFlips(int[] nums, int k) {
        int ans = 0, flips = 0;
        for (int i = 0; i < nums.length; i++) {
            if ((nums[i] + flips) % 2 == 0) {
                if (i > nums.length - k) {
                    return -1;
                } else {
                    ans++;
                    flips++;
                    nums[i] = -1;
                }
            }
            if (i + 1 >= k) {
                flips -= (nums[i - k + 1] < 0 ? 1 : 0);
            }
        }
        return ans;
    }
}
```
```python []
class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
        ans, flips = 0, 0
        for i in range(len(nums)):
            if (nums[i] + flips) % 2 == 0:
                if i > len(nums) - k:
                    return -1
                else:
                    ans += 1
                    flips += 1
                    nums[i] = -1
            if i + 1 >= k:
                flips -= 1 if nums[i - k + 1] < 0 else 0
        return ans
```
```Go []
func minKBitFlips(nums []int, k int) int {
    ans, flips := 0, 0
	for i := 0; i < len(nums); i++ {
		if (nums[i] + flips) % 2 == 0 {
			if i > len(nums) - k {
				return -1
			} else {
				ans++
				flips++
				nums[i] = -1
			}
		}
		if i + 1 >= k {
			if nums[i - k + 1] < 0 {
				flips--
			}
		}
	}
	return ans
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function minKBitFlips($nums, $k) {
        $ans = 0;
        $flips = 0;
        for ($i = 0; $i < count($nums); $i++) {
            if (($nums[$i] + $flips) % 2 == 0) {
                if ($i > count($nums) - $k) {
                    return -1;
                } else {
                    $ans++;
                    $flips++;
                    $nums[$i] = -1;
                }
            }
            if ($i + 1 >= $k) {
                $flips -= ($nums[$i - $k + 1] < 0 ? 1 : 0);
            }
        }
        return $ans;
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    let ans = 0;
    let flips = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] + flips) % 2 === 0) {
            if (i > nums.length - k) {
                return -1;
            } else {
                ans++;
                flips++;
                nums[i] = -1;
            }
        }
        if (i + 1 >= k) {
            flips -= (nums[i - k + 1] < 0 ? 1 : 0);
        }
    }
    return ans;
};
```

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**