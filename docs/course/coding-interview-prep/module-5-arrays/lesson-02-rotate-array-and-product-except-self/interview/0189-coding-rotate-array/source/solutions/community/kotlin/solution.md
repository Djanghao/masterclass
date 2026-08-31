# Easy to Understand Solution with Explanation || 100% beats || with examples in 10 Languages

**Author:** ilokeshmewari
**Votes:** 4
**Link:** [https://leetcode.com/problems/rotate-array/solutions/5573341/](https://leetcode.com/problems/rotate-array/solutions/5573341/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is to rotate an array `nums` to the right by `k` steps. Rotating the array means shifting each element of the array k positions to the right. If `k` is greater than the length of the array `n`, the actual number of shifts needed is `k % n` because rotating an array of length `n` by `n` steps brings it back to the original position.

# Approach
<!-- Describe your approach to solving the problem. -->
To achieve this, we can use the following approach:

1. **Create a Temporary Array:** Create a new array `res` of the same size as `nums`.
1. **Place Elements in New Positions:** Iterate over the original array nums and for each element at `index i`, place it in the position `(i + k) % n` in the new array res.
1. **Copy Back:** Finally, copy the elements from the temporary array `res` back to the original array `nums`.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;
        vector<int> res(n);
        for(int i = 0; i < n; i++){
            res[(i + k) % n] = nums[i];
        }
        nums = res;
    }
};
```
```Java []
public void rotate(int[] nums, int k) {
    int n = nums.length;
    k = k % n;
    int[] res = new int[n];
    
    for (int i = 0; i < n; i++) {
        res[(i + k) % n] = nums[i];
    }
    for (int i = 0; i < n; i++) {
        nums[i] = res[i];
    }
}
```
```Python []
def rotate(self, nums, k):
    n = len(nums)
    k = k % n
    res = [0] * n
    
    for i in range(n):
        res[(i + k) % n] = nums[i]
    for i in range(n):
        nums[i] = res[i]

```
```C []
void rotate(int* nums, int numsSize, int k) {
    k = k % numsSize;
    int* res = (int*)malloc(numsSize * sizeof(int));
    
    for (int i = 0; i < numsSize; i++) {
        res[(i + k) % numsSize] = nums[i];
    }
    for (int i = 0; i < numsSize; i++) {
        nums[i] = res[i];
    }
    
    free(res);
}

```
```Rust []
fn rotate(nums: &mut Vec<i32>, k: usize) {
    let n = nums.len();
    let k = k % n;
    let res: Vec<i32> = nums.iter().cloned().collect();
    for i in 0..n {
        nums[(i + k) % n] = res[i];
    }
}
```
```Ruby []
def rotate(nums, k)
  n = nums.length
  k = k % n
  res = Array.new(n)
  nums.each_with_index do |num, i|
    res[(i + k) % n] = num
  end
  nums.replace(res)
end
```
```Go []
func rotate(nums []int, k int) {
	n := len(nums)
	k = k % n
	res := make([]int, n)
	for i := 0; i < n; i++ {
		res[(i+k)%n] = nums[i]
	}
	copy(nums, res)
}
```
```Kotlin []
fun rotate(nums: IntArray, k: Int) {
    val n = nums.size
    val k = k % n
    val res = IntArray(n)
    for (i in nums.indices) {
        res[(i + k) % n] = nums[i]
    }
    for (i in nums.indices) {
        nums[i] = res[i]
    }
}
```
```C# []
class Solution {
    public void Rotate(int[] nums, int k) {
        int n = nums.Length;
        k = k % n;
        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            res[(i + k) % n] = nums[i];
        }
        for (int i = 0; i < n; i++) {
            nums[i] = res[i];
        }
    }
}
```
```javascript []
function rotate(nums, k) {
    const n = nums.length;
    k = k % n;
    const res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; i++) {
        nums[i] = res[i];
    }
}
```


