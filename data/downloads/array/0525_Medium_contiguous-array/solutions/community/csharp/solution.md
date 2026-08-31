# ✔️ Hash table ✔️ Time O(n) ✔️ Space O(n)

**Author:** otabek_kholmirzaev
**Votes:** 42
**Link:** [https://leetcode.com/problems/contiguous-array/solutions/4881469/](https://leetcode.com/problems/contiguous-array/solutions/4881469/)

---

# Intuition
To find the **maximum length of a contiguous subarray** with an equal number of 0s and 1s, we need to **keep track of the cumulative counts of zeros and ones** encountered so far. Whenever the count of zeros becomes equal to the count of ones, it indicates a subarray with an equal number of both. Additionally, we need to handle the case when there's a subarray with the **same difference between counts of zeros and ones**, which suggests that the number of zeros and ones between those **two indices is balanced**.

# Approach
We can use a **dictionary** (hash table) to store the **difference** between **counts of zeros and ones** encountered at each index. While iterating through the array, we keep track of the cumulative counts of zeros and ones. If the difference between these counts becomes zero, it indicates that the **subarray** from the beginning to the current index has an equal number of both. We update the maximum length accordingly. Moreover, we store the index where each difference between counts first occurred in the dictionary. If the same difference is encountered again, it means there is a subarray between the current index and the index stored in the dictionary with an equal number of zeros and ones. We update the maximum length using this information.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code

```python []
class Solution:
    def findMaxLength(self, nums):
        hashmap = {0: -1}
        zeros, ones, max_len = 0, 0, 0
        
        for i in range(len(nums)):
            if nums[i] == 0:
                zeros += 1
            else:
                ones += 1
            
            diff = zeros - ones
            if diff in hashmap:
                max_len = max(max_len, i - hashmap[diff])
            else:
                hashmap[diff] = i
        
        return max_len
```
```cpp []
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int> hashmap;
        int zeros = 0, ones = 0, max_len = 0;
        
        hashmap[0] = -1;
        
        for (int i = 0; i < nums.size(); ++i) {
            nums[i] == 0 ? ++zeros : ++ones;
            int diff = zeros - ones;
            
            if (hashmap.count(diff)) {
                max_len = max(max_len, i - hashmap[diff]);
            } else {
                hashmap[diff] = i;
            }
        }
        
        return max_len;
    }
};

```
```java []
class Solution {
    public int findMaxLength(int[] nums) {
        HashMap<Integer, Integer> hashmap = new HashMap<>();
        int zeros = 0, ones = 0, maxLen = 0;
        
        hashmap.put(0, -1);
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) zeros++; else ones++;
            int diff = zeros - ones;
            
            if (hashmap.containsKey(diff)) {
                maxLen = Math.max(maxLen, i - hashmap.get(diff));
            } else {
                hashmap.put(diff, i);
            }
        }
        
        return maxLen;
    }
}

```
```csharp []
public class Solution {
    public int FindMaxLength(int[] nums) {
        Dictionary<int, int> dict = new();
        dict[0] = -1;
        int zeros = 0, ones = 0, max = 0;
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] == 0) zeros++; else ones++;
            int diff = zeros - ones;
            if (dict.ContainsKey(diff)) 
                max = Math.Max(max, i - dict[diff]);
            else 
                dict.Add(diff, i);
        }

        return max;
    }
}
```
```JavaScript []
var findMaxLength = function(nums) {
    const hashmap = new Map();
    let zeros = 0, ones = 0, maxLen = 0;
    
    hashmap.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? zeros++ : ones++;
        const diff = zeros - ones;
        
        if (hashmap.has(diff)) {
            maxLen = Math.max(maxLen, i - hashmap.get(diff));
        } else {
            hashmap.set(diff, i);
        }
    }
    
    return maxLen;
};

```
```go []
func findMaxLength(nums []int) int {
    hashmap := make(map[int]int)
    zeros, ones, maxLen := 0, 0, 0
    hashmap[0] = -1
    
    for i, num := range nums {
        if num == 0 {
            zeros++
        } else {
            ones++
        }
        diff := zeros - ones
        if val, ok := hashmap[diff]; ok {
            maxLen = max(maxLen, i - val)
        } else {
            hashmap[diff] = i
        }
    }
    
    return maxLen
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
```TypeScript []
function findMaxLength(nums: number[]): number {
    const hashmap: Map<number, number> = new Map();
    let zeros: number = 0, ones: number = 0, maxLen: number = 0;
    hashmap.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? zeros++ : ones++;
        const diff: number = zeros - ones;
        
        if (hashmap.has(diff)) {
            maxLen = Math.max(maxLen, i - hashmap.get(diff)!);
        } else {
            hashmap.set(diff, i);
        }
    }
    
    return maxLen;
}

```
```ruby []
def find_max_length(nums)
    hashmap = { 0 => -1 }
    zeros = 0
    ones = 0
    max_len = 0
    
    nums.each_with_index do |num, i|
        num == 0 ? zeros += 1 : ones += 1
        diff = zeros - ones
        
        if hashmap.key?(diff)
            max_len = [max_len, i - hashmap[diff]].max
        else
            hashmap[diff] = i
        end
    end
    
    max_len
end

```
```rust []
use std::collections::HashMap;

impl Solution {
    fn find_max_length(nums: Vec<i32>) -> i32 {
        let mut hashmap: HashMap<i32, i32> = HashMap::new();
        let mut zeros = 0;
        let mut ones = 0;
        let mut max_len = 0;
        hashmap.insert(0, -1);
        
        for (i, num) in nums.iter().enumerate() {
            if *num == 0 {
                zeros += 1;
            } else {
                ones += 1;
            }
            let diff = zeros - ones;
            
            if hashmap.contains_key(&diff) {
                max_len = max_len.max(i as i32 - hashmap[&diff]);
            } else {
                hashmap.insert(diff, i as i32);
            }
        }
        
        max_len
    }
}
```
```dart []
class Solution {
  int findMaxLength(List<int> nums) {
    var hashmap = {0: -1};
    var zeros = 0, ones = 0, maxLen = 0;
    
    for (var i = 0; i < nums.length; i++) {
        nums[i] == 0 ? zeros++ : ones++;
        var diff = zeros - ones;
        
        if (hashmap.containsKey(diff)) {
            maxLen = max(maxLen, i - hashmap[diff]!);
        } else {
            hashmap[diff] = i;
        }
    }
    
    return maxLen;
  }

  int max(int a, int b) => a > b ? a : b;
}
```
```kotlin []
class Solution {
    fun findMaxLength(nums: IntArray): Int {
        val hashmap = mutableMapOf<Int, Int>()
        var zeros = 0
        var ones = 0
        var maxLen = 0
        hashmap[0] = -1
        
        for (i in nums.indices) {
            if (nums[i] == 0) zeros++ else ones++
            val diff = zeros - ones
            
            if (hashmap.containsKey(diff)) {
                maxLen = maxOf(maxLen, i - hashmap[diff]!!)
            } else {
                hashmap[diff] = i
            }
        }
        
        return maxLen
    }
}
```
![upvote_new_cc82e8aa-dc98-4f10-af4c-64b1528c0fb6_1680844232.130332.png](./images/0.png)


