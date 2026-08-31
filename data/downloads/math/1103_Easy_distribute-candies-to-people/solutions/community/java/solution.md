# Easy to understand Java solution without complex Math formulas

**Author:** bapuji
**Votes:** 15
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/796427/](https://leetcode.com/problems/distribute-candies-to-people/solutions/796427/)

---

```
class Solution {
    public int[] distributeCandies(int candies, int num_people) {
        int[] arr = new int[num_people];
        
        int currCandyCount = 1;
        
        while(candies > 0) {
            for(int i = 0; i<num_people; i++) {
                if(candies >= currCandyCount) { // check if we have enough candies to distribute next
                    arr[i]+= currCandyCount;
                    candies -=currCandyCount;
                    currCandyCount++;
                } else { // we don't have enough candies to distribute
                    arr[i] += candies; // distribute whatever is remaining
                    candies = 0; // set to 0 so it exits the while loop
                }
            }
        }
        return arr;
    }
}
```