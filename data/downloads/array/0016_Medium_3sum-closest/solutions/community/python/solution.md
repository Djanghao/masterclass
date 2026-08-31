# Python O(N^2) solution

**Author:** Google
**Votes:** 211
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/7871/](https://leetcode.com/problems/3sum-closest/solutions/7871/)

---

    class Solution:
        # @return an integer
        def threeSumClosest(self, num, target):
            num.sort()
            result = num[0] + num[1] + num[2]
            for i in range(len(num) - 2):
                j, k = i+1, len(num) - 1
                while j < k:
                    sum = num[i] + num[j] + num[k]
                    if sum == target:
                        return sum
                    
                    if abs(sum - target) < abs(result - target):
                        result = sum
                    
                    if sum < target:
                        j += 1
                    elif sum > target:
                        k -= 1
                
            return result