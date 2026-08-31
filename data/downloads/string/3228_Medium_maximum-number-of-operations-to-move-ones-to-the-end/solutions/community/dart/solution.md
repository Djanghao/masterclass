# Beats 100% , simple and detail explaintion O(n)

**Author:** ducn17240
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5553920/](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5553920/)

---

# Explaintion
<!-- Describe your first thoughts on how to solve this problem. -->
For example i use this test case "10010010101.......0110101"
to make s to " [ 00000......1111111] 101" we do X operation

you see "10" in last
we can move (number of "1" in the left of "10" after move "10"-> "01")
=> result = X + number of "1" in the left of "10" including 1 in "10"
we call it is A


next we find X and this is the same 
to make 10010010101.......0110101 to [ 00000......11111 ] 10101
we need Y operation
=> result = A + ( X =  number of "1" in the left of "10" after move "10"-> "01" + B)

and we have result when we have B
 
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int maxOperations(String s) {

    if(s.length==1)return 0;
    int count=0;
    int op=0;
    for(int i=0 ; i<s.length ; i++){
          if(s[i]=="1"){
              count++;
          }
    }
    int remain=s[s.length-1]=="1"?count-1:count;
    for(int i=s.length-2 ; i>=0 ; i--){
        if(s[i]=="1"){
            if(s[i+1]=="0"){
               op+=remain;
               remain--;
            }
            else{
                remain--;
            }

        }

    }   


return op;

  }
}
```