# [Swift] Readable Solution

**Author:** Legonaftik
**Votes:** 1
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/1422815/](https://leetcode.com/problems/complex-number-multiplication/solutions/1422815/)

---

```
class Solution {

    private struct Complex {
        let real: Int
        let imaginary: Int
    }

    func complexNumberMultiply(_ num1: String, _ num2: String) -> String {
        guard 
            let complex1 = complex(from: num1),
            let complex2 = complex(from: num2)
        else { return "" }
        let real = complex1.real * complex2.real - complex1.imaginary * complex2.imaginary
        let imaginary = complex1.real * complex2.imaginary + complex1.imaginary * complex2.real
        return "\\(real)+\\(imaginary)i"
    }

    private func complex(from string: String) -> Complex? {
        let components = string.split(separator: "+")
        guard
            components.count == 2,
            let real = Int(components[0]),
            let imaginary = Int(components[1].dropLast())
        else { return nil }
        return Complex(real: real, imaginary: imaginary)
    }
}
```