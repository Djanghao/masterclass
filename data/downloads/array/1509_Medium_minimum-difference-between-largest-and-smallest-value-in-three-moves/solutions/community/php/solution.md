# [3 Solutions Tutorial O(n) Included] Minimum Difference Between Largest and Smallest Value

**Author:** never_get_piped
**Votes:** 103
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406010/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406010/)

---

**Topic** :  Greedy, Sort

**I remember solving this Google OA problem three years ago.**
___

## Solution 1
If the length of the input array is 4 or fewer, the answer is 0 because we can make all numbers equal with up to 3 moves.

Three moves means that **we can remove 3 numbers from the input array to make the remaining numbers equal to any number in the array**.

If we have more than 4 numbers, the **greedy intuition** suggests that excluding a total of 3 elements from both the leftmost and rightmost ends of the sorted array minimizes the difference between the maximum and minimum values remaining in the array. 

This can simply be proven by contradiction. If we do not remove such numbers (three from both the leftmost and rightmost sides), then either the maximum or minimum of the array might be among the first three or last three numbers after sorting, potentially increasing the difference between them.

The solution involves iterating through the number of elements removed from the leftmost side. If we choose `i` elements from the leftmost side, then we must choose `3 - i` elements from the right side to remove.


```c++ []
class Solution {
public:
    int minDifference(vector<int>& nums) {
        if(nums.size() <= 4) {
            return 0;
        }
        sort(nums.begin(), nums.end());
        int ans = nums.back() - nums[0];
        for(int i = 0; i <= 3; i++) {
            ans = min(ans, nums[nums.size() - (3 - i) - 1] - nums[i]);
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int minDifference(int[] nums) {
        if(nums.length <= 4) {
            return 0;
        }
        Arrays.sort(nums);
        int ans = nums[nums.length - 1] - nums[0];
        for(int i = 0; i <= 3; i++) {
            ans = Math.min(ans, nums[nums.length - (3 - i) - 1] - nums[i]);
        }
        return ans;
    }
}
```
```python []
class Solution:
    def minDifference(self, nums: List[int]) -> int:
        if len(nums) <= 4:
            return 0
        nums.sort()
        ans = nums[-1] - nums[0]
        for i in range(4):
            ans = min(ans, nums[-(4 - i)] - nums[i])
        return ans
```
```Go []
func minDifference(nums []int) int {
    if len(nums) <= 4 {
        return 0
    }
    sort.Ints(nums)
    ans := nums[len(nums)-1] - nums[0]
    for i := 0; i <= 3; i++ {
        ans = min(ans, nums[len(nums) - (3 - i) - 1] - nums[i])
    }
    return ans
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minDifference($nums) {
        if (count($nums) <= 4) {
            return 0;
        }
        sort($nums);
        $ans = $nums[count($nums) - 1] - $nums[0];
        for ($i = 0; $i <= 3; $i++) {
            $ans = min($ans, $nums[count($nums) - (3 - $i) - 1] - $nums[$i]);
        }
        return $ans;
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length <= 4) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    let ans = nums[nums.length - 1] - nums[0];
    for (let i = 0; i <= 3; i++) {
        ans = Math.min(ans, nums[nums.length - (3 - i) - 1] - nums[i]);
    }
    return ans;
};
```

**Complexity**:
* Time Complexity : `O(n log n)`
* Space Complexity : `O(1)`

<br/><br/>
## Solution 2
Another approach involves computing the difference between the maximum and minimum values within each sliding window of size `len(nums) - 3`. This approach simplifies the implementation and enhances readability compared to the previous method.

```c++ []
class Solution {
public:
    int minDifference(vector<int>& nums) {
        if(nums.size() <= 4) {
            return 0;
        }
        sort(nums.begin(), nums.end());
        int k = nums.size() - 3;
        int ans = nums.back() - nums[0];
        for(int i = k - 1; i < nums.size(); i++) {
            ans = min(ans, nums[i] - nums[i - k + 1]);
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int minDifference(int[] nums) {
        if (nums.length <= 4) {
            return 0;
        }
        Arrays.sort(nums);
        int k = nums.length - 3;
        int ans = nums[nums.length - 1] - nums[0];
        for (int i = k - 1; i < nums.length; i++) {
            ans = Math.min(ans, nums[i] - nums[i - k + 1]);
        }
        return ans;
    }
}
```
```python []
class Solution:
    def minDifference(self, nums: List[int]) -> int:
        if len(nums) <= 4:
            return 0
        nums.sort()
        k = len(nums) - 3
        ans = nums[-1] - nums[0]
        for i in range(k - 1, len(nums)):
            ans = min(ans, nums[i] - nums[i - k + 1])
        return ans
```
```Go []
func minDifference(nums []int) int {
    if len(nums) <= 4 {
        return 0
    }
    sort.Ints(nums)
    k := len(nums) - 3
    ans := nums[len(nums)-1] - nums[0]
    for i := k - 1; i < len(nums); i++ {
        ans = min(ans, nums[i] - nums[i - k + 1])
    }
    return ans
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minDifference($nums) {
        if (count($nums) <= 4) {
            return 0;
        }
        sort($nums);
        $k = count($nums) - 3;
        $ans = $nums[count($nums) - 1] - $nums[0];
        for ($i = $k - 1; $i < count($nums); $i++) {
            $ans = min($ans, $nums[$i] - $nums[$i - $k + 1]);
        }
        return $ans;
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length <= 4) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    let k = nums.length - 3;
    let ans = nums[nums.length - 1] - nums[0];
    for (let i = k - 1; i < nums.length; i++) {
        ans = Math.min(ans, nums[i] - nums[i - k + 1]);
    }
    return ans;
};
```

