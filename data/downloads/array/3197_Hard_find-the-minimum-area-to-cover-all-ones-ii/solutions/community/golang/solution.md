# Solution By Dare2Solve | Detailed Explanation | O(m * n * (m + n)²)

**Author:** Dare2Solve
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-ii/solutions/5355301/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-ii/solutions/5355301/)

---

```Explanation []
authorslog.vercel.app/blog/nemy2p2fsv
```

# Code

```cpp []
class Solution {
public:
    int minimumSum(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();

        unordered_map<string, int> memo;

        function<int(int, int, int, int, int)> getOne = [&](int i1, int j1, int i2, int j2, int k) {
            int minx = INT_MAX;
            int maxx = INT_MIN;
            int miny = INT_MAX;
            int maxy = INT_MIN;

            for (int i = i1; i <= i2; ++i) {
                for (int j = j1; j <= j2; ++j) {
                    if (grid[i][j] == 1) {
                        minx = min(minx, i);
                        maxx = max(maxx, i);
                        miny = min(miny, j);
                        maxy = max(maxy, j);
                    }
                }
            }

            if (minx == INT_MAX) {
                return 0;
            }

            return (maxx - minx + 1) * (maxy - miny + 1);
        };

        function<int(int, int, int, int, int)> getNext = [&](int i1, int j1, int i2, int j2, int k) {
            string key = to_string(i1) + "," + to_string(j1) + "," + to_string(i2) + "," + to_string(j2) + "," + to_string(k);
            if (memo.find(key) != memo.end()) {
                return memo[key];
            }

            int output = INT_MAX;

            if (k == 1) {
                output = getOne(i1, j1, i2, j2, k);
            } else if (k == 2) {
                for (int i = i1; i < i2; ++i) {
                    output = min(output, getNext(i1, j1, i, j2, 1) + getNext(i + 1, j1, i2, j2, 1));
                }
                for (int j = j1; j < j2; ++j) {
                    output = min(output, getNext(i1, j1, i2, j, 1) + getNext(i1, j + 1, i2, j2, 1));
                }
            } else if (k == 3) {
                for (int i = i1; i < i2; ++i) {
                    output = min(output, getNext(i1, j1, i, j2, 1) + getNext(i + 1, j1, i2, j2, 2));
                    output = min(output, getNext(i1, j1, i, j2, 2) + getNext(i + 1, j1, i2, j2, 1));
                }
                for (int j = j1; j < j2; ++j) {
                    output = min(output, getNext(i1, j1, i2, j, 1) + getNext(i1, j + 1, i2, j2, 2));
                    output = min(output, getNext(i1, j1, i2, j, 2) + getNext(i1, j + 1, i2, j2, 1));
                }
            }

            memo[key] = output;
            return output;
        };

        int ans = getNext(0, 0, m - 1, n - 1, 3);
        return ans;
    }
};
```

```Python []
class Solution:
    def minimumSum(self, grid: List[List[int]]) -> int:
        map = defaultdict(int)

        def get_one(i1, j1, i2, j2):
            minx = float('inf')
            maxx = float('-inf')
            miny = float('inf')
            maxy = float('-inf')

            for i in range(i1, i2 + 1):
                for j in range(j1, j2 + 1):
                    if grid[i][j] == 1:
                        minx = min(minx, i)
                        maxx = max(maxx, i)
                        miny = min(miny, j)
                        maxy = max(maxy, j)

            if minx == float('inf'):
                return 0

            return (maxx - minx + 1) * (maxy - miny + 1)

        def get_next(i1, j1, i2, j2, k):
            key = (i1, j1, i2, j2, k)
            if key in map:
                return map[key]

            output = float('inf')

            if k == 1:
                output = get_one(i1, j1, i2, j2)
            elif k == 2:
                for i in range(i1, i2):
                    output = min(output, get_next(i1, j1, i, j2, 1) + get_next(i + 1, j1, i2, j2, 1))
                for j in range(j1, j2):
                    output = min(output, get_next(i1, j1, i2, j, 1) + get_next(i1, j + 1, i2, j2, 1))
            elif k == 3:
                for i in range(i1, i2):
                    output = min(output, get_next(i1, j1, i, j2, 1) + get_next(i + 1, j1, i2, j2, 2))
                    output = min(output, get_next(i1, j1, i, j2, 2) + get_next(i + 1, j1, i2, j2, 1))
                for j in range(j1, j2):
                    output = min(output, get_next(i1, j1, i2, j, 1) + get_next(i1, j + 1, i2, j2, 2))
                    output = min(output, get_next(i1, j1, i2, j, 2) + get_next(i1, j + 1, i2, j2, 1))

            map[key] = output
            return output

        m = len(grid)
        n = len(grid[0])

        ans = get_next(0, 0, m - 1, n - 1, 3)

        return ans
```

