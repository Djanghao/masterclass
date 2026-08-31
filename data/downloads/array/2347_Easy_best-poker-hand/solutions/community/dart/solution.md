# dart solution using map

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/4870449/](https://leetcode.com/problems/best-poker-hand/solutions/4870449/)

---


# Code
```
class Solution {
  String bestHand(List<int> ranks, List<String> suits) {
    Map<int,int>rankMap={};
    Map<String,int>suitMap={};
    ranks.forEach((element){
        if(!rankMap.containsKey(element)){
            rankMap[element]=1;
        }else{
            rankMap[element]=rankMap[element]!+1;
        }
    });
     suits.forEach((element){
        if(!suitMap.containsKey(element)){
            suitMap[element]=1;
        }else{
            suitMap[element]=suitMap[element]!+1;
        }
    });
    if(suitMap.containsValue(5)){
        return "Flush";
    }else if(rankMap.containsValue(3) || rankMap.containsValue(4) || rankMap.containsValue(5)){
        return "Three of a Kind";
    }else if (rankMap.containsValue(2)){
        return "Pair";
    }
return "High Card";
  }
}
```