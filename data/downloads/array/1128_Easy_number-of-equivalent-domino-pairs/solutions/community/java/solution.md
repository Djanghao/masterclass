# Java, one pass, O(1) space, beats 100%

**Author:** gthor10
**Votes:** 22
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/340458/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/340458/)

---

We can save number of times we've seen each domino pair in the array of 9x9 < 100 elements. We are looping over the dominoes array and check every pair. Increment element [i,j] of our array. To take into account cases 1,2 and 2,1 we flip the pair so the upper number is always smaller. 
The catch is - for every next same pair we check array, if it's > 1 we increment the result, but each time increment will be the number saved in array. So for case like this:
1,2 1,2 3,4 1,2 correct answer is 3 - index 0 matches 1 and 3, index 1 matches 3, there are no matches for index 2 and 3.

array of results at [1,2] and num will be:
1. res[1,2] = 0 - initial
2. res[1,2] = 1, num=0 when index = 0
3. res[1,2] = 2, num = 1 when index = 1
4. res[3,4] = 1, num = 1 when index = 2
5. res[1,2] = 3, num = 3 when index = 3

We can use flat array, just compute the index by doing up*10 + down. This is 99 index max, means 100 elements.

This is O(n) time complexity - one scan of the inout array, O(1) space - we'll need count array of the same size independently of number of dominoes.

UPD: Make code compact by refactoring some part, thanks to @ysboss

```
    public int numEquivDominoPairs(int[][] dominoes) {
        //we need to acceess indexes from 0 to 99. max number of dominoes is 9
        int[] counts = new int[100];
        int res = 0;
        //check every pair of dominoes
        for (int[] d : dominoes) {
            //get upper and down number, make upper always smaller
            int up = d[0] < d[1] ? d[0] : d[1]; 
			int down = d[0] < d[1] ? d[1] : d[0];
            //increment number of times we've seen exactly this pair
            //if more than once increment result, every next same pair will contribute on 1 more than a previous one
            res+=counts[up * 10 + down]++;
        }

        return res;
    }
```