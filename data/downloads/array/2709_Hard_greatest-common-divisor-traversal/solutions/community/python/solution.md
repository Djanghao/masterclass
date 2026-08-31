# ✅☑[C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 106
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778375/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778375/)

---

# DO GIVE IT A LIKE IF THAT WAS HELPFUL\uD83E\uDEE1\uD83D\uDC47



---


---


# Approaches
(Also explained in the code)

1. **Prime Factor Mapping:** The solution constructs two mappings: prime2index maps each prime factor to the indices of elements in the array that have that prime factor, and index2prime maps each element index to its prime factors.

1. **DFS Traversal:** It performs a Depth-First Search (DFS) traversal starting from index 0. During the traversal, it tracks visited indices and prime factors to ensure that all pairs can be traversed.

1. **Handling Common Prime Factors:** For each element in the array, it iterates through its prime factors and updates the mappings accordingly. This step ensures that elements sharing common prime factors are correctly mapped.

1. **DFS to Find Connectivity:** The DFS function recursively explores elements connected by sharing common prime factors. It marks visited indices and prime factors to ensure all connected elements are visited.

1. **Final Check:** After DFS traversal, it checks if all indices have been visited. If any index remains unvisited, it returns false, indicating that not all pairs can be traversed. Otherwise, it returns true.


# Complexity
- Time complexity:
   $$O(n\u221Am)$$
    

- Space complexity:
   $$O(n+m)$$
    


# Code
```C++ []
class Solution {
public:
    unordered_map<int, vector<int>> prime2index;
    unordered_map<int, vector<int>> index2prime;
    void dfs(int index, vector<int>& visitedIndex, unordered_map<int,bool>& visitedPrime){
        if(visitedIndex[index] == true) return;
        visitedIndex[index] = true;

        for(auto &prime : index2prime[index]){
            if(visitedPrime[prime] == true) 
                continue;
            visitedPrime[prime] = true;
            for(auto &index1 : prime2index[prime]){
                if(visitedIndex[index1] == true) continue;
                dfs(index1, visitedIndex, visitedPrime);
            }
        }
    }

    bool canTraverseAllPairs(vector<int>& nums) {
        for (int i=0; i<nums.size(); i++) {
            int temp = nums[i];
            for (int j = 2; j*j <= nums[i]; j++) {
                if (temp % j == 0) {
                    prime2index[j].push_back(i);
                    index2prime[i].push_back(j);
                    while (temp % j == 0)
                      temp /= j;
                }
            }
            if (temp > 1) {
                prime2index[temp].push_back(i);
                index2prime[i].push_back(temp);
            }
        }

        vector<int> visitedIndex(nums.size(),0);
        unordered_map<int,bool> visitedPrime;
        dfs(0, visitedIndex, visitedPrime);     

        for(int i=0; i<visitedIndex.size(); i++) 
            if(visitedIndex[i] == false) 
                return false;
        return true;    
    }
};





```
```Java []


class Solution {
    public void dfs(int index, boolean[] visitedIndex, Map<Integer, Boolean> visitedPrime) {
    Map<Integer, List<Integer>> prime2index = new HashMap<>();
    Map<Integer, List<Integer>> index2prime = new HashMap<>();

        if (visitedIndex[index])
            return;
        visitedIndex[index] = true;

        for (int prime : index2prime.get(index)) {
            if (visitedPrime.getOrDefault(prime, false))
                continue;
            visitedPrime.put(prime, true);
            for (int index1 : prime2index.get(prime)) {
                if (visitedIndex[index1])
                    continue;
                dfs(index1, visitedIndex, visitedPrime);
            }
        }
    }

    public boolean canTraverseAllPairs(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            int temp = nums[i];
            for (int j = 2; j * j <= nums[i]; j++) {
                if (temp % j == 0) {
                    prime2index.computeIfAbsent(j, k -> new ArrayList<>()).add(i);
                    index2prime.computeIfAbsent(i, k -> new ArrayList<>()).add(j);
                    while (temp % j == 0)
                        temp /= j;
                }
            }
            if (temp > 1) {
                prime2index.computeIfAbsent(temp, k -> new ArrayList<>()).add(i);
                index2prime.computeIfAbsent(i, k -> new ArrayList<>()).add(temp);
            }
        }

        boolean[] visitedIndex = new boolean[nums.length];
        Map<Integer, Boolean> visitedPrime = new HashMap<>();
        dfs(0, visitedIndex, visitedPrime);

        for (boolean b : visitedIndex)
            if (!b)
                return false;
        return true;
    }
}


```
```python3 []
class Solution:
    def dfs(self, index, visitedIndex, visitedPrime):
        if visitedIndex[index]:
            return
        visitedIndex[index] = True

        for prime in self.index2prime[index]:
            if visitedPrime.get(prime, False):
                continue
            visitedPrime[prime] = True
            for index1 in self.prime2index[prime]:
                if visitedIndex[index1]:
                    continue
                self.dfs(index1, visitedIndex, visitedPrime)

    def canTraverseAllPairs(self, nums: List[int]) -> bool:
        self.prime2index = {}
        self.index2prime = {}
        for i, num in enumerate(nums):
            temp = num
            for j in range(2, int(num ** 0.5) + 1):
                if temp % j == 0:
                    self.prime2index.setdefault(j, []).append(i)
                    self.index2prime.setdefault(i, []).append(j)
                    while temp % j == 0:
                        temp //= j
            if temp > 1:
                self.prime2index.setdefault(temp, []).append(i)
                self.index2prime.setdefault(i, []).append(temp)

        visitedIndex = [False] * len(nums)
        visitedPrime = {}
        self.dfs(0, visitedIndex, visitedPrime)

        return all(visitedIndex)


```
```javascript []
var Solution = function() {
    this.prime2index = {};
    this.index2prime = {};
};

Solution.prototype.dfs = function(index, visitedIndex, visitedPrime) {
    if (visitedIndex[index]) return;
    visitedIndex[index] = true;

    const primes = this.index2prime[index] || [];
    for (let i = 0; i < primes.length; i++) {
        const prime = primes[i];
        if (visitedPrime[prime]) continue;
        visitedPrime[prime] = true;
        const indexes = this.prime2index[prime] || [];
        for (let j = 0; j < indexes.length; j++) {
            const index1 = indexes[j];
            if (visitedIndex[index1]) continue;
            this.dfs(index1, visitedIndex, visitedPrime);
        }
    }
};

Solution.prototype.canTraverseAllPairs = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        for (let j = 2; j * j <= nums[i]; j++) {
            if (temp % j === 0) {
                if (!this.prime2index[j]) this.prime2index[j] = [];
                if (!this.index2prime[i]) this.index2prime[i] = [];
                this.prime2index[j].push(i);
                this.index2prime[i].push(j);
                while (temp % j === 0) temp /= j;
            }
        }
        if (temp > 1) {
            if (!this.prime2index[temp]) this.prime2index[temp] = [];
            if (!this.index2prime[i]) this.index2prime[i] = [];
            this.prime2index[temp].push(i);
            this.index2prime[i].push(temp);
        }
    }

    const visitedIndex = Array(nums.length).fill(false);
    const visitedPrime = {};
    this.dfs(0, visitedIndex, visitedPrime);

    return visitedIndex.every(val => val);
};



```
---





# DO GIVE IT A LIKE IF THAT WAS HELPFUL\uD83E\uDEE1\uD83D\uDC47

---
---


---