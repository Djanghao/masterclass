# Simple Java Solution T.C.:O(nlogn)

**Author:** Divija_Saini
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/solutions/6171269/](https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/solutions/6171269/)

---

Similar to Merge Ovrlapping Intervals.

```class Solution {
    public boolean checkValidCuts(int n, int[][] rectangles) {
        if(n==0)
            return false;
        int x[][]=new int[rectangles.length][2];
        int y[][]=new int[rectangles.length][2];
        int i=0;
        for(int rect[]:rectangles)
            {
                int arr1[]=new int[]{rect[0],rect[2]};
                int arr2[]=new int[]{rect[1],rect[3]};
                x[i]=arr1;
                y[i]=arr2;
                i++;
            }
        int horizontal=mergeIntervals(x);
        int vertical=mergeIntervals(y);
        if(horizontal>=3 || vertical>=3)
            return true;
        return false;
    }
    public int mergeIntervals(int arr[][])
    {
        Arrays.sort(arr,(a,b)->(a[0]-b[0]));
        LinkedList<int[]> li=new LinkedList<>();
        for(int a[]:arr)
            {
                if(li.isEmpty())
                    li.add(a);
                if(li.getLast()[1]>a[0])
                    li.getLast()[1]=Math.max(a[1],li.getLast()[1]);
                else
                    li.add(a);
            }
        return li.size();
    }
}```