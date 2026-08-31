# go solution

**Author:** danny4410
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/6063103/](https://leetcode.com/problems/convert-date-to-binary/solutions/6063103/)

---



# Code
```golang []
func convertDateToBinary(date string) string {
    ymd := strings.Split(date, "-")
    y, _ := strconv.Atoi(ymd[0])
    m, _ := strconv.Atoi(ymd[1])
    d, _ := strconv.Atoi(ymd[2])
    return fmt.Sprintf("%b-%b-%b", y, m , d)
}
```