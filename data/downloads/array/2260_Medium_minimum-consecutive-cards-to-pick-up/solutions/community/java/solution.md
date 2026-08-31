# Java | HashMap

**Author:** AaveshK
**Votes:** 44
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/1996208/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/1996208/)

---

1. Maintain the previous index of each card.
2. Minimize difference between current index and previous (if present) among all pairs
3. Else return -1 if no duplicate
```
class Solution
{
    public int minimumCardPickup(int[] cards)
    {
        Map<Integer,Integer> map = new HashMap<>();
        int min = Integer.MAX_VALUE;
        for(int i = 0; i < cards.length; i++)
        {
            if(map.containsKey(cards[i]))
                min = Math.min(i-map.get(cards[i])+1,min); // Check if the difference in indices is smaller than minimum
            map.put(cards[i],i); // Update the last found index of the card
        }
        return min == Integer.MAX_VALUE?-1:min; // Repetition found or not
    }
}
```