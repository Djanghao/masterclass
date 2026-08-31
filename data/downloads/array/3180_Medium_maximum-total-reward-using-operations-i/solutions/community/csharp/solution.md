# Solution by Dare2Solve | Detailed Explanation | Without Bit Manipulation

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282612/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282612/)

---

# Same as
**3181. Maximum Total Reward Using Operations II**

```Explanation []
authorslog.vercel.app/blog/PwG1Mwl69c
```

# Code

```C++ []
class Solution {
public:
    int maxTotalReward(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        nums.erase(unique(nums.begin(), nums.end()), nums.end());
        unordered_set<int> set(nums.begin(), nums.end());
        unordered_map<int, int> cache;
        return nums.back() + helper(nums.back() - 1, nums, set, cache);
    }

private:
    int helper(int num, const vector<int>& nums, const unordered_set<int>& set, unordered_map<int, int>& cache) {
        if (cache.find(num) != cache.end()) {
            return cache[num];
        }
        if (set.find(num) != set.end() || num == 0) {
            return num;
        }

        int ind = bisectLeft(nums, num);
        int res = 0;

        for (int i = 0; i < ind; ++i) {
            res = max(res, nums[i] + helper(min(nums[i] - 1, num - nums[i]), nums, set, cache));
        }

        cache[num] = res;
        return res;
    }

    int bisectLeft(const vector<int>& arr, int target) {
        int lo = 0;
        int hi = arr.size();
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (arr[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    }
};
```

```Python []
class Solution:
    def maxTotalReward(self, nums: List[int]) -> int:
        nums.sort()
        nums = list(set(nums))
        nums.sort()
        cache = {}
        set_nums = set(nums)
        
        def helper(num: int) -> int:
            if num in cache:
                return cache[num]
            if num in set_nums or num == 0:
                return num

            ind = bisect_left(nums, num)
            res = 0

            for i in range(ind):
                res = max(res, nums[i] + helper(min(nums[i] - 1, num - nums[i])))

            cache[num] = res
            return res

        return nums[-1] + helper(nums[-1] - 1)
```

```Java []
class Solution {
    public int maxTotalReward(int[] nums) {
        Arrays.sort(nums);
        nums = removeDuplicates(nums);
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        Map<Integer, Integer> cache = new HashMap<>();
        return nums[nums.length - 1] + helper(nums[nums.length - 1] - 1, nums, set, cache);
    }

    private int helper(int num, int[] nums, Set<Integer> set, Map<Integer, Integer> cache) {
        if (cache.containsKey(num)) {
            return cache.get(num);
        }
        if (set.contains(num) || num == 0) {
            return num;
        }

        int ind = bisectLeft(nums, num);
        int res = 0;

        for (int i = 0; i < ind; i++) {
            res = Math.max(res, nums[i] + helper(Math.min(nums[i] - 1, num - nums[i]), nums, set, cache));
        }

        cache.put(num, res);
        return res;
    }

    private int bisectLeft(int[] arr, int target) {
        int lo = 0, hi = arr.length;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (arr[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    }

    private int[] removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return nums;
        }
        int[] temp = new int[nums.length];
        int j = 0;
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] != nums[i + 1]) {
                temp[j++] = nums[i];
            }
        }
        temp[j++] = nums[nums.length - 1];
        return Arrays.copyOfRange(temp, 0, j);
    }
}
```

```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxTotalReward = function (nums) {
    nums.sort((a, b) => a - b);
    var set = new Set(nums);
    nums = [...set];
    var cache = {};
    return nums[nums.length - 1] + helper(nums[nums.length - 1] - 1);

    function helper(num) {
        if (num in cache) return cache[num];
        if (set.has(num) || num === 0) return num;

        var ind = bisectLeft(nums, num);
        var res = 0;

        for (var i = 0; i < ind; i++) {
            res = Math.max(
                res,
                nums[i] + helper(Math.min(nums[i] - 1, num - nums[i]))
            );
        }

        cache[num] = res;
        return res;
    }
};

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
var bisectLeft = function (arr, target) {
    var lo = 0;
    var hi = arr.length;

    while (lo < hi) {
        var mid = (lo + hi) >> 1;
        if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};
```

```Go []
func maxTotalReward(nums []int) int {
	sort.Ints(nums)
	nums = removeDuplicates(nums)
	set := make(map[int]struct{})
	for _, num := range nums {
		set[num] = struct{}{}
	}
	cache := make(map[int]int)
	return nums[len(nums)-1] + helper(nums[len(nums)-1]-1, nums, set, cache)
}

func helper(num int, nums []int, set map[int]struct{}, cache map[int]int) int {
	if val, found := cache[num]; found {
		return val
	}
	if _, found := set[num]; found || num == 0 {
		return num
	}

	ind := bisectLeft(nums, num)
	res := 0

	for i := 0; i < ind; i++ {
		res = max(res, nums[i]+helper(min(nums[i]-1, num-nums[i]), nums, set, cache))
	}

	cache[num] = res
	return res
}

func bisectLeft(arr []int, target int) int {
	lo := 0
	hi := len(arr)
	for lo < hi {
		mid := (lo + hi) / 2
		if arr[mid] < target {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	return lo
}

func removeDuplicates(nums []int) []int {
	if len(nums) == 0 {
		return nums
	}
	res := []int{nums[0]}
	for i := 1; i < len(nums); i++ {
		if nums[i] != nums[i-1] {
			res = append(res, nums[i])
		}
	}
	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
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
    public int MaxTotalReward(int[] nums) {
        Array.Sort(nums);
        nums = nums.Distinct().ToArray();
        var set = new HashSet<int>(nums);
        var cache = new Dictionary<int, int>();
        return nums[nums.Length - 1] + Helper(nums[nums.Length - 1] - 1, nums, set, cache);
    }

    private int Helper(int num, int[] nums, HashSet<int> set, Dictionary<int, int> cache) {
        if (cache.ContainsKey(num)) {
            return cache[num];
        }
        if (set.Contains(num) || num == 0) {
            return num;
        }

        int ind = BisectLeft(nums, num);
        int res = 0;

        for (int i = 0; i < ind; i++) {
            res = Math.Max(res, nums[i] + Helper(Math.Min(nums[i] - 1, num - nums[i]), nums, set, cache));
        }

        cache[num] = res;
        return res;
    }

    private int BisectLeft(int[] arr, int target) {
        int lo = 0, hi = arr.Length;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (arr[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    }
}
```