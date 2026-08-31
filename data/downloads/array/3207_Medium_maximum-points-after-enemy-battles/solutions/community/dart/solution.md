# Beast 100% ,  I think this solution couldn't be simpler [O(n) & O(1)]

**Author:** ducn17240
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5543453/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5543453/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
After i read this problem , t think "Buy low, sell high"
its meaning we use energy to trade energy with minimum enemy and gain point , after that we use point to mark maximum enemy to gain currentEnergy
# Approach
<!-- Describe your approach to solving the problem. -->
First , in case List enemy has length = 1 , we return currentEnergy we have / enemy[0] , its easy to understand

We need find minimum enemy and always trade energy with this
if(currentEnergy in input < minimum enemy ) we can't trade anything so return 0

we alway trade with minimum , if we have at least 1 point , we can gain energy from all enemy so we will increase total energy from all enemy 

why in output is (sum+currentEnergy-mi)/mi ? 
because we need the one point to trade the first time 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
class Solution {
  int maximumPoints(List<int> ene, int currentEnergy) {
    
    if(ene.length == 1)return (currentEnergy/ene[0]).toInt();
    int sum=0;
    int mi=99999999;
    for(int i=0 ; i<ene.length ; i++){
        sum+=ene[i];
        mi=min(mi,ene[i]);
    }
    if(currentEnergy <mi)return 0;

    
    return ((sum+currentEnergy-mi)/mi).toInt();
  }
}
```