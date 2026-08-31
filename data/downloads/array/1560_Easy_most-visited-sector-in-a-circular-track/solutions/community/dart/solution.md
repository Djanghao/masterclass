# Beat 100% DART

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4417492/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4417492/)

---


# Code
```
class Solution {
  List<int> mostVisited(int n, List<int> rounds) {
    Map<int,int> visitSectors={};
    for(int i=0;i<rounds.length-1;i++){
        if(rounds[i]<rounds[i+1]){
            // print("${rounds[i]} to ${rounds[i+1]}");
            for(int j=rounds[i];j<rounds[i+1];j++){
                visitSectors[j]=(visitSectors[j]??0)+1;
                // print('$j:${visitSectors[j]}');
            }
        }else{
            // print("${rounds[i]} to $n and then from 1 to ${rounds[i+1]}");
            for(int j=rounds[i];j<=n;j++){
                visitSectors[j]=(visitSectors[j]??0)+1;
                // print('$j:${visitSectors[j]}');
            }
            for(int j=1;j<rounds[i+1];j++){
                visitSectors[j]=(visitSectors[j]??0)+1;
            }
        }
        print(visitSectors);
    }
    visitSectors[rounds.last]=(visitSectors[rounds.last]??0)+1;
    // print(visitSectors);
    int maxValue = visitSectors.values.reduce((maxValue,next)=>maxValue>next?maxValue:next);
    List<int> res = visitSectors.entries.where((entry)=>entry.value==maxValue).map((entry)=>entry.key).toList();
    res.sort();
    return res;
  }
}
```