# Detailed Explanation

**Author:** muhammadfarhankt
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5206963/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5206963/)

---

# Intuition
- The goal is to find specific occurrences of an element `x` in an array `nums` based on the positions provided in the `queries` array. The problem requires checking the occurrence of `x` up to a certain position and returning the corresponding index or -1 if the occurrence does not exist.

# Approach
1. Record Indices of Occurrences:
 - Traverse the nums array and record the indices where x appears.
2. Process Each Query:
 - For each query, check if the required occurrence exists in the recorded indices.
    - If it does, return the index.
    - If it doesn't, return -1.

# Complexity

- Time complexity: O(n+m), where n is the length of nums and m is the length of queries. This is because we traverse nums once to record the occurrences and then process each query in constant time.
- Space complexity: O(n) in the worst case, for storing the indices of occurrences of x.

# Code
```Golang []
func occurrencesOfElement(nums []int, queries []int, x int) []int {
    output := make([]int, len(queries))
    xOccurence := make([]int, 0, len(nums))
    for i := 0; i < len(nums); i++ {
        if nums[i] == x {
            xOccurence = append(xOccurence, i)
        }
    }
    sizeOccurence := len(xOccurence)
    for idx, query := range queries {
        if query <= sizeOccurence {
            output[idx] = xOccurence[query - 1]
        } else {
            output[idx] = -1
        }
    }
    return output
}
```
```C++ []
class Solution {
public:
    vector<int> occurrencesOfElement(vector<int>& nums, vector<int>& queries, int x) {
        vector<int> occurrences;
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] == x) {
                occurrences.push_back(i);
            }
        }

        vector<int> result(queries.size());
        for (int i = 0; i < queries.size(); ++i) {
            if (queries[i] <= occurrences.size()) {
                result[i] = occurrences[queries[i] - 1];
            } else {
                result[i] = -1;
            }
        }

        return result;
    }
};
```
```Java []
class Solution {
    public int[] occurrencesOfElement(int[] nums, int[] queries, int x) {
        List<Integer> occurrences = new ArrayList<>();
        for (int i = 0; i < nums.length; ++i) {
            if (nums[i] == x) {
                occurrences.add(i);
            }
        }

        int[] result = new int[queries.length];
        for (int i = 0; i < queries.length; ++i) {
            if (queries[i] <= occurrences.size()) {
                result[i] = occurrences.get(queries[i] - 1);
            } else {
                result[i] = -1;
            }
        }

        return result;
    }
}
```
```Javascript []
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    let occurrences = [];
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === x) {
            occurrences.push(i);
        }
    }

    let result = new Array(queries.length);
    for (let i = 0; i < queries.length; ++i) {
        if (queries[i] <= occurrences.length) {
            result[i] = occurrences[queries[i] - 1];
        } else {
            result[i] = -1;
        }
    }

    return result;
};
```
```Python []
class Solution:
    def occurrencesOfElement(self, nums: List[int], queries: List[int], x: int) -> List[int]:
        occurrences = []
        for i, num in enumerate(nums):
            if num == x:
                occurrences.append(i)
                
        result = []
        for query in queries:
            if query <= len(occurrences):
                result.append(occurrences[query - 1])
            else:
                result.append(-1)
                
        return result
```
```Dart []
class Solution {
  List<int> occurrencesOfElement(List<int> nums, List<int> queries, int x) {
    List<int> occurrences = [];
    for (int i = 0; i < nums.length; ++i) {
      if (nums[i] == x) {
        occurrences.add(i);
      }
    }

    List<int> result = List<int>(queries.length);
    for (int i = 0; i < queries.length; ++i) {
      if (queries[i] <= occurrences.length) {
        result[i] = occurrences[queries[i] - 1];
      } else {
        result[i] = -1;
      }
    }

    return result;
  }
}
```