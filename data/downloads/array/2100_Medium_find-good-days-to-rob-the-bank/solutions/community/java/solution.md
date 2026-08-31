# O(n) Java solution, easy understanding

**Author:** jcheng16
**Votes:** 31
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623435/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623435/)

---

We will construct two arrays:
nonincrease will store the consecutive non-increase count until current index
nondecrease will store the consecutive non-decrease count until curernt index
Then we find index whose nonincrease count and nondecrease count are both larger than time.

```
class Solution {
    public List<Integer> goodDaysToRobBank(int[] security, int time) {
        int[] nonincrease = new int[security.length];
        for(int i = 1; i < security.length - time; i++){
            if(security[i]>security[i-1]){
                nonincrease[i] = 0;
            } else {
                nonincrease[i] = nonincrease[i-1] + 1;
            }
        }

        int[] nondecrease = new int[security.length];
        for(int i = security.length - 2; i >= time; i--) {
            if(security[i] > security[i + 1]){
                nondecrease[i] = 0;
            } else {
                nondecrease[i] = nondecrease[i + 1] + 1;
            }
        }

        ArrayList<Integer> result = new ArrayList<>();
        for(int i = time; i < security.length - time; i++) {
            if(nonincrease[i] >= time && nondecrease[i] >= time) {
                result.add(i);
            }
        }
        return result;

    }
```