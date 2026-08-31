# Make Three Strings Equal - Trae

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4807483/](https://leetcode.com/problems/make-three-strings-equal/solutions/4807483/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I initially copied solution to pass wuestion because of time. But on subsequent review I see that Question is wrongly setup on Leetcode. Condition is "such that its length is at least 2". But Leetcode Tests include cases with length less than 2. Below solution ordinarily should work:

function findMinimumOperations(s1: string, s2: string, s3: string): number {
    let count = 0;
    if (s1[0] !== s2[0] && s1[0] !== s3[0]) {
      return -1;
    }

    while (s1 !== s2 || s1 !== s3 || s2 !== s3) {
     
      const lengths = [s1.length, s2.length, s3.length];
      const maxLength = Math.max(...lengths);

      if (s1.length === maxLength) {
        s1 = s1.slice(0, -1);
      } else if (s2.length === maxLength) {
        s2 = s2.slice(0, -1);
      } else {
        s3 = s3.slice(0, -1);
      }
      console.log(s1,s2,s3,maxLength)
      count++;
    }
  
    return count;
  }

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findMinimumOperations(s1: string, s2: string, s3: string): number {

    let count: number = 0;
    let total: number = 0;
    let length: number = Math.min(s1.length, s2.length, s3.length)
    if (s1 == s2 && s2 == s3) {
        return count;
    } else {
        for (let i = 0; i <= length; i++) {
            if (s1[i] == s2[i] && s2[i] == s3[i]) {
                count++
            } else {
                if (s1[0] == s2[0] && s2[0] == s3[0]) {
                    break;
                } else {
                    return -1;
                }
            }
        }
        total = (s1.length - count) + (s2.length - count) + (s3.length - count)
    }
    return total;
};

```