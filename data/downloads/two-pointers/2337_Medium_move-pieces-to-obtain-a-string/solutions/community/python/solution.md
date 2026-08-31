# Two Pointer Approach✅✅

**Author:** arunk_leetcode
**Votes:** 35
**Link:** [https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/6114824/](https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/6114824/)

---

# Intuition
The problem involves moving 'L' and 'R' characters in the `start` string to match the `target` string while adhering to specific movement constraints:
- 'L' can only move left.
- 'R' can only move right.
The underscores ('_') act as placeholders that allow movement.

The key insight is to check if each 'L' and 'R' character in both strings appears in the correct order and position relative to the underscores.

# Approach
1. Use two pointers `i` and `j` to traverse the `start` and `target` strings, respectively.
2. Skip underscores in both strings by incrementing `i` and `j`.
3. Compare the characters at the current positions of `i` and `j`.
4. Ensure that:
   - If the character is 'L', it should not move right (i.e., `i` should not be less than `j`).
   - If the character is 'R', it should not move left (i.e., `i` should not be greater than `j`).
5. Return `true` if both pointers reach the end of the strings simultaneously.

# Complexity
- Time complexity: $$O(n)$$  
  The algorithm makes a single pass through both strings, where `n` is the length of the strings.
  
- Space complexity: $$O(1)$$  
  Only constant extra space is used for the two pointers.

# Code
```cpp []
class Solution {
public:
    bool canChange(string start, string target) {
        int i = 0, j = 0, n = start.size();
	
        while(i < n || j < n){
            
            while(i < n && start[i] == '_')
                i++;
            while(j < n && target[j] == '_')
                j++;
           
            if(i == n || j == n)
                break;
            if(start[i] != target[j])
                return false;
            if(start[i] == 'L')
                if(i < j)
                    return false;
            if(start[i] == 'R')
                if(i > j)
                    return false;
            i++;
            j++;
        }

        return i == n && j == n;
    }
};
```
``` Java []
class Solution {
    public boolean canChange(String start, String target) {
        int i = 0, j = 0, n = start.length();
        
        while (i < n || j < n) {
            while (i < n && start.charAt(i) == '_')
                i++;
            while (j < n && target.charAt(j) == '_')
                j++;
            
            if (i == n || j == n)
                break;
            if (start.charAt(i) != target.charAt(j))
                return false;
            if (start.charAt(i) == 'L' && i < j)
                return false;
            if (start.charAt(i) == 'R' && i > j)
                return false;
            
            i++;
            j++;
        }
        
        return i == n && j == n;
    }
}
```
``` JavaScript []
var canChange = function(start, target) {
    let i = 0, j = 0, n = start.length;
    
    while (i < n || j < n) {
        while (i < n && start[i] === '_')
            i++;
        while (j < n && target[j] === '_')
            j++;
        
        if (i === n || j === n)
            break;
        if (start[i] !== target[j])
            return false;
        if (start[i] === 'L' && i < j)
            return false;
        if (start[i] === 'R' && i > j)
            return false;
        
        i++;
        j++;
    }
    
    return i === n && j === n;
};
```
``` Python []
class Solution:
    def canChange(self, start: str, target: str) -> bool:
        i, j, n = 0, 0, len(start)
        
        while i < n or j < n:
            while i < n and start[i] == '_':
                i += 1
            while j < n and target[j] == '_':
                j += 1
            
            if i == n or j == n:
                break
            if start[i] != target[j]:
                return False
            if start[i] == 'L' and i < j:
                return False
            if start[i] == 'R' and i > j:
                return False
            
            i += 1
            j += 1
        
        return i == n and j == n

```