# Java | Easy Solution with Explanation | Time: O(nlogn)

**Author:** utkarshyadav5
**Votes:** 4
**Link:** [https://leetcode.com/problems/k-empty-slots/solutions/1689065/](https://leetcode.com/problems/k-empty-slots/solutions/1689065/)

---

Question: 
Question is quite simple and straightforward. It's asking for the difference between two consecutive turned on bulbs to be equal to k and return the minimum days when you fulfill this criteria. 

Solution:  I'm going to use TreeSet for this. You can also use binary search. 

1. Iterate over the bulbs array and keep on adding it to the visited TreeSet which will sort all the values within itself.
2. Now while turning on each bulb you also need to search for 2 things: 
	i. turned on bulb which is just `smaller` than the current bulb: `can be obtained using the binary search but here I'm using lower(int) function of TreeSet which will give me null or a value which is just lower than that`
	ii. turned on bulb which is just `higher` than the current bulb: `same as above`
3. Check the diff between the `lower` and `higher` bulb if either of them is equal to `k` than we can return the `index+1`(as days need to be 0 based) which we're at. I'm using `days` for that which I'm increasing everytime. 

Time Complexity: `O(nlogn)`
Space Complexity: `O(n)`
```
class Solution {
    public int kEmptySlots(int[] bulbs, int k) {
        TreeSet<Integer> on = new TreeSet<>();
        
        int day = 1;
        for(int bulb: bulbs) {
            on.add(bulb);
            Integer lower = on.lower(bulb);
            Integer higher = on.higher(bulb);
            if(lower != null && bulb-lower-1 == k)
                return day;
            else if(higher != null && higher-bulb-1 == k)
                return day;
            day++;
        }
        return -1;
    }
}
```