# [Java] Recursive Fast Solution [0ms] with Explaination

**Author:** aditya_makthal
**Votes:** 9
**Link:** [https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/2471172/](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/2471172/)

---

To understand the solution first we need to know ternary represntation. In ternary representation we have 0, 1, 2 like the binary where we have only 0,1. Example : 5 in ternary represntation is 12, for 7 it is 21. If there is a 2 in the representation, then we cannot write as **distinct** sum of powers of 3, cause there is a repitition of the power at that pariticular place .

```
class Solution { 
    public boolean checkPowersOfThree(int n) {
        if(n==0){
            return true;
        }
        int x = n%3;
		//this will give the digit at that particular place in ternary representation;
        if(x==2){
            return false;
        }
        return checkPowersOfThree(n/3);
    }
}
```