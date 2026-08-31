# C++ Two Simple and Short Solutions, 0ms Faster than 100%

**Author:** YehudisK
**Votes:** 32
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/1423419/](https://leetcode.com/problems/complex-number-multiplication/solutions/1423419/)

---

**Solution I - Using Built-in**
We can use the built-in std::complex class.
First we need to parse the given string to the real part and imaginary part.
Then we can just multiply the parsed results and build the string result.
```
class Solution {
public:
    complex<int> parse(string num) {
        int i = num.find('+');
        int real = stoi(num.substr(0, i));
        int imaginary = stoi(num.substr(i+1, num.size()-i-2));
        complex<int> res(real, imaginary);
        return res;
    }
    
    string complexNumberMultiply(string num1, string num2) {
        complex<int> a = parse(num1), b = parse(num2);
        complex<int> res = a * b;        
        
        return to_string(real(res)) + "+" + to_string(imag(res)) + "i";
    }
};
```
**Solution II - Without Built-in**
If we don't want to use the built-in class, we can just use pairs to store real and imaginary values, and multiply them.
```
class Solution {
public:
    pair<int, int> parse(string num) {
        int i = num.find('+');
        double real = stoi(num.substr(0, i));
        double imaginary = stoi(num.substr(i+1, num.size()-i-2));
        pair<int, int> res(real, imaginary);
        return res;
    }
    
    string complexNumberMultiply(string num1, string num2) {
        pair<int, int> a = parse(num1), b = parse(num2);
        int real_a = a.first, imag_a = a.second;
        int real_b = b.first, imag_b = b.second;
        
        return to_string(real_a * real_b - imag_a * imag_b) + '+' + to_string(real_a * imag_b  + real_b * imag_a)+'i' ;
    }
};
```
**Like it? please upvote!**