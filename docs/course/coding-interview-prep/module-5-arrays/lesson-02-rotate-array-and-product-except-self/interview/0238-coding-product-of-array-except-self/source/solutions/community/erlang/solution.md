# Erlang, Go, C Solutions

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/3042950/](https://leetcode.com/problems/product-of-array-except-self/solutions/3042950/)

---

### Erlang

```erlang
-spec product_except_self(Nums :: [integer()]) -> [integer()].
product_except_self(Nums) ->
    Forwards = product(Nums, [], 1),
    Backwards = lists:reverse(product(lists:reverse(Nums), [], 1)),
    except_self([1|Forwards], Backwards ++ [1], []).

product([], Res, _) -> lists:reverse(Res);
product([H|T], Res, Acc) ->
    P = H * Acc,
    product(T, [P|Res], P).

except_self([_], [_], Res) -> lists:reverse(Res);
except_self([F|T1], [_, B|T2], Res) ->
    except_self(T1, [B|T2], [F * B|Res]).
```

### Go
---
#### Two Slices

Not optimal space complexity due to the need to allocate additional memory in the extra slices.

```go
func productExceptSelf(nums []int) []int {
    n := len(nums)
    
    forward := make([]int, n)
    forward[0] = nums[0]
    for i := 1; i < n; i++ {
        forward[i] = forward[i-1] * nums[i]
    }
    
    backward := make([]int, n)
    backward[n-1] = nums[n-1]
    for i := n-2; i >= 0; i-- {
        backward[i] = backward[i+1] * nums[i]
    }
    
    result := make([]int, n)
    result[0] = backward[1]
    result[n-1] = forward[n-2]
    for i := 1; i < n-1; i++ {
        result[i] = forward[i-1] * backward[i+1]
    }
    
    return result
}
```

#### Single Slice

O(n) runtime and optimal space complexity.

```go
func productExceptSelf(nums []int) []int {
    n := len(nums)
    result := make([]int, n)
    
    product := 1
    for i := 0; i < n; i++ {
        result[i] = product * nums[i]
        product *= nums[i]
    }
    
    product = 1
    for i := n-1; i > 0; i-- {
        result[i] = product * result[i-1]
        product *= nums[i]
    }
    result[0] = product
    
    return result
}
```

### C
---
#### Two Arrays
```c
int* productExceptSelf(int* nums, int numsSize, int* returnSize){
    int product, i;
    int forwards[numsSize];
    int backwards[numsSize];
    int *result = malloc(sizeof(int) * numsSize);
    
    forwards[0] = nums[0];
    for (i = 1; i < numsSize; i++) 
        forwards[i] = forwards[i-1] * nums[i];
    
    backwards[numsSize-1] = nums[numsSize-1];
    for (i = numsSize-2; i >= 0; i--)
        backwards[i] = backwards[i+1] * nums[i];
    
    result[0] = backwards[1];
    result[numsSize-1] = forwards[numsSize-2];
    for (i = 1; i < numsSize-1; i++)
        result[i] = forwards[i-1] * backwards[i+1];
    
    *returnSize = numsSize;
    return result;
}
```

#### Resusing Result Array

```c
int* productExceptSelf(int* nums, int numsSize, int* returnSize){
    int product, i;
    int backwards;
    int *result = malloc(sizeof(int) * numsSize);
    
    result[0] = nums[0];
    for (i = 1; i < numsSize; i++)
        result[i] = result[i-1] * nums[i];
    
    backwards = 1;
    for (i = numsSize-1; i > 0; i--) {
        result[i] = result[i-1] * backwards;
        backwards *= nums[i];
    }
    result[0] = backwards;
    
    *returnSize = numsSize;
    return result;
}
```