# Determine Kids with the Greatest Number of Candies After Extra Candies

**Author:** patel_jaimin
**Votes:** 2
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/6045119/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/6045119/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to determine whether each child will have the greatest number of candies after receiving a certain number of extra candies. To do so, we first find the maximum number of candies any child currently has. Then, for each child, we check if adding the extra candies results in a count greater than or equal to the maximum.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Find the Maximum Candies: First, we find the child with the most candies.
2. Check Condition: For each child, check if their candies plus the extra candies are greater than or equal to the maximum. If true, return `true`; otherwise, return `false`.
3. Return Result: Construct an array where each entry represents whether the corresponding child could have the greatest number of candies after receiving extra candies.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool* kidsWithCandies(int* candies, int candiesSize, int extraCandies,
                      int* returnSize) {
    int maxCandies = candies[0];
    for (int i = 1; i < candiesSize; i++) {
        maxCandies = maxCandies > candies[i] ? maxCandies : candies[i];
    }

    bool* result = (bool*)malloc(candiesSize * sizeof(bool));
    for (int i = 0; i < candiesSize; i++) {
        result[i] = (candies[i] + extraCandies) >= maxCandies;
    }

    *returnSize = candiesSize;
    return result;
}
```
```cpp []
class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int n = candies.size();
        vector<bool> ans(n);
        int max = *max_element(candies.begin(), candies.end());
        n = 0;
        for (int i : candies) {
            ans[n++] = (i + extraCandies) >= max ? true : false;
        }
        return ans;
    }
};
```
```csharp []
public class Solution {
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies) {
        int maxCandies = candies.Max();
        bool[] result = new bool[candies.Length];
        
        for (int i = 0; i < candies.Length; i++) {
            result[i] = (candies[i] + extraCandies) >= maxCandies;
        }
        
        return result;
    }
}
```
```golang []
func kidsWithCandies(candies []int, extraCandies int) []bool {
    maxCandies := candies[0]
    for _, candy := range candies {
        if candy > maxCandies {
            maxCandies = candy
        }
    }
    
    result := make([]bool, len(candies))
    for i, candy := range candies {
        result[i] = (candy + extraCandies) >= maxCandies
    }
    
    return result
}
```
```Dart []
class Solution {
  List<bool> kidsWithCandies(List<int> candies, int extraCandies) {
    int maxCandies = candies.reduce((a, b) => a > b ? a : b);
    return candies.map((candy) => (candy + extraCandies) >= maxCandies).toList();
  }
}
```
```java []
class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int max = 0;
        List<Boolean> output = new ArrayList<Boolean>(candies.length);

        for (int candi:candies){
            if(max<candi){
                max = candi;
            }
        }
        for(int candi: candies){
            if(candi + extraCandies>= max){
                output.add(true);
            }else{
                output.add(false);
            }
        }
        return output;
    }
}
```
```javascript []
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    let result = [];
    
    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= maxCandies);
    }
    
    return result;
};
```
```typescript []
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandies = Math.max(...candies);
    let result = [];
    
    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= maxCandies);
    }
    
    return result;
};
```
```python []
class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """
        maxCandies = max(candies)
        return [(candy + extraCandies) >= maxCandies for candy in candies]
```
```python3 []
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandies = max(candies)
        return [(candy + extraCandies) >= maxCandies for candy in candies]
```