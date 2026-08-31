# [Rust/Go/Scala/Ruby/TypeScript] Two pointers

**Author:** NotTheSwimmer
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/2639015/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/2639015/)

---

# Rust
```rust
impl Solution {
    pub fn minimum_operations(nums: Vec<i32>) -> i32 {
        let mut ops = 0;
        let mut i = 0;
        let mut j = nums.len() - 1;
        while j > i {
            let mut l = nums[i];
            let mut r = nums[j];
            while l != r && i != j {
                if l < r {
                    i += 1;
                    l += nums[i];
                } else {
                    j -= 1;
                    r += nums[j];
                }
                ops += 1;
            }
            if j == 0 {
                break;
            }
            i += 1;
            j -= 1;
        }
        ops
    }
}
```

# Go
```go
func minimumOperations(nums []int) int {
    ops := 0
    i := 0
    j := len(nums) - 1
    for j > i {
        l := nums[i]
        r := nums[j]
        for l != r && i != j {
            if l < r {
                i++
                l += nums[i]
            } else {
                j--
                r += nums[j]
            }
            ops++
        }
        i++
        j--
    }
    return ops
}
```

# Scala
```scala
object Solution {
    def minimumOperations(nums: Array[Int]): Int = {
        var ops = 0
        var i = 0
        var j = nums.length - 1
        while (j > i) {
            var l = nums(i)
            var r = nums(j)
            while (l != r && i != j) {
                if (l < r) {
                    i += 1
                    l += nums(i)
                } else {
                    j -= 1
                    r += nums(j)
                }
                ops += 1
            }
            i += 1
            j -= 1
        }
        ops
    }
}
```

# Ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def minimum_operations(nums)
  ops = 0
  i = 0
  j = nums.size - 1
  while j > i
    l = nums[i]
    r = nums[j]
    while l != r && i != j
      if l < r
        i += 1
        l += nums[i]
      else
        j -= 1
        r += nums[j]
      end
      ops += 1
    end
    i += 1
    j -= 1
  end
  ops
end
```

# TypeScript
```typescript
function minimumOperations(nums: number[]): number {
  let ops = 0;
  let i = 0;
  let j = nums.length - 1;
  while (j > i) {
    let l = nums[i];
    let r = nums[j];
    while (l != r && i != j) {
      if (l < r) {
        i++;
        l += nums[i];
      } else {
        j--;
        r += nums[j];
      }
      ops++;
    }
    i++;
    j--;
  }
  return ops;
};
```
