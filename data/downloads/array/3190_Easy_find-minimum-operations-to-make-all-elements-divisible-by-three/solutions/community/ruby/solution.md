# ✔️ Beats 100% - Detailed Step-by-Step Explanation - C++/Java/Python/JS/Ruby/Go/Dart

**Author:** Cregan_wolf
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5353618/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5353618/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is to find the minimum number of operations required to make every element in a list divisible by 3. The first thought is that we only need to worry about the elements that are not divisible by 3. If a number gives a remainder of 1 or 2 when divided by 3, then one operation can increase or decrease the number to make it divisible by 3. Therefore, we can iterate through the list and count how many numbers have a remainder of 1 or 2 when divided by 3, and each such number would require one operation.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a variable `operations` to zero. This will count the number of operations needed.
2. Iterate through each number in the list.
3. For each number, calculate the remainder when divided by 3.
4. If the remainder is either 1 or 2, increment the `operations` count by 1, as one operation will be needed to make it divisible by 3.
5. Return the total count of `operations` after iterating through the list.

# Complexity
- Time complexity:
  The time complexity is $$ O(n) $$ because we are iterating through the list of numbers once, where \\( n \\) is the number of elements in the list.

- Space complexity:
  The space complexity is $$ O(1) $$ because we are using only a fixed amount of extra space regardless of the input size.


# Code
```C++ []
#include <vector>

class Solution {
public:
    int minimumOperations(std::vector<int>& nums) {
        int operations = 0;
        
        for (int num : nums) {
            int remainder = num % 3;
            if (remainder == 1 || remainder == 2) {
                operations++;
            }
        }
        
        return operations;
    }
};

```
```python []
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        operations = 0
        
        for num in nums:
            remainder = num % 3
            if remainder == 1:
                operations += 1
            elif remainder == 2:
                operations += 1
        
        return operations

```
```Java []
class Solution {
    public int minimumOperations(int[] nums) {
        int operations = 0;
        
        for (int num : nums) {
            int remainder = num % 3;
            if (remainder == 1 || remainder == 2) {
                operations++;
            }
        }
        
        return operations;
    }
}

```

```javascript []
function minimumOperations(nums) {
    let operations = 0;
    
    for (let num of nums) {
        let remainder = num % 3;
        if (remainder === 1 || remainder === 2) {
            operations++;
        }
    }
    
    return operations;
}

```

```Go []
package main

import "fmt"

func minimumOperations(nums []int) int {
    operations := 0
    
    for _, num := range nums {
        remainder := num % 3
        if remainder == 1 || remainder == 2 {
            operations++
        }
    }
    
    return operations
}

func main() {
    nums := []int{1, 2, 3, 4, 5}
    fmt.Println(minimumOperations(nums)) // Output: 2
}

```
```ruby []
def minimum_operations(nums)
    operations = 0
    
    nums.each do |num|
        remainder = num % 3
        if remainder == 1 || remainder == 2
            operations += 1
        end
    end
    
    operations
end

puts minimum_operations([1, 2, 3, 4, 5]) # Output: 2

```
```Dart []
int minimumOperations(List<int> nums) {
  int operations = 0;
  
  for (int num in nums) {
    int remainder = num % 3;
    if (remainder == 1 || remainder == 2) {
      operations++;
    }
  }
  
  return operations;
}

void main() {
  List<int> nums = [1, 2, 3, 4, 5];
  print(minimumOperations(nums)); // Output: 2
}

```

