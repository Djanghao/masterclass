# Beats 100% | Java, C++, Python, JavaScript | Easy Solution✅✅

**Author:** Ikapoor123
**Votes:** 8
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4851321/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4851321/)

---

# Please Upvote \u2705\u2705
# Approach
<!-- Describe your approach to solving the problem. -->
- The code begins by sorting the capacity array in ascending order using Arrays.sort(capacity). This ensures that larger boxes are considered first, potentially reducing the overall number of boxes needed.
- It finds the total number of apples to be packed by summing up the elements of the apple array using Arrays.stream(apple).sum().
- It sets two variables:
    - ans to track the minimum number of boxes required, initialized to 0.
    - sum to store the remaining apples to be packed, initialized to the total number of apples.
- It uses a for loop to iterate through the sorted capacity array in reverse order, starting from the largest box:
- Inside the loop:
Increment Number of Boxes: ans is incremented by 1 to account for using a box.
Deduct Capacity from Remaining Apples: The current box's capacity (capacity[i]) is subtracted from sum to update the remaining apples.
Check Early Termination: If sum becomes less than or equal to 0, it means all apples have been packed, so the loop breaks.
- After the loop, the final value of ans, representing the minimum number of boxes required to pack all apples, is returned.

**Still having doubt comment below !!\u2705\u2705**
# Complexity
- Time complexity: O(N log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote !!\u2705\u2705
# Code
```java []
class Solution {
    public int minimumBoxes(int[] apple, int[] capacity) {
        Arrays.sort(capacity);
        int sum = Arrays.stream(apple).sum();
        int ans = 0;
        
        for(int i = capacity.length-1;i>=0;i--){
            
            ans++;
            sum-=capacity[i];
            if(sum <= 0)    break;
        }
        return ans;
    }
}
```
```javascript []

var minimumBoxes = function(apple, capacity) {
    capacity.sort((a, b) => a - b); 

  let sum = apple.reduce((acc, curr) => acc + curr, 0); 

  let ans = 0;
  for (let i = capacity.length - 1; i >= 0; i--) {
    ans++;
    sum -= capacity[i];
    if (sum <= 0) break;
  }
  return ans;
};
```
```python []
class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        capacity.sort()  
        sum_apples = sum(apple)  
        ans = 0  

        for i in range(len(capacity) - 1, -1, -1):  
            ans += 1  
            sum_apples -= capacity[i]  
            if sum_apples <= 0:  
                break

        return ans 
```
```C++ []
class Solution {
public:
    int minimumBoxes(vector<int>& apple, vector<int>& capacity) {
        sort(capacity.begin(), capacity.end());
  int sum = 0;
  for (int a : apple) {
    sum += a; 
  }
  int ans = 0;
  for (int i = capacity.size() - 1; i >= 0; i--) {
    ans++;
    sum -= capacity[i];
    if (sum <= 0) break;
  }
  return ans;
    }
};
```
# Just
![smile.png](./images/0.png)