**Complexity**:
* Time Complexity : `O(n log n)`
* Space Complexity : `O(1)`

<br/>

## Bonus
We only need the first four numbers and the last four numbers, so there's no need to sort the entire array. We can use an array of size 4 to keep track of both the top 4 largest and the top 4 smallest elements.

Here is the simple and clean implementation:

```c++ []
class Solution {
public:
    int minDifference(vector<int>& nums) {
        if(nums.size() <= 4) {
            return 0;
        }
        
        vector<int> min4, max4;
        
        for(int i = 0; i < nums.size(); i++) {
            bool add = false;
            for(int j = 0; j < min4.size(); j++) {
               if(nums[i] < min4[j]) {
                   shift(min4, j);
                   min4[j] = nums[i];
                   add = true;
                   break;
               }
            } 
            if(!add && min4.size() < 4) {
                min4.push_back(nums[i]);
            }
        }
        
        for(int i = 0; i < nums.size(); i++) {
            bool add = false;
            for(int j = 0; j < max4.size(); j++) {
               if(nums[i] > max4[j]) {
                   shift(max4, j);
                   max4[j] = nums[i];
                   add = true;
                   break;
               }
            } 
            if(!add && max4.size() < 4) {
                max4.push_back(nums[i]);
            }
        }
        
        int ans = max4[0] - min4[0];
        for(int i = 0; i <= 3; i++) {
            ans = min(ans, max4[3 - i] - min4[i]);
        }
        return ans;
    }
    
    void shift(vector<int>& a, int start) { //[1 2  3]   
        int last = a.back();
        for(int j = a.size() - 1; j > start; j--) {
            a[j] = a[j - 1];
        }
        if(a.size() < 4) a.push_back(last);
    }
};
```
```java []
class Solution {
    public int minDifference(int[] nums) {
        if (nums.length <= 4) {
            return 0;
        }
        
        int[] min4 = new int[4];
        int[] max4 = new int[4];
        
        Arrays.fill(min4, Integer.MAX_VALUE);
        Arrays.fill(max4, Integer.MIN_VALUE);
        
        for (int num : nums) {
            boolean added = false;
            for (int j = 0; j < min4.length; j++) {
                if (num < min4[j]) {
                    shift(min4, j);
                    min4[j] = num;
                    added = true;
                    break;
                }
            }
            if (!added && min4[min4.length - 1] == Integer.MAX_VALUE) {
                min4[min4.length - 1] = num;
            }
        }
        
        for (int num : nums) {
            boolean added = false;
            for (int j = 0; j < max4.length; j++) {
                if (num > max4[j]) {
                    shift(max4, j);
                    max4[j] = num;
                    added = true;
                    break;
                }
            }
            if (!added && max4[max4.length - 1] == Integer.MIN_VALUE) {
                max4[max4.length - 1] = num;
            }
        }
        
        int ans = max4[0] - min4[0];
        for (int i = 0; i <= 3; i++) {
            ans = Math.min(ans, max4[3 - i] - min4[i]);
        }
        return ans;
    }
    private void shift(int[] a, int start) {
        int last = a[a.length - 1];
        for (int j = a.length - 1; j > start; j--) {
            a[j] = a[j - 1];
        }
        if (a.length < 4) {
            a[a.length - 1] = last;
        }
    }
}
```
```python []
class Solution:
    def shift(self, a: List[int], start: int) -> None:
        last = a[-1]
        for j in range(len(a) - 1, start, -1):
            a[j] = a[j - 1]
        if len(a) < 4:
            a.append(last)
    
    def minDifference(self, nums: List[int]) -> int:
        if len(nums) <= 4:
            return 0
        
        min4 = [float('inf')] * 4
        max4 = [float('-inf')] * 4
        
        for num in nums:
            added = False
            for j in range(4):
                if num < min4[j]:
                    self.shift(min4, j)
                    min4[j] = num
                    added = True
                    break
            if not added and min4[-1] == float('inf'):
                min4[-1] = num
        
        for num in nums:
            added = False
            for j in range(4):
                if num > max4[j]:
                    self.shift(max4, j)
                    max4[j] = num
                    added = True
                    break
            if not added and max4[-1] == float('-inf'):
                max4[-1] = num
        
        ans = max4[0] - min4[0]
        for i in range(4):
            ans = min(ans, max4[3 - i] - min4[i])
        
        return ans
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minDifference($nums) {
        if (count($nums) <= 4) {
            return 0;
        }
        
        $min4 = array_fill(0, 4, PHP_INT_MAX);
        $max4 = array_fill(0, 4, PHP_INT_MIN);
        
        foreach ($nums as $num) {
            $added = false;
            for ($j = 0; $j < 4; $j++) {
                if ($num < $min4[$j]) {
                    $this->shift($min4, $j);
                    $min4[$j] = $num;
                    $added = true;
                    break;
                }
            }
            if (!$added && end($min4) == PHP_INT_MAX) {
                $min4[3] = $num;
            }
        }
        
        foreach ($nums as $num) {
            $added = false;
            for ($j = 0; $j < 4; $j++) {
                if ($num > $max4[$j]) {
                    $this->shift($max4, $j);
                    $max4[$j] = $num;
                    $added = true;
                    break;
                }
            }
            if (!$added && end($max4) == PHP_INT_MIN) {
                $max4[3] = $num;
            }
        }
        
        $ans = $max4[0] - $min4[0];
        for ($i = 0; $i < 4; $i++) {
            $ans = min($ans, $max4[3 - $i] - $min4[$i]);
        }
        
        return $ans;
    }
    
    function shift(&$a, $start) {
        $last = end($a);
        for ($j = count($a) - 1; $j > $start; $j--) {
            $a[$j] = $a[$j - 1];
        }
        if (count($a) < 4) {
            $a[] = $last;
        }
    }
}
```
```Go []
func shift(a []int, start int) {
	last := a[len(a)-1]
	for j := len(a)-1; j > start; j-- {
		a[j] = a[j-1]
	}
	if len(a) < 4 {
		a = append(a, last)
	}
}

func minDifference(nums []int) int {
    if len(nums) <= 4 {
		return 0
	}
	
	min4 := make([]int, 4)
	max4 := make([]int, 4)
	
	for i := 0; i < 4; i++ {
		min4[i] = math.MaxInt32
		max4[i] = math.MinInt32
	}
	
	for _, num := range nums {
		added := false
		for j := 0; j < 4; j++ {
			if num < min4[j] {
				shift(min4, j)
				min4[j] = num
				added = true
				break
			}
		}
		if !added && min4[3] == math.MaxInt32 {
			min4[3] = num
		}
	}
	
	for _, num := range nums {
		added := false
		for j := 0; j < 4; j++ {
			if num > max4[j] {
				shift(max4, j)
				max4[j] = num
				added = true
				break
			}
		}
		if !added && max4[3] == math.MinInt32 {
			max4[3] = num
		}
	}
	
	ans := max4[0] - min4[0]
	for i := 0; i < 4; i++ {
		ans = min(ans, max4[3-i] - min4[i])
	}
	
	return ans
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    function shift(a, start) {
        let last = a[a.length - 1];
        for (let j = a.length - 1; j > start; j--) {
            a[j] = a[j - 1];
        }
        if (a.length < 4) {
            a[a.length] = last;
        }
    }
    if (nums.length <= 4) {
        return 0;
    }
        
    let min4 = Array(4).fill(Number.MAX_SAFE_INTEGER);
    let max4 = Array(4).fill(Number.MIN_SAFE_INTEGER);
        
    for (let num of nums) {
        let added = false;
        for (let j = 0; j < 4; j++) {
            if (num < min4[j]) {
                shift(min4, j);
                min4[j] = num;
                added = true;
                break;
            }
        }
        if (!added && min4[3] === Number.MAX_SAFE_INTEGER) {
            min4[3] = num;
        }
    }
        
    for (let num of nums) {
        let added = false;
        for (let j = 0; j < 4; j++) {
            if (num > max4[j]) {
                shift(max4, j);
                max4[j] = num;
                added = true;
                break;
            }
        }
        if (!added && max4[3] === Number.MIN_SAFE_INTEGER) {
            max4[3] = num;
        }
    }
        
    let ans = max4[0] - min4[0];
    for (let i = 0; i < 4; i++) {
        ans = Math.min(ans, max4[3 - i] - min4[i]);
    }
        
    return ans;
};
```

Illustration of the above logic : 

```
Suppose we want to find the top4 minimum numbers (the logic is the same for maximum) and we have the following array : [1, 3, 5, 4, 6, 2]

Steps:
* Inialized an array with size 4 [INF, INF, INF, INF] with max int value.
* Add 1 to min4 : [1, INF, INF, INF]
* Add 3 to min4 : [1, 3, INF, INF]
* Add 5 to min4 : [1, 3, 5, INF]
* Add 4 to min4:
	* First, find the position where we need to insert 4 and shift all elements after it one place to the right. [1, 3, 5, 5] 
	* Insert 4 => [1, 3, 4, 5]
* Add 6 to min4 : [1, 3, 4, 5]
* Add 2 to min4:
	* First, find the position where we need to insert 2 and shift all elements after it one place to the right. [1, 3, 3, 4]
	* Insert 2 => [1, 2, 3, 4]

```



**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**