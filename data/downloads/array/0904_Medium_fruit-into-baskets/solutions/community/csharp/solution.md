# ✅C# || Python || Java || ✔Sliding Window Solution || Beats 80%

**Author:** Santhosh1608
**Votes:** 5
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/3153692/](https://leetcode.com/problems/fruit-into-baskets/solutions/3153692/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int TotalFruit(int[] fruits) {
        int length=fruits.Length;
        Dictionary<int,int> fruitType=new Dictionary<int, int>(length);
        int result=0;
        int startWindow=0;
        for(int i=0;i<length;i++){
            if(!fruitType.TryAdd(fruits[i],1)){
                fruitType[fruits[i]]+=1;
            }
            while(fruitType.Count>2){
                fruitType[fruits[startWindow]]-=1;
                if (fruitType[fruits[startWindow]]==0){
                    fruitType.R(\u2741\xB4\u25E1`\u2741)(\u2741\xB4\u25E1`\u2741)emove(fruits[startWindow]);
                }
                startWindow++;
            }
            result=Math.Max(result,i-startWindow+1);
        }
        return result;
    }
}
```

If You Find this Solution ,Please Upvote this Solution Guys.



JUST ONE CLICK ,CLICKED IT\u2714\u2705\u2764