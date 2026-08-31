# Go | Golang | Prefix | Suffix | TotalDigits Count | TrailingZeroes | Math

**Author:** camusabsurdo
**Votes:** 0
**Link:** [https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/2166680/](https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/2166680/)

---

```
func abbreviateProduct(left int, right int) string {
    product, trailingZeros, totalDigitsInProduct := 1, 0, 0.0
    maxSuffix:=100000000000
    maxPrefix:=100000
	prefix := 1.0

	for i := left; i <= right; i++ {
		product *= i
        totalDigitsInProduct += math.Log10(float64(i))
        prefix *= float64(i)
        for prefix >= float64(maxPrefix)  {
			prefix /= 10
		}
        
		for product%10 == 0 {
			product /= 10
			trailingZeros++
		}

		product %= maxSuffix
	}
    totalDigitsInProduct+=1
    totalDigitsInProduct=math.Floor(totalDigitsInProduct)
    workingDigits:= int(totalDigitsInProduct) - trailingZeros
    
	suffix := fmt.Sprintf("%v",product)
    if workingDigits > 10 {
        return fmt.Sprintf("%v...%se%v",int(prefix),suffix[len(suffix)-5:],trailingZeros)
	}
	if workingDigits >= 5 {
        return fmt.Sprintf("%v%se%v",int(prefix),suffix[len(suffix)-(workingDigits-5):],trailingZeros)
	}
    return fmt.Sprintf("%ve%v",int(prefix),trailingZeros)
}