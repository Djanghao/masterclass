# Java Beats 100% Runtime | 91.47% Memory

**Author:** saadawp
**Votes:** 2
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/3549923/](https://leetcode.com/problems/perform-string-shifts/solutions/3549923/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
First we calculate the total shifts we need to make. For left shifts, we substract the amount of shifts and for right shifts we add the amount of shifts to sum.

Once we have the total number of shifts in "sum", we check the direction we need to shift. If sum is negative that means we need to left shift sum times. If sum is positive that means we need to right shift sum times. 

Now, we check if the number of rotations is greater than string length. If yes, we only need to rotate sum % string.length() times. 

Finally, we do the left or right rotation.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public String stringShift(String s, int[][] shift) {
//We'll store the total number of rotations to make in sum
        int sum = 0;

// Add for right shifts, substract for left shifts
        for(int i=0;i<shift.length;i++){
           sum = shift[i][0]==0 ? (sum-shift[i][1]) : (sum+shift[i][1]);
        }
//check if the number of rotations is greater than string length. If yes, we only need to rotate sum % s.length() times
        if(Math.abs(sum)>s.length()){
            sum = sum % s.length();
        }

//Now we rotate
        StringBuilder sb = new StringBuilder(s);
        if(sum>0){
           return sb.substring(sb.length()-sum,sb.length()) + sb.substring(0,sb.length()-sum);
        }else if(sum<0){
            sum=sum*-1;
            return sb.substring(sum,sb.length()) + sb.substring(0,sum);
        }else{
            return sb.toString();
        }
    }
}
```