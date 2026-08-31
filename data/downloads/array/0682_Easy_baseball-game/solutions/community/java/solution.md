# [JAVA] [100% faster] [List] [O(n) Single Pass]

**Author:** Trevor-akshay
**Votes:** 19
**Link:** [https://leetcode.com/problems/baseball-game/solutions/1047526/](https://leetcode.com/problems/baseball-game/solutions/1047526/)

---

```
class Solution {
    public int calPoints(String[] ops) {
       LinkedList<Integer> list = new LinkedList<>();
        int sum = 0;
        for(var op : ops){
            switch (op){
                case "C":{
                    sum -= list.removeLast();
                    //list.removeLast();
                    break;
                }
                case "D":{
                    int item = list.getLast();
                    list.addLast(item*2);
                    sum+=item*2;
                    break;
                }
                case "+":{
                    int value = list.get(list.size()-2)+list.getLast();
                    list.addLast(value);
                    sum+=value;
                    break;
                }
                default:{
                    list.addLast(Integer.parseInt(op));
                    sum+=Integer.parseInt(op);
                    break;
                }
            }
        }
        return sum;
    }
}