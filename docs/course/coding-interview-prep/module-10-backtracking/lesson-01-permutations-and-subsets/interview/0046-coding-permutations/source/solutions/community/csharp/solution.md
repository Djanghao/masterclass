# 🔐 [VIDEO] 100% Unlocking Recursive & Backtracking for Permutations

**Author:** vanAmsen
**Votes:** 65
**Link:** [https://leetcode.com/problems/permutations/solutions/3850526/](https://leetcode.com/problems/permutations/solutions/3850526/)

---

# Intuition
When I first looked at this problem, I realized it was a classic case of generating all possible permutations of a given list of numbers. My initial thought was to use a recursive approach to solve it. Recursive algorithms, especially backtracking, often provide a clean and efficient solution for generating permutations. I implemented two different versions of the solution in Python, both capitalizing on recursion and backtracking.

Both versions achieve the same result, but v2 provides more granular control over the recursive process. Version 1 has also been implemented in other programming languages including C++, JavaScript, C#, Java, Rust, Swift, and Go, demonstrating the versatility and applicability of the recursive backtracking approach across different coding environments.

https://youtu.be/Jlw0sIGdS_4

# Approach
The main approach here is to use recursion (a form of backtracking) to generate all permutations of the input list. Here's a detailed step-by-step guide:

1. **Initialize Result**: Create an empty list, `result`, to store the final permutations.

2. **Define Backtracking Function**: Define a recursive helper function `backtrack`, which takes the remaining numbers to be permuted (`nums`) and the current permutation (`path`) as parameters.
   
   a. **Base Case**: If there are no numbers left to permute (`nums` is empty), we have a complete permutation, and we add the current `path` to the `result`.
   
   b. **Recursive Case**: For each number in `nums`, we perform the following steps:
      i. Add the current number to `path`.
      ii. Remove the current number from `nums`.
      iii. Recursively call `backtrack` with the updated `nums` and `path`.
      iv. Since we are using slicing to create new lists, there is no need to revert the changes to `nums` and `path` after the recursive call.

3. **Start Recursion**: Call the `backtrack` function with the original `nums` and an empty `path` to start the process.

4. **Return Result**: Return the `result` list, which will contain all the permutations.

By iteratively choosing one element and recursively calling the function on the remaining elements, this approach ensures that all permutations are explored.

# Complexity
- Time complexity: O(n*n!) 
  This is because for generating permutations, we perform n! operations (since there are n! permutations for n numbers) and for each operation, we spend O(n) time for slicing the list in our recursive call.

- Space complexity: O(n*n!) 
  This is due to the number of solutions. In the worst case, if we have 'n' distinct numbers, there would be n! permutations. Since each permutation is a list of 'n' numbers, the space complexity is O(n*n!).

# Code
``` Python []
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def backtrack(nums, path): 
            if not nums: 
                result.append(path) 
                return 
            for i in range(len(nums)): 
                backtrack(nums[:i] + nums[i+1:], path + [nums[i]]) 
        result = [] 
        backtrack(nums, []) 
        return result 
```
``` C++ []
class Solution {
public:
    void permuteRec(vector<int>& nums, int begin, vector<vector<int>>& result) { 
            if (begin == nums.size()) { 
                        result.push_back(nums); 
            return; 
            } 
        for (int i = begin; i < nums.size(); i++) { 
            swap(nums[begin], nums[i]); 
            permuteRec(nums, begin + 1, result); 
            swap(nums[begin], nums[i]); 
        } 
    } 
                                                                                                   
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> result; 
        permuteRec(nums, 0, result); 
        return result; 
                             
    }
};
```
``` JavaScript []
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const backtrack = (nums, path) => {
        if (nums.length === 0) {
            result.push(path);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);
        }
    };
    backtrack(nums, []);
    return result;
};
```
``` C# []
public class Solution {
    public IList<IList<int>> Permute(int[] nums) {
        IList<IList<int>> result = new List<IList<int>>();
        Backtrack(nums, new List<int>(), result);
        return result;
    }

    private void Backtrack(int[] nums, List<int> path, IList<IList<int>> result) {
        if (path.Count == nums.Length) {
            result.Add(new List<int>(path));
            return;
        }
        foreach (int num in nums) {
            if (path.Contains(num)) continue;
            path.Add(num);
            Backtrack(nums, path, result);
            path.RemoveAt(path.Count - 1);
        }
    }
}
```
``` Java []
public class Solution {
    public void permuteRec(int[] nums, int begin, List<List<Integer>> result) {
        if (begin == nums.length) {
            List<Integer> temp = new ArrayList<Integer>();
            for (int num : nums) temp.add(num);
            result.add(temp);
            return;
        }
        for (int i = begin; i < nums.length; i++) {
            // Swap
            int temp = nums[begin];
            nums[begin] = nums[i];
            nums[i] = temp;
            
            permuteRec(nums, begin + 1, result);
            
            // Swap back
            temp = nums[begin];
            nums[begin] = nums[i];
            nums[i] = temp;
        }
    }
    
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        permuteRec(nums, 0, result);
        return result;
    }
}
```
``` Rust []
impl Solution {
    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        Self::backtrack(nums, vec![], &mut result);
        result
    }

    fn backtrack(nums: Vec<i32>, path: Vec<i32>, result: &mut Vec<Vec<i32>>) {
        if nums.is_empty() {
            result.push(path);
            return;
        }
        for i in 0..nums.len() {
            let mut new_nums = nums.clone();
            new_nums.remove(i);
            let mut new_path = path.clone();
            new_path.push(nums[i]);
            Self::backtrack(new_nums, new_path, result);
        }
    }
}
```
``` Swift []
class Solution {
    func permute(_ nums: [Int]) -> [[Int]] {
        var result: [[Int]] = []
        
        func backtrack(_ nums: [Int], _ path: [Int]) {
            if nums.isEmpty {
                result.append(path)
                return
            }
            for i in 0..<nums.count {
                var newNums = nums
                newNums.remove(at: i)
                backtrack(newNums, path + [nums[i]])
            }
        }
        
        backtrack(nums, [])
        return result
    }
}
```
``` Go []
func permute(nums []int) [][]int {
    var result [][]int
    
    var backtrack func([]int, []int)
    backtrack = func(nums []int, path []int) {
        if len(nums) == 0 {
            result = append(result, append([]int(nil), path...))
            return
        }
        for i := 0; i < len(nums); i++ {
            newNums := append([]int(nil), nums[:i]...)
            newNums = append(newNums, nums[i+1:]...)
            newPath := append([]int(nil), path...)
            newPath = append(newPath, nums[i])
            backtrack(newNums, newPath)
        }
    }
    
    backtrack(nums, []int{})
    return result
}
```

# Video for Python v2
https://youtu.be/jTCdBWNaLe8

# Code v2
``` Python 
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def dfs(path, used): 
            if len(path) == len(nums): 
                result.append(path[:]) 
                return 
            for i in range(len(nums)): 
                if not used[i]: 
                    path.append(nums[i]) 
                    used[i] = True 
                    dfs(path, used) 
                    path.pop() 
                    used[i] = False 
        result = [] 
        dfs([], [False] * len(nums)) 
        return result 
```

## Performance 
| Language   | Runtime | Beats   | Memory  |
|------------|---------|---------|---------|
| C++        | 0 ms    | 100%    | 7.5 MB  |
| Java       | 1 ms    | 98.58%  | 44.1 MB |
| Rust       | 1 ms    | 87.70%  | 2.3 MB  |
| Go         | 2 ms    | 61.28%  | 3.1 MB  |
| Swift      | 8 ms    | 91.96%  | 14.4 MB |
| Python3 v2 | 36 ms   | 99.39%  | 16.5 MB |
| Python3    | 39 ms   | 98.74%  | 16.7 MB |
| JavaScript | 72 ms   | 55%     | 44.1 MB |
| C#         | 131 ms  | 94.50%  | 43.4 MB |

This sorted table provides a quick comparison of the runtime performance across different programming languages for the given problem.