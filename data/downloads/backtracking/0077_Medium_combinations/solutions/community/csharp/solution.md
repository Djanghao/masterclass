# 🧩 Iterative & Backtracking [VIDEO] 100% Efficient Combinatorial Generation

**Author:** vanAmsen
**Votes:** 105
**Link:** [https://leetcode.com/problems/combinations/solutions/3845249/](https://leetcode.com/problems/combinations/solutions/3845249/)

---

# Intuition
Given two integers `n` and `k`, the task is to generate all possible combinations of `k` numbers from the range `[1, n]`. The initial intuition to solve this problem is to leverage the concept of combination generation, where we iteratively choose `k` numbers from `n` numbers without any repetition. However, there are multiple approaches to achieve this, and in this analysis, we'll be comparing two of them: **backtracking** and **iterative** generation. 

# Video - Backtracking
https://youtu.be/aXgNccfxlkA

# Video - Iterative
https://youtu.be/7Ocr2RXNIC4

# Approaches - Summary
We'll tackle this problem using two distinct methods. The first method utilizes a classic backtracking algorithm, which involves building up a solution incrementally. The second method employs an iterative algorithm, which efficiently generates combinations in lexicographical order. While both methods aim to generate all possible combinations of `k` numbers out of `n`, the iterative approach has been found to be faster for the given test cases. 

1. **Backtracking Approach**: This approach involves a recursive function, `backtrack`, that generates all combinations of `k` numbers. We iterate over all numbers from `first` to `n`. For each number `i`, we add it to the current combination and then recursively generate all the combinations of the next numbers. After that, we remove `i` from the current combination to backtrack and try the next number.

2. **Iterative Approach**: This approach uses an iterative algorithm to generate combinations. It maintains a list of current indices and generates the next combination from the current one by incrementing the rightmost element that hasn't reached its maximum value yet.

# Approach - Backtracking

Our approach specifically involves a recursive function, `backtrack`, that generates all combinations of \\(k\\) numbers. Here's a step-by-step walkthrough of the process:

1. **Initialization**: We define an empty list, `output`, to store all our valid combinations. We also initialize our `backtrack` function, which takes as input parameters the first number to add to the current combination (`first`) and the current combination itself (`curr`).

2. **Base case for recursion**: Within the `backtrack` function, we first check if the length of the current combination (`curr`) is equal to \\(k\\). If it is, we have a valid combination and add a copy of it to our `output` list.

3. **Loop through the numbers**: For each number \\(i\\) in the range from `first` to \\(n\\), we add \\(i\\) to the current combination (`curr`).

4. **Recursive call**: We then make a recursive call to `backtrack`, incrementing the value of `first` by 1 for the next iteration and passing the current combination as parameters. This step allows us to generate all combinations of the remaining numbers.

5. **Backtrack**: After exploring all combinations with \\(i\\) included, we need to remove \\(i\\) from the current combination. This allows us to backtrack and explore the combinations involving the next number. This is done using the `pop()` method, which removes the last element from the list.

6. **Return the result**: Finally, after all recursive calls and backtracking, the `backtrack` function will have filled our `output` list with all valid combinations of \\(k\\) numbers. We return this list as our final result.

# Approach - Iterative

The approach taken to solve this problem involves the use of  function calls to generate all possible combinations. Here is a more detailed step-by-step breakdown of the approach:

1. **Define the `generate_combinations` function:** This function takes in two parameters: `elems` (the range of numbers to choose from) and `num` (the number of elements in each combination). It begins by converting `elems` to a tuple (`elems_tuple`) for efficient indexing. It then checks if `num` is greater than the total number of elements; if it is, the function returns as it's impossible to select more elements than exist in the range.

2. **Initialize indices:** An array `curr_indices` is initialized with the first `num` indices. This will represent the indices in `elems_tuple` that we are currently considering for our combination.

3. **Generate combinations:** The function enters a loop. In each iteration, it first generates a combination by picking elements from `elems_tuple` using the indices in `curr_indices` and yields it. This is done using a tuple comprehension.

4. **Update indices:** Next, the function attempts to update `curr_indices` to represent the next combination. It starts from the end of `curr_indices` and moves towards the start, looking for an index that hasn't reached its maximum value (which is its position from the end of `elems_tuple`). When it finds such an index, it increments it and sets all subsequent indices to be one greater than their previous index. This ensures that we generate combinations in increasing order. If it doesn't find any index to increment (meaning we have generated all combinations), it breaks out of the loop and the function returns.

5. **Call the `generate_combinations` function:** In the `combine` method, the `generate_combinations` function is called with the range `[1, n+1]` and `k` as arguments. The returned combinations are tuples, so a list comprehension is used to convert each combination into a list.

# Complexity - Iterative

- **Time complexity:** The time complexity is \\(O(C(n, k))\\), where \\(n\\) is the total number of elements and \\(k\\) is the number of elements in each combination. This is because the function generates each combination once. Here, \\(C(n, k)\\) denotes the number of ways to choose \\(k\\) elements from \\(n\\) elements without regard to the order of selection, also known as "n choose k".

- **Space complexity:** The space complexity is also \\(O(C(n, k))\\) as we store all combinations in a list. 


# Complexity - Backtracking
- **Time complexity:** The time complexity of this approach is (O(C(n, k)*k)). This is because in the worst-case scenario, we would need to explore all combinations of \\(k\\) out of \\(n\\) (which is C(n, k) and for each combination, it takes \\(O(k)\\) time to make a copy of it.
- **Space complexity:** The space complexity is \\(O(k)\\). This is because, in the worst case, if we consider the function call stack size in a depth-first search traversal, we could end up going as deep as \\(k\\) levels.

# Code - Iterative
```Python []
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def generate_combinations(elems, num):
            elems_tuple = tuple(elems)
            total = len(elems_tuple)
            if num > total:
                return
            curr_indices = list(range(num))
            while True:
                yield tuple(elems_tuple[i] for i in curr_indices)
                for idx in reversed(range(num)):
                    if curr_indices[idx] != idx + total - num:
                        break
                else:
                    return
                curr_indices[idx] += 1
                for j in range(idx+1, num):
                    curr_indices[j] = curr_indices[j-1] + 1

        return [list(combination) for combination in generate_combinations(range(1, n+1), k)]
```
``` Java []
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> result = new ArrayList<>();
        generateCombinations(1, n, k, new ArrayList<Integer>(), result);
        return result;
    }

    private void generateCombinations(int start, int n, int k, List<Integer> combination, List<List<Integer>> result) {
        if (k == 0) {
            result.add(new ArrayList<>(combination));
            return;
        }
        for (int i = start; i <= n - k + 1; i++) {
            combination.add(i);
            generateCombinations(i + 1, n, k - 1, combination, result);
            combination.remove(combination.size() - 1);
        }
    }
}
```
``` C++ []
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> result;
        vector<int> combination(k);
        generateCombinations(1, n, k, combination, result);
        return result;
    }

private:
    void generateCombinations(int start, int n, int k, vector<int> &combination, vector<vector<int>> &result) {
        if (k == 0) {
            result.push_back(combination);
            return;
        }
        for (int i = start; i <= n; ++i) {
            combination[combination.size() - k] = i;
            generateCombinations(i + 1, n, k - 1, combination, result);
        }
    }
};
```
``` C# []
public class Solution {
    public IList<IList<int>> Combine(int n, int k) {
        var result = new List<IList<int>>();
        GenerateCombinations(1, n, k, new List<int>(), result);
        return result;
    }
    
    private void GenerateCombinations(int start, int n, int k, List<int> combination, IList<IList<int>> result) {
        if (k == 0) {
            result.Add(new List<int>(combination));
            return;
        }
        for (var i = start; i <= n; ++i) {
            combination.Add(i);
            GenerateCombinations(i + 1, n, k - 1, combination, result);
            combination.RemoveAt(combination.Count - 1);
        }
    }
}
```
``` JavaScript []
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    generateCombinations(1, n, k, [], result);
    return result;
};

function generateCombinations(start, n, k, combination, result) {
    if (k === 0) {
        result.push([...combination]);
        return;
    }
    for (let i = start; i <= n; ++i) {
        combination.push(i);
        generateCombinations(i + 1, n, k - 1, combination, result);
        combination.pop();
    }
}
```

# Code - Backtracking
``` Python []
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def backtrack(first = 1, curr = []):
            if len(curr) == k:
                output.append(curr[:])
                return
            for i in range(first, n + 1):
                curr.append(i)
                backtrack(i + 1, curr)
                curr.pop()
        output = []
        backtrack()
        return output
```
``` C++ []
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> result;
        vector<int> combination;
        backtrack(n, k, 1, combination, result);
        return result;
    }

private:
    void backtrack(int n, int k, int start, vector<int>& combination, vector<vector<int>>& result) {
        if (combination.size() == k) {
            result.push_back(combination);
            return;
        }
        for (int i = start; i <= n; i++) {
            combination.push_back(i);
            backtrack(n, k, i + 1, combination, result);
            combination.pop_back();
        }
    }
};
```
``` Java []
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(n, k, 1, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(int n, int k, int start, List<Integer> combination, List<List<Integer>> result) {
        if (combination.size() == k) {
            result.add(new ArrayList<>(combination));
            return;
        }
        for (int i = start; i <= n; i++) {
            combination.add(i);
            backtrack(n, k, i + 1, combination, result);
            combination.remove(combination.size() - 1);
        }
    }
}
```
``` JavaScript []
var combine = function(n, k) {
    const result = [];
    backtrack(n, k, 1, [], result);
    return result;
};

function backtrack(n, k, start, combination, result) {
    if (combination.length === k) {
        result.push([...combination]);
        return;
    }
    for (let i = start; i <= n; i++) {
        combination.push(i);
        backtrack(n, k, i + 1, combination, result);
        combination.pop();
    }
}
```
``` C# []
public class Solution {
    public IList<IList<int>> Combine(int n, int k) {
        IList<IList<int>> result = new List<IList<int>>();
        Backtrack(n, k, 1, new List<int>(), result);
        return result;
    }

    private void Backtrack(int n, int k, int start, IList<int> combination, IList<IList<int>> result) {
        if (combination.Count == k) {
            result.Add(new List<int>(combination));
            return;
        }
        for (int i = start; i <= n; i++) {
            combination.Add(i);
            Backtrack(n, k, i + 1, combination, result);
            combination.RemoveAt(combination.Count - 1);
        }
    }
}
```

## Performances - Iterative
| Language | Runtime | Rank | Memory |
|----------|---------|------|--------|
| Java     | 1 ms    | 100% | 45.3 MB|
| C++      | 14 ms   | 90.1%| 9.2 MB |
| Python3  | 68 ms   | 99.72%| 18.8 MB|
| JavaScript | 79 ms | 99.84%| 48.6 MB|
| C#       | 101 ms  | 93.1%| 44.1 MB|

## Performances - Backtracking
| Language | Runtime | Beats | Memory |
|----------|---------|-------|--------|
| Java     | 17 ms   | 75.30%| 44.5 MB|
| C++      | 21 ms   | 85.40%| 9.1 MB |
| JavaScript | 86 ms | 97.78%| 48 MB  |
| C#       | 105 ms  | 88.60%| 44.4 MB|
| Python3  | 286 ms  | 78.68%| 18.2 MB|

I hope you found this solution helpful! If so, please consider giving it an upvote. If you have any questions or suggestions for improving the solution, don't hesitate to leave a comment. Your feedback not only helps me improve my answers, but it also helps other users who might be facing similar problems. Thank you for your support!
