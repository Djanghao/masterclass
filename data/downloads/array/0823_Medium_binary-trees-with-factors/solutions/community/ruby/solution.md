# ✅ Beats 100% 🔥 || Easiest Approach in 3 Points || DP & HashMap

**Author:** Gourav-2002
**Votes:** 17
**Link:** [https://leetcode.com/problems/binary-trees-with-factors/solutions/4209155/](https://leetcode.com/problems/binary-trees-with-factors/solutions/4209155/)

---

##### TypeScript Result:
![image.png](./images/0.png)


# Intuition :
**In order to build a tree, we need to know the number of left children and right children. 
If we know the number of left children and right children, the total number of trees we can build is left * right.
So we can use a hashmap to store the number of trees we can build for each number.
We iterate the array from small to big, for each number, we iterate all the numbers smaller than it to find the left children,
and we check if the right children exists in the hashmap.
If so, we can build left * right trees.
Finally, we sum up the number of trees for each number.**

# Algorithm :
1. Sort the array "arr", and use a hashmap dp to record the number of trees we can build for each number.
2. Iterate the array from small to big, for each number, we iterate all the numbers smaller than it to find the left children, and we check if the right children exists in the hashmap. If so, we can build left * right trees.
3. Finally, we sum up the number of trees for each number.

# Complexity Analysis :
- $$Time Complexity$$: **O(N^2)**, where N is the length of arr. For each arr[i], we iterate arr[j] to find the left children, and check if arr[i] / arr[j] exists in the hashmap.
- $$Space Complexity$$: **O(N)**, the space used by hashmap dp.

### UpVote \u2B06\uFE0F if you found this helpful :)

# Code
``` Python []
class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        arr.sort()
        dp = {}
        for i in range(len(arr)):
            dp[arr[i]] = 1
            for j in range(i):
                if arr[i] % arr[j] == 0 and arr[i] // arr[j] in dp:
                    dp[arr[i]] += dp[arr[j]] * dp[arr[i] // arr[j]]
        return sum(dp.values()) % (10**9 + 7)
```
``` C++ []
class Solution {
public:
    int numFactoredBinaryTrees(vector<int>& arr) {
        std::sort(arr.begin(), arr.end());
        std::unordered_map<int, long> dp;

        for (int i = 0; i < arr.size(); i++) {
            dp[arr[i]] = 1;

            for (int j = 0; j < i; j++) {
                if (arr[i] % arr[j] == 0 && dp.find(arr[i] / arr[j]) != dp.end()) {
                    dp[arr[i]] += dp[arr[j]] * dp[arr[i] / arr[j]];
                }
            }
        }

        long result = 0;
        for (auto val : dp) {
            result += val.second;
        }

        return result % (int)(1e9 + 7);
    }
};
```
``` Java []
class Solution {
    public int numFactoredBinaryTrees(int[] arr) {
        Arrays.sort(arr);
        Map<Integer, Long> dp = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            dp.put(arr[i], 1L);

            for (int j = 0; j < i; j++) {
                if (arr[i] % arr[j] == 0 && dp.containsKey(arr[i] / arr[j])) {
                    dp.put(arr[i], dp.get(arr[i]) + dp.get(arr[j]) * dp.get(arr[i] / arr[j]));
                }
            }
        }

        long result = 0;
        for (long val : dp.values()) {
            result += val;
        }

        return (int) (result % (Math.pow(10, 9) + 7));
    }
}
```
``` C# []
public class Solution {
    public int NumFactoredBinaryTrees(int[] arr) {
        Array.Sort(arr);
        Dictionary<int, long> dp = new Dictionary<int, long>();

        foreach (int i in arr) {
            dp[i] = 1;

            foreach (int j in arr) {
                if (i % j == 0 && dp.ContainsKey(i / j)) {
                    dp[i] += dp[j] * dp[i / j];
                }
            }
        }

        long result = 0;
        foreach (var val in dp.Values) {
            result += val;
        }

        return (int)(result % (Math.Pow(10, 9) + 7));
    }
}
```
``` JavaScipt []
var numFactoredBinaryTrees = function(arr) {
    arr.sort((a, b) => a - b);
        const dp = new Map();

        for (let i = 0; i < arr.length; i++) {
            dp.set(arr[i], 1);

            for (let j = 0; j < i; j++) {
                if (arr[i] % arr[j] === 0 && dp.has(arr[i] / arr[j])) {
                    dp.set(arr[i], dp.get(arr[i]) + dp.get(arr[j]) * dp.get(arr[i] / arr[j]));
                }
            }
        }

        let result = 0;
        for (const val of dp.values()) {
            result += val;
        }

        return result % (Math.pow(10, 9) + 7);
};

```
``` TypeScipt []
function numFactoredBinaryTrees(arr: number[]): number {
arr.sort((a, b) => a - b);
        const dp: Map<number, number> = new Map();

        for (let i = 0; i < arr.length; i++) {
            dp.set(arr[i], 1);

            for (let j = 0; j < i; j++) {
                if (arr[i] % arr[j] === 0 && dp.has(arr[i] / arr[j])) {
                    dp.set(arr[i], dp.get(arr[i])! + dp.get(arr[j])! * dp.get(arr[i] / arr[j])!);
                }
            }
        }

        let result = 0;
        for (const val of dp.values()) {
            result += val;
        }

        return result % (Math.pow(10, 9) + 7);
};
```
``` PHP []
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function numFactoredBinaryTrees($arr) {
        sort($arr);
        $dp = array();

        foreach ($arr as $i) {
            $dp[$i] = 1;

            foreach ($arr as $j) {
                if ($i % $j === 0 && isset($dp[$i / $j])) {
                    $dp[$i] += $dp[$j] * $dp[$i / $j];
                }
            }
        }

        $result = 0;
        foreach ($dp as $val) {
            $result += $val;
        }

        return $result % (pow(10, 9) + 7);
    }
}
```
``` Ruby []
# @param {Integer[]} arr
# @return {Integer}
def num_factored_binary_trees(arr)
    arr.sort!
        dp = {}

        arr.each do |i|
            dp[i] = 1

            arr.each do |j|
                if i % j == 0 && dp.key?(i / j)
                    dp[i] += dp[j] * dp[i / j]
                end
            end
        end

        result = 0
        dp.values.each { |val| result += val }

        result % (10**9 + 7)
    end
```

![image.png](./images/1.png)
