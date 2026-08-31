# ✅95.92%🔥Easy Solution🔥2 linear code🔥

**Author:** MrAke
**Votes:** 33
**Link:** [https://leetcode.com/problems/sort-array-by-parity/solutions/4098121/](https://leetcode.com/problems/sort-array-by-parity/solutions/4098121/)

---

```Python3 []
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        nums[:] = [i for i in nums if i%2==0] + [j for j in nums if j%2!=0]
        return nums
```
```python []
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        nums[:] = [i for i in nums if i%2==0] + [j for j in nums if j%2!=0]
        return nums
```
```C# []
public class Solution
{
    public int[] SortArrayByParity(int[] nums)
    {
        List<int> evenNumbers = nums.Where(i => i % 2 == 0).ToList();
        List<int> oddNumbers = nums.Where(j => j % 2 != 0).ToList();
        
        evenNumbers.AddRange(oddNumbers);
        
        return evenNumbers.ToArray();
    }
}

```
```C++ []
class Solution {
public:
    std::vector<int> sortArrayByParity(std::vector<int>& nums) {
        std::vector<int> result;
        for (int i : nums) {
            if (i % 2 == 0) {
                result.push_back(i);
            }
        }
        for (int j : nums) {
            if (j % 2 != 0) {
                result.push_back(j);
            }
        }
        return result;
    }
};

```
```C []
int* sortArrayByParity(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    int evenIndex = 0;
    int oddIndex = numsSize - 1;

    for (int i = 0; i < numsSize; i++) {
        if (nums[i] % 2 == 0) {
            result[evenIndex] = nums[i];
            evenIndex++;
        } else {
            result[oddIndex] = nums[i];
            oddIndex--;
        }
    }

    *returnSize = numsSize;
    return result;
}

```
```Java []
public class Solution {
    public int[] sortArrayByParity(int[] nums) {
        int[] result = new int[nums.length];
        int evenIndex = 0;
        int oddIndex = nums.length - 1;
        
        for (int num : nums) {
            if (num % 2 == 0) {
                result[evenIndex] = num;
                evenIndex++;
            } else {
                result[oddIndex] = num;
                oddIndex--;
            }
        }
        
        return result;
    }
}

```
```javascript []
var sortArrayByParity = function(nums) {
    const result = [];
    
    for (const num of nums) {
        if (num % 2 === 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    
    return result;
};

```
```Go []
func sortArrayByParity(nums []int) []int {
    even := []int{}
    odd := []int{}

    for _, num := range nums {
        if num%2 == 0 {
            even = append(even, num)
        } else {
            odd = append(odd, num)
        }
    }

    even = append(even, odd...)
    return even
}

```
```Rust []
impl Solution {
    pub fn sort_array_by_parity(nums: Vec<i32>) -> Vec<i32> {
        let mut even = Vec::new();
        let mut odd = Vec::new();

        for num in nums {
            if num % 2 == 0 {
                even.push(num);
            } else {
                odd.push(num);
            }
        }

        even.extend(odd);
        even
    }
}

```
