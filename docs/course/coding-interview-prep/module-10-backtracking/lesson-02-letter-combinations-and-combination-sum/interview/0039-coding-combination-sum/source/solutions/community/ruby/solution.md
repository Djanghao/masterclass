# ✅ Complex Backtracking Interview Prepare | List of Backtracking Questions | Beats 100% ✅

**Author:** Piotr_Maminski
**Votes:** 9
**Link:** [https://leetcode.com/problems/combination-sum/solutions/5976264/](https://leetcode.com/problems/combination-sum/solutions/5976264/)

---

# List of Analogous Backtracking Questions
Similar problems during recruitment, from the most to the least common (knowledge from GitHub):

[[17]](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5976064/complex-backtracking-interview-prepare-list-of-backtracking-questions-beats-100) [[51]](https://leetcode.com/problems/n-queens/description/)  [[47]](https://leetcode.com/problems/permutations-ii/description/) [[40]](https://leetcode.com/problems/combination-sum-ii/description/) [[46]](https://leetcode.com/problems/permutations/solutions/5976304/complex-backtracking-interview-prepare-list-of-backtracking-questions-beats-100) [[22]](https://leetcode.com/problems/generate-parentheses/solutions/5976224/complex-backtracking-interview-prepare-list-of-backtracking-questions-beats-100) [[78]](https://leetcode.com/problems/subsets/description/)  [[39]](https://leetcode.com/problems/combination-sum/solutions/5976264/complex-backtracking-interview-prepare-list-of-backtracking-questions-beats-100) 


If you've encountered any of these issues or have other questions that aren't on this list, please leave a comment so I can update list.
```python3 []
class Solution:
    def findCombinations(self, index: int, target: int, candidates: List[int], current: List[int], result: List[List[int]]) -> None:
        # Base case: if target becomes 0, we found a valid combination
        if target == 0:
            result.append(current[:])  # Add a copy of current combination to result
            return
        
        # Try all possible numbers from current index
        for i in range(index, len(candidates)):
            # Only proceed if current number doesn't exceed target
            if candidates[i] <= target:
                # Include current number in combination
                current.append(candidates[i])
                
                # Recursive call with:
                # - same index i (allowing reuse of same number)
                # - reduced target by current number
                self.findCombinations(i, target - candidates[i], candidates, current, result)
                
                # Backtrack: remove the last added number to try other combinations
                current.pop()
    
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []        # Stores all valid combinations
        current = []       # Temporary list to build combinations
        self.findCombinations(0, target, candidates, current, result)
        return result
```
```cpp []
class Solution {
public:
    // Recursive helper function to find all combinations
    // index: current position in candidates array
    // target: remaining sum to achieve
    // candidates: input array of numbers
    // current: current combination being built
    // result: stores all valid combinations
    void findCombinations(int index, int target, vector<int>& candidates, vector<int>& current, vector<vector<int>>& result) {
        // Base case: if target becomes 0, we found a valid combination
        if (target == 0) {
            result.push_back(current); // Add current combination to result
            return;
        }

        // Try all possible numbers from current index
        for (int i = index; i < candidates.size(); i++) {
            // Only proceed if current number doesn't exceed target
            if (candidates[i] <= target) {
                // Include current number in combination
                current.push_back(candidates[i]); 

                // Recursive call with:
                // - same index i (allowing reuse of same number)
                // - reduced target by current number
                findCombinations(i, target - candidates[i], candidates, current, result); 

                // Backtrack: remove the last added number to try other combinations
                current.pop_back(); 
            }
        }
    }

    // Main function that initiates the combination finding process
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> result;    // Stores all valid combinations
        vector<int> current;           // Temporary vector to build combinations
        findCombinations(0, target, candidates, current, result);
        return result;
    }
};
```
```java []
class Solution {
    // Recursive helper function to find all combinations
    private void findCombinations(int index, int target, int[] candidates, 
                                List<Integer> current, List<List<Integer>> result) {
        // Base case: if target becomes 0, we found a valid combination
        if (target == 0) {
            result.add(new ArrayList<>(current)); // Add current combination to result
            return;
        }

        // Try all possible numbers from current index
        for (int i = index; i < candidates.length; i++) {
            // Only proceed if current number doesn't exceed target
            if (candidates[i] <= target) {
                // Include current number in combination
                current.add(candidates[i]);

                // Recursive call with:
                // - same index i (allowing reuse of same number)
                // - reduced target by current number
                findCombinations(i, target - candidates[i], candidates, current, result);

                // Backtrack: remove the last added number to try other combinations
                current.remove(current.size() - 1);
            }
        }
    }

    // Main function that initiates the combination finding process
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();    // Stores all valid combinations
        List<Integer> current = new ArrayList<>();         // Temporary list to build combinations
        findCombinations(0, target, candidates, current, result);
        return result;
    }
}
```
```csharp []
public class Solution {
    // Main function that initiates the combination finding process
    public IList<IList<int>> CombinationSum(int[] candidates, int target) {
        var result = new List<IList<int>>();    // Stores all valid combinations
        var current = new List<int>();          // Temporary list to build combinations
        FindCombinations(0, target, candidates, current, result);
        return result;
    }
    
    // Recursive helper function to find all combinations
    private void FindCombinations(int index, int target, int[] candidates, 
                                List<int> current, List<IList<int>> result) {
        // Base case: if target becomes 0, we found a valid combination
        if (target == 0) {
            result.Add(new List<int>(current)); // Add current combination to result
            return;
        }

        // Try all possible numbers from current index
        for (int i = index; i < candidates.Length; i++) {
            // Only proceed if current number doesn't exceed target
            if (candidates[i] <= target) {
                // Include current number in combination
                current.Add(candidates[i]);

                // Recursive call with:
                // - same index i (allowing reuse of same number)
                // - reduced target by current number
                FindCombinations(i, target - candidates[i], candidates, current, result);

                // Backtrack: remove the last added number to try other combinations
                current.RemoveAt(current.Count - 1);
            }
        }
    }
}
```
```golang []
package main

// findCombinations is a recursive helper function to find all combinations
// index: current position in candidates array
// target: remaining sum to achieve
// candidates: input array of numbers
// current: current combination being built
// result: stores all valid combinations
func findCombinations(index, target int, candidates []int, current []int, result *[][]int) {
    // Base case: if target becomes 0, we found a valid combination
    if target == 0 {
        // Create a copy of current combination and add to result
        combination := make([]int, len(current))
        copy(combination, current)
        *result = append(*result, combination)
        return
    }

    // Try all possible numbers from current index
    for i := index; i < len(candidates); i++ {
        // Only proceed if current number doesn't exceed target
        if candidates[i] <= target {
            // Include current number in combination
            current = append(current, candidates[i])

            // Recursive call with:
            // - same index i (allowing reuse of same number)
            // - reduced target by current number
            findCombinations(i, target-candidates[i], candidates, current, result)

            // Backtrack: remove the last added number to try other combinations
            current = current[:len(current)-1]
        }
    }
}

// combinationSum finds all unique combinations of candidates where the numbers sum to target
func combinationSum(candidates []int, target int) [][]int {
    result := make([][]int, 0)    // Stores all valid combinations
    current := make([]int, 0)     // Temporary slice to build combinations
    findCombinations(0, target, candidates, current, &result)
    return result
}
```
```swift []
class Solution {
    // Recursive helper function to find all combinations
    private func findCombinations(_ index: Int, _ target: Int, _ candidates: [Int], _ current: inout [Int], _ result: inout [[Int]]) {
        // Base case: if target becomes 0, we found a valid combination
        if target == 0 {
            result.append(current) // Add current combination to result
            return
        }
        
        // Try all possible numbers from current index
        for i in index..<candidates.count {
            // Only proceed if current number doesn't exceed target
            if candidates[i] <= target {
                // Include current number in combination
                current.append(candidates[i])
                
                // Recursive call with:
                // - same index i (allowing reuse of same number)
                // - reduced target by current number
                findCombinations(i, target - candidates[i], candidates, &current, &result)
                
                // Backtrack: remove the last added number to try other combinations
                current.removeLast()
            }
        }
    }
    
    // Main function that initiates the combination finding process
    func combinationSum(_ candidates: [Int], _ target: Int) -> [[Int]] {
        var result: [[Int]] = []    // Stores all valid combinations
        var current: [Int] = []     // Temporary array to build combinations
        findCombinations(0, target, candidates, &current, &result)
        return result
    }
}
```
```javascript [JS]
// JavaScript


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    function findCombinations(index, target, current) {
        // Base case: if target becomes 0, we found a valid combination
        if (target === 0) {
            result.push([...current]); // Create a new array copy
            return;
        }
        
        // Try all possible numbers from current index
        for (let i = index; i < candidates.length; i++) {
            // Only proceed if current number doesn't exceed target
            if (candidates[i] <= target) {
                // Include current number in combination
                current.push(candidates[i]);
                
                // Recursive call with:
                // - same index i (allowing reuse of same number)
                // - reduced target by current number
                findCombinations(i, target - candidates[i], current);
                
                // Backtrack: remove the last added number to try other combinations
                current.pop();
            }
        }
    }
    
    findCombinations(0, target, []);
    return result;
};
```
```typescript [TS]
// TypeScript


// This function finds all unique combinations of numbers from candidates array that sum up to target
function combinationSum(candidates: number[], target: number): number[][] {
    // Store all valid combinations
    const result: number[][] = [];
    
    // Helper function that uses backtracking to find combinations
    // index: current position in candidates array
    // target: remaining sum to achieve
    // current: current combination being built
    function findCombinations(index: number, target: number, current: number[]): void {
        // Base case: if target becomes 0, we found a valid combination
        if (target === 0) {
            // Create a copy of current combination and add to results
            result.push([...current]);
            return;
        }
        
        // Try each candidate number starting from current index
        for (let i = index; i < candidates.length; i++) {
            // Only proceed if the current candidate doesn't exceed remaining target
            if (candidates[i] <= target) {
                // Include current candidate in combination
                current.push(candidates[i]);
                
                // Recursively find combinations with:
                // - same starting index (i) since numbers can be reused
                // - reduced target by current candidate value
                // - updated current combination
                findCombinations(i, target - candidates[i], current);
                
                // Backtrack: remove the last added number to try other combinations
                current.pop();
            }
        }
    }
    
    // Start the recursive process with initial values
    findCombinations(0, target, []);
    return result;
}
```
```rust []
impl Solution {
    // Helper function to find combinations recursively
    fn find_combinations(
        index: usize,
        target: i32,
        candidates: &Vec<i32>,
        current: &mut Vec<i32>,
        result: &mut Vec<Vec<i32>>,
    ) {
        // Base case: found a valid combination
        if target == 0 {
            result.push(current.clone());
            return;
        }

        // Try all possible numbers from current index
        for i in index..candidates.len() {
            // Only proceed if current number doesn't exceed target
            if candidates[i] <= target {
                // Include current number in combination
                current.push(candidates[i]);

                // Recursive call with same index (allowing reuse)
                Self::find_combinations(
                    i,
                    target - candidates[i],
                    candidates,
                    current,
                    result,
                );

                // Backtrack by removing last added number
                current.pop();
            }
        }
    }

    pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        let mut current = Vec::new();
        Self::find_combinations(0, target, &candidates, &mut current, &mut result);
        result
    }
}
```
```ruby []
# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum(candidates, target)
    result = []
    find_combinations(0, target, candidates, [], result)
    result
end

def find_combinations(index, target, candidates, current, result)
    # Base case: if target becomes 0, we found a valid combination
    if target == 0
        result << current.clone
        return
    end
    
    # Try all possible numbers from current index
    (index...candidates.length).each do |i|
        # Only proceed if current number doesn't exceed target
        if candidates[i] <= target
            # Include current number in combination
            current << candidates[i]
            
            # Recursive call with same index i (allowing reuse)
            find_combinations(i, target - candidates[i], candidates, current, result)
            
            # Backtrack: remove the last added number
            current.pop
        end
    end
end
```
### Complexity 
- Time complexity: O(N^(T/M))

- Space complexity: O(T/M)

![image.png](./images/0.png)


![image.png](./images/1.png)
![image.png](./images/2.png)

