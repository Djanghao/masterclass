# Java + Greedy + Sort by Price per Weight

**Author:** hardcracker
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3106786/](https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3106786/)

---

# Intuition
Since we can use part of the item, in order to get the max total price, we should start from the item with the highest ```price/weight``` to the lowest until the capacity is filled or the items are used up (whichever comes the first). In the end, if we cannot fill up the capacity, we return ```-1```. In nature, this is a greedy approach.

# Approach
We sort the items first by their price/weight. When we sort, since the compare method return type is ```int```, we cannot use ```(double) item[0]/item[1]``` to sort. If we use ```item[0]/item[1]``` as ```int``` to sort, it will NOT correctly sort ```3/4``` and ```2/4``` (both will return ```0```). Instead, use ```item2[0] * item1[1] - item1[0] * item2[1]``` to sort. 

Then, start from the item with the hightest price/weight. If it can be added as a whole, add the whole item; if not, fill part of it.

In the end, check if capacity is filled. If not, return ```-1```.

# Complexity
- Time complexity:
```O(n*logn)``` due to sort.

# Code
```
class Solution {
    public double maxPrice(int[][] items, int capacity) {
        
        Arrays.sort(items, (a, b) -> b[0]*a[1] - a[0]*b[1]); 
        // sort array by price per weight unit
        // compare method will return int, so use multiplication instead of b[0]/b[1] division

        double totalWeight = 0, totalPrice = 0;
        int index = 0;

        while(totalWeight <= capacity && index < items.length) {
            int[] item = items[index];
            double price = (double) item[0], weight = (double) item[1];

            if(capacity - totalWeight >= weight) {
                totalWeight += weight;
                totalPrice += price;
            } else {
                double diff = capacity - totalWeight;
                totalWeight += diff;
                totalPrice += diff / weight * price;
            }
            index++;
        }

        if(totalWeight < capacity) return -1;

        return totalPrice;
    }
}
```