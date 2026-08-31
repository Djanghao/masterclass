# JAVA || O(n)

**Author:** HIMANSHUCHHIKARA
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/1164798/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/1164798/)

---

**Explanation:**
`distributive property that plus and multiply :`
`(a1+a2)*(b1+b2) = a1*b1 + a1*b2 + a2*b1 + a2*b2`


`Distributive property is similar for AND and XOR here:`
`(a1^a2) & (b1^b2) = (a1&b1) ^ (a1&b2) ^ (a2&b1) ^ (a2&b2)`

you should know this property to solve this question
**CODE:**
```
  public int getXORSum(int[] arr1, int[] arr2) {
         int xor1=0 , xor2=0;
         for(int val:arr1) xor1^=val;
         for(int val:arr2) xor2^=val;
        return (xor1&xor2);
    }
```

**Complexity:**
`Time:O(n+m) and Space:O(1) where n=arr1.length and m=arr2.length`

Please UPVOTE if found it helpful