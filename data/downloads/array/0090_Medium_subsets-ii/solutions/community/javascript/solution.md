# ✅☑Beats 100% users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 31
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/4501326/](https://leetcode.com/problems/subsets-ii/solutions/4501326/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-04 012641.png](./images/0.png)

---


# Approaches
(Also explained in the code)

1. **Sorting the Input:**

    - Initially, the `nums` vector is sorted in ascending order. This sorting helps in identifying duplicates and ensures that identical elements appear consecutively.
1. **Recursive Backtracking (f function):**

    - The `f` function generates subsets using a recursive backtracking approach.
    - It maintains an index (`index`) that tracks the position of the current element being considered for inclusion in the subset.
    - It starts by adding the current subset `t` into the `ans` vector of subsets.
1. **Iteration through Elements:**

    - The function iterates through the elements of `nums` starting from the `index` position.
    - It checks for duplicates by ensuring that if `i` is not equal to `index` (not considering the same index) and the current element is the same as the previous one, it skips duplicates using `continue`.
1. **Building Subsets:**

    - For each valid element, it adds that element to the subset `t`, calls the `f` function recursively with the next index `i + 1`, and explores further elements to create subsets that include the current element.
    - After the recursive call, it removes the last added element from the `t` subset (`t.pop_back()`) to backtrack and explore other possibilities.
1. **Subset Generation:**

    - As the recursion unwinds, it generates different combinations of subsets by adding and removing elements, eventually leading to the generation of all unique subsets without duplicates.
1. **Return:**

    - Finally, all subsets (including duplicates) are collected in the `ans` vector and returned as the result.



# Complexity
- Time complexity:
   $$O(2^n*n)$$
    

- Space complexity:
   $$O(2^n*k)$$
    


# Code
```C++ []
class Solution {
private:
    void f(int index, vector<int>& nums, vector<int>& t, vector<vector<int>>& ans){
        ans.push_back(t);

        for(int i = index; i < nums.size(); i++){
            if(i != index && nums[i] == nums[i-1]) continue;
            t.push_back(nums[i]);
            f(i + 1, nums, t, ans); 
            t.pop_back();
        }
    }

public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> t;

        sort(nums.begin(), nums.end());
        f(0, nums, t, ans);
        return ans;
    }
};





```
```Java []


class Solution {
    private void f(int index, int[] nums, List<Integer> t, List<List<Integer>> ans) {
        ans.add(new ArrayList<>(t));

        for (int i = index; i < nums.length; i++) {
            if (i != index && nums[i] == nums[i - 1]) continue;
            t.add(nums[i]);
            f(i + 1, nums, t, ans);
            t.remove(t.size() - 1);
        }
    }

    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> t = new ArrayList<>();

        Arrays.sort(nums);
        f(0, nums, t, ans);
        return ans;
    }
}



```
```python3 []
class Solution:
    def subsetsWithDup(self, nums):
        def f(index, t):
            ans.append(list(t))
            
            for i in range(index, len(nums)):
                if i != index and nums[i] == nums[i - 1]:
                    continue
                t.append(nums[i])
                f(i + 1, t)
                t.pop()

        ans = []
        nums.sort()
        f(0, [])
        return ans



```
```javascript []
var subsetsWithDup = function(nums) {
    const ans = [];
    nums.sort((a, b) => a - b);

    function f(index, t) {
        ans.push([...t]);

        for (let i = index; i < nums.length; i++) {
            if (i !== index && nums[i] === nums[i - 1]) continue;
            t.push(nums[i]);
            f(i + 1, t);
            t.pop();
        }
    }

    f(0, []);
    return ans;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---