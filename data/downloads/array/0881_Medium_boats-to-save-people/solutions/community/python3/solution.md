# [Java/Python 3] O(nlogn) code, sorting + greedy, w/ greedy algorithm proof.

**Author:** rock
**Votes:** 73
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/156855/](https://leetcode.com/problems/boats-to-save-people/solutions/156855/)

---


Push from two ends of the sorted array ***people***.
1. if the 2 ends, ```people[lo]``` and ```people[hi]```, can fit in a boat, move the 2 ends;
2. otherwise move only the high end, and the low end stays.
In other words: **always move the high end, but the low end depends on if we can cram it into a boat with the high end.**
3. repeat the above till the 2 ends meet.

```java
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        int ans = 0; 
        for (int hi = people.length - 1, lo = 0; hi >= lo; --hi, ++ans) { // high end always moves
            if (people[lo] + people[hi] <= limit) { // low end moves only if it can fit in a boat with high end.
                ++lo; 
            }
        }
        return ans;
    }
```
```python
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        boat, lo, hi = 0, 0, len(people) - 1
        people = sorted(people)
        while lo <= hi:
            if people[hi] + people[lo] <= limit:
                lo += 1
            boat += 1
            hi -= 1
        return boat
```

**Update:**
Since some people challenge or have questions about the greedy algorithm, I provide the proof as follows.

**Proof of the correctness of the greedy algorithm:**
Denote ```S``` as one of the optimal solutions, and ```O``` as our algorithm output solution.
**1. Greedy choice property.**

Starting from the **heaviest person hi**, there are 2 possible cases: 
a) if ```hi``` can NOT fit in a boat with any other, then both in ```S``` and ```O```, ```hi``` is in a boat **alone**. Apparently, our first step is optimal and the greedy choice property holds;
b) if ```hi``` CAN fit in a boat with at least 1 other person, then 
in ```O```, ```hi``` and **lightest person lo** together must be in same boat, according to our algorithm. 

In ```S```, if they are also in same boat, then our first step is optimal and the greedy choice property holds; 
If ```hi``` and ```lo``` are not in same boat, say in ```boat-hi``` and ```boat-lo``` respectively, then we can swap ```hi``` with ```lo```'s boat mate, say index ```m```. Obviously, ```people[m] <= people[hi]```, therefore the swap is feasible. Since the swap results no extra boat(s), a new optimal solution ```T``` is obtained. That indicates our first step--put ```hi``` and ```lo``` into same boat--is an optimal step and  and greedy choice property also holds.

**2.optimal substructure property.**

Let ```P``` be the original problem at scale ```n```, where ```n = people.length```. From the above 1, after first step, we have a subproblem ```P'``` at scale ```n' ```(```n' = n - 1 or n - 2```, depends on ```hi``` in a boat alone or not). Similary, we have ```hi'``` and ```lo'``` and can do next step as in 1. 

Since in 1 we proved ```T``` is an optimal solution, and the solution of ```P'```, say ```O'```, contained within ```T``` is also an optimal one. Thus the the problem has the optimal substructure property.

Combine 1 and 2, we complete the proof.

**end of proof.**

----

Similar Problem:

[2178. Maximum Split of Positive Even Integers](https://leetcode.com/problems/maximum-split-of-positive-even-integers/discuss/1783317/JavaPython-3-Greedy-w-brief-explanation-and-analysis./)