```java []
class Solution {
    public int minimumSum(int[][] grid) {
        HashMap<String, Integer> map = new HashMap<>();

        int m = grid.length;
        int n = grid[0].length;

        int ans = getNext(0, 0, m - 1, n - 1, 3, grid, map);

        return ans;
    }

    private int getOne(int i1, int j1, int i2, int j2, int[][] grid, HashMap<String, Integer> map) {
        int minx = Integer.MAX_VALUE;
        int maxx = Integer.MIN_VALUE;
        int miny = Integer.MAX_VALUE;
        int maxy = Integer.MIN_VALUE;

        for (int i = i1; i <= i2; i++) {
            for (int j = j1; j <= j2; j++) {
                if (grid[i][j] == 1) {
                    minx = Math.min(minx, i);
                    maxx = Math.max(maxx, i);
                    miny = Math.min(miny, j);
                    maxy = Math.max(maxy, j);
                }
            }
        }

        if (minx == Integer.MAX_VALUE) {
            return 0;
        }

        return (maxx - minx + 1) * (maxy - miny + 1);
    }

    private int getNext(int i1, int j1, int i2, int j2, int k, int[][] grid, HashMap<String, Integer> map) {
        String key = i1 + "," + j1 + "," + i2 + "," + j2 + "," + k;
        if (map.containsKey(key)) {
            return map.get(key);
        }

        int output = Integer.MAX_VALUE;

        if (k == 1) {
            output = getOne(i1, j1, i2, j2, grid, map);
        } else if (k == 2) {
            for (int i = i1; i < i2; i++) {
                output = Math.min(output, getNext(i1, j1, i, j2, 1, grid, map) + getNext(i + 1, j1, i2, j2, 1, grid, map));
            }
            for (int j = j1; j < j2; j++) {
                output = Math.min(output, getNext(i1, j1, i2, j, 1, grid, map) + getNext(i1, j + 1, i2, j2, 1, grid, map));
            }
        } else if (k == 3) {
            for (int i = i1; i < i2; i++) {
                output = Math.min(output, getNext(i1, j1, i, j2, 1, grid, map) + getNext(i + 1, j1, i2, j2, 2, grid, map));
                output = Math.min(output, getNext(i1, j1, i, j2, 2, grid, map) + getNext(i + 1, j1, i2, j2, 1, grid, map));
            }
            for (int j = j1; j < j2; j++) {
                output = Math.min(output, getNext(i1, j1, i2, j, 1, grid, map) + getNext(i1, j + 1, i2, j2, 2, grid, map));
                output = Math.min(output, getNext(i1, j1, i2, j, 2, grid, map) + getNext(i1, j + 1, i2, j2, 1, grid, map));
            }
        }

        map.put(key, output);
        return output;
    }
}
```

```javascript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumSum = function (grid) {
  let map = new Map();

  function getOne(i1, j1, i2, j2, k) {
    let minx = Infinity;
    let maxx = -Infinity;
    let miny = Infinity;
    let maxy = -Infinity;

    for (let i = i1; i <= i2; i++) {
      for (let j = j1; j <= j2; j++) {
        if (grid[i][j] === 1) {
          minx = Math.min(minx, i);
          maxx = Math.max(maxx, i);
          miny = Math.min(miny, j);
          maxy = Math.max(maxy, j);
        }
      }
    }

    if (minx === Infinity) {
      return 0;
    }

    return (maxx - minx + 1) * (maxy - miny + 1);
  }

  function getNext(i1, j1, i2, j2, k) {
    let key = [i1, j1, i2, j2, k].join();
    if (map.has(key)) {
      return map.get(key);
    }

    let output = Infinity;

    if (k === 1) {
      output = getOne(i1, j1, i2, j2, k);
    } else if (k === 2) {
      for (let i = i1; i < i2; i++) {
        output = Math.min(
          output,
          getNext(i1, j1, i, j2, 1) + getNext(i + 1, j1, i2, j2, 1)
        );
      }
      for (let j = j1; j < j2; j++) {
        output = Math.min(
          output,
          getNext(i1, j1, i2, j, 1) + getNext(i1, j + 1, i2, j2, 1)
        );
      }
    } else if (k === 3) {
      for (let i = i1; i < i2; i++) {
        output = Math.min(
          output,
          getNext(i1, j1, i, j2, 1) + getNext(i + 1, j1, i2, j2, 2)
        );
        output = Math.min(
          output,
          getNext(i1, j1, i, j2, 2) + getNext(i + 1, j1, i2, j2, 1)
        );
      }
      for (let j = j1; j < j2; j++) {
        output = Math.min(
          output,
          getNext(i1, j1, i2, j, 1) + getNext(i1, j + 1, i2, j2, 2)
        );
        output = Math.min(
          output,
          getNext(i1, j1, i2, j, 2) + getNext(i1, j + 1, i2, j2, 1)
        );
      }
    }

    map.set(key, output);
    return output;
  }

  let m = grid.length;
  let n = grid[0].length;

  let ans = getNext(0, 0, m - 1, n - 1, 3);

  return ans;
};
```

