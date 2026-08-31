# Solution by Dare2Solve | Full Explanation | O(30n)

**Author:** Dare2Solve
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5251211/](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5251211/)

---

```Explanation []
authorslog.vercel.app/blog/L76HrBZxwH
```

# Code

```C []
int abs(int x) {
    return x < 0 ? -x : x;
}

int min(int a, int b) {
    return a < b ? a : b;
}

int minimumDifference(int* nums, int numsSize, int k) {
    int res = INT_MAX;
    int prev[1 << 15];
    int prevSize = 0;

    for (int i = 0; i < numsSize; i++) {
        int next[1 << 15];
        int nextSize = 0;

        next[nextSize++] = nums[i];
        for (int j = 0; j < prevSize; j++) {
            int val = prev[j] & nums[i];
            int found = 0;
            for (int k = 0; k < nextSize; k++) {
                if (next[k] == val) {
                    found = 1;
                    break;
                }
            }
            if (!found) {
                next[nextSize++] = val;
            }
        }
        for (int j = 0; j < nextSize; j++) {
            res = min(res, abs(k - next[j]));
        }
        prevSize = nextSize;
        for (int j = 0; j < nextSize; j++) {
            prev[j] = next[j];
        }
    }

    return res;
}
```

```cpp []
class Solution {
public:
    int minimumDifference(vector<int>& nums, int k) {
        int res = INT_MAX;
        unordered_set<int> prev;

        for (int num : nums) {
            unordered_set<int> next = {num};
            for (int x : prev) {
                next.insert(x & num);
            }
            for (int x : next) {
                res = min(res, abs(k - x));
            }
            prev = next;
        }

        return res;
    }
};
```

```Python []
class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        res = float('inf')
        prev = set()

        for num in nums:
            next_set = {num}
            for x in prev:
                next_set.add(x & num)
            for x in next_set:
                res = min(res, abs(k - x))
            prev = next_set

        return res
```

```Java []
class Solution {
    public int minimumDifference(int[] nums, int k) {
        int res = Integer.MAX_VALUE;
        Set<Integer> prev = new HashSet<>();

        for (int num : nums) {
            Set<Integer> next = new HashSet<>();
            next.add(num);
            for (int x : prev) {
                next.add(x & num);
            }
            for (int x : next) {
                res = Math.min(res, Math.abs(k - x));
            }
            prev = next;
        }

        return res;
    }
}
```

```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  var res = Number.MAX_SAFE_INTEGER;
  var prev = new Set();

  for (var i = 0; i < nums.length; i++) {
    var next = new Set([nums[i]]);
    for (var x of prev) next.add(x & nums[i]);
    for (var x of next) res = Math.min(res, Math.abs(k - x));
    prev = next;
  }

  return res;
};
```

```TypeScript []
function minimumDifference(nums: number[], k: number): number {
  let res = Number.MAX_SAFE_INTEGER;
  let prev = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    let next = new Set<number>([nums[i]]);
    for (let x of prev) next.add(x & nums[i]);
    for (let x of next) res = Math.min(res, Math.abs(k - x));
    prev = next;
  }

  return res;
}
```

```Go []
func minimumDifference(nums []int, k int) int {
	res := math.MaxInt
	prev := map[int]struct{}{}

	for _, num := range nums {
		next := map[int]struct{}{num: {}}
		for x := range prev {
			next[x&num] = struct{}{}
		}
		for x := range next {
			res = min(res, abs(k-x))
		}
		prev = next
	}

	return res
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```

```C# []
public class Solution {
    public int MinimumDifference(int[] nums, int k) {
        int res = int.MaxValue;
        HashSet<int> prev = new HashSet<int>();

        foreach (int num in nums) {
            HashSet<int> next = new HashSet<int> { num };
            foreach (int x in prev) {
                next.Add(x & num);
            }
            foreach (int x in next) {
                res = Math.Min(res, Math.Abs(k - x));
            }
            prev = next;
        }

        return res;
    }
}
```