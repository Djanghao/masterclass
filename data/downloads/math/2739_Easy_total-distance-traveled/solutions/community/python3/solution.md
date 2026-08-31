# [C++/ Python] Solution | O(N)

**Author:** nischaygoyal1
**Votes:** 13
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/3650481/](https://leetcode.com/problems/total-distance-traveled/solutions/3650481/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
The code calculates the total distance traveled by a tank. It iterates over the main tank's fuel levels and checks if additional fuel should be used. If so, it increments the distance, transfers fuel from the additional tank to the main tank, and repeats. Finally, it returns the total distance traveled.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    o(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    o(1)

# Code
```
    class Solution {
    public:
        int distanceTraveled(int mainTank, int additionalTank) {
            int ans=0;
                for(auto i=1;i<=mainTank;i++)
                {
                    if(additionalTank!=0 && i%5==0 )
                        {   
                            additionalTank-=1;
                            mainTank+=1;
                        }
                        ans+=10;
                }
            return ans;
        }
    };
```

```
class Solution:
    def distanceTraveled(self, mainTank, additionalTank):
       result = 0
        i = 0
        while i < mainTank:
            i += 1
            if (additionalTank != 0) and (i % 5 == 0):
                additionalTank -= 1
                result += 10
                mainTank += 1
            else:
                result += 10
       return result


```
![6c305529-29d2-4a58-b09d-ee292769d403_1678682609.1504712.webp](./images/0.webp)
