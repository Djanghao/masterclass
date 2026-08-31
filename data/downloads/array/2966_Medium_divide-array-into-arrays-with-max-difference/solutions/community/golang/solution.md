# 🔥 BEATS 100% | ✅ [ Py /Java / C++ / C / C# / JS / GO / Rust / Swift ]

**Author:** Neoni_77
**Votes:** 17
**Link:** [https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4658034/](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4658034/)

---



```C++ []
class Solution {
public:
    vector<vector<int>> divideArray(vector<int>& nums, int k) {
        vector<vector<int>> res;
        sort(nums.begin(), nums.end());
        for(int i = 2; i < nums.size(); i += 3){
            if(nums[i] - nums[i - 2] > k) return {};
            res.push_back({nums[i-2], nums[i-1], nums[i]});
        }
        return res;
    }
};

```
```Java []
class Solution {
    public int[][] divideArray(int[] nums, int k) {
        Arrays.sort(nums);
        List<int[]> res = new ArrayList<>();
        for (int i = 2; i < nums.length; i += 3) {
            if (nums[i] - nums[i - 2] > k) return new int[][]{};
            res.add(new int[]{nums[i - 2], nums[i - 1], nums[i]});
        }
        return res.toArray(new int[res.size()][]);
    }
}

```
```Python []
class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        nums.sort()
        res = []
        for i in range(2, len(nums), 3):
            if nums[i] - nums[i - 2] > k:
                return []
            res.append([nums[i - 2], nums[i - 1], nums[i]])
        return res
```
```C []
int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int** divideArray(int* nums, int numsSize, int k, int* returnSize, int** returnColumnSizes) {
    qsort(nums, numsSize, sizeof(int), compare);
    int** res = (int**)malloc(sizeof(int*) * (numsSize / 3));
    int resSize = 0;
    for (int i = 2; i < numsSize; i += 3) {
        if (nums[i] - nums[i - 2] > k) {
            *returnSize = 0;
            return NULL;
        }
        res[resSize] = (int*)malloc(sizeof(int) * 3);
        res[resSize][0] = nums[i - 2];
        res[resSize][1] = nums[i - 1];
        res[resSize][2] = nums[i];
        resSize++;
    }
    *returnSize = resSize;
    *returnColumnSizes = (int*)malloc(sizeof(int) * resSize);
    for (int i = 0; i < resSize; i++) {
        (*returnColumnSizes)[i] = 3;
    }
    return res;
}

```
```C# []
public class Solution {
    public int[][] DivideArray(int[] nums, int k) {
        Array.Sort(nums);
        List<int[]> res = new List<int[]>();
        for (int i = 2; i < nums.Length; i += 3) {
            if (nums[i] - nums[i - 2] > k) return new int[][]{};
            res.Add(new int[]{nums[i - 2], nums[i - 1], nums[i]});
        }
        return res.ToArray();
    }
}

```
```Javascript []
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 2; i < nums.length; i += 3) {
        if (nums[i] - nums[i - 2] > k) return [];
        res.push([nums[i - 2], nums[i - 1], nums[i]]);
    }
    return res;
};

```
```GO []
func divideArray(nums []int, k int) [][]int {
	n := len(nums)
	res:= make([][]int, 0)
	sort.Ints(nums)
	for i := 0; i < n; i += 3 {
		if i+2 < n && nums[i+2]-nums[i] <= k {
			res= append(res, []int{nums[i], nums[i+1], nums[i+2]})
		} else {
			return [][]int{}
		}
	}
	return res
}

```
```Rust []
impl Solution {
    pub fn divide_array(nums: Vec<i32>, k: i32) -> Vec<Vec<i32>> {
        let mut nums = nums;
        nums.sort();
        let mut res = vec![];
        for i in (2..nums.len()).step_by(3) {
            if nums[i] - nums[i - 2] > k {
                return vec![];
            }
            res.push(vec![nums[i - 2], nums[i - 1], nums[i]]);
        }
        res
    }
}

```
```Swift []
class Solution {
    func divideArray(_ nums: [Int], _ k: Int) -> [[Int]] {
        var sortedNums = nums.sorted()
        var res: [[Int]] = []
        
        for i in stride(from: 2, to: sortedNums.count, by: 3) {
            if sortedNums[i] - sortedNums[i - 2] > k {
                return []
            }
            res.append([sortedNums[i - 2], sortedNums[i - 1], sortedNums[i]])
        }
        
        return res
    }
}
```

****Note :**** **According to the solution in C++ it reaches 100%, don't know for other codes..
please upvote\u2B06\uFE0F!!\uD83D\uDE0A**


