# Abbreviation of Product of a Range with Trailing Zeros

**Author:** Gheshu
**Votes:** 0
**Link:** [https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/4186353/](https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/4186353/)

---

# Intuition
The code calculates the product of integers in a given range while removing trailing zeros. It then abbreviates the product and counts the number of removed zeros if the product is greater than a certain length. The goal is to make the code more efficient and optimized

# Approach
1. Initialize a count variable to keep track of the number of trailing zeros.
2. Initialize a product variable to store the product of integers in the given range.
3. Iterate through the range from 'left' to 'right' and calculate the product, simultaneously removing trailing zeros. This is done by dividing the product by 10 until it's not divisible by 10 anymore.
4. Convert the product to a string once to avoid unnecessary conversions.
5. If the length of the product string is greater than 10, abbreviate the product by taking the first 5 and last 5 characters and add '...' in between. Append 'e' followed by the count of removed trailing zeros.
6. If the length of the product string is not greater than 10, simply append 'e' followed by the count of removed trailing zeros.


# Code
```
/**
 * @param {number} left
 * @param {number} right
 * @return {string}
 */
var abbreviateProduct = function(left, right) {
    let product = 1n
    let count = 0
    for(let i = left; i <= right; i++){
        product *= BigInt(i)
    }
     while(product % 10n === 0n){
        product /= 10n
        count++
    }
   
    product = product.toString()
    if(product.length > 10){
        const first = product.slice(0,5)
        const last = product.slice(-5)

        return first + '...' + last + 'e' + count

    }
    return product + 'e' + count
    
    
};
```