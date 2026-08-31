# [Python3/Go/Java] Dynamic Programming O(N) time O(1) space

**Author:** kunqian
**Votes:** 148
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/819329/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/819329/)

---

### Explanation
"pos[i]", "neg[i]" represent longest consecutive numbers ending with nums[i] forming a positive/negative product.

#### Complexity
`time`: O(N)
`space`: O(N)

#### Python3:

```python
def getMaxLen(self, nums: List[int]) -> int:
	n = len(nums)
	pos, neg = [0] * n, [0] * n
	if nums[0] > 0: pos[0] = 1
	if nums[0] < 0: neg[0] = 1
	ans = pos[0]
	for i in range(1, n):
		if nums[i] > 0:
			pos[i] = 1 + pos[i - 1]
			neg[i] = 1 + neg[i - 1] if neg[i - 1] > 0 else 0
		elif nums[i] < 0:
			pos[i] = 1 + neg[i - 1] if neg[i - 1] > 0 else 0
			neg[i] = 1 + pos[i - 1]
		ans = max(ans, pos[i])
	return ans
```


#### Golang:

```Golang
func getMaxLen(nums []int) int {
    n := len(nums)
    pos := make([]int, n)
    neg := make([]int, n)
    if nums[0] > 0 {
        pos[0] = 1
    } else if nums[0] < 0 {
        neg[0] = 1
    }
    ans := pos[0]
    for i := 1; i < n; i++ {
        if nums[i] > 0 {
            pos[i] = 1 + pos[i - 1]
            if neg[i - 1] > 0 {
                neg[i] = 1 + neg[i - 1]
            } else {
                neg[i] = 0
            }
        } else if nums[i] < 0 {
            if neg[i - 1] > 0 {
                pos[i] = 1 + neg[i - 1]
            } else {
                pos[i] = 0
            }
            neg[i] = 1 + pos[i - 1]
        }
        ans = Max(ans, pos[i])
    }
    return ans
}

func Max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```


#### Java:

```Java
public int getMaxLen(int[] nums) {
	int n = nums.length;
	int[] pos = new int[n];
	int[] neg = new int[n];
	if (nums[0] > 0) pos[0] = 1;
	if (nums[0] < 0) neg[0] = 1;
	int ans = pos[0];
	for (int i = 1; i < n; i++) {
		if (nums[i] > 0) {
			pos[i] = 1 + pos[i - 1];
			neg[i] = neg[i - 1] > 0 ? 1 + neg[i - 1]:0;
		} else if (nums[i] < 0) {
			pos[i] = neg[i - 1] > 0 ? 1 + neg[i - 1]:0;
			neg[i] = 1 + pos[i - 1];
		}
		ans = Math.max(ans, pos[i]);
	}
	return ans;
}
```


### Space Optimization

### Complexity
`time`: O(N)
`space`: O(1)

Thanks @Spin0za for pointing out.
Since only the previous one value of pos/neg is used, we can use 2 variables instead of 2 lists.

#### Python3
```python
def getMaxLen(self, nums: List[int]) -> int:
	n = len(nums)
	pos, neg = 0, 0
	if nums[0] > 0: pos = 1
	if nums[0] < 0: neg = 1
	ans = pos
	for i in range(1, n):
		if nums[i] > 0:
			pos = 1 + pos
			neg = 1 + neg if neg > 0 else 0
		elif nums[i] < 0:
			pos, neg = 1 + neg if neg > 0 else 0, 1 + pos
		else:
			pos, neg = 0, 0
		ans = max(ans, pos)
	return ans
```