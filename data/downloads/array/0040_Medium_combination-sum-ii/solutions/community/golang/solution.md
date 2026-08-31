# O(2^n) | 0-ms | Beats 100% | Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 9
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/4819825/](https://leetcode.com/problems/combination-sum-ii/solutions/4819825/)

---



# Code
```Java []
class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> results = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(candidates, target, 0, new ArrayList<>(), results);
        return results;
    }

    private void backtrack(int[] candidates, int remain, int start, List<Integer> combination, List<List<Integer>> results) {
        if (remain == 0) {
            results.add(new ArrayList<>(combination));
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i-1]) continue; // Skip duplicates
            if (candidates[i] > remain) break; // Pruning: stop if current number is greater than remaining target

            combination.add(candidates[i]);
            backtrack(candidates, remain - candidates[i], i + 1, combination, results);
            combination.remove(combination.size() - 1);
        }
    }
}
//KDS
```
```C++ []
class Solution {
public:
    std::vector<std::vector<int>> combinationSum2(std::vector<int>& candidates, int target) {
        std::vector<std::vector<int>> results;
        std::vector<int> combination;
        std::sort(candidates.begin(), candidates.end());
        backtrack(candidates, target, 0, combination, results);
        return results;
    }

private:
    void backtrack(const std::vector<int>& candidates, int remain, int start, 
                   std::vector<int>& combination, std::vector<std::vector<int>>& results) {
        if (remain == 0) {
            results.push_back(combination);
            return;
        }

        for (int i = start; i < candidates.size(); i++) {
            if (i > start && candidates[i] == candidates[i-1]) continue; // Skip duplicates
            if (candidates[i] > remain) break; // Pruning

            combination.push_back(candidates[i]);
            backtrack(candidates, remain - candidates[i], i + 1, combination, results);
            combination.pop_back();
        }
    }
};
//KDS
```
```Python []
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(remain, start, combination):
            if remain == 0:
                results.append(combination[:])
                return
            
            for i in range(start, len(candidates)):
                if i > start and candidates[i] == candidates[i-1]:
                    continue  # Skip duplicates
                if candidates[i] > remain:
                    break  # Pruning
                
                combination.append(candidates[i])
                backtrack(remain - candidates[i], i + 1, combination)
                combination.pop()

        results = []
        candidates.sort()
        backtrack(target, 0, [])
        return results
#Kartikdevsharmaa
```
```Go []
func combinationSum2(candidates []int, target int) [][]int {
    var results [][]int
    sort.Ints(candidates)
    backtrack(candidates, target, 0, []int{}, &results)
    return results
}

func backtrack(candidates []int, remain int, start int, combination []int, results *[][]int) {
    if remain == 0 {
        temp := make([]int, len(combination))
        copy(temp, combination)
        *results = append(*results, temp)
        return
    }

    for i := start; i < len(candidates); i++ {
        if i > start && candidates[i] == candidates[i-1] {
            continue // Skip duplicates
        }
        if candidates[i] > remain {
            break // Pruning
        }

        combination = append(combination, candidates[i])
        backtrack(candidates, remain-candidates[i], i+1, combination, results)
        combination = combination[:len(combination)-1]
    }
}
//Kartikdevsharmaa
```
```Rust []
impl Solution {
    pub fn combination_sum2(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let mut results = Vec::new();
        let mut candidates = candidates;
        candidates.sort_unstable();
        Self::backtrack(&candidates, target, 0, &mut Vec::new(), &mut results);
        results
    }

    fn backtrack(candidates: &[i32], remain: i32, start: usize, combination: &mut Vec<i32>, results: &mut Vec<Vec<i32>>) {
        if remain == 0 {
            results.push(combination.clone());
            return;
        }

        for i in start..candidates.len() {
            if i > start && candidates[i] == candidates[i-1] {
                continue; // Skip duplicates
            }
            if candidates[i] > remain {
                break; // Pruning
            }

            combination.push(candidates[i]);
            Self::backtrack(candidates, remain - candidates[i], i + 1, combination, results);
            combination.pop();
        }
    }
}
//Kartikdevsharmaa
```
```JavaScript []
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const results = [];
    candidates.sort((a, b) => a - b);
    
    function backtrack(remain, start, combination) {
        if (remain === 0) {
            results.push([...combination]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i-1]) continue; // Skip duplicates
            if (candidates[i] > remain) break; // Pruning
            
            combination.push(candidates[i]);
            backtrack(remain - candidates[i], i + 1, combination);
            combination.pop();
        }
    }
    
    backtrack(target, 0, []);
    return results;
};
//kartikdevsharmaa
```
---
### Dry Run

**Example 1:**
**Input:** candidates = [10,1,2,7,6,1,5], **target** = 8

First, we sort the candidates: [1,1,2,5,6,7,10]

Let's create a table to show the backtracking process:

| Step | Current Combination | Start Index | Remaining Sum | Action | Result |
|------|---------------------|-------------|---------------|--------|--------|
| 1 | [] | 0 | 8 | Start backtracking | |
| 2 | [1] | 1 | 7 | Add 1, recurse | |
| 3 | [1,1] | 2 | 6 | Add 1, recurse | |
| 4 | [1,1,2] | 3 | 4 | Add 2, recurse | |
| 5 | [1,1,2,5] | 4 | -1 | Add 5, sum > target, backtrack | |
| 6 | [1,1,2] | 4 | 4 | Remove 5, continue loop | |
| 7 | [1,1,6] | 5 | 0 | Add 6, sum == target | Add [1,1,6] to result |
| 8 | [1,1] | 3 | 6 | Remove 6, backtrack | |
| 9 | [1,1,5] | 4 | 1 | Add 5, recurse | |
| 10 | [1,1] | 3 | 6 | Remove 5, backtrack | |
| 11 | [1,2] | 3 | 5 | Remove 1, add 2, recurse | |
| 12 | [1,2,5] | 4 | 0 | Add 5, sum == target | Add [1,2,5] to result |
| 13 | [1,2] | 4 | 5 | Remove 5, continue loop | |
| 14 | [1] | 2 | 7 | Remove 2, backtrack | |
| 15 | [1,5] | 3 | 2 | Add 5, recurse | |
| 16 | [1,5,2] | 4 | 0 | Add 2, sum == target | Duplicate, skip |
| 17 | [1,5] | 4 | 2 | Remove 2, continue loop | |
| 18 | [1,7] | 5 | 0 | Add 7, sum == target | Add [1,7] to result |
| 19 | [1] | 3 | 7 | Remove 7, backtrack | |
| 20 | [] | 1 | 8 | Remove 1, backtrack | |
| 21 | [2] | 2 | 6 | Add 2, recurse | |
| 22 | [2,5] | 3 | 1 | Add 5, recurse | |
| 23 | [2,6] | 4 | 0 | Add 6, sum == target | Add [2,6] to result |
| 24 | [2] | 3 | 6 | Remove 6, backtrack | |
| 25 | [] | 2 | 8 | Remove 2, backtrack | |
| 26 | [5] | 3 | 3 | Add 5, recurse | |
| 27 | [] | 3 | 8 | Remove 5, backtrack | |
| 28 | [6] | 4 | 2 | Add 6, recurse | |
| 29 | [] | 4 | 8 | Remove 6, backtrack | |
| 30 | [7] | 5 | 1 | Add 7, recurse | |
| 31 | [] | 5 | 8 | Remove 7, backtrack | |
| 32 | [10] | 6 | -2 | Add 10, sum > target, backtrack | |
| 33 | [] | 6 | 8 | Remove 10, end | |

Final Result: [[1,1,6], [1,2,5], [1,7], [2,6]]

Let's break down some key points:

1. The algorithm starts with an empty combination and the full remaining sum (8).
2. It systematically tries adding each number, recursing deeper when possible.
3. When the sum becomes negative (step 5), it backtracks without further recursion.
4. When the sum becomes zero (steps 7, 12, 18, 23), it adds the current combination to the result.
5. After exploring all possibilities with a number, it removes that number and continues with the next.
6. Duplicate combinations are avoided. For example, in step 16, [1,5,2] is not added because [1,2,5] was already added.
7. The process continues until all possibilities have been explored.

The backtracking algorithm systematically explores all possibilities, efficiently prunes unnecessary paths (when sum > target), and avoids duplicates, ultimately finding all unique combinations that sum to the target.

---

**Example 2:**
**Input:** candidates = [2,5,2,1,2], **target** = 5

First, we sort the candidates: [1,2,2,2,5]



| Step | Current Combination | Start Index | Remaining Sum | Action | Result |
|------|---------------------|-------------|---------------|--------|--------|
| 1 | [] | 0 | 5 | Start backtracking | |
| 2 | [1] | 1 | 4 | Add 1, recurse | |
| 3 | [1,2] | 2 | 2 | Add 2, recurse | |
| 4 | [1,2,2] | 3 | 0 | Add 2, sum == target | Add [1,2,2] to result |
| 5 | [1,2] | 3 | 2 | Remove 2, continue loop | |
| 6 | [1,2] | 4 | 2 | Skip duplicate 2 | |
| 7 | [1,2,5] | 4 | -3 | Add 5, sum > target, backtrack | |
| 8 | [1,2] | 4 | 2 | Remove 5, backtrack | |
| 9 | [1] | 2 | 4 | Remove 2, backtrack | |
| 10 | [1,2] | 3 | 2 | Add 2, skip (duplicate combination) | |
| 11 | [1,5] | 4 | -1 | Add 5, sum > target, backtrack | |
| 12 | [1] | 4 | 4 | Remove 5, backtrack | |
| 13 | [] | 1 | 5 | Remove 1, backtrack | |
| 14 | [2] | 2 | 3 | Add 2, recurse | |
| 15 | [2,2] | 3 | 1 | Add 2, recurse | |
| 16 | [2,2,1] | 4 | 0 | Add 1, sum == target | Duplicate, skip |
| 17 | [2,2] | 4 | 1 | Remove 1, continue loop | |
| 18 | [2,2,5] | 4 | -4 | Add 5, sum > target, backtrack | |
| 19 | [2,2] | 4 | 1 | Remove 5, backtrack | |
| 20 | [2] | 3 | 3 | Remove 2, continue loop | |
| 21 | [2] | 4 | 3 | Skip duplicate 2 | |
| 22 | [2,5] | 4 | -2 | Add 5, sum > target, backtrack | |
| 23 | [2] | 4 | 3 | Remove 5, backtrack | |
| 24 | [] | 2 | 5 | Remove 2, backtrack | |
| 25 | [2] | 3 | 3 | Add 2, skip (duplicate combination) | |
| 26 | [5] | 4 | 0 | Add 5, sum == target | Add [5] to result |
| 27 | [] | 4 | 5 | Remove 5, end | |

Final Result: [[1,2,2], [5]]

Key points from this dry run:

1. The algorithm starts with an empty combination and the full remaining sum (5).
2. It systematically tries adding each number, recursing deeper when possible.
3. When the sum becomes negative (steps 7, 11, 18, 22), it backtracks without further recursion.
4. When the sum becomes zero (steps 4, 26), it adds the current combination to the result, unless it's a duplicate.
5. Duplicate combinations are avoided. For example, in step 16, [2,2,1] is not added because it's equivalent to the already added [1,2,2].
6. The process skips duplicate numbers at the same level to avoid redundant explorations (steps 6, 21).
7. The algorithm continues until all possibilities have been explored.


