# Easy to understand, basic mathematical approach executed in C++. No recursion, BUT WHY!??🤔

**Author:** udjoshi1245
**Votes:** 7
**Link:** [https://leetcode.com/problems/reaching-points/solutions/4927251/](https://leetcode.com/problems/reaching-points/solutions/4927251/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The basic intuition would be thinking of an approach where we consider all the possibilities (i.e. recursive approach) and then consider both the cases at every step. Although this is a 100% correct way of solving the question, but will end up using all the available resources, eventually giving Stack Overflow. Even if memiozation is considered, the issue is not resolved this easily. Hence, we try to find the probable patterns in the operations being performed and move ahead.
# Approach
<!-- Describe your approach to solving the problem. -->
One thing is to be considered that we can also have the operations applied in the reverse manner and then check if we can trace back to the source from the target as it means one and the same thing.
A pattern can be observed while performing the operations, if we choose to go the reverse way. . .

Let's say at some point we have coordinates as (a,b). If (a>b), then at the previous coordinates must have been (a-b,b), as it can't be (a,b-a) because all the coordinates are positive and for a>b... b-a gives a negative result. This continues till a<=b.
This can be observed that this pattern repeats till we reach ( a%b , b).

$$EXAMPLE: $$
Consider a point (50,7). The previous steps would have been like this...
(50,7). . .(43,7). . .(36,7). . .(8,7). . .(1,7)

```Note that 1==(50%7)```

When we reach this point, what we have to make sure are the following conditions after ensuring that sx == tx or sy == ty. . .

Let's say we have sy = ty = 5 and,

sx,sy = (16,5)
tx,ty = (21,5)


Now if we run our program then it will stop at (1,5) which is not equal to sx,sy and will return false
However during our iteration we will encounter (16,5) infact after the first iteration only but according to our current code it won't detect it
So at the end we apply a final check:
If (tx - sx) % ty == 0, return True.
Similarly, we check for the 'y' coordinates as well.

(In our case, (21 - 16) % 5 == 0 so we can return true.)


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
public:
    //THIS ALTHOUGH IS A CORRECT APPROACH, HOWEVER RESULTS IN STACK OVERFLOW HENCE IT IS REJECTED!!

    // bool reachable(pair<int,int>source, pair<int,int>dest){
    //     if(source.first>dest.first || source.second>dest.second)return false;
    //     if(source.first==dest.first && source.second==dest.second)return true;
    //     int temp=source.first;
    //     source.second+=temp;
    //     bool pick=reachable(source,dest);
    //     source.second-=temp;
    //     source.first+=source.second;
    //     bool notPick=reachable(source,dest);
    //     return (pick || notPick);
    // }
    bool reachingPoints(int sx, int sy, int tx, int ty) {


        // pair<int,int>source=make_pair(sx,sy);
        // pair<int,int>target=make_pair(tx,ty);
        // return reachable(source,target);

        //let's go with the mathematical approach


        if(sx>tx || sy>ty)return false;     //can naver reach target if already ahead of it
        else if(sx==tx && ty==sy){      //both are coordinates of same point
            return true;
        }
        while(tx>sx && ty>sy){
            if(tx>ty) tx=tx%ty;
            else    ty=ty%tx;
        }
        if ((tx==sx) && (ty-sy)%sx == 0)return true;
        else if ((ty==sy) && (tx-sx)%sy == 0)return true;
        return false;
    }
};
```