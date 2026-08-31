# JS, Python, Java, C++ | Easy Optimized Backtracking Solution w/ Explanation

**Author:** sgallivan
**Votes:** 26
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/1275625/](https://leetcode.com/problems/matchsticks-to-square/solutions/1275625/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

_(**Edit**: The code has been slightly reworked to be a more straightforward backtracking solution.)_

At first glance, this problem seems rather straightforward: find the total length of the matchsticks in **M**, figure out how long each **side** of the square must be, then find every combination of matchsticks that can add up to **side**. If four unique sets of matchsticks each add up to **side**, then we can **return true**. 

The fact that the constraint upon the only imput is so low would seem to suggest that an **O(2^N)** solution is appropriate. There are, however, a few things we can do to optimize this process. The first key realization is that we _can_, in fact, use a **greedy** approach.

Consider the case of **M = [1,1,1,2,2,2,3]**. In this case, we can easily see that the total is **12** and thus side = **3**. If we were to start iterating through **M** to find multiples of **3**, we'd first group together the first three elements and then also find the last element, but be unable to make two more **3**s from the middle elements of **M**. This would perhaps suggest that a greedy approach will not work, because it's readily apparent that we need to save the **1**s to pair up with the **2**s to make three of the four sides.

But that also suggests the solution, which is that we can use a greedy approach _if_ we iterate through **M** in descending order. That way, each **2** will naturally seek out its matching **1** before we could ever attempt to match the **1**s together in a less efficient manner.

That means that we can just use a **recursive** **backtracking** helper (**btrack**) to help find the side groups in **M**. But first, we can take care of some edge cases: If the total sum of **M** is not divisble by **4**, or if any single matchstick in **M** is longer than the calculated **side**, then a solution is impossible and we should **return false**.

As for our recursive helper, it will need to iterate through the sorted **M** multiple times, attempting to build up groups that match **side**. We'll also keep track of how many groups we've found (**done**), and whenever we find a match, start **btrack** back at the beginning with **done** incremented.

_(**Note**: When incrementing done and starting the recursive helper over, we can start at index **1** instead of index **0** because **M[0]** will_ always _be a part of the first grouping.)_

Once we've finished **3** groups, we can go ahead and **return true**, because we know that the remaining pieces must add up to **side**. If at any point we reach the end of **M** without finishing the current group, however, we should **return false**.

When attempting to add a piece to the current group, we can obviously skip pieces that are larger than the remaining **space**, as well as pieces that have already been used. Normally, this would require some kind of additional array or set to keep track of the used pieces, but we can use an **in-place** approach with **M** and just replace the used values with a value larger than **side**. This will simplify the check to skip elements to just one conditional.

_(**Note**: If you don't want to modify the input, you_ could _use a single integer and **bit manipulation** to achieve the same result in **O(1) space**. Sorting **M** will still take **O(N) space** if you don't want to modify **M**, however, and in any case, we'll be using **O(N) space** for the recursion stack.)_

If an attempted piece turns out to be unsuccessfully and we're returned back up the recursion stack, we should remember to backtrack the current index (**i**) of **M** to its previous value (**num**).

 - _**Time Complexity: O(2^N)** where **N** is the length of **M** for the attempted combinations of elements in **M**_
 - _**Space Complexity: O(N)** for the recursion stack_

---

#### ***Implementation:***

Java makes it more complicated to reverse sort a primitive array, so we can just use a simple sort and then iterate through **M** backwards instead.

---

#### ***Javascript Code:***

The best result for the code below is **64ms / 39.9MB** (beats 100% / 31%).
```javascript
var makesquare = function(M) {
    let n = M.length, side = M.reduce((a,c) => a + c) / 4
    M.sort((a,b) => b - a)
    if (side !== ~~side || M[0] > side)
        return false
    const btrack = (i, space, done) => {
        if (done === 3)
            return true
        for (; i < n; i++) {
            let num = M[i], res
            if (num > space)
                continue
            M[i] = side + 1
            if (num === space)
                res = btrack(1, side, done+1)
            else
                res = btrack(i+1, space-num, done)
            if (res)
                return true
            M[i] = num
            while (M[i+1] === num)
                i++
        }
        return false
    }
    return btrack(0, side, 0)
};
```

---

#### ***Python Code:***

The best result for the code below is **40ms / 14.0MB** (beats 97% / 100%).
```python
class Solution:
    def makesquare(self, M: List[int]) -> bool:
        n, side = len(M), sum(M) / 4
        M.sort(reverse=True)
        if side != int(side) or M[0] > side:
            return False
        def btrack(i, space, done): 
            if done == 3:
                return True
            while i < n:
                num = M[i]
                if num > space:
                    i += 1
                    continue
                M[i] = side + 1
                if num == space:
                    res = btrack(1, side, done+1)
                else:
                    res = btrack(i+1, space-num, done)
                if res:
                    return True
                M[i] = num
                while i < n and M[i] == num:
                    i += 1
            return False
        return btrack(0, side, 0)
```

---

#### ***Java Code:***

The best result for the code below is **1ms / 36.1MB** (beats 99% / 94%).
```java
class Solution {
    public boolean makesquare(int[] M) {
        Arrays.sort(M);
        int total = 0;
        for (int i = 0; i < M.length; i++)
            total += M[i];
        side = total / 4;
        if ((float)total / 4 > side || M[M.length-1] > side)
            return false;
        return btrack(M.length-1, side, 0, M);
    }
    private int side;
    private boolean btrack(int i, int space, int done, int[] M) {
        if (done == 3)
            return true;
        for (; i >= 0; i--) {
            int num = M[i];
            boolean res;
            if (num > space)
                continue;
            M[i] = side + 1;
            if (num == space)
                res = btrack(M.length-2, side, done+1, M);
            else
                res = btrack(i-1, space-num, done, M);
            if (res)
                return true;
            M[i] = num;
            while (i > 0 && M[i-1] == num)
                i--;
        }
        return false;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 9.5MB** (beats 100% / 99%).
```c++
class Solution {
public:
    bool makesquare(vector<int>& M) {
        sort(M.begin(), M.end(), greater<int>());
        int total = accumulate(M.begin(), M.end(), 0);
        side = total / 4;
        if ((float)total / 4 > side || M[0] > side)
            return false;
        return btrack(0, side, 0, M);
    }
private:
    int side;
    bool btrack(int i, int space, int done, vector<int>& M) {
        if (done == 3)
            return true;
        for (; i < M.size(); i++) {
            int num = M[i];
            bool res;
            if (num > space)
                continue;
            M[i] = side + 1;
            if (num == space)
                res = btrack(1, side, done+1, M);
            else
                res = btrack(i+1, space-num, done, M);
            if (res)
                return true;
            M[i] = num;
            while (i < M.size() and M[i+1] == num)
                i++;
        }
        return false;
    }
};
```