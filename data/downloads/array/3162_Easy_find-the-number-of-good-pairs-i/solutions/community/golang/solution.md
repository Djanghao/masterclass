# Solution by Dare2Solve | Detail Explanation | O(n * sqrt(max(x)))

**Author:** Dare2Solve
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5279252/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5279252/)

---

```Explanation []
authorslog.vercel.app/blog/H8FBC3F9WU
```

# Code

```C++ []
class Solution {
public:
    int numberOfPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        unordered_map<int, int> map1;
        unordered_map<int, int> map2;

        for (int x : nums1) {
            if (x % k == 0) {
                int f = x / k;
                map1[f]++;
            }
        }

        for (int x : nums2) {
            map2[x]++;
        }

        int res = 0;
        for (const auto& [x, y] : map1) {
            for (int i = 1; i <= sqrt(x); ++i) {
                if (x % i == 0) {
                    int cur = x / i;
                    if (map2.find(i) != map2.end()) {
                        res += map2[i] * y;
                    }
                    if (cur != i && map2.find(cur) != map2.end()) {
                        res += map2[cur] * y;
                    }
                }
            }
        }

        return res;
    }
};
```

```Python []
class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        map1 = defaultdict(int)
        map2 = defaultdict(int)

        for x in nums1:
            if x % k == 0:
                f = x // k
                map1[f] += 1

        for x in nums2:
            map2[x] += 1

        res = 0
        for x, y in map1.items():
            for i in range(1, int(math.sqrt(x)) + 1):
                if x % i == 0:
                    cur = x // i
                    if i in map2:
                        res += map2[i] * y
                    if cur != i and cur in map2:
                        res += map2[cur] * y

        return res
```

```Java []
class Solution {
    public int numberOfPairs(int[] nums1, int[] nums2, int k) {
        Map<Integer, Integer> map1 = new HashMap<>();
        Map<Integer, Integer> map2 = new HashMap<>();

        for (int x : nums1) {
            if (x % k == 0) {
                int f = x / k;
                map1.put(f, map1.getOrDefault(f, 0) + 1);
            }
        }

        for (int x : nums2) {
            map2.put(x, map2.getOrDefault(x, 0) + 1);
        }

        int res = 0;
        for (Map.Entry<Integer, Integer> entry : map1.entrySet()) {
            int x = entry.getKey();
            int y = entry.getValue();
            for (int i = 1; i <= Math.sqrt(x); ++i) {
                if (x % i == 0) {
                    int cur = x / i;
                    if (map2.containsKey(i)) {
                        res += map2.get(i) * y;
                    }
                    if (cur != i && map2.containsKey(cur)) {
                        res += map2.get(cur) * y;
                    }
                }
            }
        }

        return res;
    }
}
```

```JavaScript []
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  var map1 = new Map();
  var map2 = new Map();

  nums1.forEach((x) => {
    if (x % k === 0) {
      var f = x / k;
      map1.set(f, (map1.get(f) || 0) + 1);
    }
  });

  nums2.forEach((x) => {
    map2.set(x, (map2.get(x) || 0) + 1);
  });

  var res = 0;
  for (var [x, y] of map1) {
    for (var i = 1; i <= Math.sqrt(x); ++i) {
      if (x % i === 0) {
        var cur = x / i;
        if (map2.has(i)) res += map2.get(i) * y;
        if (cur !== i && map2.has(cur)) res += map2.get(cur) * y;
      }
    }
  }
  return res;
};
```

```Go []
func numberOfPairs(nums1 []int, nums2 []int, k int) int {
    map1 := make(map[int]int)
    map2 := make(map[int]int)

    for _, x := range nums1 {
        if x % k == 0 {
            f := x / k
            map1[f] = map1[f] + 1
        }
    }

    for _, x := range nums2 {
        map2[x] = map2[x] + 1
    }

    var res int = 0
    for x, y := range map1 {
        for i := 1; i <= int(math.Sqrt(float64(x))); i++ {
            if x % i == 0 {
                cur := x / i
                if count, ok := map2[i]; ok {
                    res += count * y
                }
                if cur != i {
                    if count, ok := map2[cur]; ok {
                        res += count * y
                    }
                }
            }
        }
    }

    return res
}
```

```C# []
public class Solution {
    public int NumberOfPairs(int[] nums1, int[] nums2, int k) {
        Dictionary<int, int> map1 = new Dictionary<int, int>();
        Dictionary<int, int> map2 = new Dictionary<int, int>();

        foreach (int x in nums1) {
            if (x % k == 0) {
                int f = x / k;
                if (map1.ContainsKey(f))
                    map1[f]++;
                else
                    map1[f] = 1;
            }
        }

        foreach (int x in nums2) {
            if (map2.ContainsKey(x))
                map2[x]++;
            else
                map2[x] = 1;
        }

        int res = 0;
        foreach (var entry in map1) {
            int x = entry.Key;
            int y = entry.Value;
            for (int i = 1; i <= Math.Sqrt(x); ++i) {
                if (x % i == 0) {
                    int cur = x / i;
                    if (map2.ContainsKey(i))
                        res += map2[i] * y;
                    if (cur != i && map2.ContainsKey(cur))
                        res += map2[cur] * y;
                }
            }
        }

        return res;
    }
}
```