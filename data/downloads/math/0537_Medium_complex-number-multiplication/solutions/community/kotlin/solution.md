# Kotlin - 148 ms - Use data class for complex number and apply mathematical formula

**Author:** ed-karabinus
**Votes:** 0
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/887533/](https://leetcode.com/problems/complex-number-multiplication/solutions/887533/)

---

![image](./images/0.png)
```
const val NUMBER_SEPARATOR = '+'
const val IMAGINARY_UNIT = 'i'
data class ComplexNumber(val real: Int, val imaginary: Int)
fun ComplexNumber.convertToString(): String {
    return "${this.real}$NUMBER_SEPARATOR${this.imaginary}$IMAGINARY_UNIT"
}
fun ComplexNumber.multiply(otherNumber: ComplexNumber): ComplexNumber {
    return ComplexNumber(this.real * otherNumber.real - this.imaginary * otherNumber.imaginary, 
                         this.real * otherNumber.imaginary + otherNumber.real * this.imaginary)
}
fun String.convertToComplexNumber(): ComplexNumber {
    val (realString, imaginaryString) = this.split(NUMBER_SEPARATOR)
    val real = Integer.valueOf(realString)
    val imaginary = Integer.valueOf(imaginaryString.substring(0, imaginaryString.length - 1))
    return ComplexNumber(real, imaginary)
}
class Solution {
    fun complexNumberMultiply(a: String, b: String): String {
        return a.convertToComplexNumber().multiply(b.convertToComplexNumber()).convertToString()
    }
}
```