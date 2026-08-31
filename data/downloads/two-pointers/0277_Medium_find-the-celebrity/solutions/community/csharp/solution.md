# goto | O(N^2) O(1)

**Author:** WideSu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/5145321/](https://leetcode.com/problems/find-the-celebrity/solutions/5145321/)

---

# Intuition
There are two requirements for celebrity.
1) He/she doesn't know anyone
2) Everyone else know he/she.

# Approach
We can find possible celebrity who doesn't know anyone by using two for loops. Then check if other people know he/she.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* The Knows API is defined in the parent class Relation.
      bool Knows(int a, int b); */

public class Solution : Relation {
    public int FindCelebrity(int n) {
        int candidate = 0;
        for (int i = 0; i < n; i++) 
        {
            for (int j=0; j<n; j++)
            {
                if (i!=j && Knows(i,j)){//skip i who knows someone
                    goto next_i;
                }
            }
            candidate = i;
            for (int k=0; k<n; k++){//check if everyone knows i
                if(i!=k && !Knows(k,i)){
                    goto next_i;
                }
            }
            return candidate;
            next_i:;
        }
        return -1;
    }
}
```