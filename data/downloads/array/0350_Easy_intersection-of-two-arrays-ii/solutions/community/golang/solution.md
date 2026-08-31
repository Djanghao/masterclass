# 🔥🔥🔥 EXPLAiNED ✅✅✅ BY PRODONiK 🔥🔥🔥

**Author:** prodonik
**Votes:** 12
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/5399783/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/5399783/)

---

## Intuition

Looking at the code, it seems like we're dealing with finding common elements between two arrays. Here, the approach seems to be leveraging a hash table to store the frequency of elements in one array and then iterating through the other array to see if those elements exist.

## Approach

1. **Frequency Table:** We create a hash table (represented by the array `arr`) of size 1001 (assuming the values are within 0 to 1000). This allows for constant time lookups and updates for each element.
2. **Populate Frequency Table:** We iterate over the first array (`nums1`) and increment the corresponding element's count in the hash table. This creates a record of how many times each element appears in the first array.
3. **Find Intersection:** We iterate over the second array (`nums2`). For each element, we check if its count in the hash table (`arr`) is greater than zero. This indicates if the element exists in the first array as well.
    - If the element exists (count > 0), we add it to a result array (`result`) and decrement its count in the hash table. This ensures we only add duplicates once.
4. **Return Intersection:** Finally, we use `Arrays.copyOfRange` to extract the actual elements from the result array (`result`) up to the count (`ctr`) of elements found.

## Complexity

- **Time Complexity:** 
   - Iterating through each array once is  $$O(n + m)$$, where n and m are the lengths of `nums1` and `nums2` respectively.
   - Hash table lookups and updates are constant time, adding to $$O(1)$$ per operation.
   - Overall time complexity is dominated by the iterations, resulting in $$O(n + m)$$.

- **Space Complexity:**
   - The hash table (`arr`) has a size of 1001, resulting in a space complexity of $$O(1001)$$. In most cases, this can be simplified to $$O(1)$$ as it's a constant value independent of the input size.

# Code
``` Java []
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        int[] arr = new int[1001];
        int[] result = new int[1001];

        for (int num : nums1) {
            arr[num]++;
        }

        int ctr = 0;
        for (int num : nums2) {
            if (arr[num] > 0) {
                result[ctr++] = num;
                arr[num]--;
            }
        }

        return Arrays.copyOfRange(result, 0, ctr);
    }
}
```
```Python []
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        arr = [0] * 1001
        result = []
        for num in nums1:
            arr[num] += 1

        for num in nums2:
            if arr[num] > 0:
                result.append(num)
                arr[num] -= 1

        return result[: len(result)]
```
```C++ []
#include <vector>
#include <unordered_map>

class Solution {
public:
  std::vector<int> intersect(const std::vector<int>& nums1, const std::vector<int>& nums2) {
    std::unordered_map<int, int> freq;
    std::vector<int> result;
    
    for (int num : nums1) {
      freq[num]++;
    }

    for (int num : nums2) {
      if (freq.count(num) > 0 && freq[num] > 0) {
        result.push_back(num);
        freq[num]--;
      }
    }

    return result;
  }
};
```
```C# []
public class Solution {
    public int[] Intersect(int[] nums1, int[] nums2) {
        Dictionary<int, int> freq = new Dictionary<int, int>();
        List<int> result = new List<int>();

        foreach (int num in nums1) {
            if (freq.ContainsKey(num)) {
                freq[num]++;
            } else {
                freq.Add(num, 1);
            }
        }

        foreach (int num in nums2) {
            if (freq.ContainsKey(num) && freq[num] > 0) {
                result.Add(num);
                freq[num]--;
            }
        }

        return result.ToArray();
    }
}
```
```Go []
package main

import (
  "fmt"
)

func intersect(nums1 []int, nums2 []int) []int {
  freq := make(map[int]int)
  result := make([]int, 0)

  for _, num := range nums1 {
    freq[num]++
  }

  for _, num := range nums2 {
    if count, ok := freq[num]; ok && count > 0 {
      result = append(result, num)
      freq[num]--
    }
  }

  return result
}

func main() {
  fmt.Println(intersect([]int{1, 2, 2, 1}, []int{2, 2}))
}
```
```Rust []
use std::collections::HashMap;

fn intersect(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
  let mut freq: HashMap<i32, i32> = HashMap::new();
  let mut result: Vec<i32> = Vec::new();

  for num in nums1.iter() {
    *freq.entry(*num).or_insert(0) += 1;
  }

  for num in nums2.iter() {
    if let Some(count) = freq.get_mut(num) {
      if *count > 0 {
        result.push(*num);
        *count -= 1;
      }
    }
  }

  result
}

fn main() {
  println!("{:?}", intersect(vec![1, 2, 2, 1], vec![2, 2]));
}
```