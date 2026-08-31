# facil solution usando sorting descendente

**Author:** irwinekabakti
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4393211/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4393211/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Sorting array

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Sorting descending array
2. Access the highest value of array and the 2nd highest value of array.
3. Multiple the [highest value of array - 1] and [2nd highest value of array - 1]


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```javascript []
var maxProduct = function(nums) {
    const sorted = nums.sort((a, b) => b - a);

    return (sorted[0] - 1) * (sorted[1] - 1);
};
```

```typescript []
function maxProduct(nums: number[]): number {    
  let temp: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;

      i = -1;
    }
  }
  
  return (nums[0] - 1) * (nums[1] - 1);
};
```

```python []
class Solution(object):
    def maxProduct(self, nums):
        sorted_nums = sorted(nums, reverse = True)
        return (sorted_nums[0] - 1) * (sorted_nums[1] - 1)
        
```

```golang []
func maxProduct(nums []int) int {
    for i := 0; i < len(nums) - 1; i++ {
		if nums[i] < nums[i + 1] {
			nums[i], nums[i + 1] = nums[i + 1], nums[i]
            
			i = -1
		}
	}

	return (nums[0] - 1) * (nums[1] - 1)
}
```

```rust []
impl Solution {
    pub fn max_product(nums: Vec<i32>) -> i32 {
        let mut sorted_nums = nums.clone();
        sorted_nums.sort_by(|a, b| b.cmp(a));

        (sorted_nums[0] - 1) * (sorted_nums[1] - 1)
    }
}
```

```ruby []
def max_product(nums)
    sorted_nums = nums.sort.reverse
    (sorted_nums[0] - 1) * (sorted_nums[1] - 1)
end
```

```swift []
class Solution {
    func maxProduct(_ nums: [Int]) -> Int {
        let sorted = nums.sorted(by: >)
        
        return (sorted[0] - 1) * (sorted[1] - 1)
    }
}
```

```scala []
object Solution {
    def maxProduct(nums: Array[Int]): Int = {
        val sorted = nums.sorted(Ordering.Int.reverse)
        
        (sorted(0) - 1) * (sorted(1) - 1)
    }
}
```

```Erlang []
-spec max_product(Nums :: [integer()]) -> integer().
max_product(Nums) ->
    SortedNums = lists:reverse(lists:sort(Nums)),
    (lists:nth(1, SortedNums) - 1) * (lists:nth(2, SortedNums) - 1).

```


