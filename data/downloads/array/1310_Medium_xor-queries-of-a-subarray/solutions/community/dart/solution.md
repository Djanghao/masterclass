# Simplest way to solve XOR Queries of a Subarray

**Author:** patel_jaimin
**Votes:** 1
**Link:** [https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5781228/](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5781228/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves efficiently calculating the XOR of elements within specified subarrays of an array. We can use the concept of prefix XOR to optimize the calculations.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate prefix XOR: Compute the prefix XOR array, where `prefixXor[i]` represents the XOR of all elements from index 0 to `i - 1`.
2. Process queries: For each query, use the prefix XOR array to calculate the XOR of the specified subarray. The XOR of a subarray from index `k` to `j` can be calculated as `prefixXor[j] ^ prefixXor[k - 1]`. If `k` is 0, the XOR of the subarray starts from index 0, so `prefixXor[k - 1]` would be 0.

# Complexity
- Time complexity: $$O(n+ q)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) {
        int len = queries.size();
        vector<int> res(len);
        for (int i = 1; i < arr.size(); i++) {
            arr[i] = arr[i - 1] ^ arr[i];
        }
        for (int i = 0; i < len; i++) {
            int k = queries[i][0], j = queries[i][1];
            if (k == 0) {
                res[i] = arr[j];
            } else {
                res[i] = arr[j] ^ arr[k - 1];
            }
        }
        return res;
    }
};
```
```c []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* xorQueries(int* arr, int arrSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int* res = (int*)malloc(queriesSize * sizeof(int));
    *returnSize = queriesSize;

    for (int i = 1; i < arrSize; i++) {
        arr[i] ^= arr[i - 1];
    }

    for (int i = 0; i < queriesSize; i++) {
        int k = queries[i][0], j = queries[i][1];
        if (k == 0) {
            res[i] = arr[j];
        } else {
            res[i] = arr[j] ^ arr[k - 1];
        }
    }

    return res;
}
```
```C# []
public class Solution {
    public int[] XorQueries(int[] arr, int[][] queries) {
        for (int i = 1; i < arr.Length; i++) {
            arr[i] ^= arr[i - 1];
        }

        int[] result = new int[queries.Length];
        for (int i = 0; i < queries.Length; i++) {
            int k = queries[i][0];
            int j = queries[i][1];
            result[i] = arr[j] ^ (k > 0 ? arr[k - 1] : 0);
        }

        return result;
    }
}
```
```Java []
class Solution {
    public int[] xorQueries(int[] arr, int[][] queries) {
        int len = queries.length;
        int[] res = new int[len];
        for (int i = 1; i < arr.length; i++) {
            arr[i] = arr[i - 1] ^ arr[i];
        }
        for (int i = 0; i < len; i++) {
            int k = queries[i][0], j = queries[i][1];
            if (k == 0) {
                res[i] = arr[j];
            } else {
                res[i] = arr[j] ^ arr[k - 1];
            }
        }
        return res;
    }
}
```
```Go []
func xorQueries(arr []int, queries [][]int) []int {
	n := len(arr)
	for i := 1; i < n; i++ {
		arr[i] ^= arr[i-1]
	}

	result := make([]int, len(queries))
	for i, query := range queries {
		k, j := query[0], query[1]
		if k == 0 {
			result[i] = arr[j]
		} else {
			result[i] = arr[j] ^ arr[k-1]
		}
	}

	return result
}
```
```Dart []
class Solution {
  List<int> xorQueries(List<int> arr, List<List<int>> queries) {
    final n = queries.length;
    for (int i = 1; i < arr.length; i++) 
      arr[i] ^= arr[i - 1];
    

    final result = List.filled(n, 0);
    for (int i = 0; i < n; i++) {
      final k = queries[i][0];
      final j = queries[i][1];
      result[i] = arr[j] ^ (k > 0 ? arr[k - 1] : 0);
    }

    return result;
  }
}
```
```python3 []
class Solution:
    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:
        n = len(arr)
        for i in range(1, n):
            arr[i] ^= arr[i - 1]

        result = []
        for k, j in queries:
            result.append(arr[j] ^ (arr[k - 1] if k > 0 else 0))

        return result
```
```javascript []
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    const len = queries.length;
    const res = new Array(len);
    for (let i = 1; i < arr.length; i++) {
        arr[i] ^= arr[i - 1];
    }
    for (let i = 0; i < len; i++) {
        const [k, j] = queries[i];
        res[i] = k === 0 ? arr[j] : arr[j] ^ arr[k - 1];
    }
    return res;
};
```
```typescript []
function xorQueries(arr: number[], queries: number[][]): number[] {
    const len = queries.length;
    const res = new Array(len);
    for (let i = 1; i < arr.length; i++) {
        arr[i] ^= arr[i - 1];
    }
    for (let i = 0; i < len; i++) {
        const [k, j] = queries[i];
        res[i] = k === 0 ? arr[j] : arr[j] ^ arr[k - 1];
    }
    return res;
};
```
![WhatsApp Image 2024-09-13 at 5.39.33 PM.jpeg](./images/0.jpeg)
