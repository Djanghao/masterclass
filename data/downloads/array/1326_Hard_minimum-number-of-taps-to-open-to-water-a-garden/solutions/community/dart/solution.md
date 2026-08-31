# dart simple solution

**Author:** beshoyFayz
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3983737/](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3983737/)

---


class Solution {
  int minTaps(int n, List<int> ranges) {
      int min =0,max=0,count=0;
      while(max<n){
          for(int i=0;i<ranges.length;i++){
              if(i-ranges[i]<=min && i+ranges[i]>= max){
                  max=i+ranges[i];
              }
          }
          if(max==min)return -1;
          count++;
          min=max;
      }
      return count;
  }
}
```