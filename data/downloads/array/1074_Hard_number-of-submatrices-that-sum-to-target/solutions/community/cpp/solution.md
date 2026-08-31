# ✅☑[C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 109
**Link:** [https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4636406/](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4636406/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)


#### ***Approach 1(With Maps)***

1. Find the prefix sum for each row.
1. For each pair of column find the subarrays sum eqaul to target.



# Complexity
- Time complexity:
   $$O(m^2 * n)$$
*(where m is the number of rows and n is the number of columns in the matrix.)*
    

- Space complexity:
   $$O(m)$$
    


# Code
```C++ []



class Solution {
public:
    int numSubmatrixSumTarget(std::vector<std::vector<int>>& matrix, int target) {
        int m = matrix.size();
        int n = matrix[0].size();

        for (int row = 0; row < m; row++) {
            for (int col = 1; col < n; col++) {
                matrix[row][col] += matrix[row][col - 1];
            }
        }

        int count = 0;

        for (int c1 = 0; c1 < n; c1++) {
            for (int c2 = c1; c2 < n; c2++) {
                std::unordered_map<int, int> map;
                map[0] = 1;
                int sum = 0;

                for (int row = 0; row < m; row++) {
                    sum += matrix[row][c2] - (c1 > 0 ? matrix[row][c1 - 1] : 0);
                    count += map[sum - target];
                    map[sum]++;
                }
            }
        }

        return count;
    }
};





```
```Java []


class Solution {
    public int numSubmatrixSumTarget(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;

        for (int row = 0; row < m; row++) {
            for (int col = 1; col < n; col++) {
                matrix[row][col] += matrix[row][col - 1];
            }
        }

        int count = 0;

        for (int c1 = 0; c1 < n; c1++) {
            for (int c2 = c1; c2 < n; c2++) {
                Map<Integer, Integer> map = new HashMap<>();
                map.put(0, 1);
                int sum = 0;

                for (int row = 0; row < m; row++) {
                    sum += matrix[row][c2] - (c1 > 0 ? matrix[row][c1 - 1] : 0);
                    count += map.getOrDefault(sum - target, 0);
                    map.put(sum, map.getOrDefault(sum, 0) + 1);
                }
            }
        }

        return count;
    }
}



```
```python []
class Solution:
    def numSubmatrixSumTarget(self, matrix, target):
        m, n = len(matrix), len(matrix[0])

        for row in range(m):
            for col in range(1, n):
                matrix[row][col] += matrix[row][col - 1]

        count = 0

        for c1 in range(n):
            for c2 in range(c1, n):
                prefix_sum_count = {0: 1}
                sum_val = 0

                for row in range(m):
                    sum_val += matrix[row][c2] - (matrix[row][c1 - 1] if c1 > 0 else 0)
                    count += prefix_sum_count.get(sum_val - target, 0)
                    prefix_sum_count[sum_val] = prefix_sum_count.get(sum_val, 0) + 1

        return count


```
```javascript []
var numSubmatrixSumTarget = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    for (let row = 0; row < m; row++) {
        for (let col = 1; col < n; col++) {
            matrix[row][col] += matrix[row][col - 1];
        }
    }

    let count = 0;

    for (let c1 = 0; c1 < n; c1++) {
        for (let c2 = c1; c2 < n; c2++) {
            const map = new Map();
            map.set(0, 1);
            let sum = 0;

            for (let row = 0; row < m; row++) {
                sum += matrix[row][c2] - (c1 > 0 ? matrix[row][c1 - 1] : 0);
                count += map.get(sum - target) || 0;
                map.set(sum, (map.get(sum) || 0) + 1);
            }
        }
    }

    return count;
};



```
---

#### ***Approach 2(With Arrays)***

1. Find the prefix sum for each row.
1. For each pair of column find the subarrays sum eqaul to target.



# Complexity
- Time complexity:
   $$O(m^2 * n)$$
*(where m is the number of rows and n is the number of columns in the matrix.)*
    

- Space complexity:
   $$O(m)$$
    


# Code
```C++ []

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int count=0,sum=0;
        map<int,int>mp;
        for(int i=0;i<nums.size();i++)
        {
            sum+=nums[i];
            if(sum==k)
            {
                count++;
            }
            if(mp.find(sum-k)!=mp.end())
            {
             count+=mp[sum-k];  
            }
            mp[sum]++;
        }
        return count;
    }
    int numSubmatrixSumTarget(vector<vector<int>>& matrix, int target) {
       int count=0;
        for(int i=0; i<matrix.size(); i++){
			
            vector<int> sum(matrix[0].size(), 0);
            for(int j=i; j<matrix.size(); j++){
                for(int k=0; k<matrix[0].size(); k++){
                    sum[k] += matrix[j][k];
                }
                count += subarraySum(sum, target);
            }
        }
       
    return count;
    }
}; 






```
```Java []
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0;
        int sum = 0;
        Map<Integer, Integer> mp = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];

            if (sum == k) {
                count++;
            }

            if (mp.containsKey(sum - k)) {
                count += mp.get(sum - k);
            }

            mp.put(sum, mp.getOrDefault(sum, 0) + 1);
        }

        return count;
    }

    public int numSubmatrixSumTarget(int[][] matrix, int target) {
        int count = 0;

        for (int i = 0; i < matrix.length; i++) {
            int[] sum = new int[matrix[0].length];

            for (int j = i; j < matrix.length; j++) {
                for (int k = 0; k < matrix[0].length; k++) {
                    sum[k] += matrix[j][k];
                }

                count += subarraySum(sum, target);
            }
        }

        return count;
    }
}




```
```python []
from typing import List
from collections import defaultdict

class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        sum_val = 0
        mp = defaultdict(int)

        for num in nums:
            sum_val += num

            if sum_val == k:
                count += 1

            if sum_val - k in mp:
                count += mp[sum_val - k]

            mp[sum_val] += 1

        return count

    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
        count = 0

        for i in range(len(matrix)):
            sum_val = [0] * len(matrix[0])

            for j in range(i, len(matrix)):
                for k in range(len(matrix[0])):
                    sum_val[k] += matrix[j][k]

                count += self.subarraySum(sum_val, target)

        return count


```
```javascript []
class Solution {
    subarraySum(nums, k) {
        let count = 0;
        let sum = 0;
        const mp = new Map();

        for (const num of nums) {
            sum += num;

            if (sum === k) {
                count++;
            }

            if (mp.has(sum - k)) {
                count += mp.get(sum - k);
            }

            mp.set(sum, (mp.get(sum) || 0) + 1);
        }

        return count;
    }

    numSubmatrixSumTarget(matrix, target) {
        let count = 0;

        for (let i = 0; i < matrix.length; i++) {
            const sum = Array(matrix[0].length).fill(0);

            for (let j = i; j < matrix.length; j++) {
                for (let k = 0; k < matrix[0].length; k++) {
                    sum[k] += matrix[j][k];
                }

                count += this.subarraySum(sum, target);
            }
        }

        return count;
    }
}




```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---