# c++ 3ms Fast math based solution with explanation

**Author:** Nick_the_quick
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-palindrome-product/solutions/1911228/](https://leetcode.com/problems/largest-palindrome-product/solutions/1911228/)

---

This is based on a very nicely explained article on:
https://medium.com/@d_dchris/largest-palindrome-product-problem-brilliant-approach-using-mathematics-python3-leetcode-479-b3f2dd91b1aa
The main idea is to  based around the fact that we represent the biggest palindrome number as `(10^n -x)*(10^n-y)` and we want to find the smallest `x` and `y` (greater than 1 to respect the constraint of the input digits) so that  the result is a palindrome.
Let's call the biggest palindrome `P`. We could say that  `(10^n -x)*(10^n-y) = P` and expanding that equation we could obtain that `10^n*(10^n -(x+y)) + xy = P`. This is a very convenient representation as soon as we notice that two `n` digits numbers could generate a `2n` digits palindrome (or 2n-1 but we are looking for the biggest) and we represent a `2n` digit palindrome such as `abcddcba` as `10^n*abcd + dcba`. Now we could say that we have a `left` side `abcd` and a right side `dcba = flip(left)` and also that `left = 10^n - (x+y)` and `right = xy`. Let's call `x+y = z` and start solving the resulting equation `right = xy` -> `right = x(z-x)` -> `right - xz - x^2 = 0`  from `z=2` since `x` and `y` needs to be at least `1` each.

```
class Solution {
public:
    int flip(int n){
        // given integer abc returns intger cba by going to a temporary string
        auto str = to_string(n);
        std::reverse(str.begin(), str.end());
        return atoi(str.c_str());
    }
       
    bool isInteger(double v){
        // checks if the double v represents an integer value
        double tmp;
        return std::modf(v, &tmp) == 0.0;
        // alternative less robust implementation
        // return  static_cast<double>(static_cast<long>(v)) == v;
    }
    
    int largestPalindrome(int n) {
        
        if (n == 1) return 9;
        
        const long max = pow(10, n);
        
        for (int z = 2; z < max -1; z++){
            const long left = max -z;
            const long right = flip(left);
            const double sqrt_term = z*z - 4*right;
           
		    // let's avoid generating nans applying the square root to negative numbers
            if (sqrt_term < 0.0){ continue; }
            
            const double root1 = 0.5*(z + sqrt(sqrt_term));
            const double root2 = 0.5*(z - sqrt(sqrt_term));
            
            if (isInteger(root1) || isInteger(root2)){
                return (max*left + right) % 1337;
            }
        }
		// This should never be reached so we don't really care about what we return in here
        return -1;
    }
};
```