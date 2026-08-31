# Java | C++ | Solution using Euclidean Algorithm

**Author:** HemantPatel
**Votes:** 39
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1419750/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1419750/)

---

#### Euclidean algorithm : 
It is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number.

For example, 21 is the GCD of 252 and 105 (as 252 = 21 \xD7 12 and 105 = 21 \xD7 5), and the same number 21 is also the GCD of 105 and 252 \u2212 105 = 147. 

Since this replacement reduces the larger of the two numbers, repeating this process gives successively smaller pairs of numbers until the two numbers become equal.
When that occurs, they are the GCD of the original two numbers


Learn more about Euclid's Algorithm [click here](https://en.wikipedia.org/wiki/Euclidean_algorithm)
- Find min and max from the array
- Find GCD using Euclid's Algorithm

#### Java:

```
    public int findGCD(int[] nums) {
        int max = 0;
        int min = 1001;
    
        // Find the min and max from array
        for(int e : nums){
            max = Math.max(max,e);
            min = Math.min(min,e);
        }
        return gcd(min, max);
    }
	
	private int gcd(int a, int b) {
		  if (b == 0) return a;
		  return gcd(b, a % b);
    }
```

### Cpp :
```
class Solution {
    public:
        int gcd(int a, int b) {
            if (b == 0) return a;
            return gcd(b, a % b);
        }
        int findGCD(vector<int> &nums) {
            int min = 1001;
            int max = 0;
            // Find the min and max from array
            for (int e : nums) {
                if (e < min) min = e;
                if (e > max) max = e;
            }
            return gcd(min, max);
        }
};
```