# dart solution

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/crawler-log-folder/solutions/6109647/](https://leetcode.com/problems/crawler-log-folder/solutions/6109647/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int minOperations(List<String> logs) {
    int count=0;
    for(int i=0;i<logs.length;i++){
        if(logs[i]=="../"){
            if(count>0){
                count--;
            }
        }else if(logs[i]=="./"){
            continue;
        }
        else{
            count++;
        }
    }
    return count;
  }
}
```