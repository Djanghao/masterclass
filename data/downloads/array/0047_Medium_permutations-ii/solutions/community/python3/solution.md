# ✅ Python Simple ​Backtrack - Beats ~90%

**Author:** constantine786
**Votes:** 58
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/2030416/](https://leetcode.com/problems/permutations-ii/solutions/2030416/)

---

The problem is solved using a backtracking approach. For this particular case, as we have duplicates in input, we can  track the count of each number.  Python provides a built-in lib `Counter` which I will be using for this problem. As the order of output results doesn't matter, we can use this `Counter` variable to track visited elements in the exploration path

The solution Tree for this problem for an input `[1,1,2]` would look like this:

<img width="400" src="https://assets.leetcode.com/users/images/c7ae7036-ae8b-4d79-aca7-8950a2750a27_1652316056.5212104.jpeg">

Below is the code that will represent the above solution tree
```
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        
        permutations = []
        counter = Counter(nums)
        def findAllPermutations(res):
            if len(res) == len(nums):
                permutations.append(res)
                return 
            
            for key in counter:
                if counter[key]:
                    counter[key]-=1 # decrement visited key
                    findAllPermutations(res + [key])    
                    counter[key]+=1 # restore the state of visited key to find the next path
                
        findAllPermutations([])
        return permutations
```
**Space** - `O(N)` - Each call stack depth would be `N` where `N` is the length of input list.
**Time** - `O(n * \u03A3(P(N, k)))` - In worst case, all numbers in the input array will be unique. In this case, each path will go upto `N` depth in solution tree. At each level, the branching factor is reduced by `1` so it will go like `N, N-1, N-2...1` starting from root.  (Time complexity shared by [@AntonBelski](https://leetcode.com/AntonBelski/))


---

***Please upvote if you find it useful***