# Simple Solution

**Author:** Java_Programmer_Ketan
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/2587883/](https://leetcode.com/problems/count-days-spent-together/solutions/2587883/)

---

I think this is a tricky implementation question, but if we use library function it becomes very easy.
* Convert the date into number of days from the **Epoch** *1970-01-01* and find the intersection of the days. Check the comments for timeline

```
//toEpochDay counts the number of days from the epoch 1970-01-01
import java.time.LocalDate;
class Solution {

    public int countDaysTogether(String arriveAlice, String leaveAlice, String arriveBob, String leaveBob){
        LocalDate d1 = LocalDate.of(2021,Integer.parseInt(arriveAlice.substring(0,2)),Integer.parseInt(arriveAlice.substring(3,5)));
        LocalDate d2 = LocalDate.of(2021,Integer.parseInt(leaveAlice.substring(0,2)),Integer.parseInt(leaveAlice.substring(3,5)));
        LocalDate d3 = LocalDate.of(2021,Integer.parseInt(arriveBob.substring(0,2)),Integer.parseInt(arriveBob.substring(3,5)));
        LocalDate d4 = LocalDate.of(2021,Integer.parseInt(leaveBob.substring(0,2)),Integer.parseInt(leaveBob.substring(3,5)));
        long aa = d1.toEpochDay(); //Alice Arrive
        long al = d2.toEpochDay(); //Alice Left
        long ba = d3.toEpochDay(); //Bob Arrive
        long bl = d4.toEpochDay(); //Bob Left
        if(al<ba || bl<aa) return 0; //No intersection of days
        return (int) ((Math.min(al,bl)-Math.max(aa,ba))+1); //Intersection of days
    }
}
/*
    //Intersection of alice and bob
       aa.....ba.......bl.....al
       aa.....ba.......al......bl
       ba.....aa.......bl......al
       ba.....aa.......al......bl


   //No intersection

           aa......al.....ba......bl
           ba.....bl.....aa......al
 */
```