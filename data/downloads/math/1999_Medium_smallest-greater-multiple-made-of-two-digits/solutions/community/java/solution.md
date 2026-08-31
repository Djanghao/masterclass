# Runtime 0 ms Beats 100.00%

**Author:** vallabh161991
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/5680766/](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/5680766/)

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
```java []
class Solution {
    
    public int findInteger(int k, int digit1, int digit2) {
        if(digit1==0 && digit2==0){
            return -1;
        }
        if(digit1>digit2){
            int temp= digit1;
            digit1=digit2;
            digit2=temp;
        }
        int min=findMin(k, digit1, digit2,0 );

        return min==Integer.MAX_VALUE?-1:min;
    }

    public int findMin(int k, int digit1, int digit2, int currentNum){
        int min= Integer.MAX_VALUE;
        if(Integer.MAX_VALUE/10>=currentNum){
            if(currentNum*10+digit1>k && (currentNum*10+digit1)%k==0)return currentNum*10+digit1;
            else if(currentNum*10+digit2>k && (currentNum*10+digit2)%k==0)return currentNum*10+digit2;
            else {
                if(currentNum*10+digit1 != currentNum )min=findMin(k, digit1, digit2,currentNum*10+digit1);
                if(currentNum*10+digit2 != currentNum )min=Math.min(min,findMin(k, digit1, digit2,currentNum*10+digit2));
            }
        }
        return min;
    }
}
```