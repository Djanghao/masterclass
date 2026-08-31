# Java | O(N) greedy with explanation how to come up with the greedy idea

**Author:** pollux1997
**Votes:** 57
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1500315/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1500315/)

---

Many of us can write the correct greedy strategy. But most discussions don't tell how it works and why it works here. If you are interested please read the following part:)

Here's my explanation:
1.Because one move have to change three consecutive characters together. Change 'OOO' is just a waste of opportunities. We can make list of all the possible situations:
```
// one X
OOX  OXO  XOO
//two X
XXO  XOX  OXX
//three X
XXX
```
And we define them as basic element here. All the move we will change is those basic elements.
2.There's some identical situations. eg. 
```
//OOX is identical to XOO and OXO when the sequence is OOXOO
//XXO is identical to OXX when the sequence is OXXO
```
3.Those situations indicates that we can get the same result (remove some X) and move step despite the basic elements are different.
4.We can find an representative for group of elements and here comes with our greedy strategy: once we find an X, we add one to the steps and move the pointer 3 indexes away.

The basic idea of greedy strategy is to find the common part of situations so we can detect them using less operations. (Just like the find a dophine use the hump in its head.)

```
class Solution {
    public int minimumMoves(String s) {
        int i=0;
        int step=0;
        while(i<s.length()){
            if(s.charAt(i)=='X'){
                i=i+3;
                step++;
            }
            else{
                i++;
            }
        }
        return step;
    }
}
```
upvote if you really like it.