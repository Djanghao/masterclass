# [C++/Java/Python]- Easy One liner with explanation

**Author:** constantine786
**Votes:** 75
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/2202648/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/2202648/)

---

For this one, we would just rely on simple maths.
> Example: **n = "153"**
> 
Now let's break down each digit with required number of ones as we can use only `0` or `1` in deci-binaries.
>**1** -  1 0 0 0 0   
>**5** -  1 1 1 1 1
>**3** -  1 1 1 0 0 
> Added zero padding to the tail to align with max number of in `n`.
> 
Now if you consider each above entry as an array, you can group digits at same index to form a number. Something like this:
> **111 + 011 + 011 + 010 + 010 = 153**
> 
So in all you require `5` deci-binaries to form the required `153`.

Now let's take another example:
> **n = "3271"**
> **3** - 1 1 1 0 0 0 0
> **2** - 1 1 0 0 0 0 0
> **7** - 1 1 1 1 1 1 1 
> **1** - 1 0 0 0 0 0 0

Now after grouping digits at same index:
> **1111 + 1110 + 1010 + 0010 + 0010 + 0010 + 0010 = 3271**
> 
Here we requred `7` deci-binaries.

Now taking both the examples into account, we can observe the minimum number of deci-binaries required to create the required `n` is the max digit in the input `n`.

Below is my implementation based on above observation:
**Python3**
```
class Solution:
    def minPartitions(self, n: str) -> int:
        return int(max(n))            
```

**C++**
```
class Solution {
public:
    int minPartitions(string n) {
        return *max_element(n.begin(), n.end()) - '0';
    }
};
```

**Java**
```
class Solution {
    public int minPartitions(String n) {
        int res = 0;
        for (int i = 0; i < n.length(); i++) {
            res = Math.max(res, n.charAt(i) - '0');
        }
        return res;
    }
}
```

If `len` is the length of the input string `n`,
**Time - O(len)**
**Space - O(1)**

--- 

***Please upvote if you find it useful***