# Java, two pointers, beats 100%, explained

**Author:** gthor10
**Votes:** 7
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/409835/](https://leetcode.com/problems/meeting-scheduler/solutions/409835/)

---

This problem is variation of interval merge problem. If you sort intervals by starting point of every slot then it's possible to scan both arrays by advancing array with the interval that ends earlier. The reasoning is - one that finishes earlier may have next slot that still intersects with a slot from another array. 
On every iteration check the possible intersection, if it's there and >= then duration - this is our answer. Intersection is [maxof(starts), minof(ends)]. Catch is - the answer will be [start, start + duration] - this is first suitable slot. 
If no intersection possible - advance one of arrays pointer, choose one that ends earlier (minof(end1, end2)).

O(n lgn) time - O(n) for scan and O(nlgn) for sorting, O(1) space - several state variables

```
    public List<Integer> minAvailableDuration(int[][] slots1, int[][] slots2, int duration) {
        List<Integer> res = new ArrayList();
        //sort both arrays as per starting time of every interval
        Comparator<int[]> comp = Comparator.comparingInt(i->i[0]);
        Arrays.sort(slots1, comp);
        Arrays.sort(slots2, comp);
        //start scanning, keep pointer of every slot array
        int p1 = 0, p2 = 0;
        while (p1 < slots1.length && p2 < slots2.length) {
            int[] slot1 = slots1[p1];
            int[] slot2 = slots2[p2];
            //check if there is intersection
            int start = Math.max(slot1[0], slot2[0]);
            int end = Math.min(slot1[1], slot2[1]);
            //if intersection if long enough - this is our answer
            if (end - start >= duration) {
                res.add(start);
                res.add(start + duration);
                break;
            }
            //if no good intersection - move to the next slot in array that has the slot that
            //ends earlier
            if (slot1[1] < slot2[1])
                p1++;
            else
                p2++;
        }

        return res;
    }
```