# ✔️ Creative approach ✔️ Focus on the number of zeros ✔️ Time O(n) ✔️ Space O(1)

**Author:** otabek_kholmirzaev
**Votes:** 81
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/4877147/](https://leetcode.com/problems/product-of-array-except-self/solutions/4877147/)

---

# Intuition
We focus on the number of *zeros* in the given **nums** array. 

# Approach
1. Create **ans** array to store the output values and fill the array with 0.
2. Count the number of zeros in the **nums** array and store it in **zeros** variable.
3. Calculate the product of **non-zero** elements in the **nums** array and store it in the **product** variable.
4. Now focus on the **count** of zeros:
    - if the count of zeros are 1, which means output of each non-zero element of the **nums** array in the **ans** array will be equal to 0 (zero). And output of the one and only zero element of the **nums** array in the **ans** array will be equal to **product**.
    - if the count of zeros are 0, which means all the elements in the nums array are non-zero and output of each element of the **nums** array in the **ans** array will be equal to **product / nums[i]**.
    - if the count of zeros are 2 or more than 2, which means output of all the elements of the **nums** array in the **ans** array will be equal to 0.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
```cpp []
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n, 0);
        int product = 1;
        int zeros = 0;
        
        for (int num : nums) {
            if (num == 0) {
                zeros++;
                continue;
            }
            product *= num;
        }

        if (zeros == 1) {
            for (int i = 0; i < n; i++) {
                ans[i] = nums[i] == 0 ? product : 0;
            }
        } else if (zeros == 0) {
            for (int i = 0; i < n; i++) {
                ans[i] = product / nums[i];
            }
        }

        return ans;
    }
};
```
```java []
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];
        Arrays.fill(ans, 0);
        int product = 1;
        int zeros = 0;
        
        for (int num : nums) {
            if (num == 0) {
                zeros++;
                continue;
            }
            product *= num;
        }

        if (zeros == 1) {
            for (int i = 0; i < n; i++) {
                ans[i] = nums[i] == 0 ? product : 0;
            }
        } else if (zeros == 0) {
            for (int i = 0; i < n; i++) {
                ans[i] = product / nums[i];
            }
        }

        return ans;
    }
}
```
```python []
class Solution:
    def productExceptSelf(self, nums):
        n = len(nums)
        ans = [0] * n
        product = 1
        zeros = 0
        
        for num in nums:
            if num == 0:
                zeros += 1
                continue
            product *= num

        if zeros == 1:
            for i in range(n):
                ans[i] = product if nums[i] == 0 else 0
        elif zeros == 0:
            for i in range(n):
                ans[i] = product // nums[i]

        return ans
```
```csharp []
public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int n = nums.Length;
        int[] ans = new int[n];
        Array.Fill(ans, 0);
        int product = 1;
        int zeros = 0;
        
        foreach (var num in nums) {
            if (num == 0) {
                zeros++;
                continue;
            }
            product *= num;
        }

        if (zeros == 1) {
            for (int i = 0; i < n; i++) {
                ans[i] = nums[i] == 0 ? product : 0;
            }
        }
        else if (zeros == 0) {
            for (int i = 0; i < n; i++) {
                ans[i] = product / nums[i];
            }
        }

        return ans;
    }
}
```
```javascript []
var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(0);
    let product = 1;
    let zeros = 0;

    for (const num of nums) {
        if (num === 0) {
            zeros++;
            continue;
        }
        product *= num;
    }

    if (zeros === 1) {
        for (let i = 0; i < n; i++) {
            ans[i] = nums[i] === 0 ? product : 0;
        }
    } else if (zeros === 0) {
        for (let i = 0; i < n; i++) {
            ans[i] = Math.floor(product / nums[i]);
        }
    }

    return ans;
};
```
```go []
func productExceptSelf(nums []int) []int {
    n := len(nums)
    ans := make([]int, n)
    product := 1
    zeros := 0

    for _, num := range nums {
        if num == 0 {
            zeros++
            continue
        }
        product *= num
    }

    if zeros == 1 {
        for i, num := range nums {
            if num == 0 {
                ans[i] = product
            }
        }
    } else if zeros == 0 {
        for i, num := range nums {
            ans[i] = product / num
        }
    }

    return ans
}

```
```c []
int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    int n = numsSize;
    int* ans = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        ans[i] = 0;
    }
    int product = 1;
    int zeros = 0;

    for (int i = 0; i < n; i++) {
        int num = nums[i];
        if (num == 0) {
            zeros++;
            continue;
        }
        product *= num;
    }

    if (zeros == 1) {
        for (int i = 0; i < n; i++) {
            ans[i] = nums[i] == 0 ? product : 0;
        }
    } else if (zeros == 0) {
        for (int i = 0; i < n; i++) {
            ans[i] = product / nums[i];
        }
    }

    *returnSize = n;
    return ans;
}
```
```TypeScript []
function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = new Array(n).fill(0);
    let product = 1;
    let zeros = 0;

    for (const num of nums) {
        if (num === 0) {
            zeros++;
            continue;
        }
        product *= num;
    }

    if (zeros === 1) {
        for (let i = 0; i < n; i++) {
            ans[i] = nums[i] === 0 ? product : 0;
        }
    } else if (zeros === 0) {
        for (let i = 0; i < n; i++) {
            ans[i] = Math.floor(product / nums[i]);
        }
    }

    return ans;
}
```
```rust []
impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        let mut ans = vec![0; n];
        let mut product = 1;
        let mut zeros = 0;

        for num in &nums {
            if *num == 0 {
                zeros += 1;
                continue;
            }
            product *= num;
        }

        if zeros == 1 {
            for i in 0..n {
                ans[i] = if nums[i] == 0 { product } else { 0 };
            }
        } else if zeros == 0 {
            for i in 0..n {
                ans[i] = product / nums[i];
            }
        }

        ans
    }
}
```
```dart []
class Solution {
  List<int> productExceptSelf(List<int> nums) {
    final n = nums.length;
    final ans = List<int>.filled(n, 0);
    var product = 1;
    var zeros = 0;

    for (final num in nums) {
        if (num == 0) {
        zeros++;
        continue;
        }
        product *= num;
    }

    if (zeros == 1) {
        for (var i = 0; i < n; i++) {
        ans[i] = nums[i] == 0 ? product : 0;
        }
    } else if (zeros == 0) {
        for (var i = 0; i < n; i++) {
        ans[i] = product ~/ nums[i];
        }
    }

    return ans;
  }
}
```

![upvote_new_cc82e8aa-dc98-4f10-af4c-64b1528c0fb6_1680844232.130332.png](./images/0.png)

