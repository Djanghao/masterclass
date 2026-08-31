# Just like Two-Sum hashmap

**Author:** IndominouS
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/1786669/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/1786669/)

---

**It's just like two sum in that we were storing the remaining part if the target sum was 10 and we found 7 we were storing the 10-7 in hashmap so if we found 3 we will return it's index from there same we need to find the product which is divisible by k so for example if we need to make a pair which is divisible by 10 so by far we have found 12 so the [gcd](https://byjus.com/maths/greatest-common-divisor/) of 12,10 will be 2 now what is the other counter we need to find it is 5 hence if we find 5's multiple or 5 we will add this pair to answer**
`So the time complexity here won't be O(n^2) because a number can only have limited factors hence for 10^5 the max will be (10^5)^1/2 so at max the loop will iterate upto 100 - 200 (roughly) `
```py
class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        counter = Counter() #hashmap dicitionary of python
        ans = 0
        n = len(nums)
        
        for i in range(n):
            x = math.gcd(k,nums[i]) #ex: 10 = k and we have nums[i] as 12 so gcd will be 2
            want = k // x #what do we want from upper ex: we need 5
            for num in counter:
                if num % want == 0: #so if we find a number that is divisible by 5 then we can multiply it to 12 and make it a factor of 10 for ex we find 20 so it will be 240 which is divisible by 10 hence we will add it to answer
                    ans += counter[num] #we are adding the freq as we can find no of numbers that have same factor
            counter[x] += 1 #here we are increasing the freq of 2 so that if we find 5 next time we can add these to the answer
        return ans
```
```java
public class Solution {
    public int countPairs(int[] nums, int k) {
        // Create a HashMap to count the occurrences of numbers
        Map<Integer, Integer> counter = new HashMap<>();
        int ans = 0;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            int gcdResult = gcd(k, nums[i]); // Calculate the GCD of 'k' and 'nums[i]'
            int desiredFactor = k / gcdResult; // Calculate the desired factor to form a pair with 'nums[i]'

            for (int num : counter.keySet()) {
                if (num % desiredFactor == 0) {
                    // If 'num' is divisible by the desired factor, it can form pairs with 'nums[i]'
                    // Add the frequency of 'num' to the answer
                    ans += counter.get(num);
                }
            }

            // Increase the count of 'gcdResult' in the HashMap
            counter.put(gcdResult, counter.getOrDefault(gcdResult, 0) + 1);
        }

        return ans;
    }
```
