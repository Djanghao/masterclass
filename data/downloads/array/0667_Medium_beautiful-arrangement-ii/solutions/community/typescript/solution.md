# Two pointer TS | Beats 100% in time

**Author:** rikeshkamra97
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4423217/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4423217/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The logic was to find a pattern and how can we find distinct k elements from n. This lead me to the though process of subtracting 2 polar end numbers with the ends shrinking will always be distinct.

# Approach
<!-- Describe your approach to solving the problem. -->
Since k is always going to be less that n, it is safe to assume that (k-1),((k-1)-2),... will give k distinct numbers from n and hence to achieve this as per the description I will need to have an array which will read something like this [1,k,2,k-1,3,k-2.....]

So with this approach I am first tackling the problem to get k distinct numbers from n. And then at the end based on the length of array we can backfill the output array as required. Those numbers can be in any order as subtracting them in any sequence will repeat the number that existed in first k elements coming from first while loop.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Less than O(n). Best case will be O(n/2) since 2 pointer approach but then we loop through remaning numbers and hence it will be O(n/2) + something.

**:Note:** Please upvote and leave comment if you understand and like the solution.

# Code
```
function constructArray(n: number, k: number): number[] {
    let start = 1;
    let end = k+1;
    const output = [];
    while(start<=end){
        if(start===end) output.push(start);
        else {
            output.push(start);
            output.push(end);
        }
        start++;
        end--;
    }
    if(output.length===n) return output;
    else{
        let rem = n-output.length;
        while(rem>0){
            output.push(n-rem+1);
            rem--;
        }
        return output;
    }
};
```