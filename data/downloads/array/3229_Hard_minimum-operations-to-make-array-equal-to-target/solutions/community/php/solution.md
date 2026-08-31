# [Difference Array Tutorial] Minimum Operations to Make Array Equal to Target

**Author:** never_get_piped
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5509182/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5509182/)

---

**Topic** :  Difference Array

For a given integer array `A` of length `n`, its Difference Array `D` with length `1 + n` is defined such that `D[i]=A[i]\u2212A[i\u22121]` for `1\u2264 i< n`, with `D[0]=A[0]` and  `D[n]=A[n\u22121]`.

For example, if the given array is `A = [3, 5, 1, 2]`, its Difference Array is `[3, 2, -4, 1, -2].`

Difference arrays are useful when we want to efficiently perform range updates (increasing or decreasing elements in a subarray by a constant value) on an array.

For example, if we want to increase `A[1 : 2]` by 1, the new array `A` becomes `[3, 6, 2, 2]`, and the resulting Difference Array is `[3, 3, -4, 0, -2]`. 

We can observe that when we increase a value `x` over a subarray `[l : r]`, the effect on the Difference Array `D` is as follows:`D[l]` is incremented by `x`, and `D[r + 1]` is decremented by `x`.

Similar Question:
[Minimum Number of Increments on Subarrays to Form a Target Array](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/)
___

## Solution
To make two arrays equal, it means ensuring that their Difference Arrays are also equal.

Let `D1` denote the Difference Array of `nums`, and `D2` denote the Difference Array of `target`. For `0 <= i <= n`, if `D1[i] < D2[i]` ,it means we need to increase element at index `i`  by `D1[i] - D2[i]`, otherwise, we need to decrease it. 

When we perform an operation on a subarray, any increment and decrement adjustments must occur simultaneously. 

In addition, the final total increment needed and total decrement needed should be the same. This means that we can simply return either the total increment or total decrement as the answer, because for every increment/decrement by a value 1, there must be a corresponding decrement/increment to balance it. In addition, we can perform operaion on index range `[0 : n - 1]` only.


<br/><br/>

```c++ []
class Solution {
public:
    long long minimumOperations(vector<int>& a, vector<int>& b) {
        int n = a.size() + 1;
        a.push_back(0);
        b.push_back(0);
        
        long long add = 0, sub = 0;
        for(int i = 0; i < n; i++) {
            int diff1 = a[i];
            int diff2 = b[i];
            if(i > 0) {
                diff1 -= a[i - 1];
                diff2 -= b[i - 1];
            }
            if(diff1 < diff2) {
                add += (diff2 - diff1);
            } else {
                sub += (diff1 - diff2);
            }
        }
        return add;
    }
};
```
```Java []
class Solution {
    public long minimumOperations(int[] nums, int[] target) {
        List<Integer> a = Arrays.stream(nums).boxed().collect(Collectors.toList());
        List<Integer> b = Arrays.stream(target).boxed().collect(Collectors.toList());
        
        int n = a.size() + 1;
        a.add(0);
        b.add(0);
        
        long add = 0, sub = 0;
        for (int i = 0; i < n; i++) {
            int diff1 = a.get(i);
            int diff2 = b.get(i);
            if (i > 0) {
                diff1 -= a.get(i - 1);
                diff2 -= b.get(i - 1);
            }
            if (diff1 < diff2) {
                add += (diff2 - diff1);
            } else {
                sub += (diff1 - diff2);
            }
        }
        return add;
    }
}
```
```Python []
class Solution:
    def minimumOperations(self, a: List[int], b: List[int]) -> int:
        n = len(a) + 1
        a.append(0)
        b.append(0)
        
        add, sub = 0, 0
        for i in range(n):
            diff1 = a[i]
            diff2 = b[i]
            if i > 0:
                diff1 -= a[i - 1]
                diff2 -= b[i - 1]
            if diff1 < diff2:
                add += (diff2 - diff1)
            else:
                sub += (diff1 - diff2)
        
        return add
```
```Go []
func minimumOperations(a []int, b []int) int64 {
    n := len(a) + 1
    a = append(a, 0)
    b = append(b, 0)
    
    var add, sub int64
    for i := 0; i < n; i++ {
        diff1 := a[i]
        diff2 := b[i]
        if i > 0 {
            diff1 -= a[i-1]
            diff2 -= b[i-1]
        }
        if diff1 < diff2 {
            add += int64(diff2 - diff1)
        } else {
            sub += int64(diff1 - diff2)
        }
    }
    
   return add
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer[] $target
     * @return Integer
     */
    function minimumOperations($a, $b) {
        $n = count($a) + 1;
        $a[] = 0;
        $b[] = 0;
        
        $add = 0;
        $sub = 0;
        for ($i = 0; $i < $n; $i++) {
            $diff1 = $a[$i];
            $diff2 = $b[$i];
            if ($i > 0) {
                $diff1 -= $a[$i - 1];
                $diff2 -= $b[$i - 1];
            }
            if ($diff1 < $diff2) {
                $add += ($diff2 - $diff1);
            } else {
                $sub += ($diff1 - $diff2);
            }
        }
        
        return$add;
    }
}
```
```Javascrip []
/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumOperations = function(a, b) {
    let n = a.length + 1;
    a.push(0);
    b.push(0);
        
    let add = 0, sub = 0;
    for (let i = 0; i < n; i++) {
        let diff1 = a[i];
        let diff2 = b[i];
        if (i > 0) {
            diff1 -= a[i - 1];
            diff2 -= b[i - 1];
        }
        if (diff1 < diff2) {
            add += (diff2 - diff1);
        } else {
            sub += (diff1 - diff2);
        }
    } 
    return add;
};
```

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**