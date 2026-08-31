# Java | Sliding Window | O(n)

**Author:** vkvasov
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/1642103/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/1642103/)

---

```
class Solution {
    public int shareCandies(int[] candies, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for(int candy : candies) {
            map.put(candy, map.getOrDefault(candy, 0) + 1);
        }
        
        if(k == 0) {
            return map.size();
        }
        
        int left = 0, right = 0;
        int maxFlavors = 0;
        
        while(right < candies.length) {
            int candy = candies[right++];
            
            map.put(candy, map.get(candy) - 1);
            
            if(map.get(candy) <= 0) {
                map.remove(candy);
            }
            
            if(right - left == k) {
                maxFlavors = Math.max(maxFlavors, map.size());
                
                int leftCandy = candies[left++];
                map.put(leftCandy, map.getOrDefault(leftCandy, 0) + 1);
            }
        }
        
        return maxFlavors;
    }
}
```