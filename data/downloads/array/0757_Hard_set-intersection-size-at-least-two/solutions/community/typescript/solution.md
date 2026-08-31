# O(NlogN) with explanation, using sort

**Author:** ahmedmohamedfci
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/4448028/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/4448028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function intersectionSizeTwo(intervals: number[][]): number {
    // sort intervals by end time, if end times are the same, sort by start
    intervals = intervals.sort(([s1,e1],[s2,e2]) => e1==e2 ? s1 - s2 : e1-e2);
    //make an array of the numbers we add,,, this array must be sorted ascendingly 
    // for the first interval we will add the last emelemnt, and the one previous to last
    let arr = [intervals[0][1]-1,intervals[0][1]];
    for(let i = 1 ; i < intervals.length; i++){
        let [s,e] = intervals[i];
        //if the start of the new interval is bigger than last, then there is no overlap between
        // this interval and anything before it. we add 2 points to the array,,, (again, sorted)
        if(s > arr.at(-1)){
            // add 2 points at the end
            arr.push(e-1); arr.push(e);
        }
        else if(s === arr.at(-1)){
            // if the start is the same as the last element entered, then the 
            //start of this interval is already taken in a previous run. we just add another number
            // from this interval. we will take the last as it will probably be the start of another
            // or it may be included in another one
            arr.push(e);
        }
        else if(s > arr.at(-2)){
            // we arrive here in case the start is not the same as the end we took. it must be smaller than it. 
            // but maybe in the last interval we took only 1 element.. maybe we will need to take another to fulfil the 2 elements per interval. thats when the start of the new interval is greater than the second to last element we took. thats when we have to take the last element from this interval
             
            
            arr.push(e);
        } 
        else continue;

    }
    return arr.length;
};

const isBetween = (s,e,n) => n>=s && n <= e;
```