```golang []
func minimumSum(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])

	// Memoization map
	memo := make(map[string]int)

	var getOne func(int, int, int, int, int) int
	getOne = func(i1, j1, i2, j2, k int) int {
		minx := math.MaxInt32
		maxx := math.MinInt32
		miny := math.MaxInt32
		maxy := math.MinInt32

		for i := i1; i <= i2; i++ {
			for j := j1; j <= j2; j++ {
				if grid[i][j] == 1 {
					if i < minx {
						minx = i
					}
					if i > maxx {
						maxx = i
					}
					if j < miny {
						miny = j
					}
					if j > maxy {
						maxy = j
					}
				}
			}
		}

		if minx == math.MaxInt32 {
			return 0
		}

		return (maxx - minx + 1) * (maxy - miny + 1)
	}

	var getNext func(int, int, int, int, int) int
	getNext = func(i1, j1, i2, j2, k int) int {
		key := fmt.Sprintf("%d,%d,%d,%d,%d", i1, j1, i2, j2, k)
		if val, ok := memo[key]; ok {
			return val
		}

		output := math.MaxInt32

		if k == 1 {
			output = getOne(i1, j1, i2, j2, k)
		} else if k == 2 {
			for i := i1; i < i2; i++ {
				output = min(output, getNext(i1, j1, i, j2, 1) + getNext(i+1, j1, i2, j2, 1))
			}
			for j := j1; j < j2; j++ {
				output = min(output, getNext(i1, j1, i2, j, 1) + getNext(i1, j+1, i2, j2, 1))
			}
		} else if k == 3 {
			for i := i1; i < i2; i++ {
				output = min(output, getNext(i1, j1, i, j2, 1) + getNext(i+1, j1, i2, j2, 2))
				output = min(output, getNext(i1, j1, i, j2, 2) + getNext(i+1, j1, i2, j2, 1))
			}
			for j := j1; j < j2; j++ {
				output = min(output, getNext(i1, j1, i2, j, 1) + getNext(i1, j+1, i2, j2, 2))
				output = min(output, getNext(i1, j1, i2, j, 2) + getNext(i1, j+1, i2, j2, 1))
			}
		}

		memo[key] = output
		return output
	}

	ans := getNext(0, 0, m-1, n-1, 3)
	return ans
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```

```csharp []
public class Solution
{
    public int MinimumSum(int[][] grid)
    {
        Dictionary<string, int> map = new Dictionary<string, int>();

        int m = grid.Length;
        int n = grid[0].Length;

        int ans = GetNext(0, 0, m - 1, n - 1, 3, grid, map);

        return ans;
    }

    private int GetOne(int i1, int j1, int i2, int j2, int[][] grid, Dictionary<string, int> map)
    {
        int minx = int.MaxValue;
        int maxx = int.MinValue;
        int miny = int.MaxValue;
        int maxy = int.MinValue;

        for (int i = i1; i <= i2; i++)
        {
            for (int j = j1; j <= j2; j++)
            {
                if (grid[i][j] == 1)
                {
                    minx = Math.Min(minx, i);
                    maxx = Math.Max(maxx, i);
                    miny = Math.Min(miny, j);
                    maxy = Math.Max(maxy, j);
                }
            }
        }

        if (minx == int.MaxValue)
        {
            return 0;
        }

        return (maxx - minx + 1) * (maxy - miny + 1);
    }

    private int GetNext(int i1, int j1, int i2, int j2, int k, int[][] grid, Dictionary<string, int> map)
    {
        string key = $"{i1},{j1},{i2},{j2},{k}";
        if (map.ContainsKey(key))
        {
            return map[key];
        }

        int output = int.MaxValue;

        if (k == 1)
        {
            output = GetOne(i1, j1, i2, j2, grid, map);
        }
        else if (k == 2)
        {
            for (int i = i1; i < i2; i++)
            {
                output = Math.Min(output, GetNext(i1, j1, i, j2, 1, grid, map) + GetNext(i + 1, j1, i2, j2, 1, grid, map));
            }
            for (int j = j1; j < j2; j++)
            {
                output = Math.Min(output, GetNext(i1, j1, i2, j, 1, grid, map) + GetNext(i1, j + 1, i2, j2, 1, grid, map));
            }
        }
        else if (k == 3)
        {
            for (int i = i1; i < i2; i++)
            {
                output = Math.Min(output, GetNext(i1, j1, i, j2, 1, grid, map) + GetNext(i + 1, j1, i2, j2, 2, grid, map));
                output = Math.Min(output, GetNext(i1, j1, i, j2, 2, grid, map) + GetNext(i + 1, j1, i2, j2, 1, grid, map));
            }
            for (int j = j1; j < j2; j++)
            {
                output = Math.Min(output, GetNext(i1, j1, i2, j, 1, grid, map) + GetNext(i1, j + 1, i2, j2, 2, grid, map));
                output = Math.Min(output, GetNext(i1, j1, i2, j, 2, grid, map) + GetNext(i1, j + 1, i2, j2, 1, grid, map));
            }
        }

        map[key] = output;
        return output;
    }
}
```