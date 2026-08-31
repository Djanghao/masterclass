# ✔️ Beats 100% : 2D -DP : Detailed Step-by-Step Explanation - C++/Java/Python/JS/Ruby/Go/Dart

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-inversions/solutions/5353712/](https://leetcode.com/problems/count-the-number-of-inversions/solutions/5353712/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires calculating permutations of length \\( n \\) with specific inversion requirements using dynamic programming.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialization**: Initialize `requirement_dict` to store inversion count requirements for each permutation length.
2. **Dynamic Programming Table**: Use `dp` where `dp[length][inv_count]` tracks permutations of length `length` with `inv_count` inversions.
3. **DP Table Population**:
   - Initialize base case: `dp[1][0] = 1`.
   - Iterate over lengths and update inversion counts based on previous permutations.
4. **Applying Requirements**: Adjust `dp` based on inversion requirements specified in `requirement_dict`.
5. **Result**: Return `dp[n][required\\_inversions]`.

# Complexity
- **Time complexity**: $$ O(n^2 \	imes 401) $$), where:
  - \\( n \\) is the number of elements.
  - 401 is the maximum possible inversion count.
  - Explanation: The nested loops iterate through permutations of length up to \\( n \\) and calculate inversion counts up to 400, resulting in a time complexity dominated by \\( n^2 \\).

- **Space complexity**:$$ O(n^2 \	imes 401) $$), where:
  - \\( n \\) is the number of elements.
  - 401 is the maximum possible inversion count.
  - Explanation: The `dp` table requires space proportional to $$ (n \	imes 401) $$ to store results of permutations with different inversion counts. The space complexity is also affected by `requirement_dict`, which stores inversion requirements for each permutation length.

# Code
```C++ []
#include <vector>
#include <unordered_map>

class Solution {
public:
    int numberOfPermutations(int n, std::vector<std::vector<int>>& requirements) {
        const int MODULO = 1e9 + 7;
        
        std::unordered_map<int, int> requirement_dict;
        for (auto& req : requirements) {
            requirement_dict[req[0] + 1] = req[1];
        }
        
        std::vector<std::vector<int>> dp(n + 1, std::vector<int>(401, 0));
        dp[1][0] = 1;
        
        for (int length = 2; length <= n; ++length) {
            for (int inv_count = 0; inv_count < 401; ++inv_count) {
                for (int num = 0; num < length; ++num) {
                    int new_inv_count = num + inv_count;
                    if (new_inv_count <= 400) {
                        dp[length][new_inv_count] += dp[length - 1][inv_count];
                        dp[length][new_inv_count] %= MODULO;
                    }
                }
            }
            
            if (requirement_dict.find(length) != requirement_dict.end()) {
                int required_inversions = requirement_dict[length];
                for (int inv_count = 0; inv_count < 401; ++inv_count) {
                    if (inv_count != required_inversions) {
                        dp[length][inv_count] = 0;
                    }
                }
            }
        }
        
        int required_inversions = requirement_dict.count(n) ? requirement_dict[n] : 0;
        return dp[n][required_inversions];
    }
};

```
```python []
class Solution:
    def numberOfPermutations(self, n: int, requirements: List[List[int]]) -> int:
        MODULO = 10**9 + 7
        
        # Create a dictionary from requirements for easier access
        requirement_dict = {end + 1: count for end, count in requirements}
        
        # Initialize a 2D list for dynamic programming
        dp = [[0] * 401 for _ in range(n + 1)]
        dp[1][0] = 1
        
        # Populate the dp table
        for length in range(2, n + 1):
            for inv_count in range(401):
                for num in range(length):
                    new_inv_count = num + inv_count
                    if new_inv_count <= 400:
                        dp[length][new_inv_count] += dp[length - 1][inv_count]
                        dp[length][new_inv_count] %= MODULO
            
            # Apply requirements constraints
            for inv_count in range(401):
                if length in requirement_dict and requirement_dict[length] != inv_count:
                    dp[length][inv_count] = 0
        
        # Get the result for the required inversion count
        inversion_target = requirement_dict.get(n, 0)
        return dp[n][inversion_target]

```
```Java []
class Solution {
    public int numberOfPermutations(int n, int[][] requirements) {
        final int MODULO = 1_000_000_007;
        
        HashMap<Integer, Integer> requirementDict = new HashMap<>();
        for (int[] req : requirements) {
            requirementDict.put(req[0] + 1, req[1]);
        }
        
        int[][] dp = new int[n + 1][401];
        dp[1][0] = 1;
        
        for (int length = 2; length <= n; ++length) {
            for (int invCount = 0; invCount < 401; ++invCount) {
                for (int num = 0; num < length; ++num) {
                    int newInvCount = num + invCount;
                    if (newInvCount <= 400) {
                        dp[length][newInvCount] += dp[length - 1][invCount];
                        dp[length][newInvCount] %= MODULO;
                    }
                }
            }
            
            if (requirementDict.containsKey(length)) {
                int requiredInversions = requirementDict.get(length);
                for (int invCount = 0; invCount < 401; ++invCount) {
                    if (invCount != requiredInversions) {
                        dp[length][invCount] = 0;
                    }
                }
            }
        }
        
        int requiredInversions = requirementDict.containsKey(n) ? requirementDict.get(n) : 0;
        return dp[n][requiredInversions];
    }
}

```

