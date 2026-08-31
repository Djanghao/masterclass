# Simple intuition O(n)

**Author:** hucancode
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-division/solutions/4976829/](https://leetcode.com/problems/optimal-division/solutions/4976829/)

---

# Intuition
If $nums$ only has 1 or 2 elements, the answer is trivia
Let $nums = [a,b,c,d,e,f]$
- You can easily see that $b$ is always be included in the denominator. There is no way we can put $b$ in the nominator
- Consider this spliting strategy $a/(b/c/d/e/f) = \\dfrac{a}{b/c/d/e/f} = \\dfrac{acdef}{b}$
In this strategy, only $b$ sits in the denominator. This is the best we can get. So this is the optimal strategy

# Approach
If $nums$ has less than 3 elements, use no parenthesis. Otherwise, put the parenthesis exactly before element 2 and at the end

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```rust
impl Solution {
    pub fn optimal_division(nums: Vec<i32>) -> String {
        let nums: Vec<String> = nums.iter().map(i32::to_string).collect();
        if nums.len() < 3 {
            return nums.join("/");
        }
        let mut ret = String::new();
        ret += &nums[0];
        ret += "/(";
        ret += &nums.into_iter()
            .skip(1)
            .collect::<Vec<String>>()
            .join("/");
        ret += ")";
        ret
    }
}
```
```go
import "strings"
func optimalDivision(nums []int) string {
    var strs []string
    for _, x := range nums {
        strs = append(strs, strconv.Itoa(x))
    }
    if len(strs) < 3 {
        return strings.Join(strs, "/")
    }
    return strs[0]+"/("+strings.Join(strs[1:], "/")+")"
}
```

```kotlin
class Solution {
    fun optimalDivision(nums: IntArray): String {
        if(nums.size < 3) {
            return nums.joinToString("/")
        }
        return nums.first().toString() +
            nums.drop(1).joinToString("/","/(", ")")       
    }
}
```