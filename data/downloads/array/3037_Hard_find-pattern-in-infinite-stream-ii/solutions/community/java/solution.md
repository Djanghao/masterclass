# Using KMP

**Author:** sophomorus
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/6090970/](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/6090970/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
KMP

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []


/**
 * Definition for an infinite stream.
 * class InfiniteStream {
 *     public InfiniteStream(int[] bits);
 *     public int next();
 * }
 */
class Solution {
    public int findPattern(InfiniteStream infiniteStream, int[] pattern) {
        int[] res = process(pattern);
        int i = 0;
        int index = 0;
        int curr = infiniteStream.next();

        while(true) {
            if(curr == pattern[i]) {
                curr = infiniteStream.next();
                index++;
                i++; 
            } else if(i > 0) {
                i = res[i-1];                
            } else {
                curr = infiniteStream.next();
                index++;
            }

            if(curr < 0) {
                break;
            }

            if(i == pattern.length) {
                break;
            }
        }

        return index - pattern.length;
    }

    int[] process(int[] pattern) {

        int[] res = new int[pattern.length];
        int j = 0;
        res[0] = 0;
        for(int i=1; i <pattern.length;) {
            if( pattern[i] == pattern[j]) {
                j++;
                res[i] = j;
                i++;
            } else if(j!=0){
                 j = res[j-1];
            } else {
                res[i] = 0;
                i++;
            }
            
            
        }

        return res;
    }
}
```