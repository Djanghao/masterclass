# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 242
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/3425582/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/3425582/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
>To find if a kid with extraCandies can have the greatest number of candies among all the kids, we need to first find the maximum number of candies among all the kids, and then check if adding extraCandies to the candies of a kid results in a value greater than or equal to the maximum number of candies. If it does, then the kid can have the greatest number of candies among all the kids.

# Approach
<!-- Describe your approach to solving the problem. -->
>Find the maximum number of candies among all the kids by iterating through the candies array.

>Iterate through the candies array again and check for each kid if they can have the greatest number of candies by adding extraCandies to their candies and comparing it to the maximum number of candies. 

>If it is greater than or equal to the maximum number of candies, add true to the result list, else add false to the result list.

>Return the result list
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> The time complexity of the algorithm is O(n) since we iterate through the candies array twice.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> The space complexity of the algorithm is O(n) since we store the result in a list of length n.


![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
```javascript []
var kidsWithCandies = function(candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  
  const result = [];
  
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  
  return result;
};
```
```python []
class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        max_candies = max(candies)
        
        result = []
        
        for candy in candies:
            if candy + extraCandies >= max_candies:
                result.append(True)
            else:
                result.append(False)
        
        return result
```
```java []
class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int maxCandies = 0;
        for (int candy : candies) {
            maxCandies = Math.max(maxCandies, candy);
        }
        
        List<Boolean> result = new ArrayList<>();
        
        for (int candy : candies) {
            if (candy + extraCandies >= maxCandies) {
                result.add(true);
            } else {
                result.add(false);
            }
        }
        
        return result;
    }
}
```

```C++ []
class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int max_candies = *max_element(candies.begin(), candies.end());
        
        vector<bool> result(candies.size());
        
        for (int i = 0; i < candies.size(); i++) {
            if (candies[i] + extraCandies >= max_candies) {
                result[i] = true;
            } else {
                result[i] = false;
            }
        }
        
        return result;
    }
};

```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```