```javascript []
function numberOfPermutations(n, requirements) {
    const MODULO = 1e9 + 7;
    
    let requirementDict = {};
    for (let req of requirements) {
        requirementDict[req[0] + 1] = req[1];
    }
    
    let dp = new Array(n + 1).fill(0).map(() => new Array(401).fill(0));
    dp[1][0] = 1;
    
    for (let length = 2; length <= n; ++length) {
        for (let invCount = 0; invCount < 401; ++invCount) {
            for (let num = 0; num < length; ++num) {
                let newInvCount = num + invCount;
                if (newInvCount <= 400) {
                    dp[length][newInvCount] += dp[length - 1][invCount];
                    dp[length][newInvCount] %= MODULO;
                }
            }
        }
        
        if (requirementDict[length]) {
            let requiredInversions = requirementDict[length];
            for (let invCount = 0; invCount < 401; ++invCount) {
                if (invCount !== requiredInversions) {
                    dp[length][invCount] = 0;
                }
            }
        }
    }
    
    let requiredInversions = requirementDict[n] ? requirementDict[n] : 0;
    return dp[n][requiredInversions];
}

```
```Go []
package main

func numberOfPermutations(n int, requirements [][]int) int {
    const MODULO = 1e9 + 7
    
    requirementDict := make(map[int]int)
    for _, req := range requirements {
        requirementDict[req[0] + 1] = req[1]
    }
    
    dp := make([][]int, n + 1)
    for i := range dp {
        dp[i] = make([]int, 401)
    }
    dp[1][0] = 1
    
    for length := 2; length <= n; length++ {
        for invCount := 0; invCount < 401; invCount++ {
            for num := 0; num < length; num++ {
                newInvCount := num + invCount
                if newInvCount <= 400 {
                    dp[length][newInvCount] += dp[length - 1][invCount]
                    dp[length][newInvCount] %= MODULO
                }
            }
        }
        
        if reqInv, ok := requirementDict[length]; ok {
            for invCount := 0; invCount < 401; invCount++ {
                if invCount != reqInv {
                    dp[length][invCount] = 0
                }
            }
        }
    }
    
    reqInv := requirementDict[n]
    if reqInv == 0 {
        reqInv = 0
    }
    return dp[n][reqInv]
}

```
```ruby []
def number_of_permutations(n, requirements)
    modulo = 1_000_000_007
    
    requirement_dict = {}
    requirements.each do |req|
        requirement_dict[req[0] + 1] = req[1]
    end
    
    dp = Array.new(n + 1) { Array.new(401, 0) }
    dp[1][0] = 1
    
    (2..n).each do |length|
        (0...401).each do |inv_count|
            (0...length).each do |num|
                new_inv_count = num + inv_count
                if new_inv_count <= 400
                    dp[length][new_inv_count] += dp[length - 1][inv_count]
                    dp[length][new_inv_count] %= modulo
                end
            end
        end
        
        if requirement_dict.key?(length)
            required_inversions = requirement_dict[length]
            (0...401).each do |inv_count|
                if inv_count != required_inversions
                    dp[length][inv_count] = 0
                end
            end
        end
    end
    
    required_inversions = requirement_dict.key?(n) ? requirement_dict[n] : 0
    dp[n][required_inversions]
end

```
```Dart []
int numberOfPermutations(int n, List<List<int>> requirements) {
  const MODULO = 1000000007;
  
  var requirementDict = <int, int>{};
  for (var req in requirements) {
    requirementDict[req[0] + 1] = req[1];
  }
  
  var dp = List.generate(n + 1, (_) => List.filled(401, 0));
  dp[1][0] = 1;
  
  for (var length = 2; length <= n; length++) {
    for (var invCount = 0; invCount < 401; invCount++) {
      for (var num = 0; num < length; num++) {
        var newInvCount = num + invCount;
        if (newInvCount <= 400) {
          dp[length][newInvCount] += dp[length - 1][invCount];
          dp[length][newInvCount] %= MODULO;
        }
      }
    }
    
    if (requirementDict.containsKey(length)) {
      var requiredInversions = requirementDict[length];
      for (var invCount = 0; invCount < 401; invCount++) {
        if (invCount != requiredInversions) {
          dp[length][invCount] = 0;
        }
      }
    }
  }
  
  var requiredInversions = requirementDict.containsKey(n) ? requirementDict[n] : 0;
  return dp[n][requiredInversions];
}

```
