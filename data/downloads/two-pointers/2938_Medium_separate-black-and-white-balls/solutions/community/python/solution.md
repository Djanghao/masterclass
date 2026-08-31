# 👏 Beats 100.00% ✅ Java ✅ C++ ✅ Python ✅ O(N) ✅

**Author:** prathamesh-003
**Votes:** 22
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/4305393/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/4305393/)

---

# Intuition
###### The problem involves grouping black and white balls on a table by swapping adjacent balls. The key insight is to iterate through the string from right to left, keeping track of the count of white balls encountered. This way, we can efficiently calculate the minimum steps required to separate black and white balls.

# Approach
###### The approach involves traversing the input string from right to left. For each black ball ('1') encountered, the algorithm adds the current count of white balls to the result. If a white ball ('0') is found, it increments the count of white balls. This process continues until the entire string is traversed.

---

# Let's understand this by using Example:
### Example: "10110"
### Step 1:
###### The algorithm starts iterating from the right end of the string:
- At position 5 (index 4), there's '0', indicating a white ball. Increment the count of white balls (cnt = 1).

### Step 2:
###### Move to the next position:
- At position 4 (index 3), there's '1', indicating a black ball. Add the current count of white balls (cnt) to the result (ans = 1). The count of white balls remains the same (cnt = 1).

### Step 3:
###### Move to the next position:
- At position 3 (index 2), there's '1', indicating a black ball. Add the current count of white balls (cnt) to the result (ans = 1 + 1 = 2). The count of white balls remains the same (cnt = 1).

### Step 4:
###### Move to the next position:
- At position 2 (index 1), there's '0', indicating a white ball. Increment the count of white balls (cnt = 2).

### Step 5:
###### Move to the next position:
- At position 1 (index 0), there's '1', indicating a black ball. Add the current count of white balls (cnt) to the result (ans = 2 + 2 = 4). The count of white balls remains the same (cnt = 2).

# Result
###### The minimum number of steps to group all the black balls to the right and all the white balls to the left is 4.

###### This example demonstrates how the algorithm efficiently calculates the minimum steps needed to separate black and white balls by swapping adjacent balls.

---

# Complexity
- ###### Time complexity: 

    - The algorithm has a time complexity of $$O(n)$$, where $$n$$ is the length of the input string.

- ###### Space complexity:

    - The algorithm has a space complexity of $$O(1)$$, as it uses a constant amount of space for variables.

---

# Code
### Java:
```
class Solution {
    public long minimumSteps(String s) {
        long cnt = 0, ans = 0;
        for(int i = s.length() - 1; i >= 0; i--) {
            if(s.charAt(i) == '1') {
                ans += cnt;
            } else {
                cnt++;
            }
        }
        return ans;
    }
}
```

### C++:
```
class Solution {
public:
    long long minimumSteps(string s) {
        long long cnt = 0, ans = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s[i] == '1') {
                ans += cnt;
            } else {
                cnt++;
            }
        }
        return ans;
    }
};
```

### Python:
```
class Solution:
    def minimumSteps(self, s):
        cnt = 0
        ans = 0
        for i in range(len(s) - 1, -1, -1):
            if s[i] == '1':
                ans += cnt
            else:
                cnt += 1
        return ans
```

# Screenshot
![Screenshot 2024-10-15 222707.png](./images/0.png)