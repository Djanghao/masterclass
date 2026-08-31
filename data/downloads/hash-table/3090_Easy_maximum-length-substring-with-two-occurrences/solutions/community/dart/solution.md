# Two Pointers

**Author:** strathdeek
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/5459366/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/5459366/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
We traverse the string with two sliding pointers referencing the start and the end of a substring. If the substring contains three duplicate characters, we increment the start, if it doesn't we increment the end.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution {
  int maximumLengthSubstring(String s) {
    int start =0;
    int end =0;
    Map <String, int> count = Map<String,int>();
    int maximum = 0;
    bool front = true;

    while(end < s.length){
        final String letter;
        final int newCount;
        if(front){
            letter = s[end];
            newCount = (count[letter] ?? 0 ) + 1;
        } else {
             letter = s[start-1];
             newCount = (count[letter] ?? 0) -1;
        }
        count[letter] = newCount;
        if(count.containsValue(3)){
            print("invalid: $start,$end; ${s.substring(start,end+1)}");
            print(count);
            front = false;
            start++;
        }else{
            print("valid: $start,$end; ${s.substring(start,end+1)}");
            maximum = max(maximum, (end-start)+1);
            front = true;
            end++;
        }
    }
    return maximum;
  }
}
```